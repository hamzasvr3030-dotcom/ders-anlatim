## Elektrik benzetimi

Fourier kanunu Ohm kanununa benzer:

$$
I = \frac{U_1 - U_2}{R} \qquad\longleftrightarrow\qquad \dot Q = \frac{T_1 - T_2}{R_{ısıl}}
$$

Sıcaklık farkı **potansiyel**, ısı akışı **akım**, ısıl direnç **direnç** gibi davranır.

| Direnç | İfade |
|---|---|
| Düzlem duvarda iletim | $R_{iletim} = \dfrac{L}{kA}$ |
| Taşınım | $R_{taşınım} = \dfrac{1}{hA}$ |
| Silindirde iletim | $R = \dfrac{\ln(r_2/r_1)}{2\pi kL}$ (Konu 5) |

Birim: K/W (= °C/W).

## Seri bağlı dirençler

Isı katmanlardan **sırayla** geçiyorsa dirençler toplanır.

**İki katmanlı duvar:**

$$
R_{top} = \frac{L_1}{k_1A} + \frac{L_2}{k_2A}, \qquad \dot Q = \frac{T_1 - T_2}{R_{top}}
$$

**İki tarafında akışkan bulunan duvar:**

$$
\boxed{\dot Q = \frac{T_{\infty,1} - T_{\infty,2}}{\dfrac{1}{h_1A} + \dfrac{L}{kA} + \dfrac{1}{h_2A}}}
$$

Ara yüzey sıcaklıkları, herhangi bir direncin iki ucundan bulunur. Örneğin iç yüzey: $T_1 = T_{\infty,1} - \dot Q\,R_{taşınım,1}$.

## Paralel bağlı dirençler

Isı yan yana duran iki malzemeden **aynı anda** geçiyorsa (aynı $L$, farklı $A$):

$$
\frac{1}{R_{top}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{k_1A_1 + k_2A_2}{L}
\quad\Longrightarrow\quad
\dot Q = \frac{T_1 - T_2}{L/(k_1A_1 + k_2A_2)}
$$

> **Pratik:** Pencere, duvar, boru yalıtımı gibi problemlerde önce **direnç devresini çiz**, sonra toplam direnci bul. Hatanın büyük kısmı yanlış devreden gelir.

## Isı üretimli düzlem duvar

Sürekli rejimde $\dfrac{d^2T}{dx^2} = -\dfrac{\dot g}{k}$ çözülür:

$$
T(x) = -\frac{\dot g}{2k}x^2 + C_1x + C_2
$$

Sabitler sınır şartlarından bulunur (Konu 3). Bir yüzü yalıtılmış duvarda üretilen bütün ısı diğer yüzden çıkar: $\dot Q = \dot g\,A\,L$.

> **Kaynak:** El yazısı ders notları, [s. 22–23](../pdf/ders-notlari-1.pdf#page=22).
