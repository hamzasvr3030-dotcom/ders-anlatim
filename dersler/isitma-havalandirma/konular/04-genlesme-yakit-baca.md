# Genleşme deposu, yakıt hesabı ve bacalar

## Genleşme (imbisat) deposu

Tesisattaki su ısındıkça **genleşir.** Bu hacim artışı karşılanmazsa basınç tehlikeli şekilde yükselir. Genleşme deposu:

- Suyun hacim artışını karşılar,
- (açık sistemde) tesisatın havasını alır ve emniyet borularıyla kazanı korur,
- Sistemde gerekli statik basıncı sağlar.

### Tesisattaki su hacmi

Deponun boyutu, tesisattaki toplam su hacmine bağlıdır. Su hacmi; ısıtıcıların, kazanın ve boruların su kapasiteleri toplanarak bulunur. Ders notundaki yaklaşık değerler:

| Eleman | Su kapasitesi |
|---|---|
| Döküm radyatör (900 mm) | 3,5 L/m² |
| Döküm radyatör (200–500 mm) | 3–5 L/m² |
| Çelik radyatör (900 mm) | 5 L/m² |
| Çelik radyatör (200–500 mm) | 4–6 L/m² |
| Panel radyatör | ≈ 1,5 L/m² |
| Konvektör | 0,2–0,4 L/m² |
| Döküm kazan | 5–10 L/m² |

Borular için birim boydaki su kapasiteleri çapa göre tablolardan alınır (örneğin DN65 ≈ 3,85 L/m, DN100 ≈ 7,93 L/m).

### Genleşme hacmi

$$
V_g = V_{sistem}\cdot n
$$

$n$: suyun ilk sıcaklıktan (≈ 10 °C) en yüksek işletme sıcaklığına kadar genleşme oranı. 90 °C için $n \approx 0{,}035$ (yaklaşık %3,5).

- **Açık depo** hacmi, genleşme hacmine güvenlik payı eklenerek seçilir.
- **Kapalı (membranlı) depoda** gaz yastığının basınçla sıkışması da hesaba katılır; depo hacmi genleşme hacminden daha büyüktür:

$$
V_{depo} = V_g\,\frac{P_{son} + 1}{P_{son} - P_{ön}}\quad(\text{bar, etkin basınçlar})
$$

## Yakıt sarfiyatı ve yakıt deposu

Yakıtların **alt ısıl değerleri** (ders notundan):

| Yakıt | $H_u$ |
|---|---|
| Doğal gaz | ≈ 34 535 kJ/m³ |
| Fuel-oil | ≈ 41 860 kJ/kg |
| Kömür türleri | 8 370 – 23 000 kJ/kg |

**Saatlik yakıt tüketimi** (brülör kapasitesi de budur):

$$
\boxed{B = \frac{Q_K}{H_u\,\eta}}
$$

**Depolanacak yakıt miktarı** ($Z_g$ saat/gün çalışma, $Z_p$ gün depolama):

$$
B_p = \frac{Q_K\,Z_g\,Z_p\cdot3{,}6}{H_u\,\eta_K\cdot 2}\ \ [\text{kg}]
$$

Burada ($Q_K$ W cinsinden, $H_u$ kJ/kg) 3,6 W·h'yi kJ'ye çevirir; 2 ise dış sıcaklığın sezon boyunca değişmesi için ortalama yük katsayısıdır (kazan her zaman tam yükte çalışmaz). Depo hacmi $V = B_p/\rho$.

**Yıllık yakıt tüketimi**, ısıtma sezonunun **derece-gün** değeriyle hesaplanır: yıllık ısı ihtiyacı ≈ (ısı kaybı / tasarım sıcaklık farkı) × derece-gün × 24.

## Bacalar

Baca, yanma ürünlerini atmosfere atar ve kazana **çekiş** sağlar. Doğal çekiş, baca içindeki sıcak gaz ile dış hava arasındaki yoğunluk farkından doğar:

$$
\Delta P_{çekiş} = g\,H\,(\rho_{dış} - \rho_{gaz})
$$

$H$: baca yüksekliği. Baca yüksekliği ve kesiti, kazan kapasitesi ve yakıt türüne göre **grafiklerden** (sıvı-gaz yakıtlı ve kömürlü kazanlar için ayrı) okunur.

**Kurallar:**

- Baca, çatının en yüksek noktasını belirli bir miktar aşmalı, rüzgâr gölgesinde kalmamalıdır.
- Kesit boyunca sabit olmalı; ani dönüş ve daralmalardan kaçınılmalıdır.
- Her kazan için mümkünse **ayrı baca**; bacaya başka cihaz bağlanmamalıdır.
- Temizleme kapağı ve yoğuşma suyu tahliyesi bulunmalıdır. Yoğuşmalı kazanlarda bacanın **yoğuşmaya ve aside dayanıklı** (paslanmaz çelik, plastik) olması gerekir.
- Yalıtımlı bacada gaz soğumaz, çekiş korunur ve yoğuşma azalır.
