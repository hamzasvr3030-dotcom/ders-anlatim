# Saf maddenin özellikleri ve tablolar

**Saf madde:** Her noktasında aynı ve değişmeyen kimyasal bileşime sahip madde. Su, azot, gaz hâlindeki hava saf maddedir. Su + buhar karışımı saftır; sıvı hava + gaz hava karışımı ise değildir (bileşim farklı).

## Faz değişimi (1 atm'de su)

| Hal | Açıklama |
|---|---|
| **Sıkıştırılmış sıvı** | Henüz buharlaşmaya hazır değil (20 °C) |
| **Doymuş sıvı** | Buharlaşmanın eşiğinde (100 °C) |
| **Doymuş karışım (ıslak buhar)** | Sıvı + buhar dengede, $T$ sabit |
| **Doymuş buhar** | Son sıvı damlası buharlaştı |
| **Kızgın buhar** | Doyma eğrisinin sağı, $T$ artar |

- **Doyma sıcaklığı** $T_{doyma}$: verilen basınçta kaynamanın başladığı sıcaklık. **Doyma basıncı** $P_{doyma}$: verilen sıcaklıkta kaynamanın başladığı basınç.
- **Gizli ısı:** Faz değişimi sırasında alınan/verilen enerji. 1 atm'de su için erime 333,7 kJ/kg, buharlaşma **2256,5 kJ/kg**.
- Yükseklik arttıkça atmosfer basıncı ve kaynama sıcaklığı düşer.

## Özellik diyagramları

- **T-v ve P-v diyagramları:** Doymuş sıvı çizgisi (sol) ve doymuş buhar çizgisi (sağ) bir **kubbe** oluşturur. Sol: sıkıştırılmış sıvı · kubbe içi: ıslak buhar · sağ: kızgın buhar.
- **Kritik nokta:** Doymuş sıvı ile doymuş buharın özdeş olduğu hal. Bunun üstünde belirgin bir faz değişimi yoktur. Su için $T_{kr} = 373{,}95$ °C, $P_{kr} = 22{,}06$ MPa.
- **Üçlü nokta:** Üç faz dengede. Su için $T = 0{,}01$ °C, $P = 0{,}6117$ kPa.
- **P-T (faz) diyagramı:** Süblimasyon, erime ve buharlaşma eğrileri üçlü noktada birleşir. Su donarken **genişler**; bu yüzden erime eğrisinin eğimi negatiftir.

## Entalpi ve kuruluk derecesi

$$
\boxed{h = u + Pv}\ [\text{kJ/kg}]
$$

$$
\boxed{x = \frac{m_{buhar}}{m_{toplam}}}, \qquad 0 \le x \le 1
$$

Doymuş karışımda herhangi bir özellik ($y$ = $v$, $u$, $h$):

$$
y = y_f + x\,y_{fg} = (1 - x)\,y_f + x\,y_g, \qquad x = \frac{y - y_f}{y_{fg}}
$$

$f$: doymuş sıvı, $g$: doymuş buhar, $fg = g - f$. $h_{fg}$: buharlaşma entalpisi.

## Hangi bölgedeyim?

| Verilen | Karşılaştırma | Sonuç | Tablo |
|---|---|---|---|
| $P$ ve $T$ | $T > T_{doyma}(P)$ | Kızgın buhar | A-6 |
| $P$ ve $T$ | $T < T_{doyma}(P)$ | Sıkıştırılmış sıvı | $y \approx y_{f@T}$ |
| $P$ (veya $T$) ve $v$, $u$, $h$ | $y_f < y < y_g$ | Doymuş karışım | A-4 / A-5 |
| | $y > y_g$ | Kızgın buhar | A-6 |
| | $y < y_f$ | Sıkıştırılmış sıvı | |

**Su tabloları:** A-4 doymuş (sıcaklığa göre) · A-5 doymuş (basınca göre) · A-6 kızgın buhar · A-7 sıkıştırılmış sıvı.

**Sıkıştırılmış sıvı yaklaşımı:**

$$
v, u \approx v_{f@T},\ u_{f@T}, \qquad h \approx h_{f@T} + v_{f@T}\,(P - P_{doyma@T})
$$

> **Yöntem:** Önce verilen $P$ (veya $T$) için doyma değerlerine bak. Verilen özellik $f$ ile $g$ arasındaysa $x$'i hesapla; $g$'den büyükse kızgın tabloya, $f$'den küçükse sıkıştırılmış sıvıya git. Ara değerlerde **doğrusal interpolasyon** yap.

## Çözümlü örnekler

**Doymuş sıvının buharlaştırılması.** 100 kPa'da 0,2 kg doymuş sıvı su tamamen buharlaştırılıyor (A-5: $v_f = 0{,}001043$, $v_g = 1{,}6941$ m³/kg, $h_{fg} = 2257{,}5$ kJ/kg):

$$
\Delta V = m\,v_{fg} = 0{,}2\cdot1{,}6931 = 0{,}3386\ \text{m}^3, \qquad Q = m\,h_{fg} = 0{,}2\cdot2257{,}5 = 451{,}5\ \text{kJ}
$$

**Doymuş karışım.** 90 °C'de 10 kg su: 8 kg sıvı, 2 kg buhar (A-4: $v_f = 0{,}001036$, $v_g = 2{,}3593$):

$$
P = P_{doyma@90°C} = 70{,}18\ \text{kPa}, \quad x = 0{,}2, \quad v = 0{,}001036 + 0{,}2(2{,}3583) = 0{,}473, \quad V = 4{,}73\ \text{m}^3
$$

**R-134a karışımı.** 80 L kapta 4 kg R-134a, 160 kPa (A-12: $v_f = 0{,}0007437$, $v_g = 0{,}12348$, $h_f = 31{,}21$, $h_{fg} = 209{,}90$):

$$
v = 0{,}02\ \text{m}^3/\text{kg}\ (v_f < v < v_g \Rightarrow \text{karışım}), \quad T = -15{,}6\ °\text{C}
$$

$$
x = \frac{0{,}02 - 0{,}0007437}{0{,}12274} = 0{,}157, \qquad h = 31{,}21 + 0{,}157\cdot209{,}90 = 64{,}2\ \text{kJ/kg}
$$

**İnterpolasyon.** 0,5 MPa'da $h = 2890$ kJ/kg ($h_g = 2748{,}1$ → kızgın). A-6'da 200 °C: 2855,8 · 250 °C: 2961,0:

$$
T = 200 + 50\cdot\frac{2890 - 2855{,}8}{2961{,}0 - 2855{,}8} = 216{,}3\ °\text{C}
$$

**Sıkıştırılmış sıvının entalpisi.** Su 100 °C, 15 MPa. Tablo (A-7): 430,39 kJ/kg. Doymuş sıvı yaklaşımı: 419,17 (%2,6 hata). Düzeltmeli: $419{,}17 + 0{,}001(15\,000 - 101{,}4) = 434{,}07$ kJ/kg (%1 hata).

> **Referans hali:** $u$, $h$, $s$ doğrudan ölçülemez; yalnızca değişimleri anlamlıdır. Su için referans 0,01 °C doymuş sıvı, R-134a için −40 °C doymuş sıvıdır. Tablolarda negatif değer görmek normaldir.
