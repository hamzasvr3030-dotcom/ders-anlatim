# Yıllık eşdeğer maliyet (EDYM / YEM)

## Yöntemin fikri

Bütün nakit akımları, ömür boyunca her yıl ödenen **eşit bir yıllık tutara** çevrilir. Alternatiflerin yıllık maliyetleri doğrudan karşılaştırılır ve **en düşük** olan seçilir. Kitapta YEM (yıllık eş değer maliyet), sınavda EDYM (eşdeğer yıllık maliyet) olarak geçer; ikisi aynı şeydir.

$$
\boxed{EDYM = I\,(A/P,i,n) + C - H\,(A/F,i,n)}
$$

| Terim | Anlamı |
|---|---|
| $I(A/P,i,n)$ | **Sermaye geri kazanım maliyeti**: Yatırımın bir yıla düşen payı (bugünkü değer yıllara eşit taksitlendirilir) |
| $C$ | Yıllık işletme gideri (bakım, yakıt, sigorta, vergi…) |
| $H(A/F,i,n)$ | Hurda değerinin yıllık eşdeğeri; ömür sonunda elde edileceği için **düşülür** |

**Kısa formül:** $(A/P) = (A/F) + i$ olduğundan sermaye maliyeti şöyle de yazılabilir:

$$
I(A/P) - H(A/F) = (I - H)(A/P,i,n) + H\,i
$$

## Neden EDYM?

En büyük üstünlüğü, **ömürleri farklı alternatifleri** ortak kat almadan karşılaştırabilmesidir. Bunun dayanağı şu varsayımdır: Alternatif ömrü sonunda **aynı koşullarla yenilenir**, dolayısıyla her döngüde yıllık maliyet aynı kalır.

Gelirler de varsa aynı yöntemle **yıllık eşdeğer net hasıla (YENH)** hesaplanır ve en büyük olan seçilir:

$$
YENH = (G - C) - I(A/P,i,n) + H(A/F,i,n) = NBD\,(A/P,i,n)
$$

### Sınav sorusu: benzinli mi dizel mi?

*Bir firma, yılda ortalama 44.000 km yol yapan çalışanları için araç filosu kuracak. Dizel araçlar 4. yılın sonunda, benzinli araçlar 6. yılın sonunda elden çıkarılıyor; $i = \%30$.*

| | Benzinli | Dizel |
|---|---|---|
| Satın alma | 2.100.000 TL | 2.250.000 TL |
| Tamir-bakım | 40.000 TL/yıl | 58.000 TL/yıl |
| Kasko-sigorta-vergi | 58.000 TL/yıl | 64.000 TL/yıl |
| Yakıt | 5,25 TL/km | 4,2 TL/km |
| Elden çıkarma değeri | 2.750.000 TL (6. yıl) | 2.150.000 TL (4. yıl) |

**1. Yıllık işletme giderleri:**

$$
C_B = 40\,000 + 58\,000 + 5{,}25\cdot44\,000 = 40\,000 + 58\,000 + 231\,000 = 329\,000 \text{ TL/yıl}
$$

$$
C_D = 58\,000 + 64\,000 + 4{,}2\cdot44\,000 = 58\,000 + 64\,000 + 184\,800 = 306\,800 \text{ TL/yıl}
$$

**2. Faktörler (%30):**

| | $(A/P,30,n)$ | $(A/F,30,n)$ |
|---|---|---|
| $n = 6$ | 0,37839 | 0,07839 |
| $n = 4$ | 0,46163 | 0,16163 |

**3. EDYM:**

$$
EDYM_B = 2\,100\,000(0{,}37839) + 329\,000 - 2\,750\,000(0{,}07839) = 794\,628 + 329\,000 - 215\,584 = \mathbf{908\,044} \text{ TL/yıl}
$$

$$
EDYM_D = 2\,250\,000(0{,}46163) + 306\,800 - 2\,150\,000(0{,}16163) = 1\,038\,666 + 306\,800 - 347\,503 = \mathbf{997\,963} \text{ TL/yıl}
$$

**Karar:** Benzinli araç yılda yaklaşık 90.000 TL daha ucuzdur; **benzinli araç** seçilir. Dizel aracın yakıt tasarrufu (yılda 46.200 TL), daha kısa sürede elden çıkarılmasının getirdiği yüksek sermaye maliyetini karşılamıyor.

> **Dikkat:** Benzinli aracın satış değeri alış fiyatından yüksek (enflasyon etkisi). Formül yine aynen uygulanır; hurda değeri her zaman $(A/F)$ ile düşülür.

## Kaynaktaki örnek (3.12)

| | Proje A | Proje B |
|---|---|---|
| Yatırım | 4.000.000 TL | 3.500.000 TL |
| İşletme gideri | 100.000 TL/yıl | 200.000 TL/yıl |
| Hurda değeri | 500.000 TL | 300.000 TL |
| Ömür | 15 yıl | 20 yıl |

$i = \%15$ için:

$$
EDYM_A = 4\,000\,000(0{,}17102) + 100\,000 - 500\,000(0{,}02102) = 773\,560 \text{ TL}
$$

$$
EDYM_B = 3\,500\,000(0{,}15976) + 200\,000 - 300\,000(0{,}00976) = 756\,237 \text{ TL}
$$

B'nin yıllık maliyeti daha düşük olduğundan **B** seçilir. Ömürler farklı olduğu hâlde ortak kata gerek kalmadı.

## Düzensiz giderlerde EDYM

Giderler yıldan yıla değişiyorsa önce **bugünkü değer** bulunur, sonra yıllığa çevrilir:

$$
EDYM = \left[I + \sum_t C_t(P/F,i,t) - H(P/F,i,n)\right](A/P,i,n)
$$

Aritmetik artışlı giderlerde $C_1 + G(A/G,i,n)$ kullanılabilir.

## Ekonomik ömür

Bir makinenin yıllık maliyetini **en küçük yapan** kullanım süresine **ekonomik ömür** denir. Sermaye maliyeti yıllar geçtikçe azalır (yatırım daha uzun süreye yayılır), bakım ve işletme giderleri ise artar. Bu iki etkinin toplamının minimum olduğu yıl ekonomik ömürdür. Ekonomik ömür, [yenileme kararlarının](#/ders/muhendislik-ekonomisi/09-amortisman) temelini oluşturur.
