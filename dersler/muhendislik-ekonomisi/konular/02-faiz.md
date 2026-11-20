# Faiz ve paranın zaman değeri

Bugünkü 1 TL, bir yıl sonraki 1 TL'den **daha değerlidir**: bugün elimizdeki para yatırılıp faiz kazanabilir, enflasyonla erimez ve risk taşımaz. Bu yüzden farklı zamanlardaki paralar **doğrudan toplanamaz**; önce aynı zamana taşınmaları gerekir. Mühendislik ekonomisinin bütün dinamik yöntemleri bu ilkeye dayanır.

## Temel kavramlar

- **Faiz:** Paranın kullanım bedeli. Borç alan için maliyet, borç veren için getiridir.
- **Faiz oranı ($i$):** Bir dönemde ödenen faizin anaparaya oranı.
- **Anapara ($P$):** Başlangıçtaki para (bugünkü değer).
- **Gelecek değer ($F$):** Paranın $n$ dönem sonraki değeri.
- **Ekonomik eşdeğerlik:** Farklı zamanlardaki iki nakit akımı, verilen faiz oranında birbirine dönüştürülebiliyorsa **eşdeğerdir**. %10 faizde bugünkü 1000 TL ile bir yıl sonraki 1100 TL eşdeğerdir.

## Basit faiz

Faiz yalnızca **anapara** üzerinden hesaplanır; faizin faizi yoktur:

$$
I = P\,i\,n, \qquad \boxed{F = P(1 + in)}
$$

Bu bağıntıdan süre, oran veya anapara çekilebilir:

$$
n = \frac{F/P - 1}{i}, \qquad i = \frac{F/P - 1}{n}, \qquad P = \frac{F}{1 + in}
$$

> **Örnek:** 500 TL emlak vergisi 3 yıl gecikmeyle %23 basit faizle ödenirse $F = 500(1 + 0{,}23\cdot3) = 845$ TL; faiz 345 TL olur.

**Kırık faiz (gün hesabı):** Bir yıldan kısa sürelerde $n$ yıl cinsinden yazılır. Bankalar genellikle yılı 360 gün alır:

$$
F = P\left(1 + i\,\frac{g}{360}\right)
$$

> 300.000 TL, %15 faizle 120 gün: $F = 300\,000(1 + 0{,}15\cdot120/360) = 315\,000$ TL.

## Bileşik faiz

Her dönemin sonunda faiz anaparaya eklenir; sonraki dönem **faizin faizi** de işler:

$$
\boxed{F = P(1 + i)^n}
$$

$(1+i)^n$ çarpanına **bileşik faiz faktörü** denir ve $(F/P, i, n)$ ile gösterilir.

| Yıl | Basit faiz (%10, P = 1000) | Bileşik faiz (%10, P = 1000) |
|---|---|---|
| 1 | 1100 | 1100 |
| 2 | 1200 | 1210 |
| 5 | 1500 | 1610,5 |
| 10 | 2000 | 2593,7 |

Bileşik faizde oran ve süre şöyle bulunur:

$$
i = \left(\frac{F}{P}\right)^{1/n} - 1, \qquad n = \frac{\ln(F/P)}{\ln(1 + i)}
$$

> **Örnek:** 200.000 TL kredi 10 yılda 420.000 TL ödenerek kapandıysa $i = 2{,}1^{1/10} - 1 = 0{,}0770$, yani yaklaşık **%7,70**.
>
> 405.500 TL borç %12 bileşik faizle 800.000 TL'ye ulaşmışsa $n = \ln(1{,}973)/\ln(1{,}12) = 6{,}0$ **yıl**.

<div data-arac="faiz"></div>

## Nominal ve efektif (reel) faiz

Faiz yılda bir kereden sık işletiliyorsa iki oran ayrılır:

- **Nominal faiz ($r$):** Dönem faizi × yıldaki dönem sayısı. Bankaların ilan ettiği "yıllık" orandır.
- **Efektif faiz ($i_e$):** Bileşik etki dahil, gerçekte oluşan yıllık oran.

$$
\boxed{i_e = \left(1 + \frac{r}{m}\right)^m - 1}
$$

$m$: yıldaki faiz dönemi sayısı (6 aylık → 2, aylık → 12, günlük → 360).

> **Örnek:** Kredi kartı aylık %2,52 faiz uyguluyorsa nominal faiz $12\cdot2{,}52 = $ **%30,24**, efektif faiz $(1{,}0252)^{12} - 1 = $ **%34,80** olur.

Yılda $m$ kez faiz işletilen bir paranın $n$ yıl sonraki değeri:

$$
F = P\left(1 + \frac{r}{m}\right)^{mn}
$$

**Sürekli bileşik faiz:** $m \to \infty$ olduğunda

$$
F = P\,e^{rn}, \qquad i_e = e^r - 1
$$

> **Örnek:** 500.000 TL, %15 nominal faizle 10 yıl (kaynaktaki örnek 2.16):
>
> | Faiz dönemi | m | F (TL) |
> |---|---|---|
> | Yıllık | 1 | 2.022.779 |
> | 6 aylık | 2 | 2.123.926 |
> | 3 aylık | 4 | 2.180.189 |
> | Aylık | 12 | 2.220.107 |
> | Günlük | 360 | 2.240.145 |
> | Sürekli | ∞ | 2.240.845 |
>
> Dönem kısaldıkça $F$ artar ama artış giderek küçülür.

## Enflasyon ve reel faiz

Enflasyon oranı $f$ ise paranın **satın alma gücündeki** gerçek artış, yani reel faiz:

$$
\boxed{(1 + i_n) = (1 + i_r)(1 + f)} \quad\Rightarrow\quad i_r = \frac{1 + i_n}{1 + f} - 1
$$

Yaklaşık olarak $i_r \approx i_n - f$ yazılabilir, fakat yüksek enflasyonda bu yaklaşım hatalıdır.

> **Örnekler:**
> - Enflasyon %10 iken %12 **reel** kazanmak isteyen girişimcinin nominal getirisi: $1{,}10\cdot1{,}12 - 1 = $ **%23,2** olmalı.
> - %24 nominal getiri, %10 enflasyonda reel olarak $1{,}24/1{,}10 - 1 = $ **%12,7** eder.

## Özel faiz türleri

**Depolu (bloke) faiz:** Banka kredinin bir kısmını ($d$) hesapta tutarsa, kullanılabilen para azalır ama faiz tamamı üzerinden ödenir:

$$
i_{gerçek} = \frac{i}{1 - d}
$$

> %16 faizli kredinin %12'si hesapta tutulursa $0{,}16/0{,}88 = $ **%18,2**.

**Peşin faiz:** Faiz kredinin başında kesilirse eline geçen para $P(1 - i)$ olur:

$$
i_{gerçek} = \frac{i}{1 - i}
$$

> %20 faizi peşin kesilen 1 yıllık kredinin gerçek faizi $0{,}20/0{,}80 = $ **%25**.

**Değişken faiz oranları:** Her yıl farklı oran varsa çarpanlar art arda uygulanır: $F = P(1 + i_1)(1 + i_2)\cdots(1 + i_n)$.

## Döviz mi TL mi?

Döviz kredisinin TL karşılığındaki maliyeti, kur artışını da içerir:

$$
1 + i_{TL,eşdeğer} = (1 + i_{döviz})(1 + k)
$$

$k$: beklenen yıllık kur artışı. TL kredi faizi bu değerden düşükse TL kredi daha ucuzdur.
