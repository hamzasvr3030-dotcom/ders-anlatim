'use strict';

const app = document.getElementById('app');
const aramaKutusu = document.getElementById('ara');
const onbellek = new Map();

/* ================= yardımcılar ================= */

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
const kod = encodeURIComponent;
const dersYolu = id => `dersler/${kod(id)}/`;
const konuLink = (d, k) => `#/ders/${kod(d)}/${kod(k)}`;
const karistir = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function depoOku(anahtar, varsayilan) {
  try { const v = localStorage.getItem(anahtar); return v ? JSON.parse(v) : varsayilan; } catch { return varsayilan; }
}
function depoYaz(anahtar, deger) {
  try { localStorage.setItem(anahtar, JSON.stringify(deger)); } catch {}
}

async function dersListesi() {
  return (await yukle('dersler/dersler.json')).dersler || [];
}

async function dersBilgi(id) {
  const ders = (await dersListesi()).find(d => d.id === id);
  if (!ders) throw new Error(`"${id}" adlı ders bulunamadı.`);
  const detay = await yukle(dersYolu(id) + 'ders.json');
  return { ...ders, ...detay, konular: detay.konular || [], pdfler: detay.pdfler || [] };
}

/* kartlar: kartlar.json (konu kartları) + kelime havuzu (dil dersleri) */
async function kartlariGetir(d) {
  const sonuc = [];
  if (d.kartlar !== false) {
    try {
      const j = await yukle(dersYolu(d.id) + 'kartlar.json');
      for (const k of j.kartlar || []) sonuc.push({ grup: k.konu, on: k.on, arka: k.arka, tur: 'kart' });
    } catch {}
  }
  return sonuc;
}

async function kelimeleriGetir(d) {
  if (!d.kelimeler) return [];
  const parcalar = await Promise.all(d.kelimeler.map(async s => {
    const metin = await yukle(dersYolu(d.id) + s.dosya, 'text');
    return metin.split(/\r?\n/).filter(x => x.trim() && !x.startsWith('#')).map(satir => {
      const [kelime, anlam, tur] = satir.split('\t');
      return { grup: s.seviye, on: kelime.trim(), arka: (anlam || '').trim(), tur: (tur || '').trim(), dil: d.dil };
    });
  }));
  return parcalar.flat();
}

/* ================= okundu işaretleri ================= */

const okunanlar = () => new Set(depoOku('okunanlar', []));
function okunduAyarla(anahtar, deger) {
  const s = okunanlar(); deger ? s.add(anahtar) : s.delete(anahtar);
  depoYaz('okunanlar', [...s]);
}

/* ================= Markdown + formül ================= */

function mdCiz(md, taban = '', satirIci = false) {
  const kodlar = [], mat = [];
  md = md.replace(/```[\s\S]*?```|`[^`\n]+`/g, m => `@@KOD${kodlar.push(m) - 1}@@`);
  md = md.replace(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$(?!\s)[^$\n]+?\$/g,
    m => `@@MAT${mat.push(m) - 1}@@`);
  md = md.replace(/@@KOD(\d+)@@/g, (_, i) => kodlar[i]);
  const ham = satirIci ? marked.parseInline(md) : marked.parse(md);
  const html = ham.replace(/@@MAT(\d+)@@/g, (_, i) => kacis(mat[i]));
  if (satirIci) return html;

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
  if (!el) return;
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetClear && MathJax.typesetClear([el]);
    MathJax.typesetPromise([el]).catch(console.error);
  } else if (deneme < 40) {
    setTimeout(() => formulleriCiz(el, deneme + 1), 250);
  }
}

/* ================= sesli okuma (dil dersleri) ================= */

function seslendir(metin, dil) {
  if (!('speechSynthesis' in window) || !dil) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(metin.replace(/\(.*?\)/g, ''));
  u.lang = dil; u.rate = 0.9;
  speechSynthesis.speak(u);
}

/* ================= ortak parçalar ================= */

function dersBasligi(d, aktif) {
  const sekmeler = [
    ['konular', 'Konular', `#/ders/${kod(d.id)}`],
    ['kartlar', 'Tekrar kartları', `#/kart/${kod(d.id)}`],
    ['test', 'Test', `#/test/${kod(d.id)}`],
  ];
  if (d.kelimeler) sekmeler.push(['kelimeler', 'Kelime havuzu', `#/kelime/${kod(d.id)}`]);
  if (d.pdfler.length) sekmeler.push(['pdfler', `PDF'ler (${d.pdfler.length})`, `#/pdfler/${kod(d.id)}`]);
  return `
    <nav class="iz"><a href="#/">Dersler</a> / ${kacis(d.ad)}</nav>
    <section class="ders-bas" style="--renk:${kacis(d.renk || 'var(--vurgu)')}">
      ${d.kod ? `<span class="kod">${kacis(d.kod)}</span>` : ''}
      <h1>${kacis(d.ad)}</h1>
      ${d.donem ? `<p class="soluk">${kacis(d.donem)}</p>` : ''}
      <p>${kacis(d.aciklama)}</p>
    </section>
    <nav class="sekmeler" style="--renk:${kacis(d.renk || 'var(--vurgu)')}">
      ${sekmeler.map(([k, ad, href]) => `<a href="${href}" class="${k === aktif ? 'aktif' : ''}">${ad}</a>`).join('')}
    </nav>`;
}

/* grup seçici: konu kartları için konu başlıkları, dil için seviyeler */
function grupSecici(d, gruplar, sayac, anahtar) {
  const secili = new Set(depoOku(anahtar, gruplar.map(g => g.id)));
  return `
    <div class="secici">
      <div class="secici-ust">
        <strong>${d.kelimeler ? 'Seviye / bölüm seç' : 'Konu seç'}</strong>
        <span><button type="button" class="baglanti" data-hepsi="1">Tümü</button> · <button type="button" class="baglanti" data-hepsi="0">Hiçbiri</button></span>
      </div>
      <div class="secenekler">
        ${gruplar.map(g => `
          <label class="secenek"><input type="checkbox" value="${kacis(g.id)}" ${secili.has(g.id) ? 'checked' : ''}>
            <span>${kacis(g.ad)}</span><small>${sayac(g.id)}</small></label>`).join('')}
      </div>
    </div>`;
}

function seciciBagla(kok, anahtar, degisti) {
  const kutular = () => [...kok.querySelectorAll('.secenek input')];
  const kaydet = () => { depoYaz(anahtar, kutular().filter(x => x.checked).map(x => x.value)); degisti && degisti(); };
  kutular().forEach(x => x.addEventListener('change', kaydet));
  kok.querySelectorAll('[data-hepsi]').forEach(b => b.addEventListener('click', () => {
    kutular().forEach(x => { x.checked = b.dataset.hepsi === '1'; }); kaydet();
  }));
  return () => kutular().filter(x => x.checked).map(x => x.value);
}

async function gruplarVeHavuz(d) {
  if (d.kelimeler) {
    const kelimeler = await kelimeleriGetir(d);
    const konuKartlari = await kartlariGetir(d);
    const gruplar = d.kelimeler.map(s => ({ id: s.seviye, ad: s.ad || s.seviye }));
    const konular = d.konular.filter(k => konuKartlari.some(c => c.grup === k.id)).map(k => ({ id: k.id, ad: k.baslik }));
    return { gruplar: gruplar.concat(konular), havuz: kelimeler.concat(konuKartlari) };
  }
  const havuz = await kartlariGetir(d);
  const gruplar = d.konular.filter(k => havuz.some(c => c.grup === k.id)).map(k => ({ id: k.id, ad: k.baslik }));
  return { gruplar, havuz };
}

/* ================= sayfalar ================= */

async function anaSayfa() {
  const dersler = await dersListesi();
  const detay = await Promise.all(dersler.map(d =>
    dersBilgi(d.id).catch(() => ({ ...d, konular: [], pdfler: [] }))));
  const ok = okunanlar();
  const gruplar = [];
  for (const d of detay) {
    const g = d.grup || 'Dersler';
    let kume = gruplar.find(x => x.ad === g);
    if (!kume) gruplar.push(kume = { ad: g, dersler: [] });
    kume.dersler.push(d);
  }
  app.innerHTML = `
    <section class="giris">
      <h1>Ders Anlatımları</h1>
      <p>Konu anlatımları, formüller, tekrar kartları, testler ve ders PDF'leri tek yerde. Bir ders seç, konuları sırayla oku, kartlarla tekrar et.</p>
    </section>
    ${detay.length ? '' : '<p class="bos">Henüz ders eklenmedi.</p>'}
    ${gruplar.map(g => `
      <h2 class="grup-baslik">${kacis(g.ad)}</h2>
      <div class="kartlar">
        ${g.dersler.map(d => {
          const top = d.konular.length;
          const bit = d.konular.filter(k => ok.has(`${d.id}/${k.id}`)).length;
          return `
          <a class="kart" href="#/ders/${kod(d.id)}" style="--renk:${kacis(d.renk || 'var(--vurgu)')}">
            ${d.kod ? `<span class="kod">${kacis(d.kod)}</span>` : ''}
            <h2>${kacis(d.ad)}</h2>
            <p>${kacis(d.aciklama)}</p>
            <div class="kart-alt">
              <span>${top} konu${d.pdfler.length ? ` · ${d.pdfler.length} PDF` : ''}${d.kelimeSayisi ? ` · ${d.kelimeSayisi} kelime` : ''}</span>
              ${top ? `<span class="ilerleme" title="${bit}/${top} okundu"><i style="width:${(bit / top) * 100}%"></i></span>` : ''}
            </div>
          </a>`;
        }).join('')}
      </div>`).join('')}`;
}

async function dersSayfasi(id) {
  const d = await dersBilgi(id);
  const ok = okunanlar();
  document.title = `${d.ad} · Ders Anlatımları`;
  const bolumler = [];
  for (const k of d.konular) {
    const b = k.bolum || '';
    let kume = bolumler.find(x => x.ad === b);
    if (!kume) bolumler.push(kume = { ad: b, konular: [] });
    kume.konular.push(k);
  }
  let sira = 0;
  app.innerHTML = `
    ${dersBasligi(d, 'konular')}
    ${d.konular.length ? bolumler.map(b => `
      ${b.ad ? `<h2 class="bolum-baslik">${kacis(b.ad)}</h2>` : ''}
      <ol class="konu-listesi" start="${sira + 1}" style="counter-reset:k ${sira}">
        ${b.konular.map(k => { sira++; return `
          <li class="${ok.has(`${d.id}/${k.id}`) ? 'okundu' : ''}">
            <a href="${konuLink(d.id, k.id)}">
              <strong>${kacis(k.baslik)}</strong>
              ${k.ozet ? `<span>${kacis(k.ozet)}</span>` : ''}
            </a>
          </li>`; }).join('')}
      </ol>`).join('') : '<p class="bos">Bu derse henüz konu eklenmedi.</p>'}`;
}

async function pdfListesi(id) {
  const d = await dersBilgi(id);
  document.title = `PDF'ler · ${d.ad}`;
  app.innerHTML = `
    ${dersBasligi(d, 'pdfler')}
    <ul class="pdf-listesi">
      ${d.pdfler.map((p, i) => `
        <li>
          <a href="#/ders/${kod(d.id)}/pdf/${i}">📄 ${kacis(p.baslik)}</a>
          ${p.boyut ? `<small class="soluk">${kacis(p.boyut)}</small>` : ''}
          <a class="indir" href="${dersYolu(d.id) + kacis(p.dosya)}" download title="İndir">⤓</a>
        </li>`).join('')}
    </ul>`;
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
  const kartVar = (await kartlariGetir(d)).some(c => c.grup === k.id);
  document.title = `${k.baslik} · ${d.ad}`;

  app.innerHTML = `
    <nav class="iz"><a href="#/">Dersler</a> / <a href="#/ders/${kod(id)}">${kacis(d.ad)}</a> / ${kacis(k.baslik)}</nav>
    <div class="konu-duzen">
      <aside class="yan">
        <details ${matchMedia('(max-width: 860px)').matches ? '' : 'open'}>
          <summary>${kacis(d.ad)} · konular</summary>
          <ol>
            ${d.konular.map(x => `<li class="${x.id === k.id ? 'aktif' : ''} ${ok.has(`${id}/${x.id}`) ? 'okundu' : ''}">
              <a href="${konuLink(id, x.id)}">${kacis(x.baslik)}</a></li>`).join('')}
          </ol>
        </details>
      </aside>
      <article class="icerik">
        <div class="konu-araclar">
          ${k.pdf ? `<a href="${dersYolu(id) + kacis(k.pdf)}" target="_blank" rel="noopener">📄 ${kacis(k.pdfBaslik || 'Kaynak PDF')}</a>` : ''}
          ${kartVar ? `<a href="#/kart/${kod(id)}?konu=${kod(k.id)}">🗂️ Bu konunun kartları</a>` : ''}
        </div>
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
  app.querySelectorAll('#metin [data-dil]').forEach(b => b.addEventListener('click', () => seslendir(b.textContent, b.dataset.dil)));
  formulleriCiz(document.getElementById('metin'));
}

async function pdfSayfasi(id, i) {
  const d = await dersBilgi(id);
  const p = d.pdfler[i];
  if (!p) throw new Error('PDF bulunamadı.');
  const yol = dersYolu(id) + p.dosya;
  document.title = `${p.baslik} · ${d.ad}`;
  app.innerHTML = `
    <nav class="iz"><a href="#/">Dersler</a> / <a href="#/pdfler/${kod(id)}">${kacis(d.ad)}</a> / ${kacis(p.baslik)}</nav>
    <div class="pdf-ust">
      <h1>${kacis(p.baslik)}</h1>
      <span><a href="${kacis(yol)}" target="_blank" rel="noopener">Yeni sekmede aç</a> · <a href="${kacis(yol)}" download>İndir</a></span>
    </div>
    <iframe class="pdf-cerceve" src="${kacis(yol)}" title="${kacis(p.baslik)}"></iframe>`;
}

/* ================= tekrar kartları (Leitner) ================= */

const KUTU_ARALIK = [0, 1, 2, 4, 8, 16];      // gün
const kartAnahtari = c => `${c.grup}|${c.on}`;

async function kartSayfasi(id, sorgu) {
  const d = await dersBilgi(id);
  document.title = `Tekrar kartları · ${d.ad}`;
  const { gruplar, havuz } = await gruplarVeHavuz(d);
  const kutuAnahtar = `kutular:${id}`;
  const seciciAnahtar = `secim:${id}`;
  if (sorgu.konu) depoYaz(seciciAnahtar, [sorgu.konu]);

  if (!havuz.length) {
    app.innerHTML = `${dersBasligi(d, 'kartlar')}<p class="bos">Bu ders için henüz kart yok.</p>`;
    return;
  }

  const kutular = () => depoOku(kutuAnahtar, {});
  const sayac = g => `${havuz.filter(c => c.grup === g).length} kart`;
  const yon = depoOku(`yon:${id}`, 'on');

  app.innerHTML = `
    ${dersBasligi(d, 'kartlar')}
    <div class="calisma">
      <div id="kurulum">
        ${grupSecici(d, gruplar, sayac, seciciAnahtar)}
        <div class="kurulum-alt">
          ${d.kelimeler ? `<label class="secenek-satir">Yön:
            <select id="yon"><option value="on" ${yon === 'on' ? 'selected' : ''}>${kacis(d.dilAdi || 'Yabancı')} → Türkçe</option>
            <option value="arka" ${yon === 'arka' ? 'selected' : ''}>Türkçe → ${kacis(d.dilAdi || 'Yabancı')}</option></select></label>` : ''}
          <label class="secenek-satir">Kart sayısı:
            <select id="adet"><option>10</option><option selected>20</option><option>40</option><option value="0">Hepsi</option></select></label>
          <button id="basla" class="dugme">Çalışmaya başla</button>
        </div>
        <div id="kutu-ozet" class="kutu-ozet"></div>
      </div>
      <div id="oturum" hidden></div>
    </div>`;

  const secim = seciciBagla(app.querySelector('.secici'), seciciAnahtar, ozetCiz);
  function secilenler() { const s = new Set(secim()); return havuz.filter(c => s.has(c.grup)); }
  function ozetCiz() {
    const k = kutular(), liste = secilenler();
    const say = [0, 0, 0, 0, 0, 0];
    const simdi = Date.now(); let vadesi = 0;
    for (const c of liste) {
      const b = k[kartAnahtari(c)]; const kutu = b ? b.k : 0; say[kutu]++;
      if (!b || b.t <= simdi) vadesi++;
    }
    app.querySelector('#kutu-ozet').innerHTML = `
      <div><strong>${liste.length}</strong> kart seçili · <strong>${vadesi}</strong> tanesinin tekrar zamanı geldi</div>
      <div class="kutu-cubuk">${say.map((n, i) => n ? `<span class="kutu-${i}" style="flex:${n}" title="${i ? i + '. kutu' : 'Yeni'}: ${n}">${n}</span>` : '').join('')}</div>
      <small class="soluk">Yeni → 1 → 2 → … → 5. kutu. Bildiğin kart bir sonraki kutuya geçer ve daha seyrek sorulur; bilemediğin kart 1. kutuya döner.</small>`;
  }
  ozetCiz();

  app.querySelector('#basla').addEventListener('click', () => {
    const k = kutular(), simdi = Date.now();
    const adet = Number(app.querySelector('#adet').value);
    const yonSecim = app.querySelector('#yon') ? app.querySelector('#yon').value : 'on';
    depoYaz(`yon:${id}`, yonSecim);
    let liste = karistir(secilenler());
    liste.sort((a, b) => {
      const A = k[kartAnahtari(a)], B = k[kartAnahtari(b)];
      const va = A ? (A.t <= simdi ? A.k : 10 + A.k) : 0.5, vb = B ? (B.t <= simdi ? B.k : 10 + B.k) : 0.5;
      return va - vb;
    });
    if (adet) liste = liste.slice(0, adet);
    if (!liste.length) return;
    oturumBaslat(d, liste, kutuAnahtar, yonSecim, () => { app.querySelector('#oturum').hidden = true; app.querySelector('#kurulum').hidden = false; ozetCiz(); });
  });
}

function oturumBaslat(d, liste, kutuAnahtar, yon, bitti) {
  const kok = app.querySelector('#oturum');
  app.querySelector('#kurulum').hidden = true; kok.hidden = false;
  let i = 0, bildi = 0, cevrik = false;
  const tekrar = [];

  function ciz() {
    if (i >= liste.length) {
      kok.innerHTML = `
        <div class="sonuc">
          <h2>Oturum bitti 🎉</h2>
          <p><strong>${bildi}</strong> / ${liste.length} kartı bildin.</p>
          <div class="sonuc-dugmeler">
            ${tekrar.length ? `<button class="dugme" id="yanlislar">Bilemediklerimi tekrar et (${tekrar.length})</button>` : ''}
            <button class="dugme ikincil" id="geri">Yeni oturum</button>
          </div>
        </div>`;
      kok.querySelector('#geri').onclick = bitti;
      const y = kok.querySelector('#yanlislar');
      if (y) y.onclick = () => oturumBaslat(d, karistir(tekrar), kutuAnahtar, yon, bitti);
      return;
    }
    const c = liste[i];
    const dilliMi = c.tur !== 'kart' && d.dil;
    const ters = yon === 'arka' && dilliMi;
    const on = ters ? c.arka : c.on, arka = ters ? c.on : c.arka;
    kok.innerHTML = `
      <div class="oturum-ust"><span>${i + 1} / ${liste.length}</span><span class="soluk">${kacis(c.grup)}</span><button class="baglanti" id="cik">Bitir</button></div>
      <div class="ilerleme genis"><i style="width:${(i / liste.length) * 100}%"></i></div>
      <div class="flash ${cevrik ? 'cevrik' : ''}" id="flash" tabindex="0">
        <div class="yuz on"><div class="flash-metin">${mdCiz(on, '', true)}</div>${dilliMi && !ters ? '<button class="ses" data-ses="1" title="Dinle">🔊</button>' : ''}<small class="soluk">Cevabı görmek için dokun · Boşluk</small></div>
        <div class="yuz arka"><div class="flash-metin">${mdCiz(arka, '', true)}</div>${c.tur && c.tur !== 'kart' ? `<small class="etiket">${kacis(c.tur)}</small>` : ''}${dilliMi && ters ? '<button class="ses" data-ses="1" title="Dinle">🔊</button>' : ''}</div>
      </div>
      <div class="flash-dugmeler" ${cevrik ? '' : 'hidden'}>
        <button class="dugme kirmizi" id="bilmedim">✗ Bilemedim <kbd>1</kbd></button>
        <button class="dugme yesil" id="bildim">✓ Bildim <kbd>2</kbd></button>
      </div>`;
    formulleriCiz(kok.querySelector('#flash'));
    kok.querySelector('#flash').onclick = e => { if (e.target.closest('[data-ses]')) { seslendir(c.on, d.dil); return; } cevir(); };
    kok.querySelector('#cik').onclick = () => { i = liste.length; ciz(); };
    const bm = kok.querySelector('#bilmedim'), bl = kok.querySelector('#bildim');
    bm.onclick = () => cevapla(false); bl.onclick = () => cevapla(true);
    if (dilliMi && !ters) seslendir(c.on, d.dil);
  }
  function cevir() {
    if (cevrik) return;
    cevrik = true;
    kok.querySelector('#flash').classList.add('cevrik');
    kok.querySelector('.flash-dugmeler').hidden = false;
  }
  function cevapla(dogru) {
    const k = depoOku(kutuAnahtar, {});
    const c = liste[i], an = kartAnahtari(c);
    const eski = k[an] ? k[an].k : 0;
    const yeni = dogru ? Math.min(5, eski + 1) : 1;
    k[an] = { k: yeni, t: Date.now() + KUTU_ARALIK[yeni] * 864e5 - 36e5 };
    depoYaz(kutuAnahtar, k);
    if (dogru) bildi++; else tekrar.push(c);
    i++; cevrik = false; ciz();
  }
  ciz();
  const tus = e => {
    if (kok.hidden || !document.body.contains(kok)) { document.removeEventListener('keydown', tus); return; }
    if (e.target.matches('input, select, textarea')) return;
    if (e.code === 'Space') { e.preventDefault(); cevir(); }
    else if (cevrik && e.key === '1') cevapla(false);
    else if (cevrik && e.key === '2') cevapla(true);
  };
  document.addEventListener('keydown', tus);
}

/* ================= test ================= */

async function testSayfasi(id) {
  const d = await dersBilgi(id);
  document.title = `Test · ${d.ad}`;
  const { gruplar, havuz } = await gruplarVeHavuz(d);
  const seciciAnahtar = `secim:${id}`;
  if (havuz.length < 4) {
    app.innerHTML = `${dersBasligi(d, 'test')}<p class="bos">Test için yeterli kart yok.</p>`;
    return;
  }
  const sayac = g => `${havuz.filter(c => c.grup === g).length} soru`;
  app.innerHTML = `
    ${dersBasligi(d, 'test')}
    <div class="calisma">
      <div id="kurulum">
        ${grupSecici(d, gruplar, sayac, seciciAnahtar)}
        <div class="kurulum-alt">
          ${d.kelimeler ? `<label class="secenek-satir">Soru tipi:
            <select id="yon"><option value="on">${kacis(d.dilAdi || 'Yabancı')} kelime → Türkçe anlamı</option><option value="arka">Türkçe → ${kacis(d.dilAdi || 'Yabancı')} karşılığı</option></select></label>` : ''}
          <label class="secenek-satir">Soru sayısı:
            <select id="adet"><option>10</option><option selected>20</option><option>30</option></select></label>
          <button id="basla" class="dugme">Testi başlat</button>
        </div>
        <p class="soluk kucuk-yazi">Her soruda 4 şık var. Yanlış şıklar aynı konudaki/seviyedeki diğer kartlardan seçilir.</p>
      </div>
      <div id="oturum" hidden></div>
    </div>`;
  const secim = seciciBagla(app.querySelector('.secici'), seciciAnahtar);

  app.querySelector('#basla').addEventListener('click', () => {
    const s = new Set(secim());
    const secili = havuz.filter(c => s.has(c.grup));
    if (secili.length < 4) { alert('En az 4 kartlık bir seçim yap.'); return; }
    const yon = app.querySelector('#yon') ? app.querySelector('#yon').value : 'on';
    const adet = Number(app.querySelector('#adet').value);
    const sorular = karistir(secili).slice(0, adet).map(c => {
      const ters = yon === 'arka' && c.tur !== 'kart';
      const soru = ters ? c.arka : c.on, dogru = ters ? c.on : c.arka;
      const ayni = secili.filter(x => x !== c && x.grup === c.grup && (x.tur === 'kart') === (c.tur === 'kart'));
      const kaynak = ayni.length >= 3 ? ayni : secili.filter(x => x !== c && (x.tur === 'kart') === (c.tur === 'kart'));
      const yanlislar = [];
      for (const x of karistir(kaynak.length >= 3 ? kaynak : secili.filter(x => x !== c))) {
        const v = ters ? x.on : x.arka;
        if (v !== dogru && !yanlislar.includes(v)) yanlislar.push(v);
        if (yanlislar.length === 3) break;
      }
      return { c, soru, dogru, siklar: karistir([dogru, ...yanlislar]) };
    });
    testCoz(d, sorular, () => testSayfasi(id));
  });
}

function testCoz(d, sorular, yeniden) {
  const kok = app.querySelector('#oturum');
  app.querySelector('#kurulum').hidden = true; kok.hidden = false;
  let i = 0, puan = 0; const yanlis = [];
  function ciz() {
    if (i >= sorular.length) {
      const yuzde = Math.round((puan / sorular.length) * 100);
      kok.innerHTML = `
        <div class="sonuc">
          <h2>${yuzde >= 85 ? 'Harika! 🏆' : yuzde >= 60 ? 'İyi gidiyor 👍' : 'Biraz daha tekrar 💪'}</h2>
          <p class="buyuk-puan">${puan} / ${sorular.length} <small>(%${yuzde})</small></p>
          ${yanlis.length ? `<h3>Yanlış yaptıkların</h3><ul class="yanlis-listesi">${yanlis.map(y => `<li><div>${mdCiz(y.soru, '', true)}</div><div class="dogru-cevap">✓ ${mdCiz(y.dogru, '', true)}</div></li>`).join('')}</ul>` : ''}
          <div class="sonuc-dugmeler"><button class="dugme" id="yeni">Yeni test</button></div>
        </div>`;
      formulleriCiz(kok);
      kok.querySelector('#yeni').onclick = yeniden;
      return;
    }
    const s = sorular[i];
    kok.innerHTML = `
      <div class="oturum-ust"><span>Soru ${i + 1} / ${sorular.length}</span><span class="soluk">Puan: ${puan}</span></div>
      <div class="ilerleme genis"><i style="width:${(i / sorular.length) * 100}%"></i></div>
      <div class="soru">${mdCiz(s.soru, '', true)}</div>
      <div class="siklar">${s.siklar.map((x, j) => `<button class="sik" data-j="${j}"><b>${'ABCD'[j]}</b> <span>${mdCiz(x, '', true)}</span></button>`).join('')}</div>
      <div class="test-alt" hidden><button class="dugme" id="sonraki">Sonraki →</button></div>`;
    formulleriCiz(kok);
    kok.querySelectorAll('.sik').forEach(b => b.onclick = () => {
      if (kok.querySelector('.sik.dogru')) return;
      const secilen = s.siklar[b.dataset.j];
      kok.querySelectorAll('.sik').forEach(x => { if (s.siklar[x.dataset.j] === s.dogru) x.classList.add('dogru'); x.disabled = true; });
      if (secilen === s.dogru) puan++; else { b.classList.add('yanlis'); yanlis.push(s); }
      kok.querySelector('.test-alt').hidden = false;
      kok.querySelector('#sonraki').focus();
    });
    kok.querySelector('#sonraki').onclick = () => { i++; ciz(); };
  }
  ciz();
}

/* ================= kelime havuzu ================= */

async function kelimeSayfasi(id) {
  const d = await dersBilgi(id);
  if (!d.kelimeler) throw new Error('Bu derste kelime havuzu yok.');
  document.title = `Kelime havuzu · ${d.ad}`;
  const kelimeler = await kelimeleriGetir(d);
  const kutular = depoOku(`kutular:${id}`, {});
  const seviyeler = d.kelimeler.map(s => s.seviye);
  app.innerHTML = `
    ${dersBasligi(d, 'kelimeler')}
    <div class="kelime-arac">
      <input id="kelime-ara" type="search" placeholder="${kacis(d.dilAdi || '')} veya Türkçe ara…">
      <div class="seviye-filtre">
        <button class="secili" data-s="">Tümü (${kelimeler.length})</button>
        ${seviyeler.map(s => `<button data-s="${kacis(s)}">${kacis(s)} (${kelimeler.filter(k => k.grup === s).length})</button>`).join('')}
      </div>
    </div>
    <div id="kelime-tablo"></div>`;
  let seviye = '', q = '';
  const tablo = app.querySelector('#kelime-tablo');
  function ciz() {
    const qq = kucuk(q.trim());
    const liste = kelimeler.filter(k => (!seviye || k.grup === seviye) && (!qq || kucuk(k.on).includes(qq) || kucuk(k.arka).includes(qq)));
    tablo.innerHTML = `
      <p class="soluk">${liste.length} kelime</p>
      <div class="tablo-kap"><table class="kelime-tablosu">
        <thead><tr><th>${kacis(d.dilAdi || 'Kelime')}</th><th>Türkçe</th><th>Tür</th><th>Seviye</th><th></th></tr></thead>
        <tbody>${liste.slice(0, 600).map(k => {
          const b = kutular[kartAnahtari(k)];
          return `<tr><td><button class="ses-kucuk" data-k="${kacis(k.on)}" title="Dinle">🔊</button> <strong>${kacis(k.on)}</strong></td><td>${kacis(k.arka)}</td><td class="soluk">${kacis(k.tur)}</td><td><span class="rozet">${kacis(k.grup)}</span></td><td>${b ? `<span class="kutu-rozet kutu-${b.k}" title="${b.k}. kutu">${b.k}</span>` : ''}</td></tr>`;
        }).join('')}</tbody>
      </table></div>
      ${liste.length > 600 ? '<p class="soluk">İlk 600 kelime gösteriliyor; aramayla daralt.</p>' : ''}`;
    tablo.querySelectorAll('.ses-kucuk').forEach(b => b.onclick = () => seslendir(b.dataset.k, d.dil));
  }
  app.querySelector('#kelime-ara').addEventListener('input', e => { q = e.target.value; ciz(); });
  app.querySelectorAll('.seviye-filtre button').forEach(b => b.addEventListener('click', () => {
    app.querySelectorAll('.seviye-filtre button').forEach(x => x.classList.remove('secili'));
    b.classList.add('secili'); seviye = b.dataset.s; ciz();
  }));
  ciz();
}

/* ================= arama ================= */

async function aramaSayfasi(sorgu) {
  const q = kucuk(sorgu.trim());
  const dersler = await Promise.all((await dersListesi()).map(d => dersBilgi(d.id).catch(() => null)));
  const sonuc = [];
  for (const d of dersler.filter(Boolean)) {
    for (const k of d.konular) {
      const metin = await yukle(dersYolu(d.id) + k.dosya, 'text').catch(() => '');
      const duz = metin.replace(/[#*_`>$\\{}|]/g, '');
      const yer = kucuk(duz).indexOf(q);
      const baslikta = kucuk(k.baslik).includes(q) || kucuk(k.ozet).includes(q);
      if (yer < 0 && !baslikta) continue;
      const parca = yer < 0 ? (k.ozet || '') :
        (yer > 60 ? '…' : '') + duz.slice(Math.max(0, yer - 60), yer + q.length + 100).replace(/\s+/g, ' ') + '…';
      sonuc.push({ d, k, parca, puan: baslikta ? 0 : 1 });
    }
  }
  sonuc.sort((a, b) => a.puan - b.puan);
  const desen = new RegExp(kacis(sorgu.trim()).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const vurgula = s => kacis(s).replace(desen, m => `<mark>${m}</mark>`);
  app.innerHTML = `
    <h1 class="arama-bas">“${kacis(sorgu)}” için ${sonuc.length} sonuç</h1>
    <ul class="arama-sonuc">
      ${sonuc.slice(0, 80).map(s => `<li><a href="${konuLink(s.d.id, s.k.id)}">
        <small>${kacis(s.d.ad)}</small><strong>${vurgula(s.k.baslik)}</strong><span>${vurgula(s.parca)}</span></a></li>`).join('')}
    </ul>`;
}

/* ================= yönlendirme ================= */

async function yonlendir() {
  const [yol, sorguMetni] = location.hash.replace(/^#\/?/, '').split('?');
  const p = yol.split('/').filter(Boolean).map(decodeURIComponent);
  const sorgu = Object.fromEntries(new URLSearchParams(sorguMetni || ''));
  document.title = 'Ders Anlatımları';
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  try {
    if (location.protocol === 'file:') throw new Error('Site dosyaya çift tıklanarak açılmış. Klasördeki "baslat.bat" dosyasını çalıştır (ya da siteyi GitHub Pages üzerinden aç).');
    if (p[0] === 'ders' && p[2] === 'pdf') await pdfSayfasi(p[1], Number(p[3]));
    else if (p[0] === 'ders' && p[2]) await konuSayfasi(p[1], p[2]);
    else if (p[0] === 'ders' && p[1]) await dersSayfasi(p[1]);
    else if (p[0] === 'kart' && p[1]) await kartSayfasi(p[1], sorgu);
    else if (p[0] === 'test' && p[1]) await testSayfasi(p[1]);
    else if (p[0] === 'kelime' && p[1]) await kelimeSayfasi(p[1]);
    else if (p[0] === 'pdfler' && p[1]) await pdfListesi(p[1]);
    else if (p[0] === 'ara' && p[1]) await aramaSayfasi(p.slice(1).join('/'));
    else await anaSayfa();
  } catch (e) {
    console.error(e);
    app.innerHTML = `<div class="hata"><h2>Bir sorun oluştu</h2><p>${kacis(e.message)}</p><p><a href="#/">Ana sayfaya dön</a></p></div>`;
  }
  if (p[0] !== 'ara') { aramaKutusu.value = ''; window.scrollTo(0, 0); }
}

let aramaZamanlayici;
aramaKutusu.addEventListener('input', () => {
  clearTimeout(aramaZamanlayici);
  aramaZamanlayici = setTimeout(() => {
    const q = aramaKutusu.value.trim();
    location.replace(q.length >= 2 ? '#/ara/' + kod(q) : '#/');
  }, 300);
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
