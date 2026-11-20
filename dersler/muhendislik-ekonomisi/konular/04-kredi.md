# Kredi, taksit ve ertelemeli ödeme

Kredi, kiralama ve tahvil gibi işlemlerde ödemelerin nasıl yapılacağı bir **ödeme planıyla** belirlenir. Bu konu 2026 finalinde konut kredisi sorusu olarak çıktı.

## Ödeme planı türleri

1. Anapara ve faiz **vade sonunda** tek seferde ödenir: $F = P(1+i)^n$.
2. Faiz **her yıl** ödenir, anapara vade sonunda ödenir (tahvil tipi).
3. Anapara ve faiz **eşit taksitlerle** ödenir (anüite, konut kredisi tipi): $A = P(A/P,i,n)$.
4. Anapara her yıl **eşit parçalarla** ödenir, faiz kalan borç üzerinden hesaplanır. Bu durumda taksitler giderek azalır.
5. Anapara ara dönemde ve vade sonunda iki parça hâlinde, faiz ise belli aralıklarla ödenir.

Bu planların hepsi verilen faiz oranında **eşdeğerdir**, yani bugünkü değerleri aynıdır. Ancak toplam ödenen TL miktarları farklıdır.

## Eşit taksit (anüite)

$$
\boxed{A = P\,\frac{i(1+i)^n}{(1+i)^n - 1}}
$$

Aylık taksitte $i$ **aylık** oran, $n$ **ay** sayısı alınır. Yıllık nominal oran verilmişse aylık oran $r/12$'dir.

Her taksit iki parçadan oluşur: **faiz** = kalan borç × $i$, **anapara** = taksit − faiz. Başta taksitin çoğu faize gider; sona doğru anapara payı artar.

> **Örnek:** 1.000.000 TL, %15 yıllık faiz, 5 eşit yıllık taksit: $A = 1\,000\,000(A/P,15,5) = 298\,316$ TL.
>
> | Yıl | Başta borç | Faiz | Anapara | Taksit |
> |---|---|---|---|---|
> | 1 | 1.000.000 | 150.000 | 148.316 | 298.316 |
> | 2 | 851.684 | 127.753 | 170.563 | 298.316 |
> | 3 | 681.122 | 102.168 | 196.147 | 298.316 |
> | 4 | 484.974 | 72.746 | 225.569 | 298.316 |
> | 5 | 259.405 | 38.911 | 259.405 | 298.316 |
>
> Son taksitteki anapara payı, kalan borca tam olarak eşittir; borç sıfırlanır.

## Ertelemeli (ödemesiz dönemli) kredi

Kredi bugün alınır ama ilk taksit $k$ dönem **sonra** başlar. Ödemesiz dönemde de faiz işlemeye devam eder, borç büyür:

1. Borcu ödemesiz dönemin sonuna taşı: $P_k = P(1+i)^k$
2. Bu tutarı $n$ eşit taksite böl: $A = P_k(A/P,i,n)$

$$
\boxed{A = P(1+i)^k\,(A/P,i,n)}
$$

İlk taksit $k+1$. dönemde, son taksit $k+n$. dönemde ödenir. ($P_k$, ilk taksitten **bir dönem önce** bulunur; [Faktörler](#/ders/muhendislik-ekonomisi/03-faktorler) konusundaki kural.)

<div data-arac="kredi"></div>

### Sınav sorusu (Final 2026): ertelemeli konut kredisi

*Bir aile konut alımı için aylık %2 faizle 1.500.000 TL kredi kullanıyor. Geri ödemeye 12 ay sonra başlayacak ve bu tarihten itibaren 60 eşit ödeme yapacak.*

**a) Aylık taksit:**

$$
P_{12} = 1\,500\,000(1{,}02)^{12} = 1\,500\,000(1{,}268242) = 1\,902\,363 \text{ TL}
$$

$$
(A/P,2,60) = \frac{0{,}02(1{,}02)^{60}}{(1{,}02)^{60} - 1} = 0{,}028768
$$

$$
A = 1\,902\,363 \times 0{,}028768 = \mathbf{54\,727} \text{ TL/ay}
$$

İlk taksit 13. ayın sonunda, son taksit 72. ayın sonunda ödenir.

**b) Ev 1.500.000 TL kredi + 2.500.000 TL özkaynakla alındı. 72. ayın sonunda kaç TL'ye satılırsa zarar edilmez?**

Satış fiyatı, eve yapılan bütün harcamaların **72. aydaki değerine** eşit olmalıdır. Özkaynağın fırsat maliyeti de aynı oran (%2/ay) ile hesaplanır.

- Özkaynak: $2\,500\,000(F/P,2,72) = 2\,500\,000(4{,}161140) = 10\,402\,851$ TL
- Taksitler (son taksit 72. ayda): $54\,727(F/A,2,60) = 6\,241\,711$ TL

$$
F_{72} = 10\,402\,851 + 6\,241\,711 = \mathbf{16\,644\,562} \text{ TL}
$$

> **Kısa yol:** Kredinin taksitleri, %2 faizde bugünkü 1.500.000 TL'ye eşdeğerdir. Bu yüzden toplam maliyet doğrudan $4\,000\,000(1{,}02)^{72} = 16\,644\,562$ TL bulunur.

**c) Alış fiyatı üzerinden %20 kâr için satış fiyatı:**

$$
1{,}20 \times 16\,644\,562 = \mathbf{19\,973\,474} \text{ TL}
$$

> **Yorum notu:** "12 ay sonra başlayacak" ifadesi, ilk ödemenin 13. ayda yapıldığı şeklinde yorumlandı. Bu yorumla son ödeme tam olarak sorudaki 72. aya denk gelir. İlk ödeme 12. ayda yapılsaydı $A = 1\,500\,000(1{,}02)^{11}(A/P,2,60) = 53\,654$ TL olurdu.

## Kalan borç

$t$ taksit ödendikten sonra kalan borç, **kalan taksitlerin bugünkü değeridir**:

$$
B_t = A(P/A,i,n-t)
$$

Krediyi erken kapatmak isteyen kişi bu tutarı öder.
