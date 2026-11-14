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
const ikiHane = n => String(n).padStart(2, '0');

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

async function kartlariGetir(d) {
  try {
    const j = await yukle(dersYolu(d.id) + 'kartlar.json');
    return (j.kartlar || []).map(k => ({ grup: k.konu, on: k.on, arka: k.arka, tur: 'kart' }));
  } catch { return []; }
}

/* TSV: kelime, Türkçe, tür, kategori, IPA, okunuş */
async function kelimeleriGetir(d) {
  if (!d.kelimeler) return [];
  const parcalar = await Promise.all(d.kelimeler.map(async s => {
    const metin = await yukle(dersYolu(d.id) + s.dosya, 'text');
    return metin.split(/\r?\n/).filter(x => x.trim() && !x.startsWith('#')).map(satir => {
      const [kelime, anlam, tur, kategori, ipa, okunus] = satir.split('\t');
      return {
        grup: s.seviye, on: kelime.trim(), arka: (anlam || '').trim(), tur: (tur || '').trim(),
        kategori: (kategori || '').trim(), ipa: (ipa || '').trim(), okunus: (okunus || '').trim(), dil: d.dil,
      };
    });
  }));
  return parcalar.flat();
}

/* ================= ilerleme ================= */

const okunanlar = () => new Set(depoOku('okunanlar', []));
function okunduAyarla(anahtar, deger) {
  const s = okunanlar(); deger ? s.add(anahtar) : s.delete(anahtar);
  depoYaz('okunanlar', [...s]);
}
const kartAnahtari = c => `${c.grup}|${c.on}`;
const KUTU_ARALIK = [0, 1, 2, 4, 8, 16];

function kutuIstatistik(id) {
  const k = depoOku(`kutular:${id}`, {});
  const simdi = Date.now();
  let calisilan = 0, vadesi = 0, ogrenilen = 0;
  for (const v of Object.values(k)) {
    calisilan++;
    if (v.t <= simdi) vadesi++;
    if (v.k >= 3) ogrenilen++;
  }
  return { calisilan, vadesi, ogrenilen, kutular: k };
}

/* ================= ikonlar ================= */

const IKON = {
  disli: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3"/><circle cx="12" cy="12" r="6.6"/></svg>',
  kiris: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 14h19M2.5 17h19"/><path d="M4 17l-1.5 3.5h3zM20 17l-1.5 3.5h3z"/><path d="M12 3.5v8M9.5 9l2.5 2.5L14.5 9"/></svg>',
  termometre: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.8V4.5a2 2 0 1 0-4 0v10.3a4 4 0 1 0 4 0z"/><path d="M12 9v8"/><path d="M17.5 6h2M17.5 9.5h2M17.5 13h2"/></svg>',
  dalga: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 5-2.5 5 0"/><path d="M2 13c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 5-2.5 5 0"/><path d="M2 18c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 5-2.5 5 0"/></svg>',
  civata: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10l2 3.5-2 3.5H7L5 6.5z"/><path d="M9.5 10v10.5h5V10"/><path d="M9.5 13l5-1.5M9.5 16l5-1.5M9.5 19l5-1.5"/></svg>',
  mikroskop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3.5l4 2.3-3.5 6-4-2.3z"/><path d="M11 5l1.2-2"/><path d="M8.3 12.5 7 15"/><path d="M14.5 9.5a5 5 0 0 1-1.5 9.5H5"/><path d="M4 21h14"/></svg>',
  radyator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="11" rx="1.5"/><path d="M7 7v11M11 7v11M15 7v11M19 7v11M3 21h3M18 21h3M5 18v3M19 18v3"/><path d="M8 2.5c-.8 1 .8 2-.1 3M12 2.5c-.8 1 .8 2-.1 3M16 2.5c-.8 1 .8 2-.1 3"/></svg>',
  en: '<svg viewBox="0 0 24 24"><text x="12" y="16" text-anchor="middle" font-size="10.5" font-weight="800" fill="currentColor" font-family="system-ui,sans-serif">EN</text></svg>',
  de: '<svg viewBox="0 0 24 24"><text x="12" y="16" text-anchor="middle" font-size="10.5" font-weight="800" fill="currentColor" font-family="system-ui,sans-serif">DE</text></svg>',
  kart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/></svg>',
  test: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l2 2 4-4"/><rect x="4" y="3" width="16" height="18" rx="2"/></svg>',
  kitap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v16H5.5A1.5 1.5 0 0 0 4 20.5z"/><path d="M4 20.5A1.5 1.5 0 0 0 5.5 22H20"/></svg>',
  ses: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18.5 6a8 8 0 0 1 0 12"/></svg>',
};
const ikon = (ad, sinif = 'ikon') => `<span class="${sinif}" aria-hidden="true">${IKON[ad] || IKON.kitap}</span>`;

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

/* ================= sesli okuma ================= */

let sesler = [];
function sesleriYukle() { if ('speechSynthesis' in window) sesler = speechSynthesis.getVoices(); }
if ('speechSynthesis' in window) { sesleriYukle(); speechSynthesis.onvoiceschanged = sesleriYukle; }

function seslendir(metin, dil, hiz = 0.9) {
  if (!('speechSynthesis' in window) || !dil) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(metin.replace(/\(.*?\)/g, ''));
  u.lang = dil; u.rate = hiz;
  const ses = sesler.find(v => v.lang === dil) || sesler.find(v => v.lang && v.lang.startsWith(dil.slice(0, 2)));
  if (ses) u.voice = ses;
  speechSynthesis.speak(u);
}

/* ================= tema (derse göre renk) ================= */

function dersTemasi(d) {
  const kok = document.documentElement;
  if (d) {
    kok.style.setProperty('--ders', d.renk || 'var(--vurgu)');
    document.body.dataset.ders = d.id;
    document.body.dataset.duzen = d.duzen || '';
  } else {
    kok.style.removeProperty('--ders');
    delete document.body.dataset.ders;
    delete document.body.dataset.duzen;
  }
}

/* ================= ortak parçalar ================= */

function dersBasligi(d, aktif) {
  const sekmeler = [
    ['konular', 'Konular', `#/ders/${kod(d.id)}`, 'kitap'],
    ['kartlar', 'Tekrar kartları', `#/kart/${kod(d.id)}`, 'kart'],
    ['test', 'Test', `#/test/${kod(d.id)}`, 'test'],
  ];
  if (d.kelimeler) sekmeler.push(['kelimeler', 'Kelime havuzu', `#/kelime/${kod(d.id)}`, 'ses']);
  if (d.pdfler.length) sekmeler.push(['pdfler', `PDF'ler (${d.pdfler.length})`, `#/pdfler/${kod(d.id)}`, 'kitap']);
  return `
    <section class="ders-hero motif-${kacis(d.ikon || 'kitap')}">
      <div class="hero-ic">
        <nav class="iz"><a href="#/">Ana sayfa</a> <span>›</span> ${kacis(d.ad)}</nav>
        <div class="hero-satir">
          ${ikon(d.ikon, 'hero-ikon')}
          <div>
            ${d.kod ? `<span class="kod">${kacis(d.kod)}</span>` : ''}
            <h1>${kacis(d.ad)}</h1>
            ${d.slogan ? `<p class="slogan">${kacis(d.slogan)}</p>` : ''}
          </div>
        </div>
      </div>
    </section>
    <nav class="sekmeler">
      ${sekmeler.map(([k, ad, href, ik]) => `<a href="${href}" class="${k === aktif ? 'aktif' : ''}">${ikon(ik, 'sekme-ikon')}${ad}</a>`).join('')}
    </nav>`;
}

function istatistikSeridi(d, kartSayisi) {
  const ok = okunanlar();
  const bit = d.konular.filter(k => ok.has(`${d.id}/${k.id}`)).length;
  const ist = kutuIstatistik(d.id);
  const devam = d.konular.find(k => !ok.has(`${d.id}/${k.id}`)) || d.konular[0];
  const yuzde = d.konular.length ? Math.round(bit / d.konular.length * 100) : 0;
  return `
    <div class="ist-seridi">
      <div class="ist"><b>${bit}<small>/${d.konular.length}</small></b><span>konu bitti</span></div>
      <div class="ist"><b>${kartSayisi}</b><span>tekrar kartı</span></div>
      <div class="ist ${ist.vadesi ? 'uyari' : ''}"><b>${ist.vadesi}</b><span>bugün tekrar</span></div>
      <div class="ist-cubuk"><i><em style="width:${yuzde}%"></em></i><span>%${yuzde}</span></div>
      ${devam ? `<a class="dugme devam" href="${konuLink(d.id, devam.id)}">${bit ? 'Kaldığın yerden devam' : 'Başla'} →</a>` : ''}
    </div>`;
}

function grupSecici(baslik, gruplar, sayac, anahtar) {
  const secili = new Set(depoOku(anahtar, gruplar.map(g => g.id)));
  return `
    <div class="secici">
      <div class="secici-ust">
        <strong>${kacis(baslik)}</strong>
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
  const konuKartlari = await kartlariGetir(d);
  const konular = d.konular.filter(k => konuKartlari.some(c => c.grup === k.id)).map(k => ({ id: k.id, ad: k.baslik }));
  if (d.kelimeler) {
    const kelimeler = await kelimeleriGetir(d);
    const gruplar = d.kelimeler.map(s => ({ id: s.seviye, ad: `${s.seviye} kelimeleri` }));
    return { gruplar: gruplar.concat(konular.map(k => ({ ...k, ad: 'Dilbilgisi: ' + k.ad }))), havuz: kelimeler.concat(konuKartlari) };
  }
  return { gruplar: konular, havuz: konuKartlari };
}

/* ================= ana sayfa ================= */

function selam() {
  const s = new Date().getHours();
  return s < 6 ? 'İyi geceler' : s < 12 ? 'Günaydın' : s < 18 ? 'İyi günler' : 'İyi akşamlar';
}

function halka(yuzde, renk) {
  const r = 17, c = 2 * Math.PI * r;
  return `<svg class="halka" viewBox="0 0 44 44"><circle cx="22" cy="22" r="${r}" class="halka-zemin"/>
    <circle cx="22" cy="22" r="${r}" class="halka-dolu" style="stroke:${kacis(renk)};stroke-dasharray:${(c * yuzde / 100).toFixed(1)} ${c.toFixed(1)}"/>
    <text x="22" y="26" text-anchor="middle">${yuzde}</text></svg>`;
}

async function anaSayfa() {
  dersTemasi(null);
  const dersler = await Promise.all((await dersListesi()).map(d => dersBilgi(d.id).catch(() => null)));
  const liste = dersler.filter(Boolean);
  const ok = okunanlar();
  const tumKonu = liste.reduce((a, d) => a + d.konular.length, 0);
  const tumOkunan = liste.reduce((a, d) => a + d.konular.filter(k => ok.has(`${d.id}/${k.id}`)).length, 0);
  const vadeler = liste.map(d => ({ d, ist: kutuIstatistik(d.id) }));
  const tumVade = vadeler.reduce((a, x) => a + x.ist.vadesi, 0);
  const tumKelime = liste.reduce((a, d) => a + (d.kelimeSayisi || 0), 0);
  const son = depoOku('sonKonu', null);
  const sonDers = son && liste.find(d => d.id === son.ders);
  const sonKonu = sonDers && sonDers.konular.find(k => k.id === son.konu);
  const tarih = new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' });

  const muh = liste.filter(d => d.grup !== 'Dil dersleri');
  const dil = liste.filter(d => d.grup === 'Dil dersleri');

  app.innerHTML = `
    <section class="ana-hero">
      <div>
        <p class="tarih">${kacis(tarih)}</p>
        <h1>${selam()}! <span>Bugün ne çalışıyoruz?</span></h1>
      </div>
      <div class="ana-ist">
        <div><b>${tumOkunan}<small>/${tumKonu}</small></b><span>konu bitti</span></div>
        <div class="${tumVade ? 'uyari' : ''}"><b>${tumVade}</b><span>kart tekrar bekliyor</span></div>
        <div><b>${tumKelime.toLocaleString('tr-TR')}</b><span>kelime</span></div>
        <div><b>${liste.length}</b><span>ders</span></div>
      </div>
    </section>

    <div class="ana-ust">
      ${sonKonu ? `
        <a class="devam-kart" href="${konuLink(sonDers.id, sonKonu.id)}" style="--renk:${kacis(sonDers.renk)}">
          ${ikon(sonDers.ikon, 'devam-ikon')}
          <div><small>Kaldığın yerden devam et</small><strong>${kacis(sonKonu.baslik)}</strong><span>${kacis(sonDers.ad)}</span></div>
          <b class="ok">→</b>
        </a>` : `
        <div class="devam-kart bos-devam">
          ${ikon('kitap', 'devam-ikon')}
          <div><small>Hoş geldin</small><strong>Bir ders seçerek başla</strong><span>Okuduğun son konu burada görünecek.</span></div>
        </div>`}
      <div class="tekrar-paneli">
        <h2>${ikon('kart', 'mini-ikon')} Bugünün tekrarları</h2>
        ${tumVade ? `<ul>${vadeler.filter(x => x.ist.vadesi).map(x => `
          <li><a href="#/kart/${kod(x.d.id)}" style="--renk:${kacis(x.d.renk)}"><span class="nokta"></span>${kacis(x.d.ad)}<b>${x.ist.vadesi}</b></a></li>`).join('')}</ul>`
          : '<p class="soluk">Tekrarı gelen kart yok. Bir dersin <em>Tekrar kartları</em> sekmesinden yeni kartlar çalışabilirsin.</p>'}
      </div>
    </div>

    <h2 class="grup-baslik">Mühendislik dersleri</h2>
    <div class="ders-izgarasi">
      ${muh.map(d => {
        const top = d.konular.length, bit = d.konular.filter(k => ok.has(`${d.id}/${k.id}`)).length;
        const yuzde = top ? Math.round(bit / top * 100) : 0;
        const v = kutuIstatistik(d.id).vadesi;
        return `
        <a class="ders-karo" href="#/ders/${kod(d.id)}" style="--renk:${kacis(d.renk)}">
          <div class="karo-ust">${ikon(d.ikon, 'karo-ikon')}${halka(yuzde, d.renk)}</div>
          <h3>${kacis(d.ad)}</h3>
          <p>${kacis(d.slogan || d.aciklama)}</p>
          <div class="karo-alt"><span>${top} konu</span><span>${d.pdfler.length} PDF</span>${v ? `<span class="rozet-vade">${v} tekrar</span>` : ''}</div>
        </a>`;
      }).join('')}
    </div>

    <h2 class="grup-baslik">Dil dersleri</h2>
    <div class="dil-izgarasi">
      ${dil.map(d => {
        const sev = d.seviyeler || [];
        return `
        <a class="dil-karo" href="#/ders/${kod(d.id)}" style="--renk:${kacis(d.renk)}">
          <div class="dil-ust">${ikon(d.ikon, 'dil-ikon')}<div><h3>${kacis(d.ad)}</h3><p>${kacis(d.slogan || '')}</p></div></div>
          <div class="seviye-cubuklari">
            ${sev.map(s => {
              const ks = d.konular.filter(k => k.id.startsWith(s.kod.toLowerCase() + '-'));
              const y = ks.length ? Math.round(ks.filter(k => ok.has(`${d.id}/${k.id}`)).length / ks.length * 100) : 0;
              return `<div class="sc"><span>${s.kod}</span><i><em style="width:${y}%;background:${kacis(s.renk)}"></em></i></div>`;
            }).join('')}
          </div>
          <div class="karo-alt"><span>${d.konular.length} konu</span><span>${(d.kelimeSayisi || 0).toLocaleString('tr-TR')} kelime</span><span>IPA + okunuş</span></div>
        </a>`;
      }).join('')}
    </div>`;
}

/* ================= ders sayfası: derse özel düzenler ================= */

function bolumle(konular) {
  const b = [];
  for (const k of konular) {
    const ad = k.bolum || '';
    let kume = b.find(x => x.ad === ad);
    if (!kume) b.push(kume = { ad, konular: [] });
    kume.konular.push(k);
  }
  return b;
}

const DUZENLER = {
  // Mekanizma: dişlilerle bağlanmış zikzak yol
  yol(d, ok) {
    return `<ol class="duzen-yol">${d.konular.map((k, i) => `
      <li class="${ok(k) ? 'okundu' : ''} ${i % 2 ? 'sag' : 'sol'}">
        <span class="yol-disli">${IKON.disli}<b>${i + 1}</b></span>
        <a href="${konuLink(d.id, k.id)}"><strong>${kacis(k.baslik)}</strong><span>${kacis(k.ozet || '')}</span></a>
      </li>`).join('')}</ol>`;
  },
  // Mukavemet: teknik resim paftaları
  plan(d, ok) {
    return `<div class="duzen-plan">${d.konular.map((k, i) => `
      <a class="pafta ${ok(k) ? 'okundu' : ''}" href="${konuLink(d.id, k.id)}">
        <div class="pafta-ust"><span>§ ${ikiHane(i + 1)}</span><span>${ok(k) ? 'ONAYLANDI ✓' : 'PAFTA'}</span></div>
        <strong>${kacis(k.baslik)}</strong>
        <span>${kacis(k.ozet || '')}</span>
        <div class="pafta-alt"><span>ÖLÇEK 1:1</span><span>MUK-${ikiHane(i + 1)}</span></div>
      </a>`).join('')}</div>`;
  },
  // Termodinamik: sıcaklık skalası
  termometre(d, ok) {
    const n = d.konular.length;
    return `<div class="duzen-termo"><div class="termo-cubuk"><span class="termo-hazne"></span></div><ol>${d.konular.map((k, i) => {
      const t = Math.round(-20 + (i / Math.max(1, n - 1)) * 420);
      return `<li class="${ok(k) ? 'okundu' : ''}" style="--oran:${(i / Math.max(1, n - 1)).toFixed(2)}">
        <span class="termo-deger">${t} °C</span>
        <a href="${konuLink(d.id, k.id)}"><strong>${kacis(k.baslik)}</strong><span>${kacis(k.ozet || '')}</span></a></li>`;
    }).join('')}</ol></div>`;
  },
  // Akışkanlar: dalgalı bölümler
  akis(d, ok) {
    let sira = 0;
    return bolumle(d.konular).map(b => `
      <section class="akis-bolum">
        <h2 class="akis-baslik"><span>${kacis(b.ad)}</span></h2>
        <div class="akis-izgara">${b.konular.map(k => { sira++; return `
          <a class="akis-kart ${ok(k) ? 'okundu' : ''}" href="${konuLink(d.id, k.id)}">
            <span class="akis-no">Bölüm ${sira}</span><strong>${kacis(k.baslik)}</strong><span>${kacis(k.ozet || '')}</span>
          </a>`; }).join('')}</div>
      </section>`).join('');
  },
  // Makine elemanları: parça kataloğu
  katalog(d, ok) {
    let sira = 0;
    return bolumle(d.konular).map(b => `
      <section class="katalog-bolum">
        <h2 class="katalog-baslik">${ikon('civata', 'mini-ikon')} ${kacis(b.ad)}</h2>
        <div class="katalog">${b.konular.map(k => { sira++; return `
          <a class="katalog-satir ${ok(k) ? 'okundu' : ''}" href="${konuLink(d.id, k.id)}">
            <span class="parca-no">MKL-${ikiHane(sira)}</span>
            <span class="parca-ad"><strong>${kacis(k.baslik)}</strong><small>${kacis(k.ozet || '')}</small></span>
            <span class="parca-durum">${ok(k) ? 'Stokta ✓' : 'İncele'}</span>
          </a>`; }).join('')}</div>
      </section>`).join('');
  },
  // Malzeme: deney föyleri
  lab(d, ok) {
    let sira = 0;
    return bolumle(d.konular).map(b => `
      <section class="lab-bolum">
        <h2 class="lab-baslik"><span class="lab-etiket">${b.ad.includes('Tahribatsız') ? 'NDT' : b.ad.includes('Tahribatlı') ? 'DT' : 'INFO'}</span>${kacis(b.ad)}</h2>
        <div class="lab-izgara">${b.konular.map(k => { sira++; return `
          <a class="foy ${ok(k) ? 'okundu' : ''}" href="${konuLink(d.id, k.id)}">
            <div class="foy-ust"><span>DENEY ${ikiHane(sira)}</span><span class="tup"><i></i></span></div>
            <strong>${kacis(k.baslik)}</strong><span>${kacis(k.ozet || '')}</span>
            <span class="foy-durum">${ok(k) ? 'Tamamlandı' : 'Bekliyor'}</span>
          </a>`; }).join('')}</div>
      </section>`).join('');
  },
  // Isıtma: bina kesiti
  kat(d, ok) {
    const n = d.konular.length;
    return `<div class="duzen-bina"><div class="cati"><span>${ikon('radyator', 'mini-ikon')} ${kacis(d.ad)}</span></div>
      ${d.konular.slice().reverse().map((k, ri) => {
        const i = n - 1 - ri;
        return `<a class="bina-kat ${ok(k) ? 'okundu' : ''}" href="${konuLink(d.id, k.id)}">
          <span class="kat-no">${i === 0 ? 'Zemin' : i + '. kat'}</span>
          <span class="kat-ic"><strong>${kacis(k.baslik)}</strong><small>${kacis(k.ozet || '')}</small></span>
          <span class="kat-pencere"><i></i><i></i></span>
        </a>`;
      }).join('')}<div class="temel"></div></div>`;
  },
};

async function dersSayfasi(id) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  document.title = `${d.ad} · Ders Anlatımları`;
  if (d.duzen === 'seviye') return dilDersSayfasi(d);
  const ok = okunanlar();
  const okundu = k => ok.has(`${d.id}/${k.id}`);
  const kartlar = await kartlariGetir(d);
  const ciz = DUZENLER[d.duzen] || DUZENLER.yol;
  app.innerHTML = `
    ${dersBasligi(d, 'konular')}
    ${istatistikSeridi(d, kartlar.length)}
    <p class="ders-aciklama">${kacis(d.aciklama)} <span class="soluk">· ${kacis(d.donem || '')}</span></p>
    ${d.konular.length ? ciz(d, okundu) : '<p class="bos">Bu derse henüz konu eklenmedi.</p>'}`;
}

/* ================= dil dersleri ================= */

async function dilDersSayfasi(d) {
  const ok = okunanlar();
  const [kelimeler, kartlar] = await Promise.all([kelimeleriGetir(d), kartlariGetir(d)]);
  const ist = kutuIstatistik(d.id);
  const baslangic = d.konular.find(k => !/^[ab][12]-/.test(k.id));
  app.innerHTML = `
    ${dersBasligi(d, 'konular')}
    ${istatistikSeridi(d, kelimeler.length + kartlar.length)}
    ${baslangic ? `<a class="baslarken" href="${konuLink(d.id, baslangic.id)}">${ikon('kitap', 'mini-ikon')}<span><strong>${kacis(baslangic.baslik)}</strong><small>${kacis(baslangic.ozet || '')}</small></span><b>→</b></a>` : ''}
    <h2 class="grup-baslik">Seviyeler</h2>
    <ol class="merdiven">
      ${(d.seviyeler || []).map((s, i) => {
        const ks = d.konular.filter(k => k.id.startsWith(s.kod.toLowerCase() + '-'));
        const kb = ks.filter(k => ok.has(`${d.id}/${k.id}`)).length;
        const kel = kelimeler.filter(w => w.grup === s.kod);
        const ogr = kel.filter(w => (ist.kutular[kartAnahtari(w)] || {}).k >= 3).length;
        return `
        <li style="--sev:${kacis(s.renk)};--basamak:${i}">
          <a href="#/seviye/${kod(d.id)}/${kod(s.kod)}" class="basamak">
            <span class="seviye-kod">${kacis(s.kod)}</span>
            <span class="basamak-ic">
              <strong>${kacis(s.ad)}</strong>
              <small>${kacis(s.aciklama)}</small>
              <span class="basamak-ist">
                <span>📘 ${kb}/${ks.length} konu</span>
                <span>🔤 ${ogr}/${kel.length} kelime öğrenildi</span>
              </span>
              <span class="mini-cubuk"><i style="width:${kel.length ? Math.round(ogr / kel.length * 100) : 0}%"></i></span>
            </span>
            <b class="ok">→</b>
          </a>
        </li>`;
      }).join('')}
    </ol>`;
}

async function seviyeSayfasi(id, sevKod) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  const s = (d.seviyeler || []).find(x => x.kod === sevKod);
  if (!s) throw new Error('Seviye bulunamadı.');
  document.title = `${d.ad} ${s.kod} · Ders Anlatımları`;
  const ok = okunanlar();
  const kelimeler = (await kelimeleriGetir(d)).filter(w => w.grup === s.kod);
  const kartlar = await kartlariGetir(d);
  const ist = kutuIstatistik(d.id);
  const ks = d.konular.filter(k => k.id.startsWith(s.kod.toLowerCase() + '-'));
  const kategoriler = [];
  for (const w of kelimeler) {
    let c = kategoriler.find(x => x.ad === w.kategori);
    if (!c) kategoriler.push(c = { ad: w.kategori, n: 0, ogr: 0, ornek: [] });
    c.n++; if ((ist.kutular[kartAnahtari(w)] || {}).k >= 3) c.ogr++;
    if (c.ornek.length < 3) c.ornek.push(w.on);
  }
  const sevIndex = d.seviyeler.indexOf(s);
  const onceki = d.seviyeler[sevIndex - 1], sonraki = d.seviyeler[sevIndex + 1];
  app.innerHTML = `
    <section class="seviye-hero" style="--sev:${kacis(s.renk)}">
      <nav class="iz"><a href="#/">Ana sayfa</a> <span>›</span> <a href="#/ders/${kod(d.id)}">${kacis(d.ad)}</a> <span>›</span> ${kacis(s.kod)}</nav>
      <div class="seviye-hero-ic">
        <span class="dev-kod">${kacis(s.kod)}</span>
        <div>
          <h1>${kacis(d.ad)} ${kacis(s.kod)} <span>· ${kacis(s.ad)}</span></h1>
          <p>${kacis(s.aciklama)}</p>
          <small>Müfredat referansı: ${kacis(s.kaynak || '')}</small>
        </div>
      </div>
      <div class="seviye-eylem">
        <a class="dugme" href="#/kart/${kod(d.id)}?grup=${kod(s.kod)}">${ikon('kart', 'sekme-ikon')} ${s.kod} kelimelerini çalış</a>
        <a class="dugme ikincil" href="#/test/${kod(d.id)}?grup=${kod(s.kod)}">${ikon('test', 'sekme-ikon')} ${s.kod} kelime testi</a>
        <a class="dugme ikincil" href="#/kelime/${kod(d.id)}?seviye=${kod(s.kod)}">${ikon('ses', 'sekme-ikon')} Kelime listesi</a>
      </div>
    </section>

    <h2 class="grup-baslik">Dilbilgisi konuları</h2>
    <div class="dilbilgisi-izgara">
      ${ks.map((k, i) => {
        const kartN = kartlar.filter(c => c.grup === k.id).length;
        return `<div class="db-kart ${ok.has(`${d.id}/${k.id}`) ? 'okundu' : ''}">
          <span class="db-no">${s.kod}.${i + 1}</span>
          <a href="${konuLink(d.id, k.id)}"><strong>${kacis(k.baslik)}</strong><small>${kacis(k.ozet || '')}</small></a>
          ${kartN ? `<a class="db-alistirma" href="#/kart/${kod(d.id)}?konu=${kod(k.id)}">${ikon('kart', 'sekme-ikon')} ${kartN} alıştırma kartı</a>` : ''}
        </div>`;
      }).join('')}
    </div>

    <h2 class="grup-baslik">Kelime kategorileri <small class="soluk">· ${kelimeler.length} kelime</small></h2>
    <div class="kategori-izgara">
      ${kategoriler.map(c => `
        <div class="kategori-kart">
          <a class="kategori-ana" href="#/kelime/${kod(d.id)}?seviye=${kod(s.kod)}&kategori=${kod(c.ad)}">
            <strong>${kacis(c.ad)}</strong>
            <small>${c.ornek.map(kacis).join(' · ')}…</small>
            <span class="mini-cubuk"><i style="width:${Math.round(c.ogr / c.n * 100)}%"></i></span>
            <span class="kategori-sayi">${c.ogr}/${c.n} öğrenildi</span>
          </a>
          <a class="kategori-calis" href="#/kart/${kod(d.id)}?grup=${kod(s.kod)}&kategori=${kod(c.ad)}" title="Bu kategoriyi kartlarla çalış">${ikon('kart', 'sekme-ikon')}</a>
        </div>`).join('')}
    </div>

    <nav class="gezinti seviye-gezinti">
      ${onceki ? `<a href="#/seviye/${kod(d.id)}/${kod(onceki.kod)}">← ${kacis(onceki.kod)} ${kacis(onceki.ad)}</a>` : '<span></span>'}
      ${sonraki ? `<a class="sag" href="#/seviye/${kod(d.id)}/${kod(sonraki.kod)}">${kacis(sonraki.kod)} ${kacis(sonraki.ad)} →</a>` : ''}
    </nav>`;
}

/* ================= PDF ================= */

async function pdfListesi(id) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  document.title = `PDF'ler · ${d.ad}`;
  app.innerHTML = `
    ${dersBasligi(d, 'pdfler')}
    <ul class="pdf-listesi">
      ${d.pdfler.map((p, i) => `
        <li>
          <span class="pdf-ikon">PDF</span>
          <a href="#/ders/${kod(d.id)}/pdf/${i}">${kacis(p.baslik)}</a>
          ${p.boyut ? `<small class="soluk">${kacis(p.boyut)}</small>` : ''}
          <a class="indir" href="${dersYolu(d.id) + kacis(p.dosya)}" download title="İndir">⤓</a>
        </li>`).join('')}
    </ul>`;
}

async function pdfSayfasi(id, i) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  const p = d.pdfler[i];
  if (!p) throw new Error('PDF bulunamadı.');
  const yol = dersYolu(id) + p.dosya;
  document.title = `${p.baslik} · ${d.ad}`;
  app.innerHTML = `
    <nav class="iz"><a href="#/">Ana sayfa</a> <span>›</span> <a href="#/pdfler/${kod(id)}">${kacis(d.ad)}</a> <span>›</span> ${kacis(p.baslik)}</nav>
    <div class="pdf-ust">
      <h1>${kacis(p.baslik)}</h1>
      <span><a href="${kacis(yol)}" target="_blank" rel="noopener">Yeni sekmede aç</a> · <a href="${kacis(yol)}" download>İndir</a></span>
    </div>
    <iframe class="pdf-cerceve" src="${kacis(yol)}" title="${kacis(p.baslik)}"></iframe>`;
}

/* ================= konu sayfası ================= */

async function konuSayfasi(id, konuId) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  const sira = d.konular.findIndex(k => k.id === konuId);
  if (sira < 0) throw new Error(`"${konuId}" adlı konu bulunamadı.`);
  const k = d.konular[sira];
  const dosya = dersYolu(id) + k.dosya;
  const taban = dosya.slice(0, dosya.lastIndexOf('/') + 1);
  const md = await yukle(dosya, 'text');
  const anahtar = `${id}/${k.id}`;
  const ok = okunanlar();
  const onceki = d.konular[sira - 1], sonraki = d.konular[sira + 1];
  const kartN = (await kartlariGetir(d)).filter(c => c.grup === k.id).length;
  depoYaz('sonKonu', { ders: id, konu: k.id });
  document.title = `${k.baslik} · ${d.ad}`;
  const sev = d.seviyeler && d.seviyeler.find(s => k.id.startsWith(s.kod.toLowerCase() + '-'));

  app.innerHTML = `
    <nav class="iz"><a href="#/">Ana sayfa</a> <span>›</span> <a href="#/ders/${kod(id)}">${kacis(d.ad)}</a>
      ${sev ? `<span>›</span> <a href="#/seviye/${kod(id)}/${kod(sev.kod)}">${kacis(sev.kod)}</a>` : ''} <span>›</span> ${kacis(k.baslik)}</nav>
    <div class="konu-duzen">
      <aside class="yan">
        <details ${matchMedia('(max-width: 860px)').matches ? '' : 'open'}>
          <summary>${ikon(d.ikon, 'mini-ikon')} ${kacis(d.ad)}</summary>
          ${bolumle(d.konular).map(b => `
            ${b.ad ? `<p class="yan-bolum">${kacis(b.ad)}</p>` : ''}
            <ol>${b.konular.map(x => `<li class="${x.id === k.id ? 'aktif' : ''} ${ok.has(`${id}/${x.id}`) ? 'okundu' : ''}">
              <a href="${konuLink(id, x.id)}">${kacis(x.baslik)}</a></li>`).join('')}</ol>`).join('')}
        </details>
      </aside>
      <article class="icerik">
        <div class="konu-serit"><span>${ikon(d.ikon, 'mini-ikon')} ${kacis(d.ad)}</span><span>Konu ${sira + 1} / ${d.konular.length}</span></div>
        <div class="konu-araclar">
          ${k.pdf ? `<a href="${dersYolu(id) + kacis(k.pdf)}" target="_blank" rel="noopener">📄 ${kacis(k.pdfBaslik || 'Kaynak PDF')}</a>` : ''}
          ${kartN ? `<a href="#/kart/${kod(id)}?konu=${kod(k.id)}">🗂️ Bu konunun ${kartN} kartı</a>` : ''}
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
  formulleriCiz(document.getElementById('metin'));
}

/* ================= tekrar kartları (Leitner) ================= */

function telaffuzHTML(c) {
  if (!c.ipa && !c.okunus) return '';
  return `<span class="telaffuz">${c.okunus ? `<b>${kacis(c.okunus)}</b>` : ''}${c.ipa ? `<code>/${kacis(c.ipa)}/</code>` : ''}</span>`;
}

function onSecimUygula(id, sorgu) {
  if (sorgu.konu) depoYaz(`secim:${id}`, [sorgu.konu]);
  if (sorgu.grup) depoYaz(`secim:${id}`, [sorgu.grup]);
}

async function kartSayfasi(id, sorgu) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  document.title = `Tekrar kartları · ${d.ad}`;
  let { gruplar, havuz } = await gruplarVeHavuz(d);
  if (sorgu.kategori) havuz = havuz.filter(c => c.kategori === sorgu.kategori && (!sorgu.grup || c.grup === sorgu.grup));
  const kutuAnahtar = `kutular:${id}`;
  const seciciAnahtar = sorgu.kategori ? `secim-kat:${id}` : `secim:${id}`;
  if (!sorgu.kategori) onSecimUygula(id, sorgu);
  if (sorgu.kategori) { gruplar = gruplar.filter(g => havuz.some(c => c.grup === g.id)); depoYaz(seciciAnahtar, gruplar.map(g => g.id)); }

  if (!havuz.length) {
    app.innerHTML = `${dersBasligi(d, 'kartlar')}<p class="bos">Bu seçim için kart yok.</p>`;
    return;
  }

  const kutular = () => depoOku(kutuAnahtar, {});
  const sayac = g => `${havuz.filter(c => c.grup === g).length} kart`;
  const yon = depoOku(`yon:${id}`, 'on');

  app.innerHTML = `
    ${dersBasligi(d, 'kartlar')}
    <div class="calisma">
      ${sorgu.kategori ? `<div class="filtre-bandi">Kategori: <strong>${kacis(sorgu.kategori)}</strong> ${sorgu.grup ? `(${kacis(sorgu.grup)})` : ''} · <a href="#/kart/${kod(id)}">Bütün kartlar</a></div>` : ''}
      <div id="kurulum">
        ${grupSecici(d.kelimeler ? 'Neyi çalışmak istiyorsun?' : 'Konu seç', gruplar, sayac, seciciAnahtar)}
        <div class="kurulum-alt">
          ${d.kelimeler ? `<label class="secenek-satir">Kelime kartı yönü:
            <select id="yon"><option value="on" ${yon === 'on' ? 'selected' : ''}>${kacis(d.dilAdi)} → Türkçe</option>
            <option value="arka" ${yon === 'arka' ? 'selected' : ''}>Türkçe → ${kacis(d.dilAdi)}</option></select></label>` : ''}
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
      const b = k[kartAnahtari(c)]; say[b ? b.k : 0]++;
      if (!b || b.t <= simdi) vadesi++;
    }
    app.querySelector('#kutu-ozet').innerHTML = `
      <div><strong>${liste.length}</strong> kart seçili · <strong>${vadesi}</strong> tanesi şimdi çalışılabilir</div>
      <div class="kutu-cubuk">${say.map((n, i) => n ? `<span class="kutu-${i}" style="flex:${n}" title="${i ? i + '. kutu' : 'Yeni'}: ${n}">${n}</span>` : '').join('')}</div>
      <small class="soluk">Yeni → 1 → 2 → … → 5. kutu. Bildiğin kart bir sonraki kutuya geçer (1, 2, 4, 8, 16 gün sonra tekrar sorulur); bilemediğin kart 1. kutuya döner.</small>`;
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
          <p class="buyuk-puan">${bildi} / ${liste.length}</p>
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
    const sesDugme = '<button class="ses" data-ses="1" title="Dinle">🔊</button>';
    kok.innerHTML = `
      <div class="oturum-ust"><span>${i + 1} / ${liste.length}</span><span class="soluk">${kacis(c.kategori || c.grup)}</span><button class="baglanti" id="cik">Bitir</button></div>
      <div class="ilerleme genis"><i style="width:${(i / liste.length) * 100}%"></i></div>
      <div class="flash ${cevrik ? 'cevrik' : ''}" id="flash" tabindex="0">
        <div class="yuz on"><div class="flash-metin">${mdCiz(on, '', true)}</div>
          ${dilliMi && !ters ? telaffuzHTML(c) + sesDugme : ''}
          <small class="soluk">Cevabı görmek için dokun · Boşluk</small></div>
        <div class="yuz arka"><div class="flash-metin">${mdCiz(arka, '', true)}</div>
          ${dilliMi && ters ? telaffuzHTML(c) + sesDugme : ''}
          ${c.tur && c.tur !== 'kart' ? `<small class="etiket">${kacis(c.tur)}</small>` : ''}</div>
      </div>
      <div class="flash-dugmeler" ${cevrik ? '' : 'hidden'}>
        <button class="dugme kirmizi" id="bilmedim">✗ Bilemedim <kbd>1</kbd></button>
        <button class="dugme yesil" id="bildim">✓ Bildim <kbd>2</kbd></button>
      </div>`;
    formulleriCiz(kok.querySelector('#flash'));
    kok.querySelector('#flash').onclick = e => {
      if (e.target.closest('[data-ses]')) { e.stopPropagation(); seslendir(c.on, d.dil); return; }
      cevir();
    };
    kok.querySelector('#cik').onclick = () => { i = liste.length; ciz(); };
    kok.querySelector('#bilmedim').onclick = () => cevapla(false);
    kok.querySelector('#bildim').onclick = () => cevapla(true);
    if (dilliMi && !ters) seslendir(c.on, d.dil);
  }
  function cevir() {
    if (cevrik) return;
    cevrik = true;
    kok.querySelector('#flash').classList.add('cevrik');
    kok.querySelector('.flash-dugmeler').hidden = false;
    const c = liste[i];
    if (c.tur !== 'kart' && d.dil && yon === 'arka') seslendir(c.on, d.dil);
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

async function testSayfasi(id, sorgu) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  document.title = `Test · ${d.ad}`;
  const { gruplar, havuz } = await gruplarVeHavuz(d);
  const seciciAnahtar = `secim:${id}`;
  onSecimUygula(id, sorgu);
  if (havuz.length < 4) {
    app.innerHTML = `${dersBasligi(d, 'test')}<p class="bos">Test için yeterli kart yok.</p>`;
    return;
  }
  const sayac = g => `${havuz.filter(c => c.grup === g).length} soru`;
  app.innerHTML = `
    ${dersBasligi(d, 'test')}
    <div class="calisma">
      <div id="kurulum">
        ${grupSecici(d.kelimeler ? 'Test kapsamı' : 'Konu seç', gruplar, sayac, seciciAnahtar)}
        <div class="kurulum-alt">
          ${d.kelimeler ? `<label class="secenek-satir">Soru tipi:
            <select id="yon"><option value="on">${kacis(d.dilAdi)} kelime → Türkçe anlamı</option><option value="arka">Türkçe → ${kacis(d.dilAdi)} karşılığı</option></select></label>` : ''}
          <label class="secenek-satir">Soru sayısı:
            <select id="adet"><option>10</option><option selected>20</option><option>30</option></select></label>
          <button id="basla" class="dugme">Testi başlat</button>
        </div>
        <p class="soluk kucuk-yazi">Her soruda 4 şık var. Yanlış şıklar aynı konudaki veya seviyedeki diğer kartlardan seçilir.</p>
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
      const benzer = x => x !== c && (x.tur === 'kart') === (c.tur === 'kart');
      let kaynak = secili.filter(x => benzer(x) && x.grup === c.grup && (!c.kategori || x.kategori === c.kategori));
      if (kaynak.length < 3) kaynak = secili.filter(x => benzer(x) && x.grup === c.grup);
      if (kaynak.length < 3) kaynak = secili.filter(benzer);
      if (kaynak.length < 3) kaynak = secili.filter(x => x !== c);
      const yanlislar = [];
      for (const x of karistir(kaynak)) {
        const v = ters ? x.on : x.arka;
        if (v !== dogru && !yanlislar.includes(v)) yanlislar.push(v);
        if (yanlislar.length === 3) break;
      }
      return { c, soru, dogru, ters, siklar: karistir([dogru, ...yanlislar]) };
    });
    testCoz(d, sorular, () => testSayfasi(id, {}));
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
    const dilli = s.c.tur !== 'kart' && d.dil;
    kok.innerHTML = `
      <div class="oturum-ust"><span>Soru ${i + 1} / ${sorular.length}</span><span class="soluk">Puan: ${puan}</span></div>
      <div class="ilerleme genis"><i style="width:${(i / sorular.length) * 100}%"></i></div>
      <div class="soru">${mdCiz(s.soru, '', true)} ${dilli && !s.ters ? `<button class="ses-kucuk" id="soru-ses" title="Dinle">🔊</button>${telaffuzHTML(s.c)}` : ''}</div>
      <div class="siklar">${s.siklar.map((x, j) => `<button class="sik" data-j="${j}"><b>${'ABCD'[j]}</b> <span>${mdCiz(x, '', true)}</span></button>`).join('')}</div>
      <div class="test-alt" hidden><button class="dugme" id="sonraki">Sonraki →</button></div>`;
    formulleriCiz(kok);
    const sb = kok.querySelector('#soru-ses');
    if (sb) sb.onclick = () => seslendir(s.c.on, d.dil);
    kok.querySelectorAll('.sik').forEach(b => b.onclick = () => {
      if (kok.querySelector('.sik.dogru')) return;
      const secilen = s.siklar[b.dataset.j];
      kok.querySelectorAll('.sik').forEach(x => { if (s.siklar[x.dataset.j] === s.dogru) x.classList.add('dogru'); x.disabled = true; });
      if (secilen === s.dogru) puan++; else { b.classList.add('yanlis'); yanlis.push(s); }
      if (dilli && s.ters) seslendir(s.c.on, d.dil);
      kok.querySelector('.test-alt').hidden = false;
      kok.querySelector('#sonraki').focus();
    });
    kok.querySelector('#sonraki').onclick = () => { i++; ciz(); };
  }
  ciz();
}

/* ================= kelime havuzu ================= */

async function kelimeSayfasi(id, sorgu) {
  const d = await dersBilgi(id);
  dersTemasi(d);
  if (!d.kelimeler) throw new Error('Bu derste kelime havuzu yok.');
  document.title = `Kelime havuzu · ${d.ad}`;
  const kelimeler = await kelimeleriGetir(d);
  const kutular = depoOku(`kutular:${id}`, {});
  const seviyeler = d.kelimeler.map(s => s.seviye);
  let seviye = sorgu.seviye || '', kategori = sorgu.kategori || '', q = '';

  app.innerHTML = `
    ${dersBasligi(d, 'kelimeler')}
    <div class="kelime-arac">
      <input id="kelime-ara" type="search" placeholder="${kacis(d.dilAdi)} veya Türkçe ara…">
      <div class="seviye-filtre">
        <button data-s="">Tümü (${kelimeler.length})</button>
        ${seviyeler.map(s => `<button data-s="${kacis(s)}">${kacis(s)} (${kelimeler.filter(k => k.grup === s).length})</button>`).join('')}
      </div>
      <label class="secenek-satir">Kategori: <select id="kategori"></select></label>
      <label class="secenek-satir hiz-ayar">Okuma hızı: <input type="range" id="hiz" min="0.5" max="1.2" step="0.1" value="${depoOku('sesHizi', 0.9)}"></label>
    </div>
    <div id="kelime-tablo"></div>`;

  const tablo = app.querySelector('#kelime-tablo');
  const katSec = app.querySelector('#kategori');
  function kategorileriDoldur() {
    const kats = [...new Set(kelimeler.filter(k => !seviye || k.grup === seviye).map(k => k.kategori))];
    if (kategori && !kats.includes(kategori)) kategori = '';
    katSec.innerHTML = `<option value="">Hepsi</option>` + kats.map(c => `<option ${c === kategori ? 'selected' : ''}>${kacis(c)}</option>`).join('');
  }
  function ciz() {
    app.querySelectorAll('.seviye-filtre button').forEach(b => b.classList.toggle('secili', b.dataset.s === seviye));
    const qq = kucuk(q.trim());
    const liste = kelimeler.filter(k => (!seviye || k.grup === seviye) && (!kategori || k.kategori === kategori)
      && (!qq || kucuk(k.on).includes(qq) || kucuk(k.arka).includes(qq)));
    tablo.innerHTML = `
      <div class="tablo-ust"><p class="soluk">${liste.length} kelime</p>
        ${kategori || seviye ? `<a class="dugme ikincil" href="#/kart/${kod(id)}?${seviye ? `grup=${kod(seviye)}&` : ''}${kategori ? `kategori=${kod(kategori)}` : ''}">${ikon('kart', 'sekme-ikon')} Bu listeyi kartlarla çalış</a>` : ''}
      </div>
      <div class="tablo-kap"><table class="kelime-tablosu">
        <thead><tr><th>${kacis(d.dilAdi)}</th><th>Okunuş</th><th>Türkçe</th><th>Kategori</th><th>Seviye</th><th></th></tr></thead>
        <tbody>${liste.slice(0, 800).map(k => {
          const b = kutular[kartAnahtari(k)];
          return `<tr>
            <td><button class="ses-kucuk" data-k="${kacis(k.on)}" title="Dinle">🔊</button> <strong>${kacis(k.on)}</strong></td>
            <td class="okunus-hucre">${k.okunus ? `<b>${kacis(k.okunus)}</b>` : ''}${k.ipa ? `<code>/${kacis(k.ipa)}/</code>` : ''}</td>
            <td>${kacis(k.arka)}<small class="tur-etiket">${kacis(k.tur)}</small></td>
            <td class="soluk">${kacis(k.kategori)}</td>
            <td><span class="rozet">${kacis(k.grup)}</span></td>
            <td>${b ? `<span class="kutu-rozet kutu-${b.k}" title="${b.k}. kutu">${b.k}</span>` : ''}</td></tr>`;
        }).join('')}</tbody>
      </table></div>
      ${liste.length > 800 ? '<p class="soluk">İlk 800 kelime gösteriliyor; filtre veya aramayla daralt.</p>' : ''}`;
    tablo.querySelectorAll('.ses-kucuk').forEach(b => b.onclick = () => seslendir(b.dataset.k, d.dil, depoOku('sesHizi', 0.9)));
  }
  app.querySelector('#kelime-ara').addEventListener('input', e => { q = e.target.value; ciz(); });
  app.querySelectorAll('.seviye-filtre button').forEach(b => b.addEventListener('click', () => { seviye = b.dataset.s; kategorileriDoldur(); ciz(); }));
  katSec.addEventListener('change', () => { kategori = katSec.value; ciz(); });
  app.querySelector('#hiz').addEventListener('change', e => depoYaz('sesHizi', Number(e.target.value)));
  kategorileriDoldur(); ciz();
}

/* ================= arama ================= */

async function aramaSayfasi(sorgu) {
  dersTemasi(null);
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
    if (d.kelimeler) {
      for (const w of await kelimeleriGetir(d)) {
        if (kucuk(w.on) === q || kucuk(w.on).startsWith(q + ' ') || kucuk(w.on).endsWith(' ' + q)) {
          sonuc.push({ d, kelime: w, puan: -1 });
        }
      }
    }
  }
  sonuc.sort((a, b) => a.puan - b.puan);
  const desen = new RegExp(kacis(sorgu.trim()).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const vurgula = s => kacis(s).replace(desen, m => `<mark>${m}</mark>`);
  app.innerHTML = `
    <h1 class="arama-bas">“${kacis(sorgu)}” için ${sonuc.length} sonuç</h1>
    <ul class="arama-sonuc">
      ${sonuc.slice(0, 80).map(s => s.kelime ? `
        <li><a href="#/kelime/${kod(s.d.id)}?seviye=${kod(s.kelime.grup)}" style="--renk:${kacis(s.d.renk)}">
          <small>${kacis(s.d.ad)} · kelime · ${kacis(s.kelime.grup)}</small><strong>${kacis(s.kelime.on)} — ${kacis(s.kelime.arka)}</strong>
          <span>${kacis(s.kelime.okunus)} /${kacis(s.kelime.ipa)}/</span></a></li>` : `
        <li><a href="${konuLink(s.d.id, s.k.id)}" style="--renk:${kacis(s.d.renk)}">
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
    else if (p[0] === 'seviye' && p[2]) await seviyeSayfasi(p[1], p[2]);
    else if (p[0] === 'kart' && p[1]) await kartSayfasi(p[1], sorgu);
    else if (p[0] === 'test' && p[1]) await testSayfasi(p[1], sorgu);
    else if (p[0] === 'kelime' && p[1]) await kelimeSayfasi(p[1], sorgu);
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
