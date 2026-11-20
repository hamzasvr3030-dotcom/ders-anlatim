# Başabaş analizi ve duyarlılık

## Maliyet–hacim–kâr ilişkisi

Bir işletmenin satış geliri ve toplam maliyeti, üretim miktarı $x$'in doğrusal fonksiyonlarıdır:

$$
\text{Satış geliri: } y_s = p\,x \qquad \text{Toplam maliyet: } y_m = f + v\,x
$$

$p$: birim satış fiyatı, $v$: birim değişken maliyet, $f$: sabit maliyet.

**Başabaş noktası (BBN)**, gelirin maliyete eşit olduğu, yani **kârın sıfır** olduğu üretim miktarıdır (sıfır kâr noktası):

$$
p\,x_0 = f + v\,x_0 \quad\Rightarrow\quad \boxed{x_0 = \frac{f}{p - v}}
$$

- $x < x_0$: zarar bölgesi; $x > x_0$: kâr bölgesi.
- $(p - v)$: **birim katkı payı**. Her ek ürün sabit giderlerin bu kadarını karşılar.
- BBN'deki satış geliri: $y_0 = p\,x_0 = \dfrac{f}{1 - v/p}$

<div data-arac="basabas"></div>

**İstenen kâr için üretim miktarı:**

$$
x_K = \frac{f + K}{p - v}
$$

## Kapasite kullanım oranı (KKO)

Tam kapasitede üretim $X$ ve satış geliri $R$ ise başabaş noktasının kapasitenin yüzde kaçında olduğu:

$$
\boxed{KKO_0 = \frac{x_0}{X} = \frac{f}{R - V}}
$$

$V = vX$: tam kapasitedeki toplam değişken gider. KKO ne kadar düşükse proje o kadar **güvenlidir**, çünkü kapasitenin küçük bir kısmı kullanıldığında bile zarar edilmez.

> **Örnek (kaynak 3.15):** $f = 3\,280\,000$, $p = 6{,}25$, $v = 3{,}25$, tam kapasite $X = 2\,000\,000$ adet.
>
> $$x_0 = \frac{3\,280\,000}{6{,}25 - 3{,}25} = 1\,093\,333 \text{ adet}$$
>
> $$KKO_0 = \frac{1\,093\,333}{2\,000\,000} = \%54{,}7$$
>
> BBN'deki satış geliri $6{,}25\times1\,093\,333 = 6\,833\,333$ birimdir. Başabaş, kapasitenin yaklaşık **%55**'inde gerçekleşir.

**Güvenlik payı (güvence sınırı):** Beklenen satışın başabaş noktasının ne kadar üzerinde olduğunu gösterir:

$$
GP = \frac{x_{beklenen} - x_0}{x_{beklenen}}
$$

**Nakit başabaş noktası:** Amortisman nakit çıkışı olmadığı için sabit giderden düşülerek hesaplanır: $x_{nakit} = (f - D)/(p - v)$. Bu değer, işletmenin nakit açısından ayakta kalabilmesi için gereken en az üretimdir.

## Birden fazla ürün

Ürünlerin satış karması (oranları) sabitse **ağırlıklı ortalama katkı payı** kullanılır:

$$
x_0 = \frac{f}{\sum_j w_j(p_j - v_j)}
$$

$w_j$: $j$. ürünün satış miktarı içindeki payı.

## Duyarlılık analizi

Tahminler kesin olmadığı için temel girdiler (satış fiyatı, değişken gider, sabit gider, satış miktarı) iyimser ve kötümser sınırlar arasında değiştirilir. Her değişikliğin BBN'ye ve kâra etkisi incelenir.

> **Örnek (kaynak, devam):** Fiyat 6,25'ten **5,75**'e düşerse:
> $x_0 = 3\,280\,000/(5{,}75 - 3{,}25) = 1\,312\,000$ adet, KKO = %65,6.
> Fiyat **5,50** olursa: $x_0 = 3\,280\,000/2{,}25 = 1\,457\,778$ adet, KKO = %72,9.
>
> Fiyattaki %12'lik düşüş, başabaş kapasitesini 18 puan artırıyor; proje fiyata **çok duyarlıdır**.

En çok etkilenen parametre, projenin en **kritik** riskini gösterir. Bu parametrenin tahmini için ek araştırma yapılmalıdır.

**Örümcek grafiği:** Her parametrenin yüzde değişimine karşı NBD veya kâr çizilir. Eğimi dik olan çizgi, duyarlılığı yüksek parametredir.

## Risk ve beklenen değer

Sonuçların olasılıkları tahmin edilebiliyorsa (risk durumu) **beklenen değer** kullanılır:

$$
E(X) = \sum_k p_k\,X_k
$$

> **Örnek:** Ekonomi kötü (olasılık 0,30) olursa verim 100.000, normal (0,50) olursa 200.000, iyi (0,20) olursa 300.000 birim:
> $E = 0{,}3(100\,000) + 0{,}5(200\,000) + 0{,}2(300\,000) = 190\,000$ birim.

- **Belirlilik:** Sonuçlar kesin olarak bilinir.
- **Risk:** Sonuçlar kesin değildir ama olasılıkları bilinir.
- **Belirsizlik:** Olasılıklar bile bilinemez.
