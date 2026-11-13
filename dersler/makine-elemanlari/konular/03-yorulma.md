# Yorulma

Değişken gerilme altındaki parçalar, **statik mukavemet sınırının çok altındaki** gerilmelerde bile zamanla çatlayıp kırılabilir. Buna **yorulma** denir. Makine parçası hasarlarının büyük bölümü yorulmadan kaynaklanır.

> 1988'de Aloha 243 uçuşunda gövde, tekrarlanan basınçlanma çevrimleri sonucu oluşan yorulma çatlakları nedeniyle uçuş sırasında yırtıldı.

## Değişken gerilme

$$
\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2}\ (\text{ortalama}), \qquad \sigma_g = \frac{\sigma_{max} - \sigma_{min}}{2}\ (\text{genlik}), \qquad R = \frac{\sigma_{min}}{\sigma_{max}}
$$

| Yükleme | $R$ | Açıklama |
|---|---|---|
| Statik | 1 | $\sigma_g = 0$ |
| Titreşimli (sıfırdan çekme) | 0 | $\sigma_m = \sigma_g$ |
| Tam değişken | −1 | $\sigma_m = 0$ (dönen mildeki eğilme) |

## Wöhler (S-N) eğrisi

Numuneler farklı genliklerde koparılana kadar yüklenir; genlik–çevrim sayısı grafiği çizilir.

- **Eğik kısım (zaman mukavemeti):** Sınırlı ömür bölgesi.
- **Yatay kısım (sürekli mukavemet sınırı $\sigma_D$):** Belirli bir çevrimden ($N_0 \approx 10^6$–$10^7$) sonra çelikler sonsuz ömürlüdür.

| Çevrim | Sınır |
|---|---|
| $N \le 10^3$ | Statik ($\sigma_D \approx \sigma_K$) |
| $10^3 – 10^6$ | Zaman mukavemeti |
| $N \ge 10^6$ | Sürekli, çelik için $\sigma_{eD} \approx 0{,}5\sigma_K$ |

Çelik için yaklaşık değerler: çekme-basma $\sigma_{çD} \approx 0{,}4\sigma_K$, eğilme $\sigma_{eD} \approx 0{,}5\sigma_K$, burulma $\tau_D \approx 0{,}58\sigma_D$.

## Mukavemeti azaltan faktörler

Laboratuvar numunesi küçük, parlatılmış ve çentiksizdir; gerçek parça değildir. Bu yüzden numune değeri düşürülür:

$$
\boxed{\sigma^*_D = \frac{K_y\,K_b\,\sigma_D}{K_ç}}
$$

| Faktör | Değerler |
|---|---|
| Boyut $K_b$ | $d = 10$: 1,00 · 20: 0,95 · 30: 0,90 · 50: 0,85 · 120: 0,75 |
| Yüzey $K_y$ | Parlatılmış ≈ 1 · taşlanmış ≈ 0,95 · kaba talaşlı ≈ 0,85 · tufallı 0,4–0,8 |
| Çentik $K_ç$ | $K_ç = 1 + q(K_t - 1)$ |

$K_t$: teorik gerilme yığılması (kademe, delik, kama yuvası için grafiklerden). $q$: çentik hassasiyeti (sünek malzemede küçük, gevrekte büyük).

## Soderberg ve Goodman doğruları

Ortalama ve genlik gerilmesi birlikte varsa:

- **Soderberg** (sünek): yatay eksende $\sigma_{AK}$'da biter.
- **Goodman** (gevrek): yatay eksende $\sigma_K$'da biter.

**Soderberg'e göre emniyet katsayısı:**

$$
\boxed{\frac{1}{S} = \frac{\sigma_g}{\sigma^*_D} + \frac{\sigma_m}{\sigma_{AK}}}
$$

**Eşdeğer gerilme biçimi:** $\sigma_{gd} = \sigma_m + \dfrac{\sigma_{AK}}{\sigma^*_D}\sigma_g \le \dfrac{\sigma_{AK}}{S}$

**Eğilme + burulma** varsa Von Mises ile birleştirilir:

$$
\sigma'_m = \sqrt{\sigma_m^2 + 3\tau_m^2}, \qquad \sigma'_g = \sqrt{\sigma_g^2 + 3\tau_g^2}
$$

## Çözümlü örnek 1 – Çentikli çubuk, dört yükleme

$D = 40$, $d = 35$, $r = 7$ mm; C45, $\sigma_K = 63$, $\sigma_{AK} = 42$ daN/mm²; $q = 0{,}7$, $K_y = 0{,}85$, $K_b = 0{,}86$.

1. $D/d = 1{,}14$, $r/d = 0{,}2$ → grafikten $K_t \approx 1{,}6$ → $K_ç = 1 + 0{,}7\cdot0{,}6 = 1{,}42$
2. Numune: $\sigma_{çD} = 0{,}4\cdot63 = 25{,}2$; eleman: $\sigma^*_{çD} = 0{,}85\cdot0{,}86\cdot25{,}2/1{,}42 = 12{,}97$ daN/mm²
3. En dar kesit $A = 962{,}1$ mm². $S = 1/(\sigma_g/12{,}97 + \sigma_m/42)$:

| Yükleme (daN) | $\sigma_m$ | $\sigma_g$ | $S$ |
|---|---|---|---|
| 10 500 (statik) | 10,91 | 0 | 3,85 ✓ |
| 2500 … 7500 | 5,20 | 2,60 | 3,09 ✓ |
| −1500 … +12 000 | 5,46 | 7,02 | **1,49** ✗ |
| ±6500 | 0 | 6,76 | **1,92** (sınırda) |

$S = 2$ istendiğine göre 3. yükleme emniyetsiz, 4. yükleme sınırın hemen altında.

## Çözümlü örnek 2 – Halat çarkı mili

Çark çevresinde $F = 50$ daN, $D = 250$ mm; mil $d = 25$ mm; konsol boyu 50 mm; St42 ($\sigma_K \approx 42$, $\sigma_{AK} = 25$ daN/mm²); $S = 2$.

1. $M_b = 50\cdot125 = 6250$ daN·mm (sabit → **ortalama**)
2. $M_e = 50\cdot50 = 2500$ daN·mm (mil döndüğü için tam değişken → **genlik**)
3. $\sigma_g = M_e/(\pi d^3/32) = 1{,}63$; $\tau_m = M_b/(\pi d^3/16) = 2{,}04$ daN/mm²
4. $\sigma^*_{eD} = 0{,}9\cdot0{,}93\cdot(0{,}5\cdot42)/1{,}25 = 14{,}06$ daN/mm²
5. $\sigma'_m = \sqrt3\cdot2{,}04 = 3{,}53$; $\sigma_{gd} = 3{,}53 + (25/14{,}06)\cdot1{,}63 = 6{,}43$ daN/mm²
6. $\sigma_{em} = 25/2 = 12{,}5 > 6{,}43$ → **mil emniyetli**

> Dönen bir milde **eğilme gerilmesi her turda yön değiştirir** (tam değişken, genlik). Sabit burulma ise ortalama gerilmedir.
