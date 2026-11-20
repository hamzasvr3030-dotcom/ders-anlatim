# Statik yöntemler: geri ödeme süresi ve kârlılık oranı

Statik yöntemler **paranın zaman değerini dikkate almaz**. Hesapları kolaydır, hızlı ön eleme için kullanılır; enflasyonun düşük olduğu ortamlarda daha anlamlıdır. Kesin yatırım kararı için tek başına yeterli değildir.

## Geri ödeme süresi (GÖS)

Yatırımın, sağladığı net nakit girişleriyle (kâr + amortisman) **kendini geri ödediği süredir**.

**Yıllık gelir sabitse:**

$$
\boxed{n_{GÖS} = \frac{I}{K}}
$$

$I$: yatırım tutarı, $K$: yıllık net nakit girişi.

**Yıllık gelir değişkense:** Gelirler **birikimli** toplanır. Toplamın yatırımı geçtiği yılda doğrusal enterpolasyon yapılır:

$$
n_{GÖS} = (t - 1) + \frac{I - \text{birikimli}_{t-1}}{K_t}
$$

> **Örnek:** Yatırım 1.600.000 TL; net girişler 1. yıldan itibaren 200, 300, 400, 400, 500, 600 bin TL.
>
> | Yıl | Giriş | Birikimli |
> |---|---|---|
> | 1 | 200.000 | 200.000 |
> | 2 | 300.000 | 500.000 |
> | 3 | 400.000 | 900.000 |
> | 4 | 400.000 | 1.300.000 |
> | 5 | 500.000 | **1.800.000** |
>
> Yatırım 5. yılda geri dönüyor: $n = 4 + \dfrac{1\,600\,000 - 1\,300\,000}{500\,000} = $ **4,6 yıl**.

**Karar:**
- Tek proje: GÖS, yatırımcının kabul ettiği üst sınırdan küçükse kabul edilir.
- Birden çok proje: GÖS'ü en kısa olan tercih edilir.

**Üstünlükleri:** Basittir, anlaşılırdır; sermayenin hızlı geri dönmesini sağlar, riski azaltır; nakit sıkıntısı çeken firmalar için uygundur.

**Sakıncaları:**
1. Paranın zaman değerini dikkate almaz. Aynı sürede geri ödeyen iki projeden ilk yıllarda daha çok kazandıranı ayırt edemez.
2. Geri ödeme süresinden **sonraki** gelirleri tamamen görmezden gelir.
3. Kısa ömürlü projeleri öne çıkarır; uzun vadeli stratejik projeleri cezalandırır.

### İndirgenmiş geri ödeme süresi (GÖS-2)

Statik GÖS'ün zaman değeri eksikliğini gidermek için nakit girişleri önce $(P/F,i,t)$ ile bugüne indirgenir, sonra birikimli toplanır. GÖS-2 her zaman GÖS-1'den uzundur. Kitapta bu iki ölçü GÖS1 ve GÖS2 diye adlandırılır.

## Kârlılık oranı yöntemleri

### Yıllık kârın yatırım tutarına oranı (YKYTO)

Normal çalışan bir yılın kârı yatırım tutarına bölünür:

$$
YKYTO = \frac{\text{Yıllık kâr}}{\text{Yatırım tutarı}}
$$

Oranı yüksek olan proje tercih edilir. Kârların yıllara göre değiştiği projelerde yanıltıcı olabilir.

### Ortalama kârlılık oranı (YOKO)

Kârlar yıldan yıla değişiyorsa **ortalama yıllık kâr** kullanılır:

$$
YOKO = \frac{\dfrac{1}{n}\sum_{t=1}^{n} K_t}{C}
$$

Bazı kaynaklar paydada **ortalama yatırımı** kullanır: $(C + H)/2$ ($H$: hurda değeri). Sınavda hangi tanımın kullanıldığını açıkça yaz.

> **Örnek:** 1000 birimlik iki proje 10 yılda toplam 250 ve 155 birim kâr getiriyor. Yıllık ortalama kârlar 25 ve 15,5 birimdir. YOKO değerleri %2,5 ve %1,55 olur; ilk proje tercih edilir.

## Statik yöntemlerin genel eleştirisi

| Ölçüt | Zaman değeri | Bütün ömrü görür mü? | Kullanım |
|---|---|---|---|
| Geri ödeme süresi | Hayır | Hayır | Likidite ve risk göstergesi |
| İndirgenmiş GÖS | Evet | Hayır | Risk göstergesi |
| Kârlılık oranı | Hayır | Evet | Kaba sıralama |

Bu nedenle kesin karar için [NBD](#/ders/muhendislik-ekonomisi/06-nbd), [EDYM](#/ders/muhendislik-ekonomisi/07-edym) veya [İKO](#/ders/muhendislik-ekonomisi/08-iko) gibi dinamik yöntemler kullanılır.
