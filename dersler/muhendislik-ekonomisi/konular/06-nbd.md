# Bugünkü değer ve net bugünkü değer (NBD)

## Yöntemin fikri

Projenin **bütün nakit akımları** verilen faiz (iskonto, kesim, minimum çekici getiri) oranıyla **bugüne indirgenir** ve toplanır:

$$
\boxed{NBD = -I + \sum_{t=1}^{n}\frac{G_t - C_t}{(1+i)^t} + \frac{H}{(1+i)^n}}
$$

$I$: başlangıç yatırımı, $G_t$: $t$. yıl geliri, $C_t$: $t$. yıl işletme gideri, $H$: ömür sonundaki hurda (kalıntı) değeri.

Yıllık net giriş sabitse ($A = G - C$):

$$
NBD = -I + A(P/A,i,n) + H(P/F,i,n)
$$

## Karar kuralları

- **Tek proje:** $NBD > 0$ ise kabul edilir. Proje, istenen getiri oranından daha fazlasını kazandırıyor demektir. $NBD = 0$ ise proje tam olarak istenen getiriyi sağlar.
- **Birbirini dışlayan alternatifler (gelirleri var):** NBD'si **en büyük** olan seçilir.
- **Yalnızca maliyetler verilmişse** (aynı hizmeti gören alternatifler): Maliyetlerin bugünkü değeri (BDM) hesaplanır ve **en küçük** olan seçilir. Bu durumda hurda değeri maliyetten **düşülür**.

$$
BD_{maliyet} = I + C(P/A,i,n) - H(P/F,i,n)
$$

> **İskonto oranının etkisi:** Oran yükseldikçe uzak yıllardaki gelirlerin bugünkü değeri hızla düşer. Yüksek oran, ilk yıllarda çok kazandıran projeleri öne çıkarır.

### Sınav sorusu (Büt 2025): enerji nakil hattı

*Bir enerji nakil hattı için iki güzergâh var; $i = \%15$, ömür 15 yıl. NBD ile seçim yapınız.*

| | Göl etrafından | Göl altından |
|---|---|---|
| Uzunluk | 15 km | 5 km |
| İlk maliyet | 50 milyon TL/km | 350 milyon TL/km |
| Bakım maliyeti | 4,5 milyon TL/km/yıl | 9 milyon TL/km/yıl |
| Hurda değeri | 30 milyon TL/km | 80 milyon TL/km |
| Yıllık enerji kaybı | 15 milyon TL/km/yıl | 5 milyon TL/km/yıl |

**1. Önce km başına değerleri toplam değerlere çevir** (milyon TL):

| | Göl etrafından | Göl altından |
|---|---|---|
| İlk yatırım | $50\cdot15 = 750$ | $350\cdot5 = 1750$ |
| Yıllık gider (bakım + kayıp) | $(4{,}5 + 15)\cdot15 = 292{,}5$ | $(9 + 5)\cdot5 = 70$ |
| Hurda değeri | $30\cdot15 = 450$ | $80\cdot5 = 400$ |

**2. Faktörler:** $(P/A,15,15) = 5{,}8474$ ve $(P/F,15,15) = 0{,}12289$

**3. Maliyetlerin bugünkü değeri:**

$$
BD_{etraf} = 750 + 292{,}5(5{,}8474) - 450(0{,}12289) = 750 + 1710{,}4 - 55{,}3 = \mathbf{2405{,}1} \text{ milyon TL}
$$

$$
BD_{alt} = 1750 + 70(5{,}8474) - 400(0{,}12289) = 1750 + 409{,}3 - 49{,}2 = \mathbf{2110{,}2} \text{ milyon TL}
$$

**Karar:** Göl altından geçen hattın maliyetinin bugünkü değeri yaklaşık 295 milyon TL daha düşüktür. İlk yatırımı 2,3 kat fazla olmasına rağmen **göl altı** seçilir, çünkü yıllık bakım ve enerji kaybı giderleri çok daha küçüktür.

> Sorunun "NBD" ifadesi burada maliyetlerin net bugünkü değeri anlamındadır. Değerleri negatif işaretle yazarsan ($-2405{,}1$ ve $-2110{,}2$), **büyük** olan yine göl altıdır.

## Ömürleri farklı alternatifler

NBD karşılaştırması **aynı hizmet süresi** üzerinden yapılmalıdır. İki yol vardır:

1. **Ortak kat (EKOK) yöntemi:** Ömürler 4 ve 6 yılsa 12 yıllık süre alınır. Kısa ömürlü alternatif 3 kez, uzun ömürlü 2 kez tekrarlanır (her tekrarda yeni yatırım ve hurda değeri).
2. **Yıllık eşdeğer yöntemi:** Her alternatifin yıllık eşdeğer maliyeti bulunur; tekrar varsayımı altında doğrudan karşılaştırılabilir. Bu yöntem çok daha kısadır, bu nedenle ömürler farklıysa **EDYM tercih edilir** ([EDYM](#/ders/muhendislik-ekonomisi/07-edym)).

## Net gelecek değer (NGD)

Aynı nakit akımları bugüne değil, ömrün sonuna taşınır:

$$
NGD = NBD\,(1+i)^n
$$

NGD ile NBD **aynı kararı** verir, çünkü aralarında yalnızca pozitif bir çarpan vardır.

## Kapitalize maliyet

Sonsuz ömürlü (veya çok uzun ömürlü) kamu projelerinde, maliyetlerin bugünkü değeri:

$$
KM = I + \frac{A}{i}
$$

$A$: yıllık gider (veya periyodik giderlerin yıllık eşdeğeri).

> **Örnek:** Bir köprünün yapım maliyeti 20 milyon TL, yıllık bakımı 500.000 TL ve her 10 yılda bir 3 milyon TL'lik büyük onarımı var; $i = \%10$.
> Büyük onarımın yıllık eşdeğeri: $3\,000\,000(A/F,10,10) = 188\,236$ TL
> $KM = 20\,000\,000 + (500\,000 + 188\,236)/0{,}10 = 26\,882\,360$ TL.

## NBD'nin özellikleri

1. Paranın zaman değerini ve projenin bütün ömrünü dikkate alır.
2. Sonuç TL cinsindendir; firmanın değerine katkıyı doğrudan gösterir.
3. İskonto oranını belirlemek zordur (sermaye maliyeti, enflasyon, risk).
4. Büyük yatırımlı projeleri kayırabilir. Kârlılık **sıralaması** için [fayda/maliyet oranı](#/ders/muhendislik-ekonomisi/08-iko) daha uygundur.
