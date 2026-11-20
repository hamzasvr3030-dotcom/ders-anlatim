# Talep tahmini: en küçük kareler yöntemi

İki değişken arasındaki doğrusal ilişkiyi, ölçülen noktalara **en iyi uyan doğruyla** ifade eder. Bağımsız değişken $X$ (reklam gideri, yıl, katkı maddesi miktarı) bilindiğinde bağımlı değişken $Y$ (satış, talep, süre) tahmin edilir.

$$
\boxed{Y = a + bX}
$$

"En iyi uyum", noktaların doğrudan dikey uzaklıklarının **karelerinin toplamını en küçük** yapmak demektir: $\sum (Y_i - a - bX_i)^2 \to \min$. Bu koşuldan şu katsayılar elde edilir:

$$
\boxed{b = \frac{n\sum XY - \sum X\sum Y}{n\sum X^2 - \left(\sum X\right)^2}}, \qquad \boxed{a = \frac{\sum Y - b\sum X}{n} = \bar Y - b\bar X}
$$

$b$: doğrunun eğimi ($X$ bir birim artınca $Y$'deki ortalama artış), $a$: $X = 0$ iken $Y$ değeri.

## İlişkinin gücü: $r$ ve $r^2$

**Korelasyon katsayısı** ($-1 \le r \le 1$):

$$
r = \frac{n\sum XY - \sum X\sum Y}{\sqrt{\left[n\sum X^2 - (\sum X)^2\right]\left[n\sum Y^2 - (\sum Y)^2\right]}}
$$

- $r$'nin işareti eğimin işaretiyle aynıdır. $|r| \to 1$ ise güçlü doğrusal ilişki, $r \approx 0$ ise doğrusal ilişki yok demektir.
- **Belirleme katsayısı** $r^2$: $Y$'deki değişimin yüzde kaçının $X$ ile açıklandığını gösterir. Kaynakta $r^2 > 0{,}75$ olan modeller **başarılı** kabul edilir.

<div data-arac="regresyon"></div>

## Çözüm şablonu (tablo kur!)

| $X$ | $Y$ | $XY$ | $X^2$ | ($Y^2$) |
|---|---|---|---|---|
| … | … | … | … | … |
| $\sum X$ | $\sum Y$ | $\sum XY$ | $\sum X^2$ | $\sum Y^2$ |

$Y^2$ sütunu yalnızca $r$ isteniyorsa gerekir. Hesap makinesinin istatistik (REG / LR) modunu kullanmak hata riskini azaltır, ama tabloyu kâğıda da yaz; puan adımlara verilir.

## Sınav sorusu (Final 2026): reklam–satış

| Ay | Oca | Şub | Mar | Nis | May | Haz |
|---|---|---|---|---|---|---|
| Reklam $X$ (bin TL) | 5,5 | 5,8 | 6,0 | 5,9 | 6,2 | 6,3 |
| Satış $Y$ (bin TL) | 100 | 110 | 112 | 115 | 117 | 116 |

Temmuzda 6,5 bin TL reklam harcaması düşünülüyor.

| $X$ | $Y$ | $XY$ | $X^2$ |
|---|---|---|---|
| 5,5 | 100 | 550,0 | 30,25 |
| 5,8 | 110 | 638,0 | 33,64 |
| 6,0 | 112 | 672,0 | 36,00 |
| 5,9 | 115 | 678,5 | 34,81 |
| 6,2 | 117 | 725,4 | 38,44 |
| 6,3 | 116 | 730,8 | 39,69 |
| **35,7** | **670** | **3994,7** | **212,83** |

$$
b = \frac{6(3994{,}7) - 35{,}7(670)}{6(212{,}83) - 35{,}7^2} = \frac{23\,968{,}2 - 23\,919}{1276{,}98 - 1274{,}49} = \frac{49{,}2}{2{,}49} = 19{,}76
$$

$$
a = \frac{670 - 19{,}76(35{,}7)}{6} = \frac{670 - 705{,}40}{6} = -5{,}90
$$

$$
\boxed{Y = -5{,}90 + 19{,}76X}
$$

**Temmuz tahmini:** $Y = -5{,}90 + 19{,}76(6{,}5) = $ **122,5 bin TL**

$r = 0{,}906$ ve $r^2 = 0{,}82 > 0{,}75$; model başarılıdır. Satışlardaki değişimin %82'si reklam harcamasıyla açıklanıyor.

> **Hassasiyet uyarısı:** Paydadaki $1276{,}98 - 1274{,}49$ farkı çok küçüktür. Ara sonuçları erken yuvarlarsan $b$ büyük hata verir. Ara değerleri **tam** tut, yuvarlamayı en sona bırak.

## Sınav sorusu (Büt 2025)

| Ay | Oca | Şub | Mar | Nis | May | Haz | Tem |
|---|---|---|---|---|---|---|---|
| Reklam $X$ (milyon TL) | 1,2 | 1,3 | 1,6 | 1,8 | 1,8 | 1,9 | 1,8 |
| Satış $Y$ (milyon TL) | 105 | 108 | 112 | 116 | 117 | 124 | 120 |

$n = 7$, $\sum X = 11{,}4$, $\sum Y = 802$, $\sum XY = 1316{,}6$, $\sum X^2 = 19{,}02$

$$
b = \frac{7(1316{,}6) - 11{,}4(802)}{7(19{,}02) - 11{,}4^2} = \frac{9216{,}2 - 9142{,}8}{133{,}14 - 129{,}96} = \frac{73{,}4}{3{,}18} = 23{,}08
$$

$$
a = \frac{802 - 23{,}08(11{,}4)}{7} = 76{,}98 \qquad\Rightarrow\qquad Y = 76{,}98 + 23{,}08X
$$

**Ağustos tahmini** ($X = 1{,}7$): $Y = 76{,}98 + 23{,}08(1{,}7) = $ **116,2 milyon TL**; $r^2 = 0{,}90$.

## Zaman serisiyle talep tahmini

$X$ yerine **yıl sırası** (1, 2, 3, …) kullanılırsa doğru, talebin zamana göre eğilimini (trendini) verir.

> **Örnek (kaynak 1.3):** 2005–2014 su sayacı talepleri ($X = 1 \dots 10$): $b = 745{,}45$, $a = 5180$, $r^2 = 0{,}90$.
> 2020 yılı ($X = 16$): $Y = 5180 + 745{,}45(16) = 17\,107$ adet. Bu değer, işletmenin hedeflediği 18.000 adetin altındadır; mevcut eğilim hedefi desteklemiyor.

**Kısa yol:** $X$ değerleri ortası sıfır olacak şekilde kodlanırsa ($-2, -1, 0, 1, 2$) $\sum X = 0$ olur ve formüller sadeleşir: $b = \sum XY/\sum X^2$, $a = \bar Y$.

## Dikkat edilecekler

- Doğru yalnızca veri aralığı içinde güvenilirdir. Aralığın çok dışına **ekstrapolasyon** risklidir.
- Yüksek $r$ değeri **nedensellik** kanıtı değildir.
- Kaynak 1.2'deki örnekte katılaştırıcı 8 g'dan sonra etkisini yitiriyor. İlişki doğrusal olmadığında doğru modeli yanıltır; veriyi mutlaka grafikte de incele.
