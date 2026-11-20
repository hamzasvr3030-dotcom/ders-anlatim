# Grafikle alternatif seçimi (yer seçimi, üret veya satın al)

**Her sınavda çıkan kalıp.** İki veya üç alternatifin sabit maliyeti ($F$) ve birim değişken maliyeti ($v$) verilir. Her alternatifin toplam maliyeti üretim miktarına göre bir doğrudur:

$$
TM_j(Q) = F_j + v_j\,Q
$$

Herhangi bir $Q$ için **toplam maliyeti en düşük** alternatif seçilir. Grafikte bu, doğruların **en alttaki zarfıdır**.

- "Satın alma" veya "hizmet alımı" alternatifinin sabit maliyeti **0**'dır; doğrusu orijinden çıkar ama eğimi en diktir.
- Sabit maliyeti büyük, değişken maliyeti küçük alternatif (tam otomasyon gibi) yüksek üretim miktarlarında kazanır.

## Çözüm adımları (sınav şablonu)

**1. Maliyet denklemlerini yaz.** $TM_X = F_X + v_XQ$, $TM_Y = \dots$, $TM_Z = \dots$

**2. Her senaryo için maliyetleri hesapla** ve en küçüğünü seç. Bunu tablo hâlinde göster.

**3. Kesişim noktalarını bul.** İki doğrunun eşit olduğu miktar:

$$
\boxed{Q^* = \frac{F_2 - F_1}{v_1 - v_2}}
$$

Üç alternatifte üç kesişim olur (X–Y, X–Z, Y–Z); ancak bunlardan yalnızca **alt zarf üzerinde olanlar** geçiş noktasıdır.

**4. Avantaj aralıklarını belirle.** Sabit maliyeti en küçük olan alternatif küçük $Q$'larda en ucuzdur. Değişken maliyeti en küçük olan alternatif büyük $Q$'larda kazanır. Ortadaki alternatif arada bir aralıkta en ucuz olabilir ya da hiçbir aralıkta en ucuz olamayabilir.

**5. Tek grafikte göster.** Eksenler: yatay $Q$ (adet, m³…), dikey toplam maliyet (TL). Her doğruyu iki noktayla çiz: $Q = 0$'da $F$ ve en büyük senaryoda $F + vQ_{max}$. Kesişimleri işaretle, aralıkları altta ok veya renkle göster.

**6. Yorumla.** Hangi üretim politikasında hangi alternatif seçilmeli? Talep belirsizse hangi alternatif daha az riskli?

<div data-arac="basabas"></div>

## Sınav sorusu (Final 2026): fabrika yeri

| | X yeri | Y yeri | Z yeri |
|---|---|---|---|
| Sabit maliyet (TL) | 120.000.000 | 160.000.000 | 80.000.000 |
| Değişken maliyet (TL/adet) | 10.000 | 7000 | 18.000 |

Üretim politikaları: 4800, 8000 ve 16.000 adet.

**Senaryo tablosu** (milyon TL):

| Q (adet) | X | Y | Z | Seçim |
|---|---|---|---|---|
| 4800 | 168,0 | 193,6 | **166,4** | **Z** |
| 8000 | **200,0** | 216,0 | 224,0 | **X** |
| 16.000 | 280,0 | **272,0** | 368,0 | **Y** |

**Kesişimler:**

$$
X = Z: \quad 120 + 0{,}010Q = 80 + 0{,}018Q \;\Rightarrow\; Q = \frac{40\,000\,000}{8000} = 5000 \text{ adet}
$$

$$
X = Y: \quad 120 + 0{,}010Q = 160 + 0{,}007Q \;\Rightarrow\; Q = \frac{40\,000\,000}{3000} = 13\,333 \text{ adet}
$$

$$
Y = Z: \quad Q = \frac{80\,000\,000}{11\,000} = 7273 \text{ adet}
$$

Y–Z kesişiminde (7273 adet) X her ikisinden ucuz olduğundan bu nokta alt zarfta **değildir**; geçiş noktası sayılmaz.

**Avantaj aralıkları:**
- $0 < Q < 5000$: **Z** yeri
- $5000 < Q < 13\,333$: **X** yeri
- $Q > 13\,333$: **Y** yeri

**Yorum:** Düşük üretimde sabit maliyeti en küçük olan Z, yüksek üretimde değişken maliyeti en küçük olan Y avantajlıdır. 4800 adetlik politika Z–X sınırına (5000) çok yakındır. Talepte artış bekleniyorsa X daha esnek bir seçimdir.

## Sınav sorusu (Büt 2025): beton satın al veya üret

| | X (satın alma) | Y yeri | Z yeri |
|---|---|---|---|
| Sabit maliyet | — | 42.000.000 TL | 26.000.000 TL |
| Değişken maliyet | 3000 TL/m³ | 1400 TL/m³ | 1800 TL/m³ |

Senaryolar: 21.000, 35.000 ve 62.000 m³.

| Q (m³) | X | Y | Z | Seçim |
|---|---|---|---|---|
| 21.000 | **63,0** | 71,4 | 63,8 | **X** |
| 35.000 | 105,0 | 91,0 | **89,0** | **Z** |
| 62.000 | 186,0 | **128,8** | 137,6 | **Y** |

Kesişimler: $X = Z$: $Q = 26\,000\,000/1200 = 21\,667$ m³; $Z = Y$: $Q = 16\,000\,000/400 = 40\,000$ m³; ($X = Y$: 26.250 m³, alt zarfta değil).

**Aralıklar:** $Q < 21\,667$ → satın al (X); $21\,667 < Q < 40\,000$ → Z yeri; $Q > 40\,000$ → Y yeri.

> 21.000 m³'te satın alma ile Z arasındaki fark yalnızca 0,8 milyon TL (%1,3). Talep biraz artarsa Z öne geçer. Bu kadar yakın değerlerde, hesaba girmeyen faktörler (kalite kontrolü, tedarik güvencesi) kararı belirleyebilir.

## Sınav sorusu: test laboratuvarı (hizmet alımı / otomasyon)

| | X hizmet alımı | Y tam otomasyon | Z kısmi otomasyon |
|---|---|---|---|
| Sabit maliyet | — | 3.200.000 USD | 2.400.000 USD |
| Değişken maliyet | 60 USD/adet | 8 USD/adet | 18 USD/adet |

| Q (adet) | X | Y | Z | Seçim |
|---|---|---|---|---|
| 45.000 | **2,70** | 3,56 | 3,21 | **X** |
| 75.000 | 4,50 | 3,80 | **3,75** | **Z** |
| 95.000 | 5,70 | **3,96** | 4,11 | **Y** |

(milyon USD) Kesişimler: $X = Z$: 57.143 adet; $Z = Y$: 80.000 adet ($X = Y$: 61.538 adet, alt zarfta değil).

**Aralıklar:** $Q < 57\,143$ → hizmet alımı; $57\,143 < Q < 80\,000$ → kısmi otomasyon; $Q > 80\,000$ → tam otomasyon.

## Sık yapılan hatalar

- Birimleri karıştırmak: Sabit maliyet TL, değişken maliyet TL/adet. Grafikte milyon TL kullanıyorsan hepsini aynı ölçeğe çevir.
- Bütün kesişimleri geçiş noktası saymak. Yalnızca **alt zarf** üzerindeki kesişimler önemlidir.
- Yalnızca 3 senaryoya cevap verip aralıkları göstermemek. Soru "avantajlı olduğu aralığı belirleyiniz" diyorsa aralıkları mutlaka yaz.
- Grafikte eksen adı ve birim yazmamak.
