# İç kârlılık oranı ve fayda/maliyet oranı

## İç kârlılık oranı (İKO)

İKO, projenin **NBD'sini sıfır yapan faiz oranıdır**. Başka bir deyişle, gelirlerin bugünkü değerini yatırım harcamalarının bugünkü değerine eşitleyen orandır:

$$
\boxed{\sum_{t=0}^{n}\frac{NA_t}{(1+r)^t} = 0}
$$

İKO projenin kendi getirisidir; dışarıdan bir oran gerektirmez. İndirgenmiş nakit akımı yöntemi, gerçek verim yöntemi gibi adlarla da anılır.

**Karar:** İKO ≥ minimum çekici getiri oranı (MARR, sermaye maliyeti) ise proje kabul edilir.

### Deneme-yanılma ve enterpolasyon

Denklem genellikle doğrudan çözülemez:

1. Bir $r_1$ oranı dene. $NBD_1 > 0$ ise oran düşük kalmıştır, artır.
2. $NBD_2 < 0$ veren bir $r_2$ bul.
3. Arada doğrusal enterpolasyon yap:

$$
\boxed{r \approx r_1 + (r_2 - r_1)\frac{NBD_1}{NBD_1 - NBD_2}}
$$

Aralık ne kadar dar seçilirse sonuç o kadar doğru olur.

> **Örnek (kaynak 3.13):** Döküm atölyesi yatırımı 175.000 USD, yıllık getiri 37.000 USD, ömür 10 yıl, hurda değeri yok; beklenen getiri %20.
>
> **NBD (%20):** $-175\,000 + 37\,000(P/A,20,10) = -175\,000 + 37\,000(4{,}1925) = -19\,879$ USD $< 0$ → **reddedilir**.
>
> **İKO:**
> - %16'da: $-175\,000 + 37\,000(4{,}8332) = +3829$
> - %18'de: $-175\,000 + 37\,000(4{,}4941) = -8719$
>
> $r \approx 16 + 2\cdot\dfrac{3829}{3829 + 8719} = $ **%16,6**
>
> İKO, istenen %20'den küçük olduğundan proje **reddedilir**. İki yöntem aynı kararı verdi.

<div data-arac="faiz"></div>

### Çoklu İKO ve düzeltilmiş İKO

Nakit akımlarının işareti birden çok kez değişiyorsa (ör. $-$, $+$, $+$, $-$) denklemin birden fazla kökü olabilir (**çoklu verim hali**). Bu durumda **düzeltilmiş İKO** kullanılır: Pozitif akımlar dış bir oranla ömrün sonuna taşınır, negatif akımlar bugüne indirgenir ve iki değeri eşitleyen oran bulunur:

$$
\left(\frac{F_{girişler}}{P_{çıkışlar}}\right)^{1/n} - 1
$$

### Artımsal (ek yatırım) analizi

Birbirini dışlayan iki alternatifte İKO'su büyük olanı seçmek **yanlış** sonuç verebilir. Doğru yol şudur: Küçük yatırımlı alternatiften büyüğüne geçerken yapılan **ek yatırımın İKO'su** ($\Delta$İKO) hesaplanır. $\Delta$İKO ≥ MARR ise büyük yatırımlı alternatif seçilir. Bu yöntem her zaman NBD ile aynı kararı verir.

## Fayda/maliyet oranı (kârlılık indeksi)

Gelirlerin (faydaların) bugünkü değeri, maliyetlerin bugünkü değerine bölünür:

$$
\boxed{F/M = \frac{BD_{gelirler}}{BD_{maliyetler}}}
$$

- $F/M > 1$ ise proje kabul edilir ($NBD > 0$ ile aynı anlamdadır).
- Projeler F/M değerine göre **sıralanabilir**. NBD bu sıralamayı yapamaz, çünkü yatırım büyüklüğünü hesaba katmaz.
- Kamu projelerinde (yol, baraj) faydalar topluma, maliyetler devlete aittir; bu nedenle F/M yaygın kullanılır.

> **Örnek (kaynak 3.10):** A ve D projelerinde gelirlerin bugünkü değeri yatırıma bölündüğünde $F/M_A = 1{,}443$ ve $F/M_D = 1{,}154$ bulunur. A seçilir.

Bazı kaynaklar işletme giderlerini paydaya değil paydan düşer:

$$
F/M_{net} = \frac{BD_{gelir} - BD_{işletme gideri}}{I}
$$

İki tanım farklı oranlar verir ama **kabul/ret kararı aynıdır**.

## Rantabilite oranı

Ortalama net kârın (kâr + faiz) yatırıma oranıdır; statik bir kârlılık ölçüsüdür. Kitapta (8. bölüm) İKO ile birlikte anlatılır.

## Yöntemlerin karşılaştırması

| Yöntem | Sonucun birimi | Karar kuralı | Sıralama yapar mı? |
|---|---|---|---|
| NBD | TL (bugün) | $> 0$, en büyük | Hayır (büyüklüğe duyarlı) |
| NGD | TL (ömür sonu) | $> 0$, en büyük | Hayır |
| EDYM / YENH | TL/yıl | En küçük maliyet / en büyük hasıla | Hayır |
| İKO | % | $\ge$ MARR | Artımsal analizle |
| F/M | Oran | $> 1$ | Evet |
| GÖS | Yıl | En kısa | Kaba |

> **Önemli:** NBD, NGD, YENH ve F/M yöntemleri, aynı faiz oranıyla kullanıldığında **her zaman aynı kabul/ret kararını** verir. Aralarında sabit çarpanlar vardır: $NGD = NBD(F/P)$ ve $YENH = NBD(A/P)$.
