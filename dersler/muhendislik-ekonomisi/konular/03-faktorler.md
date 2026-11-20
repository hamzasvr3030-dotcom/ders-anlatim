# Nakit akımları ve faiz faktörleri

## Nakit akım şeması

Bir projenin para giriş ve çıkışları **nakit akım şeması** ile gösterilir:

- Yatay eksen zamandır (0, 1, 2, …, n). **0 anı bugündür**; 1, birinci dönemin **sonudur**.
- **Yukarı oklar** nakit girişini (gelir), **aşağı oklar** nakit çıkışını (gider) gösterir.
- Aynı andaki giriş ve çıkışlar tek okta toplanabilir; sonuç değişmez.
- Aksi söylenmedikçe nakit akımları **dönem sonunda** gerçekleşir (dönem sonu kabulü).

```
        ↑A    ↑A    ↑A    ↑A    ↑A + H        (gelirler ve hurda değeri)
  ──┬────┬─────┬─────┬─────┬─────┬──→  zaman
    0    1     2     3     4     5
    ↓P                                       (yatırım)
```

**Nakit akımı serileri:**

| Seri | Özellik | Örnek |
|---|---|---|
| Basit (tek ödeme) | Tek bir $P$ veya $F$ | Vadeli mevduat |
| Yeknesak (üniform) | Her dönem eşit $A$ | Kira, eşit taksit, tahvil faizi |
| Aritmetik artışlı | Her dönem $G$ kadar artar veya azalır | Her yıl artan bakım gideri |
| Geometrik artışlı | Her dönem %$g$ oranında artar | Enflasyonla artan gider |
| Düzensiz | Kuralsız | Gerçek proje nakit akımları |

## Altı temel faktör

Faktörler $(\text{Aranan}/\text{Verilen}, i, n)$ biçiminde yazılır. $(F/P, \%10, 5)$: "%10 faizle 5 dönem için $P$ verildiğinde $F$'yi bul" demektir.

| Aranan | Verilen | Faktör | Formül |
|---|---|---|---|
| $F$ | $P$ | $(F/P,i,n)$ | $(1+i)^n$ |
| $P$ | $F$ | $(P/F,i,n)$ | $\dfrac{1}{(1+i)^n}$ |
| $A$ | $P$ | $(A/P,i,n)$ | $\dfrac{i(1+i)^n}{(1+i)^n-1}$ |
| $P$ | $A$ | $(P/A,i,n)$ | $\dfrac{(1+i)^n-1}{i(1+i)^n}$ |
| $A$ | $F$ | $(A/F,i,n)$ | $\dfrac{i}{(1+i)^n-1}$ |
| $F$ | $A$ | $(F/A,i,n)$ | $\dfrac{(1+i)^n-1}{i}$ |

**Ezberleme ipuçları:**

- Çiftler birbirinin tersidir: $(P/F) = 1/(F/P)$, $(P/A) = 1/(A/P)$, $(F/A) = 1/(A/F)$.
- $(A/P) = (A/F) + i$. Bunu bilirsen $(A/P)$'yi $(A/F)$'den hemen bulursun.
- Faktörler zincirlenebilir: $(F/A) = (P/A)(F/P)$.

> **İki kritik kural (en çok hata buradan çıkar):**
> 1. $P$, **ilk $A$'dan bir dönem önce** bulunur. Seri 1. yılda başlıyorsa $P$ 0 anındadır; seri 5. yılda başlıyorsa $P$ 4. yıldadır.
> 2. $F$, **son $A$ ile aynı anda** bulunur.

<div data-arac="faiz"></div>

### Altı faktörün sayısal örnekleri (%10 faiz)

| Soru | Çözüm |
|---|---|
| Bugünkü 1000 TL bir yıl sonra ne olur? | $F = 1000(1{,}1) = 1100$ TL |
| 5 yıl sonra 100.000 TL'lik makine için bugün ne yatırılmalı? | $P = 100\,000(P/F,10,5) = 62\,092$ TL |
| Bugün yatırılan 1000 TL ile 5 yıl boyunca her yıl ne alınır? | $A = 1000(A/P,10,5) = 263{,}80$ TL |
| 5 yıl boyunca yılda 263,8 TL için bugün ne yatırılmalı? | $P = 263{,}8(P/A,10,5) = 1000$ TL |
| Her yıl 1200 TL yatırılırsa 10 yıl sonra ne birikir? | $F = 1200(F/A,10,10) = 19\,125$ TL |
| 10 yılda 19.125 TL biriktirmek için yılda ne yatırılmalı? | $A = 19\,125(A/F,10,10) = 1200$ TL |

## Düzensiz nakit akımları

Her nakit akımı ayrı ayrı 0 anına (veya $n$ anına) taşınıp toplanır:

$$
P = \sum_{t=1}^{n}\frac{C_t}{(1+i)^t}, \qquad F = P(1+i)^n
$$

> **Örnek (kaynak 2.3):** Yatırım harcamaları yıllara göre 100, 300, 200, 400, 500 bin TL; $i = \%14$.
>
> $F_5 = 100(1{,}14)^4 + 300(1{,}14)^3 + 200(1{,}14)^2 + 400(1{,}14) + 500 = 1\,829\,279$ TL
>
> $P = F_5/(1{,}14)^5 = 950\,070$ TL. Harcamaların düz toplamı 1.500.000 TL'dir; bu karşılaştırma zaman değerinin ne kadar etkili olduğunu gösterir.

## Aritmetik artışlı (gradyan) seri

Nakit akımı 1. yıl $A_1$, sonra her yıl $G$ kadar artıyorsa ($A_1$, $A_1 + G$, $A_1 + 2G$, …), seri **sabit kısım + gradyan kısmı** olarak ikiye ayrılır. Gradyan kısmı 1. yılda 0, 2. yılda $G$ ile başlar.

$$
(P/G,i,n) = \frac{(1+i)^n - in - 1}{i^2(1+i)^n}, \qquad (A/G,i,n) = \frac{1}{i} - \frac{n}{(1+i)^n - 1}
$$

$$
P = A_1(P/A,i,n) + G(P/G,i,n)
$$

Azalan seride $G$ negatif alınır.

> **Örnek:** Bakım gideri 1. yıl 10.000 TL, sonra her yıl 2000 TL artıyor, 5 yıl, %10:
> $P = 10\,000(3{,}7908) + 2000(6{,}8618) = 51\,632$ TL.

## Geometrik artışlı seri

1. yıl $A_1$, sonra her yıl %$g$ artıyorsa:

$$
P = A_1\,\frac{1 - \left(\dfrac{1+g}{1+i}\right)^n}{i - g} \quad (i \ne g), \qquad P = \frac{nA_1}{1+i} \quad (i = g)
$$

## Dönem başı (peşin) seriler

Ödemeler dönem başında yapılıyorsa (kira, sigorta primi gibi), her ödeme bir dönem erken gerçekleşir:

$$
P_{peşin} = A(P/A,i,n)(1+i) = A + A(P/A,i,n-1)
$$

## Ertelenmiş seriler

Seri $k+1$. dönemde başlıyorsa önce serinin $k$ anındaki değeri bulunur, sonra 0 anına indirilir:

$$
P_0 = A(P/A,i,n)(P/F,i,k)
$$

Bu yöntem, sınavda çıkan ertelemeli kredi sorusunun temelidir ([Kredi ve taksit hesapları](#/ders/muhendislik-ekonomisi/04-kredi)).

## Kapitalize maliyet (sonsuz seri)

Ömrü çok uzun (baraj, köprü, yol) veya sonsuza kadar sürecek bir hizmetin bugünkü değeri:

$$
\boxed{P = \frac{A}{i}} \qquad (n \to \infty \text{ için } (P/A) \to 1/i)
$$

Her $k$ yılda bir tekrarlanan $X$ harcaması önce yıllık eşdeğere çevrilir: $A = X(A/F,i,k)$, sonra $P = A/i$.
