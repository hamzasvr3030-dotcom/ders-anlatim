# Mühendislik ekonomisi ve temel kavramlar

**Mühendislik ekonomisi**, teknik olarak mümkün olan alternatifler arasından **ekonomik olarak en uygun olanı** seçmeye yarayan yöntemler bütünüdür. Mühendis yalnızca "çalışır mı?" diye değil, "kârlı mı, hangisi daha ucuz, ne zaman kendini öder?" diye de sormak zorundadır.

## Ekonomi ve mühendislik ekonomisi

- **Ekonomi (iktisat):** Sınırsız ihtiyaçların kıt kaynaklarla en iyi şekilde karşılanmasını inceleyen bilimdir. Mikro ekonomi tek bir firmayı veya piyasayı, makro ekonomi bütün ülke ekonomisini inceler.
- **Mühendislik ekonomisi:** Mühendislik projelerine ait maliyet ve gelirleri, **paranın zaman değerini** de hesaba katarak karşılaştırır.

Mühendisin firmada karşılaştığı tipik ekonomik kararlar:

- Hangi makineyi veya teknolojiyi alalım? (alternatif seçimi)
- Parçayı kendimiz mi üretelim, dışarıdan mı alalım? (üret veya satın al)
- Fabrikayı nereye kuralım? (yer seçimi)
- Eski makineyi ne zaman yenileyelim? (yenileme analizi)
- Kaç adet üretirsek zarar etmeyiz? (başabaş analizi)

## Ekonomik karar verme süreci

1. Problemi tanımla, amacı belirle.
2. Teknik olarak uygulanabilir **alternatifleri** listele. "Hiçbir şey yapmamak" da bir alternatiftir.
3. Her alternatifin **nakit akımlarını** tahmin et (yatırım, işletme gideri, gelir, hurda değeri, ömür).
4. Bir **değerlendirme ölçütü** seç (NBD, EDYM, İKO, geri ödeme süresi…).
5. Alternatifleri karşılaştır; sayısal olmayan faktörleri (risk, çevre, strateji) de göz önüne al.
6. Kararı ver, uygula, sonuçlarını izle.

## Maliyet kavramları

| Kavram | Tanım | Örnek |
|---|---|---|
| **Sabit maliyet** ($F$) | Üretim miktarından bağımsız; üretim olmasa da vardır | Kira, amortisman, yönetici maaşı, sigorta |
| **Değişken maliyet** ($vQ$) | Üretim miktarıyla orantılı artar | Hammadde, direkt işçilik, enerji |
| **Toplam maliyet** | $TM = F + vQ$ | |
| **Ortalama birim maliyet** | $TM/Q = F/Q + v$; üretim arttıkça azalır | |
| **Marjinal maliyet** | Bir birim daha üretmenin ek maliyeti | 100 yerine 101 adet üretmek |
| **Batık maliyet** | Geçmişte yapılmış, geri alınamayan harcama; **karara katılmaz** | Eski makineye geçen yıl ödenen para |
| **Fırsat maliyeti** | Bir kaynağı kullanınca vazgeçilen en iyi getiri | Özkaynağın bankada kazanacağı faiz |

> **Batık maliyet tuzağı:** "Bu makineye çok para verdik, kullanmaya devam edelim" düşüncesi yanlıştır. Karar yalnızca **bundan sonraki** nakit akımlarına göre verilir.

**Satış geliri ve kâr:**

$$
SG = pQ, \qquad K = SG - TM = (p - v)Q - F
$$

$p$: birim satış fiyatı, $v$: birim değişken maliyet, $F$: sabit maliyet, $Q$: miktar. $(p - v)$ değerine **birim katkı payı** denir.

## Proje türleri

Kitapta firmada hazırlanan projeler dört gruba ayrılır:

- **Teknik projeler:** Ürün, makine, tesis tasarımı.
- **Sosyal projeler:** Çalışan ve toplum yararına projeler.
- **Yatırım projeleri:** Yeni tesis, kapasite artırma, yenileme, modernizasyon.
- **Kısa dönemli ekonomik projeler:** Stok, üretim planı, fiyat kararları.

Yatırım projelerinin değerlendirilmesinde kullanılan yöntemler iki ana gruba ayrılır:

| | Statik yöntemler | Dinamik yöntemler |
|---|---|---|
| Paranın zaman değeri | **Dikkate alınmaz** | **Dikkate alınır** |
| Örnekler | Geri ödeme süresi, kârlılık oranı | NBD, gelecek değer, EDYM, İKO, fayda/maliyet oranı |
| Kullanım | Hızlı ön eleme, düşük enflasyon | Asıl karar |

## Yatırım tutarının tahmini

Proje başında yatırım tutarı kabaca tahmin edilir, proje kesinleştikçe hassaslaşır:

- **Birim maliyet yöntemi:** m² veya kapasite birimi başına maliyet × büyüklük.
- **İndeks yöntemi:** Eski bir projenin maliyeti, maliyet endeksleriyle bugüne taşınır: $C_{yeni} = C_{eski}\dfrac{I_{yeni}}{I_{eski}}$.
- **Maliyet–kapasite faktörü (0,6 kuralı):** Kapasite büyüdükçe maliyet aynı oranda artmaz:

$$
C_2 = C_1\left(\frac{K_2}{K_1}\right)^{x}, \qquad x \approx 0{,}6
$$

> **Örnek:** 10.000 t/yıl kapasiteli bir tesis 50 milyon TL ise 20.000 t/yıl kapasiteli tesis $50\cdot2^{0{,}6} = 75{,}8$ milyon TL tutar; yani 2 katı kapasite için maliyet yalnızca %52 artar.

## Verimlilik

$$
\text{Verimlilik} = \frac{\text{Çıktı}}{\text{Girdi}}
$$

Emek, sermaye veya toplam faktör verimliliği olarak ölçülür. Mühendis verimliliği artırarak birim maliyeti düşürür. İş ölçümü bu açıdan önemli bir araçtır ([İş ölçümü](#/ders/muhendislik-ekonomisi/13-is-olcumu)).
