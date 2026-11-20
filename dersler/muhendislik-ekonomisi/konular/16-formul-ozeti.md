# Formül özeti (sınav kâğıdı)

## Faiz

| Konu | Formül |
|---|---|
| Basit faiz | $F = P(1 + in)$ |
| Kırık faiz (gün) | $F = P(1 + i\,g/360)$ |
| Bileşik faiz | $F = P(1 + i)^n$ |
| Bileşik faizde oran | $i = (F/P)^{1/n} - 1$ |
| Bileşik faizde süre | $n = \ln(F/P)/\ln(1 + i)$ |
| Efektif faiz | $i_e = (1 + r/m)^m - 1$ |
| Sürekli bileşik faiz | $F = Pe^{rn}$, $\;i_e = e^r - 1$ |
| Reel faiz | $1 + i_n = (1 + i_r)(1 + f)$ |
| Depolu faiz | $i_g = i/(1 - d)$ |
| Peşin faiz | $i_g = i/(1 - i)$ |

## Faiz faktörleri

| Faktör | Formül |
|---|---|
| $(F/P,i,n)$ | $(1 + i)^n$ |
| $(P/F,i,n)$ | $1/(1 + i)^n$ |
| $(A/P,i,n)$ | $\dfrac{i(1 + i)^n}{(1 + i)^n - 1}$ |
| $(P/A,i,n)$ | $\dfrac{(1 + i)^n - 1}{i(1 + i)^n}$ |
| $(A/F,i,n)$ | $\dfrac{i}{(1 + i)^n - 1}$ |
| $(F/A,i,n)$ | $\dfrac{(1 + i)^n - 1}{i}$ |
| Faktör ilişkisi | $(A/P) = (A/F) + i$ |
| Gradyan $(P/G,i,n)$ | $\dfrac{(1 + i)^n - in - 1}{i^2(1 + i)^n}$ |
| Kapitalize maliyet | $P = A/i$ |

## Kredi

| Konu | Formül |
|---|---|
| Eşit taksit | $A = P(A/P,i,n)$ |
| Ertelemeli kredi ($k$ dönem ödemesiz) | $A = P(1 + i)^k(A/P,i,n)$ |
| Kalan borç ($t$ taksitten sonra) | $B_t = A(P/A,i,n - t)$ |

## Proje değerleme

| Yöntem | Formül |
|---|---|
| Geri ödeme süresi (sabit gelir) | $n = I/K$ |
| NBD | $NBD = -I + A(P/A,i,n) + H(P/F,i,n)$ |
| Maliyetlerin bugünkü değeri | $BD = I + C(P/A,i,n) - H(P/F,i,n)$ |
| EDYM | $EDYM = I(A/P,i,n) + C - H(A/F,i,n)$ |
| NGD ve YENH | $NGD = NBD(F/P)$, $\;YENH = NBD(A/P)$ |
| İKO enterpolasyonu | $r = r_1 + (r_2 - r_1)\dfrac{NBD_1}{NBD_1 - NBD_2}$ |
| Fayda/maliyet | $F/M = BD_{gelir}/BD_{maliyet}$ |

## Amortisman

| Yöntem | Formül |
|---|---|
| Normal (doğrusal) | $D = (I - H)/n$ |
| Azalan bakiyeler | $D_t = (2/n)\,DD_{t-1}$ |
| Vergi sonrası nakit akımı | $NA = (G - C)(1 - T) + T\cdot D$ |

## Başabaş ve alternatif seçimi

| Konu | Formül |
|---|---|
| Toplam maliyet | $TM = F + vQ$ |
| Başabaş noktası | $x_0 = f/(p - v)$ |
| İstenen kâr için miktar | $x_K = (f + K)/(p - v)$ |
| Kapasite kullanım oranı | $KKO_0 = x_0/X = f/(R - V)$ |
| İki alternatifin kesişimi | $Q^* = (F_2 - F_1)/(v_1 - v_2)$ |
| Beklenen değer | $E = \sum p_kX_k$ |

## Yer seçimi

| Konu | Formül |
|---|---|
| Ağırlıklı puan | $S_j = \sum_k w_kp_{jk}$, $\;\sum w_k = 1$ |
| Ağırlık merkezi | $\bar x = \sum x_kQ_k/\sum Q_k$ |

## İş ölçümü

| Konu | Formül |
|---|---|
| Ortalama süre (anormal değer atılır) | $\bar t = \sum t/n$ |
| Normal süre | $NS = \bar t\times\text{tempo}$ (%10 hızlı → 1,10; %15 yavaş → 0,85) |
| Standart süre | $SS = NS/(1 - \text{tolerans})$ |

## En küçük kareler

| Konu | Formül |
|---|---|
| Eğim | $b = \dfrac{n\sum XY - \sum X\sum Y}{n\sum X^2 - (\sum X)^2}$ |
| Kesim noktası | $a = \bar Y - b\bar X$ |
| Korelasyon | $r = \dfrac{n\sum XY - \sum X\sum Y}{\sqrt{[n\sum X^2 - (\sum X)^2][n\sum Y^2 - (\sum Y)^2]}}$ |

## CPM / PERT

| Konu | Formül |
|---|---|
| Bolluk | $TB = GB - EB = GS - ES$ |
| PERT süresi | $t_e = (a + 4m + b)/6$ |
| PERT varyansı | $\sigma^2 = ((b - a)/6)^2$ |
| Sıkıştırma maliyeti | $(M_h - M_n)/(t_n - t_h)$ |
