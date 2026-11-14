$Bi > 0{,}1$ olduğunda cisim içindeki sıcaklık farkları ihmal edilemez; sıcaklık hem konuma hem zamana bağlıdır.

## Bi → ∞: yalnız iletim, değişkenlerine ayırma

$$
\frac{\partial^2T}{\partial x^2} = \frac{1}{\alpha}\frac{\partial T}{\partial t}, \qquad T(x, 0) = T_i,\quad T(0, t) = 0,\quad T(L, t) = 0
$$

$T(x, t) = X(x)\,\tau(t)$ yazılırsa iki ayrı adi denklem çıkar ($-\lambda^2$ ayırma sabiti):

$$
\frac{d^2X}{dx^2} + \lambda^2X = 0, \qquad \frac{d\tau}{dt} + \lambda^2\alpha\tau = 0
$$

$X = A\cos\lambda x + B\sin\lambda x$; $X(0) = 0 \Rightarrow A = 0$; $X(L) = 0 \Rightarrow \sin\lambda L = 0 \Rightarrow \lambda_n = n\pi/L$. $\;\tau = C e^{-\alpha\lambda^2t}$.

$$
T(x, t) = \sum_{n=1}^{\infty} B_n\sin(\lambda_nx)\,e^{-\alpha\lambda_n^2t}, \qquad B_n = \frac{2}{L}\int_0^L T_i\sin(\lambda_nx)\,dx
$$

($T_i$'nin Fourier sinüs serisine açılımı.)

## Bi ≈ 1: taşınımlı levha

Kalınlığı $2L$, iki yüzü $h$, $T_\infty$ ortamında; orta düzlem $x = 0$:

$$
T(x, 0) = T_i, \qquad \frac{\partial T}{\partial x}(0, t) = 0, \qquad -k\frac{\partial T}{\partial x}(L, t) = h\left[T(L, t) - T_\infty\right]
$$

$$
\frac{\theta(x, t)}{\theta_i} = 2\sum_{n=1}^{\infty}\frac{\sin(\lambda_nL)\cos(\lambda_nx)}{\lambda_nL + \sin(\lambda_nL)\cos(\lambda_nL)}\,e^{-\alpha\lambda_n^2t}, \qquad \lambda_nL\tan(\lambda_nL) = Bi
$$

(Defterde özdeğer denklemi $\cot(\lambda L) = \lambda L/Bi$ biçiminde yazılmış; ikisi aynıdır.)

## Heisler diyagramları

Bu seriler hazır diyagramlarla kullanılır. Levhada $Bi = hL/k$, $Fo = \alpha t/L^2$ ($L$: yarı kalınlık); silindir ve kürede $L$ yerine $r_0$:

| Diyagram | Okunan | Girdiler |
|---|---|---|
| Şekil 1 – merkez sıcaklığı | $\dfrac{T_0 - T_\infty}{T_i - T_\infty}$ | $Fo$ ve $1/Bi$ |
| Şekil 2 – konum düzeltmesi | $\dfrac{T - T_\infty}{T_0 - T_\infty}$ | $1/Bi$ ve $x/L$ (veya $r/r_0$) |
| Şekil 3 – aktarılan ısı | $\dfrac{Q}{Q_0}$ | $Bi^2Fo$ ve $Bi$ |

$$
Q_0 = \rho\,c\,V\,(T_i - T_\infty) \qquad (\text{levhada birim alan için } V = 2L\cdot1)
$$

**Kullanım sırası:** Önce merkez sıcaklığı $T_0$ (Şekil 1), sonra istenen noktadaki sıcaklık (Şekil 2 ile $T_0$'a göre), en son ısı (Şekil 3).

## Diyagram yerine tek terimli çözüm ($Fo > 0{,}2$)

$Fo > 0{,}2$ iken serinin ilk terimi yeterlidir ve diyagram okumaktan daha hassastır:

$$
\theta_{0} = \frac{T_0 - T_\infty}{T_i - T_\infty} = A_1e^{-\lambda_1^2Fo}
$$

| Geometri | $\dfrac{T - T_\infty}{T_i - T_\infty}$ | $\dfrac{Q}{Q_{max}}$ |
|---|---|---|
| Levha | $\theta_0\cos(\lambda_1x/L)$ | $1 - \theta_0\dfrac{\sin\lambda_1}{\lambda_1}$ |
| Silindir | $\theta_0J_0(\lambda_1r/r_0)$ | $1 - 2\theta_0\dfrac{J_1(\lambda_1)}{\lambda_1}$ |
| Küre | $\theta_0\dfrac{\sin(\lambda_1r/r_0)}{\lambda_1r/r_0}$ | $1 - 3\theta_0\dfrac{\sin\lambda_1 - \lambda_1\cos\lambda_1}{\lambda_1^3}$ |

**Katsayılar** (Python ile özdeğer denklemlerinden hesaplandı; Çengel Tablo 4-2 ile aynı):

| Bi | Levha λ₁ | Levha A₁ | Silindir λ₁ | Silindir A₁ | Küre λ₁ | Küre A₁ |
|---|---|---|---|---|---|---|
| 0,01 | 0,0998 | 1,0017 | 0,1412 | 1,0025 | 0,1730 | 1,0030 |
| 0,02 | 0,1410 | 1,0033 | 0,1995 | 1,0050 | 0,2445 | 1,0060 |
| 0,05 | 0,2218 | 1,0082 | 0,3143 | 1,0124 | 0,3854 | 1,0150 |
| 0,1 | 0,3111 | 1,0161 | 0,4417 | 1,0246 | 0,5423 | 1,0298 |
| 0,2 | 0,4328 | 1,0311 | 0,6170 | 1,0483 | 0,7593 | 1,0592 |
| 0,5 | 0,6533 | 1,0701 | 0,9408 | 1,1143 | 1,1656 | 1,1441 |
| 1 | 0,8603 | 1,1191 | 1,2558 | 1,2071 | 1,5708 | 1,2732 |
| 2 | 1,0769 | 1,1785 | 1,5994 | 1,3384 | 2,0288 | 1,4793 |
| 5 | 1,3138 | 1,2402 | 1,9898 | 1,5029 | 2,5704 | 1,7870 |
| 10 | 1,4289 | 1,2620 | 2,1795 | 1,5677 | 2,8363 | 1,9249 |

<div data-arac="heisler"></div>

> **Dikkat:** Heisler diyagramlarında $Bi$, **yarı kalınlık** $L$ (veya $r_0$) ile tanımlanır; toplu sistemdeki $L_c = V/A$ ile karıştırma.

> **Kaynak:** El yazısı ders notları, [s. 31–38](../pdf/ders-notlari-1.pdf#page=31).
