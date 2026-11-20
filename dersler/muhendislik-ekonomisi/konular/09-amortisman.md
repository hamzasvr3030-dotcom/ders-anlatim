# Amortisman ve yenileme yatırımları

## Amortisman nedir?

Makine, bina, taşıt gibi sabit varlıkların **değer kaybının** muhasebede gider olarak yıllara dağıtılmasıdır. Amortisman **nakit çıkışı değildir**: para varlık alınırken bir kez ödenmiştir. Ancak vergiden düşülebilen bir gider olduğu için **vergi tasarrufu** sağlar ve bu yolla nakit akımını etkiler.

Değer kaybının sebepleri:
- **Fiziksel aşınma:** Kullanım, korozyon, yorulma.
- **Teknolojik eskime:** Daha verimli bir makine çıkması.
- **Ekonomik yetersizlik:** Kapasitenin ihtiyaca yetmemesi.

**Defter değeri:** Alış değerinden o güne kadar ayrılan amortismanlar düşülerek bulunur: $DD_t = I - \sum D$.

## Amortisman yöntemleri

### Normal (doğrusal) amortisman

Her yıl eşit tutar ayrılır:

$$
\boxed{D = \frac{I - H}{n}}
$$

Vergi uygulamasında hurda değeri genellikle sıfır alınır ve oran $1/n$'dir (ör. 10 yıl ömürde %10).

### Hızlandırılmış (azalan bakiyeler) amortisman

Her yıl, **kalan defter değeri** üzerinden sabit bir oran ayrılır. Türk vergi uygulamasında bu oran normal oranın 2 katıdır (en çok %50):

$$
D_t = d\cdot DD_{t-1}, \qquad d = \frac{2}{n}
$$

İlk yıllarda daha çok amortisman ayrılır, böylece vergi tasarrufu öne çekilir. Paranın zaman değeri düşünüldüğünde bu firmaya avantaj sağlar.

> **Örnek:** 20.000 TL'lik makine, ömür 10 yıl.
>
> | Yıl | Normal (%10) | Azalan bakiyeler (%20) | Kalan defter değeri |
> |---|---|---|---|
> | 1 | 2000 | 4000 | 16.000 |
> | 2 | 2000 | 3200 | 12.800 |
> | 3 | 2000 | 2560 | 10.240 |
> | 4 | 2000 | 2048 | 8192 |
> | 5 | 2000 | 1638 | 6554 |
>
> Azalan bakiyeler yönteminde, son yıla kalan değer bir defada amortismana ayrılır.

### Yıllar toplamı yöntemi

$t$. yıl amortismanı, kalan ömrün yıllar toplamına oranıyla bulunur:

$$
D_t = (I - H)\frac{n - t + 1}{n(n+1)/2}
$$

## Vergi etkisi

Vergi oranı $T$ ise vergiden sonraki net nakit akımı:

$$
NA_{vs} = (G - C - D)(1 - T) + D = (G - C)(1 - T) + T\cdot D
$$

$T\cdot D$ terimine **amortismanın vergi kalkanı** denir.

**Varlık satışında vergi:** Satış fiyatı defter değerinden yüksekse aradaki fark kazançtır ve vergilendirilir:

$$
\text{Vergi} = (\text{Satış fiyatı} - DD)\times T
$$

> **Örnek (kitap 9.12):** 75.000 TL'lik tezgâha 6 yılda 45.000 TL amortisman ayrılmış; defter değeri 30.000 TL. Tezgâh 45.000 TL'ye satılırsa ödenecek vergi $(45\,000 - 30\,000)(0{,}23) = 3450$ TL olur.

## Yenileme yatırımları

Mevcut bir varlığın (**savunan**) yerine yenisinin (**meydan okuyan**) alınıp alınmayacağına karar verilir.

**Yenileme sebepleri:** Fiziksel yıpranma, artan bakım giderleri, teknolojik eskime, kapasite yetersizliği, kiralamanın daha ucuz hâle gelmesi.

### Doğru karşılaştırma ilkeleri

1. **Batık maliyet karara katılmaz.** Eski makinenin alış fiyatı ve defter değeri önemsizdir. Önemli olan, makinenin **bugünkü piyasa (hurda) değeridir**, çünkü eski makineyi tutmanın fırsat maliyeti budur.
2. **Dışarıdan bakan bakış açısı:** Eski makineyi bugünkü piyasa değerine "satın alıyormuş" gibi düşün. Savunanın yatırım tutarı = bugünkü piyasa değeri.
3. Karşılaştırma **EDYM** ile yapılır. Ömürler farklı olduğu için en uygun yöntem budur.

$$
EDYM_{eski} = S_0(A/P,i,n_e) + C_e - H_e(A/F,i,n_e)
$$

$$
EDYM_{yeni} = I(A/P,i,n_y) + C_y - H_y(A/F,i,n_y)
$$

$EDYM_{yeni} < EDYM_{eski}$ ise yenileme yapılır.

> **Yaygın hata:** Eski makinenin bugünkü satış değerini yeni makinenin fiyatından düşmek. Kitapta da (9. bölüm, IV) gösterildiği gibi bu yöntem, iki alternatifin ömürleri eşit değilse yanlış sonuç verir. Satış değerini her zaman eski makinenin yatırımı olarak yaz.

### Sınırlı hizmet süresi

Hizmete belirli bir süre (ör. 20 yıl daha) ihtiyaç varsa ve ömürler bu süreye uymuyorsa, sürenin tamamı için nakit akımları kurulur. Eski makine ömrü bitince yenisiyle değiştirilir; bu birleşik planın EDYM'si, yeni makinenin EDYM'si ile karşılaştırılır.

### Minimum ekonomik ömür

Her yıl için "makine o yılın sonunda elden çıkarılırsa" EDYM'si hesaplanır. EDYM'nin en küçük olduğu yıl **ekonomik ömürdür**; makine ekonomik ömrünü doldurduğunda yenilenmelidir.
