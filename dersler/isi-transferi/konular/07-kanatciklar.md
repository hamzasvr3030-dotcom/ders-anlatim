Taşınımla aktarılan ısı $\dot Q = hA(T_s - T_\infty)$'dur. $h$ veya $T_s$'yi artırmak çoğu zaman zordur; en kolay yol **yüzey alanını** büyütmektir. Bu amaçla yüzeye eklenen ince çıkıntılara **kanatçık (genişletilmiş yüzey)** denir: radyatörler, motor blokları, elektronik soğutucular.

## Kanatçık denklemi

Kanadın $dx$ uzunluğundaki elemanında iletimle giren ısı = iletimle çıkan + yan yüzeyden taşınımla kaybolan:

$$
\dot Q_x = \dot Q_{x+dx} + h\,(P\,dx)\,(T - T_\infty)
$$

$P$: kanadın çevresi. $k$ ve $A$ sabitse:

$$
\frac{d^2T}{dx^2} - \frac{hP}{kA}(T - T_\infty) = 0
$$

$\theta = T - T_\infty$ ve $m^2 = \dfrac{hP}{kA}$ tanımlarıyla:

$$
\boxed{\frac{d^2\theta}{dx^2} - m^2\theta = 0}, \qquad \theta(x) = C_1e^{mx} + C_2e^{-mx} = C_3\cosh(mx) + C_4\sinh(mx)
$$

Dipte ($x = 0$) her zaman $\theta(0) = \theta_d = T_d - T_\infty$.

## 1) Sonsuz uzun kanat

Uçta $x \to \infty$: $T \to T_\infty$, yani $\theta \to 0$ → $C_1 = 0$:

$$
\boxed{\frac{T(x) - T_\infty}{T_d - T_\infty} = e^{-mx}}, \qquad \boxed{\dot Q = \theta_d\sqrt{hPkA}}
$$

## 2) Ucu yalıtılmış kanat

Uçta $d\theta/dx\,(L) = 0$:

$$
\boxed{\frac{\theta(x)}{\theta_d} = \frac{\cosh[m(L - x)]}{\cosh(mL)}}, \qquad \boxed{\dot Q = \theta_d\sqrt{hPkA}\,\tanh(mL)}
$$

## 3) Ucunda taşınım olan kanat

Uçta $-k\,d\theta/dx\,(L) = h\,\theta(L)$:

$$
\frac{\theta(x)}{\theta_d} = \frac{\cosh[m(L - x)] + \dfrac{h}{mk}\sinh[m(L - x)]}{\cosh(mL) + \dfrac{h}{mk}\sinh(mL)}
$$

$$
\dot Q = \theta_d\sqrt{hPkA}\;\frac{\sinh(mL) + \dfrac{h}{mk}\cosh(mL)}{\cosh(mL) + \dfrac{h}{mk}\sinh(mL)}
$$

> **Kısa yol:** Uçtaki taşınım, kanadı $L_c = L + A/P$ kadar uzatıp ucu yalıtılmış kabul ederek de hesaplanabilir (dikdörtgen kesitte $L_c = L + t/2$, silindirik iğnede $L_c = L + D/4$).

Hatırlatma: $\cosh u = \dfrac{e^u + e^{-u}}{2}$, $\;\sinh u = \dfrac{e^u - e^{-u}}{2}$, $\;\tanh u = \dfrac{\sinh u}{\cosh u}$.

<div data-arac="kanat"></div>

## Kanat verimi

$$
\boxed{\eta_{kanat} = \frac{\dot Q_{kanat}}{\dot Q_{ideal}}}, \qquad \dot Q_{ideal} = h\,A_{kanat}\,(T_d - T_\infty)
$$

$\dot Q_{ideal}$: kanadın bütün yüzeyi dip sıcaklığında olsaydı aktarılacak ısı. $A_{kanat}$: kanadın akışkana değen yüzey alanı. Verim her zaman 1'den küçüktür; değeri grafik veya tablolardan okunur. Dairesel disk kanatlar için grafik parametreleri:

$$
\frac{r_2 + t/2}{r_1}, \qquad \xi = \left(L + \frac{t}{2}\right)\sqrt{\frac{h}{kt}}
$$

## Kanatçık etkinliği

$$
\boxed{\varepsilon = \frac{\dot Q_{kanatlı}}{\dot Q_{kanatsız}}}
$$

$\varepsilon < 1$ ise kanat ısıyı **yalıtır**; kanat kullanmak ancak $\varepsilon$ belirgin biçimde büyükse (genellikle $\varepsilon > 2$) anlamlıdır. $k$ büyük, $h$ küçük olduğunda (gaz tarafında) kanatlar en etkilidir.

> **Kaynak:** El yazısı ders notları, [s. 12–21](../pdf/ders-notlari-1.pdf#page=12).
