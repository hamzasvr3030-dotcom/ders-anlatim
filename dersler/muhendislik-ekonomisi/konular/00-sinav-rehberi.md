# Sınav rehberi: MAK341'de neler çıkıyor?

Elimizdeki üç sınav kâğıdı (2026 finali, 2025 bütünlemesi ve tarihi belirtilmemiş bir sınav) incelendiğinde soruların **beş kalıp** etrafında döndüğü görülüyor. Süre 60 dakika ve her kâğıtta 3–5 soru var; yani her kalıbı hızlı ve hatasız çözebilmek gerekiyor.

## Hangi kalıp kaç kez çıktı?

| Kalıp | Final 2026 | Büt 2025 | Diğer sınav | Konu |
|---|:-:|:-:|:-:|---|
| İş ölçümü: normal ve standart süre | ✓ | ✓ | ✓ | [İş ölçümü](#/ders/muhendislik-ekonomisi/13-is-olcumu) |
| Sabit + değişken maliyetle grafikli alternatif seçimi | ✓ | ✓ | ✓ | [Grafikle alternatif seçimi](#/ders/muhendislik-ekonomisi/11-alternatif-grafik) |
| En küçük kareler ile satış tahmini | ✓ | ✓ | | [En küçük kareler](#/ders/muhendislik-ekonomisi/14-en-kucuk-kareler) |
| Yer seçimi faktörleri ve puanlama | ✓ | ✓ | | [Yer seçimi](#/ders/muhendislik-ekonomisi/12-yer-secimi) |
| Paranın zaman değeri (kredi, NBD, EDYM) | ✓ (kredi) | ✓ (NBD) | ✓ (EDYM) | [Kredi](#/ders/muhendislik-ekonomisi/04-kredi), [NBD](#/ders/muhendislik-ekonomisi/06-nbd), [EDYM](#/ders/muhendislik-ekonomisi/07-edym) |

> **Sonuç:** İş ölçümü ve grafikli alternatif seçimi **her sınavda** çıktı. Bu ikisi neredeyse garanti puandır, önce onları sağlamlaştır. Ardından en küçük kareler ve yer seçimi gelir. Para hesaplarında ise her sınavda farklı bir yöntem soruluyor; faktör formüllerini ezbere bilmek şart.

## Kalıp kalıp ne isteniyor?

**1. İş ölçümü (15–20 puan).** İki sözel soru hemen hemen aynı kelimelerle soruluyor: *"İşletme neden iş ölçümüne ihtiyaç duyar?"* ve *"Ölçümü yapan personel neden tecrübeli bir uzman olmalı?"* Ardından 3 işlem için ölçülen süreler, tempo (%10 hızlı, %15 yavaş, normal…) ve tolerans veriliyor. Ölçümlerde **bir tane bariz hatalı değer** var (ör. 60 yerine 600, 275 yerine 2755). Bu değer ortalamaya **katılmaz**.

$$
NS = \bar t \times \text{tempo}, \qquad SS = \frac{NS}{1 - \text{tolerans}}
$$

**2. Grafikle alternatif seçimi (20 puan).** İki ya da üç alternatif için sabit maliyet (TL) ve birim değişken maliyet (TL/adet) veriliyor. Bazen alternatiflerden biri "satın alma" olur ve sabit maliyeti sıfırdır. 3 üretim senaryosu için en ucuz alternatif seçilir, kesişim noktaları bulunur ve **her alternatifin avantajlı olduğu aralık tek grafikte** gösterilir.

**3. En küçük kareler (20 puan).** 6–7 aylık reklam gideri (X) ve satış (Y) verilir. $Y = a + bX$ doğrusu kurulur, bir sonraki ayın reklam harcamasıyla satış tahmin edilir. Tabloyu düzenli kurmak ($\sum X$, $\sum Y$, $\sum XY$, $\sum X^2$) hız kazandırır.

**4. Yer seçimi (15 puan).** Lastik fabrikası, fotovoltaik panel fabrikası gibi bir tesis için yer seçimi faktörleri, **önem dereceleri (ağırlıklar)** ve 4 aday şehrin puanlaması isteniyor. Ayrıca *"Yer seçimi neden önemlidir?"* sorusu da soruluyor.

**5. Paranın zaman değeri (15–25 puan).** Her sınavda farklı bir yöntem çıktı:
- Final 2026: 12 ay ertelemeli, 60 eşit taksitli konut kredisi ve evin kaç TL'ye satılırsa zarar edilmeyeceği
- Büt 2025: İki enerji hattı alternatifinin net bugünkü değerle (NBD) karşılaştırılması
- Diğer sınav: Benzinli ve dizel araç filosunun eşdeğer yıllık maliyetle (EDYM) karşılaştırılması

## Sınavda yanına alman gereken formüller

$$
(F/P) = (1+i)^n \qquad (A/P) = \frac{i(1+i)^n}{(1+i)^n - 1} \qquad (A/F) = \frac{i}{(1+i)^n - 1}
$$

$$
b = \frac{n\sum XY - \sum X\sum Y}{n\sum X^2 - (\sum X)^2}, \qquad a = \bar Y - b\bar X
$$

$$
Q^* = \frac{F_2 - F_1}{v_1 - v_2} \quad \text{(iki maliyet doğrusunun kesişimi)}
$$

Bütün formüllerin listesi [Formül özeti](#/ders/muhendislik-ekonomisi/16-formul-ozeti) sayfasında. Sınav sorularının hepsi bu sitede **çözümlü sorular** olarak var; sınav modunda karışık deneme de çözebilirsin.

## Çalışma planı önerisi

1. **İş ölçümü** ve **grafikle alternatif seçimi** konularını oku, sınavlarda çıkan 6 soruyu kendin çöz.
2. **En küçük kareler** tablosunu iki kez baştan sona kur. Hesap makinesinde $\sum$ modunu kullanmayı öğren.
3. **Yer seçimi** için bir faktör listesi ve ağırlık tablosu ezberle. Bu tabloyu her tesis tipine uyarlayabilirsin.
4. **Faiz faktörlerini** ezberle, ardından kredi, NBD ve EDYM sorularını çöz.
5. Kalan zamanda başabaş, iç kârlılık oranı ve geri ödeme süresi konularını gözden geçir.
