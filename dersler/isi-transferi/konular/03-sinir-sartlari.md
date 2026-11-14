İkinci mertebeden diferansiyel denklemin çözümünde iki sabit ($C_1$, $C_2$) çıkar. Bunları bulmak için her yönde **iki sınır şartı** gerekir. Zamana bağlı problemlerde ayrıca bir **başlangıç şartı** ($t = 0$'da $T = T_i$) yazılır.

## 1. Belirli yüzey sıcaklığı

| Düzlem duvar | Silindir / küre |
|---|---|
| $T(0) = T_1$, $\;T(L) = T_2$ | $T(a) = T_1$, $\;T(b) = T_2$ |

## 2. Belirli ısı akısı

$$
x = 0:\; -k\frac{dT}{dx}(0) = q_0, \qquad x = L:\; -k\frac{dT}{dx}(L) = q_L
$$

Silindirde aynı şekilde $r = a$ ve $r = b$'de yazılır.

## 3. Yalıtım (adyabatik yüzey) ve simetri

Yalıtılmış yüzeyden ısı geçmez:

$$
\dot Q = -kA\frac{dT}{dx} = 0 \quad\Longrightarrow\quad \frac{dT}{dx} = 0
$$

> **İpucu:** Simetrik bir problemde **orta düzlem** de yalıtılmış yüzey gibi davranır ($dT/dx = 0$). Dolu silindirin merkezinde de $dT/dr\,|_{r=0} = 0$ yazılır (sıcaklık sonlu olmalı).

## 4. Taşınım sınır şartı

Yüzeye iletimle gelen ısı, akışkana taşınımla gider:

$$
x = 0:\; h_1\left[T_{\infty,1} - T(0)\right] = -k\frac{dT}{dx}(0), \qquad
x = L:\; -k\frac{dT}{dx}(L) = h_2\left[T(L) - T_{\infty,2}\right]
$$

Newton'un soğuma yasası: $\dot Q = hA(T_s - T_\infty)$; $h$: taşınım katsayısı (W/m²·K).

## 5. Işınım sınır şartı

$$
-k\frac{dT}{dx} = \varepsilon\,\sigma\left(T_s^4 - T_{çevre}^4\right)
$$

$\sigma = 5{,}67\times10^{-8}$ W/m²·K⁴, sıcaklıklar **kelvin** olmalı.

## 6. Ara yüzey şartı

İki farklı malzemenin temas yüzeyinde ($x = x_i$):

$$
T_1(x_i) = T_2(x_i), \qquad -k_1\frac{dT_1}{dx}\Big|_{x_i} = -k_2\frac{dT_2}{dx}\Big|_{x_i}
$$

Sıcaklık ve ısı akısı süreklidir.

> **Kaynak:** El yazısı ders notları, [s. 24–26](../pdf/ders-notlari-1.pdf#page=24).
