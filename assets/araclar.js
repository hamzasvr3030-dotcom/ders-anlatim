'use strict';
/* Konu sayfalarına gömülen etkileşimli şekiller: <div data-arac="mohr"></div> */

const ARAC_RENK = ['var(--ders)', '#e8590c', '#2f9e44', '#7048e8', '#1c7ed6'];
const yuvarla = (x, n = 3) => Number.isFinite(x) ? Number(x.toPrecision(n)).toLocaleString('tr-TR') : '—';

function grafikSVG({ g = 560, y = 300, xmin, xmax, ymin, ymax, seriler = [], noktalar = [], xEt = '', yEt = '', logX = false, logY = false, ekstra = '' }) {
  const ml = 58, mr = 14, mt = 14, mb = 42, W = g - ml - mr, H = y - mt - mb;
  const fx = v => logX ? Math.log10(v) : v, fy = v => logY ? Math.log10(v) : v;
  const X = v => ml + (fx(v) - fx(xmin)) / (fx(xmax) - fx(xmin)) * W;
  const Y = v => mt + H - (fy(v) - fy(ymin)) / (fy(ymax) - fy(ymin)) * H;
  const tikler = (a, b, log) => {
    if (log) { const t = []; for (let e = Math.ceil(Math.log10(a)); e <= Math.floor(Math.log10(b)); e++) t.push(10 ** e); return t; }
    const ad = Math.pow(10, Math.floor(Math.log10((b - a) / 5))); const k = [1, 2, 5, 10].find(m => (b - a) / (ad * m) <= 6) * ad;
    const t = []; for (let v = Math.ceil(a / k) * k; v <= b + 1e-9; v += k) t.push(+v.toFixed(10)); return t;
  };
  const etiket = v => Math.abs(v) >= 1e4 || (Math.abs(v) < 1e-2 && v) ? v.toExponential(0).replace('e+', 'e') : yuvarla(v, 3);
  let s = `<svg class="arac-grafik" viewBox="0 0 ${g} ${y}" role="img">`;
  for (const t of tikler(xmin, xmax, logX)) s += `<line x1="${X(t)}" x2="${X(t)}" y1="${mt}" y2="${mt + H}" class="izgara"/><text x="${X(t)}" y="${mt + H + 16}" text-anchor="middle">${etiket(t)}</text>`;
  for (const t of tikler(ymin, ymax, logY)) s += `<line x1="${ml}" x2="${ml + W}" y1="${Y(t)}" y2="${Y(t)}" class="izgara"/><text x="${ml - 6}" y="${Y(t) + 4}" text-anchor="end">${etiket(t)}</text>`;
  if (!logY && ymin < 0 && ymax > 0) s += `<line x1="${ml}" x2="${ml + W}" y1="${Y(0)}" y2="${Y(0)}" class="eksen"/>`;
  s += `<rect x="${ml}" y="${mt}" width="${W}" height="${H}" class="cerceve"/>`;
  seriler.forEach((sr, i) => {
    const p = sr.noktalar.filter(([a, b]) => Number.isFinite(a) && Number.isFinite(b)).map(([a, b]) => `${X(a).toFixed(1)},${Y(Math.min(Math.max(b, logY ? ymin : -1e12), 1e12)).toFixed(1)}`).join(' ');
    s += `<polyline points="${p}" fill="none" stroke="${sr.renk || ARAC_RENK[i % 5]}" stroke-width="${sr.kalin || 2.2}" ${sr.kesik ? 'stroke-dasharray="6 4"' : ''}/>`;
  });
  for (const n of noktalar) s += `<circle cx="${X(n.x)}" cy="${Y(n.y)}" r="5" fill="${n.renk || 'var(--ders)'}" stroke="var(--yuzey)" stroke-width="2"/>${n.ad ? `<text x="${X(n.x) + 8}" y="${Y(n.y) - 8}" class="nokta-ad">${n.ad}</text>` : ''}`;
  s += ekstra ? ekstra(X, Y) : '';
  s += `<text x="${ml + W / 2}" y="${y - 6}" text-anchor="middle" class="eksen-ad">${xEt}</text>`;
  s += `<text transform="translate(14 ${mt + H / 2}) rotate(-90)" text-anchor="middle" class="eksen-ad">${yEt}</text></svg>`;
  const lejant = seriler.filter(sr => sr.ad).map((sr, i) => `<span><i style="background:${sr.renk || ARAC_RENK[i % 5]}"></i>${sr.ad}</span>`).join('');
  return s + (lejant ? `<div class="lejant">${lejant}</div>` : '');
}

function aracKabuk(el, baslik, alanlar, ciz) {
  el.classList.add('arac');
  el.innerHTML = `<div class="arac-bas"><span class="arac-rozet">Etkileşimli şekil</span><strong>${baslik}</strong></div>
    <div class="arac-girdiler">${alanlar.map(a => a.secenek
      ? `<label>${a.ad}<select data-k="${a.k}">${a.secenek.map(([v, t]) => `<option value="${v}" ${v === a.v ? 'selected' : ''}>${t}</option>`).join('')}</select></label>`
      : `<label>${a.ad}<input type="number" data-k="${a.k}" value="${a.v}" step="${a.adim || 'any'}" ${a.min !== undefined ? `min="${a.min}"` : ''}></label>`).join('')}</div>
    <div class="arac-cikti"></div>`;
  const oku = () => Object.fromEntries([...el.querySelectorAll('[data-k]')].map(x => [x.dataset.k, x.tagName === 'SELECT' ? x.value : parseFloat(String(x.value).replace(',', '.'))]));
  const yenile = () => { try { el.querySelector('.arac-cikti').innerHTML = ciz(oku()); } catch (e) { el.querySelector('.arac-cikti').innerHTML = `<p class="soluk">Geçersiz değer: ${e.message}</p>`; } };
  el.addEventListener('input', yenile);
  yenile();
}
const sonucSatiri = ogeler => `<div class="arac-sonuc">${ogeler.map(([a, b]) => `<div><small>${a}</small><b>${b}</b></div>`).join('')}</div>`;

/* --- sayısal yardımcılar --- */
function ikiyeBol(f, a, b) { let fa = f(a); for (let i = 0; i < 100; i++) { const m = (a + b) / 2, fm = f(m); if ((fm > 0) === (fa > 0)) { a = m; fa = fm; } else b = m; } return (a + b) / 2; }
function besselJ(n, x) { let t = 0; for (let k = 0; k < 40; k++) { let f = 1; for (let i = 2; i <= k; i++) f *= i; let g = 1; for (let i = 2; i <= k + n; i++) g *= i; t += (k % 2 ? -1 : 1) * Math.pow(x / 2, 2 * k + n) / (f * g); } return t; }
function tekTerim(geo, Bi) {
  if (geo === 'levha') { const l = ikiyeBol(x => x * Math.tan(x) - Bi, 1e-9, Math.PI / 2 - 1e-9); return { l, A: 4 * Math.sin(l) / (2 * l + Math.sin(2 * l)) }; }
  if (geo === 'silindir') { const l = ikiyeBol(x => x * besselJ(1, x) / besselJ(0, x) - Bi, 1e-9, 2.4048 - 1e-6); return { l, A: 2 * besselJ(1, l) / (l * (besselJ(0, l) ** 2 + besselJ(1, l) ** 2)) }; }
  const l = ikiyeBol(x => 1 - x / Math.tan(x) - Bi, 1e-6, Math.PI - 1e-6); return { l, A: 4 * (Math.sin(l) - l * Math.cos(l)) / (2 * l - Math.sin(2 * l)) };
}
function colebrook(Re, eD) {
  if (Re < 2300) return 64 / Re;
  let f = 0.02; for (let i = 0; i < 60; i++) f = Math.pow(-2 * Math.log10(eD / 3.7 + 2.51 / (Re * Math.sqrt(f))), -2); return f;
}
const aralik = (a, b, n, log = false) => Array.from({ length: n + 1 }, (_, i) => log ? 10 ** (Math.log10(a) + (Math.log10(b) - Math.log10(a)) * i / n) : a + (b - a) * i / n);

const ARACLAR = {
  mohr(el) {
    aracKabuk(el, 'Mohr dairesi', [
      { ad: 'σx (MPa)', k: 'sx', v: 80 }, { ad: 'σy (MPa)', k: 'sy', v: -40 }, { ad: 'τxy (MPa)', k: 'txy', v: 25 }], p => {
      const C = (p.sx + p.sy) / 2, R = Math.hypot((p.sx - p.sy) / 2, p.txy);
      const s1 = C + R, s2 = C - R, tp = 0.5 * Math.atan2(2 * p.txy, p.sx - p.sy) * 180 / Math.PI;
      const pad = Math.max(R, 1) * 0.35;
      let xmin = Math.min(s2, 0) - pad, xmax = Math.max(s1, 0) + pad;
      const oran = (340 - 56) / (560 - 72);              // eşit ölçek: yükseklik/genişlik
      let yy = (xmax - xmin) * oran / 2;
      if (yy < R + pad) { const ek = ((R + pad) / oran * 2 - (xmax - xmin)) / 2; xmin -= ek; xmax += ek; yy = R + pad; }
      const yr = yy * 1.6;
      const daire = aralik(0, 2 * Math.PI, 120).map(a => [C + R * Math.cos(a), R * Math.sin(a)]);
      return grafikSVG({ g: 560, y: 340, xmin, xmax, ymin: -yy, ymax: yy, xEt: 'σ (MPa)', yEt: 'τ (MPa)',
        seriler: [{ noktalar: daire }, { noktalar: [[p.sx, p.txy], [p.sy, -p.txy]], renk: '#868e96', kesik: true, kalin: 1.5 }],
        noktalar: [{ x: p.sx, y: p.txy, ad: 'X', renk: '#e8590c' }, { x: p.sy, y: -p.txy, ad: 'Y', renk: '#e8590c' },
          { x: s1, y: 0, ad: 'σ₁' }, { x: s2, y: 0, ad: 'σ₂' }, { x: C, y: R, ad: 'τmax', renk: '#2f9e44' }],
        ekstra: (X, Y) => `<line x1="${X(xmin)}" x2="${X(xmax)}" y1="${Y(0)}" y2="${Y(0)}" class="eksen"/>${xmin < 0 && xmax > 0 ? `<line x1="${X(0)}" x2="${X(0)}" y1="${Y(Math.max(yy, yr / 1.6))}" y2="${Y(-Math.max(yy, yr / 1.6))}" class="eksen"/>` : ''}` })
        + sonucSatiri([['Merkez C', yuvarla(C) + ' MPa'], ['Yarıçap R = τmax', yuvarla(R) + ' MPa'], ['σ₁', yuvarla(s1) + ' MPa'], ['σ₂', yuvarla(s2) + ' MPa'], ['Asal açı θp', yuvarla(tp) + '°']]);
    });
  },
  kiris(el) {
    aracKabuk(el, 'Basit kirişte kesme kuvveti ve eğilme momenti', [
      { ad: 'Açıklık L (m)', k: 'L', v: 8, min: 0.1 }, { ad: 'Tekil yük P (kN)', k: 'P', v: 100 }, { ad: 'P\'nin yeri a (m)', k: 'a', v: 4 }, { ad: 'Yayılı yük q (kN/m)', k: 'q', v: 10 }], p => {
      if (p.a < 0 || p.a > p.L) throw new Error('a, 0 ile L arasında olmalı');
      const RB = (p.P * p.a + p.q * p.L * p.L / 2) / p.L, RA = p.P + p.q * p.L - RB;
      const xs = aralik(0, p.L, 400);
      const T = x => RA - p.q * x - (x > p.a ? p.P : 0), M = x => RA * x - p.q * x * x / 2 - (x > p.a ? p.P * (x - p.a) : 0);
      const Tn = xs.flatMap(x => Math.abs(x - p.a) < p.L / 400 ? [[x, RA - p.q * x], [x, RA - p.q * x - p.P]] : [[x, T(x)]]);
      const Mn = xs.map(x => [x, M(x)]); const Mmax = Math.max(...Mn.map(m => Math.abs(m[1]))), xm = Mn.find(m => Math.abs(m[1]) === Mmax)[0];
      const Tmax = Math.max(Math.abs(RA), Math.abs(RB)) * 1.15 || 1;
      return `<div class="arac-ikili">${grafikSVG({ g: 520, y: 240, xmin: 0, xmax: p.L, ymin: -Tmax, ymax: Tmax, xEt: 'z (m)', yEt: 'T (kN)', seriler: [{ noktalar: Tn }] })}
        ${grafikSVG({ g: 520, y: 240, xmin: 0, xmax: p.L, ymin: Math.min(0, ...Mn.map(m => m[1])) * 1.1, ymax: Math.max(1, Mmax * 1.15), xEt: 'z (m)', yEt: 'M (kN·m)', seriler: [{ noktalar: Mn, renk: '#e8590c' }], noktalar: [{ x: xm, y: M(xm), ad: 'Mmax' }] })}</div>`
        + sonucSatiri([['R_A', yuvarla(RA) + ' kN'], ['R_B', yuvarla(RB) + ' kN'], ['M_max', yuvarla(Mmax) + ' kN·m'], ['M_max yeri', yuvarla(xm) + ' m']]);
    });
  },
  kanat(el) {
    aracKabuk(el, 'İğne kanatta sıcaklık dağılımı', [
      { ad: 'h (W/m²K)', k: 'h', v: 60 }, { ad: 'k (W/mK)', k: 'k', v: 180 }, { ad: 'Çap D (mm)', k: 'D', v: 5 }, { ad: 'Boy L (mm)', k: 'L', v: 80 },
      { ad: 'Dip T_d (°C)', k: 'Td', v: 100 }, { ad: 'T∞ (°C)', k: 'Ti', v: 20 }], p => {
      const D = p.D / 1000, L = p.L / 1000, P = Math.PI * D, A = Math.PI * D * D / 4, m = Math.sqrt(p.h * P / (p.k * A)), th = p.Td - p.Ti, M = Math.sqrt(p.h * P * p.k * A) * th, hm = p.h / (m * p.k);
      const xs = aralik(0, L, 120);
      const uzun = xs.map(x => [x * 1000, p.Ti + th * Math.exp(-m * x)]);
      const yal = xs.map(x => [x * 1000, p.Ti + th * Math.cosh(m * (L - x)) / Math.cosh(m * L)]);
      const tas = xs.map(x => [x * 1000, p.Ti + th * (Math.cosh(m * (L - x)) + hm * Math.sinh(m * (L - x))) / (Math.cosh(m * L) + hm * Math.sinh(m * L))]);
      const Qy = M * Math.tanh(m * L), Qt = M * (Math.sinh(m * L) + hm * Math.cosh(m * L)) / (Math.cosh(m * L) + hm * Math.sinh(m * L));
      return grafikSVG({ xmin: 0, xmax: p.L, ymin: Math.min(p.Ti, p.Td) - 2, ymax: Math.max(p.Ti, p.Td) + 2, xEt: 'x (mm)', yEt: 'T (°C)',
        seriler: [{ noktalar: uzun, ad: 'Sonsuz uzun' }, { noktalar: yal, ad: 'Ucu yalıtılmış', renk: '#e8590c' }, { noktalar: tas, ad: 'Uçta taşınım', renk: '#2f9e44', kesik: true }] })
        + sonucSatiri([['m', yuvarla(m) + ' 1/m'], ['mL', yuvarla(m * L)], ['Q (uzun)', yuvarla(M) + ' W'], ['Q (yalıtılmış uç)', yuvarla(Qy) + ' W'], ['Q (uçta taşınım)', yuvarla(Qt) + ' W'], ['Verim η = tanh(mL)/mL', '%' + yuvarla(100 * Math.tanh(m * L) / (m * L))]]);
    });
  },
  heisler(el) {
    aracKabuk(el, 'Tek terimli çözüm (Heisler diyagramı yerine)', [
      { ad: 'Geometri', k: 'geo', v: 'levha', secenek: [['levha', 'Düzlem levha'], ['silindir', 'Uzun silindir'], ['kure', 'Küre']] },
      { ad: 'Bi = hL/k (veya hr₀/k)', k: 'Bi', v: 0.5, min: 0.001 }, { ad: 'Fo = αt/L²', k: 'Fo', v: 2, min: 0 }, { ad: 'Konum x/L (veya r/r₀)', k: 'x', v: 1, min: 0 }], p => {
      if (!(p.Bi > 0)) throw new Error('Bi > 0 olmalı');
      const { l, A } = tekTerim(p.geo, p.Bi);
      const t0 = Fo => A * Math.exp(-l * l * Fo);
      const konum = p.geo === 'levha' ? Math.cos(l * p.x) : p.geo === 'silindir' ? besselJ(0, l * p.x) : (p.x ? Math.sin(l * p.x) / (l * p.x) : 1);
      const Qq = p.geo === 'levha' ? 1 - t0(p.Fo) * Math.sin(l) / l : p.geo === 'silindir' ? 1 - 2 * t0(p.Fo) * besselJ(1, l) / l : 1 - 3 * t0(p.Fo) * (Math.sin(l) - l * Math.cos(l)) / l ** 3;
      const egri = aralik(0.2, Math.max(4, p.Fo * 1.3), 120).map(F => [F, t0(F)]);
      return grafikSVG({ xmin: 0.2, xmax: Math.max(4, p.Fo * 1.3), ymin: 0, ymax: 1.05, xEt: 'Fo', yEt: 'θ₀ = (T₀−T∞)/(Tᵢ−T∞)', seriler: [{ noktalar: egri, ad: `Merkez, Bi = ${yuvarla(p.Bi)}` }],
        noktalar: p.Fo >= 0.2 ? [{ x: p.Fo, y: t0(p.Fo), ad: 'θ₀' }] : [] })
        + sonucSatiri([['λ₁', yuvarla(l, 4)], ['A₁', yuvarla(A, 4)], ['Merkez θ₀', yuvarla(t0(p.Fo))], ['Konumda θ', yuvarla(t0(p.Fo) * konum)], ['Q/Q_max', yuvarla(Qq)]])
        + (p.Fo < 0.2 ? '<p class="soluk">Fo &lt; 0,2: tek terim yeterince hassas değil; diyagram kullan.</p>' : '');
    });
  },
  moody(el) {
    aracKabuk(el, 'Moody diyagramı ve sürtünme faktörü', [
      { ad: 'Reynolds Re', k: 'Re', v: 99600, min: 100 }, { ad: 'Bağıl pürüzlülük ε/D', k: 'eD', v: 0.0001, min: 0 },
      { ad: 'Boy L (m)', k: 'L', v: 100 }, { ad: 'Çap D (m)', k: 'D', v: 0.05 }, { ad: 'Hız V (m/s)', k: 'V', v: 2 }], p => {
      const f = colebrook(p.Re, p.eD);
      const seri = [0, 1e-4, 1e-3, 1e-2, 0.05].map((e, i) => ({ ad: `ε/D = ${e || 0}`, noktalar: aralik(4000, 1e8, 140, true).map(R => [R, colebrook(R, e)]), renk: ARAC_RENK[i], kalin: 1.6 }));
      seri.unshift({ ad: 'Laminer 64/Re', noktalar: aralik(600, 2300, 30, true).map(R => [R, 64 / R]), renk: '#868e96', kalin: 1.6 });
      const hL = f * p.L / p.D * p.V * p.V / (2 * 9.81);
      return grafikSVG({ g: 600, y: 330, xmin: 600, xmax: 1e8, ymin: 0.006, ymax: 0.11, logX: true, logY: true, xEt: 'Re', yEt: 'f (Darcy)', seriler: seri, noktalar: [{ x: Math.min(Math.max(p.Re, 600), 1e8), y: f, ad: 'f', renk: '#e8590c' }] })
        + sonucSatiri([['Rejim', p.Re < 2300 ? 'Laminer' : p.Re < 4000 ? 'Geçiş' : 'Türbülanslı'], ['f', yuvarla(f, 4)], ['Yük kaybı h_L', yuvarla(hL) + ' m'], ['ΔP (su)', yuvarla(hL * 9.81) + ' kPa']]);
    });
  },
};

function araclariKur(kok) {
  if (!kok) return;
  kok.querySelectorAll('[data-arac]').forEach(el => { const f = ARACLAR[el.dataset.arac]; if (f && !el.dataset.kuruldu) { el.dataset.kuruldu = '1'; f(el); } });
}
