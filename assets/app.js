'use strict';

const app = document.getElementById('app');
const aramaKutusu = document.getElementById('ara');
const onbellek = new Map();

/* ---------- yardımcılar ---------- */

function yukle(url, tip = 'json') {
  if (!onbellek.has(url)) {
    const istek = fetch(url, { cache: 'no-cache' }).then(r => {
      if (!r.ok) throw new Error(`${url} yüklenemedi (${r.status})`);
      return tip === 'json' ? r.json() : r.text();
    });
    istek.catch(() => onbellek.delete(url));
    onbellek.set(url, istek);
  }
  return onbellek.get(url);
}

const kacis = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const kucuk = s => String(s ?? '').toLocaleLowerCase('tr');
const dersYolu = id => `dersler/${encodeURIComponent(id)}/`;
const konuLink = (d, k) => `#/ders/${encodeURIComponent(d)}/${encodeURIComponent(k)}`;

async function dersListesi() {
  return (await yukle('dersler/dersler.json')).dersler || [];
}

async function dersBilgi(id) {
  const ders = (await dersListesi()).find(d => d.id === id);
  if (!ders) throw new Error(`"${id}" adlı ders bulunamadı.`);
  const detay = await yukle(dersYolu(id) + 'ders.json');
  return { ...ders, konular: detay.konular || [], pdfler: detay.pdfler || [] };
}

/* ---------- okundu işaretleri (yalnızca bu tarayıcıda) ---------- */

function okunanlar() {
  try { return new Set(JSON.parse(localStorage.getItem('okunanlar') || '[]')); }
  catch { return new Set(); }
}
function okunduAyarla(anahtar, deger) {
  const s = okunanlar();
  deger ? s.add(anahtar) : s.delete(anahtar);
  try { localStorage.setItem('okunanlar', JSON.stringify([...s])); } catch {}
}

/* ---------- Markdown + formül ---------- */

function mdCiz(md, taban) {
  const kod = [], mat = [];
  md = md.replace(/```[\s\S]*?```|`[^`\n]+`/g, m => `@@KOD${kod.push(m) - 1}@@`);
  md = md.replace(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$(?!\s)[^$\n]+?\$/g,
    m => `@@MAT${mat.push(m) - 1}@@`);
  md = md.replace(/@@KOD(\d+)@@/g, (_, i) => kod[i]);
  const html = marked.parse(md).replace(/@@MAT(\d+)@@/g, (_, i) => kacis(mat[i]));

  const kap = document.createElement('div');
  kap.innerHTML = html;
  kap.querySelectorAll('img[src], a[href]').forEach(el => {
    const ad = el.tagName === 'IMG' ? 'src' : 'href';
    const v = el.getAttribute(ad);
    if (/^#/.test(v)) return;
    if (!/^([a-z]+:|\/)/i.test(v)) el.setAttribute(ad, taban + v);
    if (ad === 'href') { el.target = '_blank'; el.rel = 'noopener'; }
  });
  kap.querySelectorAll('table').forEach(t => {
    const sar = document.createElement('div');
    sar.className = 'tablo-kap';
    t.replaceWith(sar); sar.appendChild(t);
  });
  return kap.innerHTML;
}

function formulleriCiz(el, deneme = 0) {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetClear && MathJax.typesetClear([el]);
    MathJax.typesetPromise([el]).catch(console.error);
  } else if (deneme < 40) {
    setTimeout(() => formulleriCiz(el, deneme + 1), 250);
  }
}

/* ---------- sayfalar ---------- */

async function anaSayfa() {
  const dersler = await dersListesi();
  const detay = await Promise.all(dersler.map(d =>
    dersBilgi(d.id).catch(() => ({ ...d, konular: [], pdfler: [] }))));
  const ok = okunanlar();
  app.innerHTML = `
    <section class="giris">
      <h1>Ders Anlatımları</h1>
      <p>Konu anlatımları, formüller ve ders PDF'leri tek yerde. Bir ders seç, konuları sırayla oku, bitirdiklerini işaretle.</p>
    </section>
    ${detay.length ? '' : '<p class="bos">Henüz ders eklenmedi.</p>'}
    <div class="kartlar">
      ${detay.map(d => {
        const top = d.konular.length;
        const bit = d.konular.filter(k => ok.has(`${d.id}/${k.id}`)).length;
        return `
        <a class="kart" href="#/ders/${encodeURIComponent(d.id)}" style="--renk:${kacis(d.renk || 'var(--vurgu)')}">
          ${d.kod ? `<span class="kod">${kacis(d.kod)}</span>` : ''}
          <h2>${kacis(d.ad)}</h2>
          <p>${kacis(d.aciklama)}</p>
          <div class="kart-alt">
            <span>${top} konu · ${d.pdfler.length} PDF</span>
            ${top ? `<span class="ilerleme" title="${bit}/${top} okundu"><i style="width:${(bit / top) * 100}%"></i></span>` : ''}
          </div>
        </a>`;
      }).join('')}
    </div>`;
}

async function dersSayfasi(id) {
  const d = await dersBilgi(id);
  const ok = okunanlar();
  document.title = `${d.ad} · Ders Anlatımları`;
  app.innerHTML = `
    <nav class="iz"><a href="#/">Dersler</a> / ${kacis(d.ad)}</nav>
    <section class="ders-bas" style="--renk:${kacis(d.renk || 'var(--vurgu)')}">
      ${d.kod ? `<span class="kod">${kacis(d.kod)}</span>` : ''}
      <h1>${kacis(d.ad)}</h1>
      ${d.donem ? `<p class="soluk">${kacis(d.donem)}</p>` : ''}
      <p>${kacis(d.aciklama)}</p>
    </section>
    <div class="ders-izgara">
      <section>
        <h2>Konular</h2>
        ${d.konular.length ? `<ol class="konu-listesi">
          ${d.konular.map(k => `
            <li class="${ok.has(`${d.id}/${k.id}`) ? 'okundu' : ''}">
              <a href="${konuLink(d.id, k.id)}">
                <strong>${kacis(k.baslik)}</strong>
                ${k.ozet ? `<span>${kacis(k.ozet)}</span>` : ''}
              </a>
            </li>`).join('')}
        </ol>` : '<p class="bos">Bu derse henüz konu eklenmedi.</p>'}
      </section>
      <aside>
        <h2>PDF'ler</h2>
        ${d.pdfler.length ? `<ul class="pdf-listesi">
          ${d.pdfler.map((p, i) => `
            <li>
              <a href="#/ders/${encodeURIComponent(d.id)}/pdf/${i}">📄 ${kacis(p.baslik)}</a>
              <a class="indir" href="${dersYolu(d.id) + kacis(p.dosya)}" download title="İndir">⤓</a>
            </li>`).join('')}
        </ul>` : '<p class="bos">PDF yok.</p>'}
      </aside>
    </div>`;
}

async function konuSayfasi(id, konuId) {
  const d = await dersBilgi(id);
  const sira = d.konular.findIndex(k => k.id === konuId);
  if (sira < 0) throw new Error(`"${konuId}" adlı konu bulunamadı.`);
  const k = d.konular[sira];
  const dosya = dersYolu(id) + k.dosya;
  const taban = dosya.slice(0, dosya.lastIndexOf('/') + 1);
  const md = await yukle(dosya, 'text');
  const anahtar = `${id}/${k.id}`;
  const ok = okunanlar();
  const onceki = d.konular[sira - 1], sonraki = d.konular[sira + 1];
  document.title = `${k.baslik} · ${d.ad}`;

  app.innerHTML = `
    <nav class="iz"><a href="#/">Dersler</a> / <a href="#/ders/${encodeURIComponent(id)}">${kacis(d.ad)}</a> / ${kacis(k.baslik)}</nav>
    <div class="konu-duzen">
      <aside class="yan">
        <details open>
          <summary>${kacis(d.ad)}</summary>
          <ol>
            ${d.konular.map(x => `<li class="${x.id === k.id ? 'aktif' : ''} ${ok.has(`${id}/${x.id}`) ? 'okundu' : ''}">
              <a href="${konuLink(id, x.id)}">${kacis(x.baslik)}</a></li>`).join('')}
          </ol>
        </details>
      </aside>
      <article class="icerik">
        ${k.pdf ? `<p class="ilgili-pdf">📄 Kaynak: <a href="${dersYolu(id) + kacis(k.pdf)}" target="_blank" rel="noopener">${kacis(k.pdfBaslik || 'İlgili PDF')}</a></p>` : ''}
        <div id="metin">${mdCiz(md, taban)}</div>
        <label class="okundu-kutu"><input type="checkbox" id="okundu" ${ok.has(anahtar) ? 'checked' : ''}> Bu konuyu bitirdim</label>
        <nav class="gezinti">
          ${onceki ? `<a href="${konuLink(id, onceki.id)}">← ${kacis(onceki.baslik)}</a>` : '<span></span>'}
          ${sonraki ? `<a class="sag" href="${konuLink(id, sonraki.id)}">${kacis(sonraki.baslik)} →</a>` : ''}
        </nav>
      </article>
    </div>`;

  document.getElementById('okundu').addEventListener('change', e => {
    okunduAyarla(anahtar, e.target.checked);
    app.querySelector('.yan li.aktif').classList.toggle('okundu', e.target.checked);
  });
  formulleriCiz(document.getElementById('metin'));
}

async function pdfSayfasi(id, i) {
  const d = await dersBilgi(id);
  const p = d.pdfler[i];
  if (!p) throw new Error('PDF bulunamadı.');
  const yol = dersYolu(id) + p.dosya;
  document.title = `${p.baslik} · ${d.ad}`;
  app.innerHTML = `
    <nav class="iz"><a href="#/">Dersler</a> / <a href="#/ders/${encodeURIComponent(id)}">${kacis(d.ad)}</a> / ${kacis(p.baslik)}</nav>
    <div class="pdf-ust">
      <h1>${kacis(p.baslik)}</h1>
      <span><a href="${kacis(yol)}" target="_blank" rel="noopener">Yeni sekmede aç</a> · <a href="${kacis(yol)}" download>İndir</a></span>
    </div>
    <iframe class="pdf-cerceve" src="${kacis(yol)}" title="${kacis(p.baslik)}"></iframe>`;
}

async function aramaSayfasi(sorgu) {
  const q = kucuk(sorgu.trim());
  const dersler = await Promise.all((await dersListesi()).map(d => dersBilgi(d.id).catch(() => null)));
  const sonuc = [];
  for (const d of dersler.filter(Boolean)) {
    for (const k of d.konular) {
      const metin = await yukle(dersYolu(d.id) + k.dosya, 'text').catch(() => '');
      const duz = metin.replace(/[#*_`>$\\{}]/g, '');
      const yer = kucuk(duz).indexOf(q);
      const baslikta = kucuk(k.baslik).includes(q) || kucuk(k.ozet).includes(q);
      if (yer < 0 && !baslikta) continue;
      const parca = yer < 0 ? (k.ozet || '') :
        (yer > 60 ? '…' : '') + duz.slice(Math.max(0, yer - 60), yer + q.length + 100).replace(/\s+/g, ' ') + '…';
      sonuc.push({ d, k, parca, puan: baslikta ? 0 : 1 });
    }
  }
  sonuc.sort((a, b) => a.puan - b.puan);
  const vurgula = s => kacis(s).replace(new RegExp(kacis(sorgu.trim()).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), m => `<mark>${m}</mark>`);
  app.innerHTML = `
    <h1 class="arama-bas">“${kacis(sorgu)}” için ${sonuc.length} sonuç</h1>
    <ul class="arama-sonuc">
      ${sonuc.map(s => `<li><a href="${konuLink(s.d.id, s.k.id)}">
        <small>${kacis(s.d.ad)}</small><strong>${vurgula(s.k.baslik)}</strong><span>${vurgula(s.parca)}</span></a></li>`).join('')}
    </ul>`;
}

/* ---------- yönlendirme ---------- */

async function yonlendir() {
  const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  document.title = 'Ders Anlatımları';
  try {
    if (location.protocol === 'file:') throw new Error('Site dosyaya çift tıklanarak açılmış. Klasördeki "baslat.bat" dosyasını çalıştır (ya da siteyi GitHub Pages üzerinden aç).');
    if (p[0] === 'ders' && p[2] === 'pdf') await pdfSayfasi(p[1], Number(p[3]));
    else if (p[0] === 'ders' && p[2]) await konuSayfasi(p[1], p[2]);
    else if (p[0] === 'ders' && p[1]) await dersSayfasi(p[1]);
    else if (p[0] === 'ara' && p[1]) await aramaSayfasi(p.slice(1).join('/'));
    else await anaSayfa();
  } catch (e) {
    app.innerHTML = `<div class="hata"><h2>Bir sorun oluştu</h2><p>${kacis(e.message)}</p><p><a href="#/">Ana sayfaya dön</a></p></div>`;
  }
  if (p[0] !== 'ara') aramaKutusu.value = '';
  if (p[0] !== 'ara') window.scrollTo(0, 0);
}

let aramaZamanlayici;
aramaKutusu.addEventListener('input', () => {
  clearTimeout(aramaZamanlayici);
  aramaZamanlayici = setTimeout(() => {
    const q = aramaKutusu.value.trim();
    location.replace(q.length >= 2 ? '#/ara/' + encodeURIComponent(q) : '#/');
  }, 250);
});

document.getElementById('tema').addEventListener('click', () => {
  const kok = document.documentElement;
  const koyuMu = kok.dataset.theme ? kok.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  kok.dataset.theme = koyuMu ? 'light' : 'dark';
  try { localStorage.setItem('tema', kok.dataset.theme); } catch {}
});

window.addEventListener('hashchange', yonlendir);
yonlendir();
