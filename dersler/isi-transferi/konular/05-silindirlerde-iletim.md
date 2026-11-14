## Isı üretimli dolu silindir (tel)

Sürekli rejimde silindirik denklem:

$$
\frac{1}{r}\frac{d}{dr}\left(r\frac{dT}{dr}\right) + \frac{\dot g}{k} = 0
$$

İki kez integral alınırsa:

$$
r\frac{dT}{dr} = -\frac{\dot g r^2}{2k} + C_1 \qquad\Longrightarrow\qquad T(r) = -\frac{\dot g r^2}{4k} + C_1\ln r + C_2
$$

**Sınır şartları** (yarıçapı $a$ olan tel, yüzeyde taşınım):

1. $r = 0$'da $\dfrac{dT}{dr} = 0$ (merkezde sıcaklık sonlu) → $C_1 = 0$
2. $r = a$'da $-k\dfrac{dT}{dr} = h\left[T(a) - T_\infty\right]$

$$
\boxed{T(r) = \frac{\dot g\,(a^2 - r^2)}{4k} + \frac{\dot g\,a}{2h} + T_\infty}
\qquad
T_{merkez} = \frac{\dot g a^2}{4k} + \frac{\dot g a}{2h} + T_\infty
$$

Isı üretimi elektrik gücünden bulunur: $\dot g = \dfrac{P}{V} = \dfrac{P}{\pi a^2 L}$.

## Isı üretimi olmayan boş silindir

$$
\frac{d}{dr}\left(r\frac{dT}{dr}\right) = 0 \quad\Longrightarrow\quad T(r) = C_1\ln r + C_2
$$

$T(a) = T_1$, $T(b) = T_2$ şartlarıyla:

$$
C_1 = \frac{T_2 - T_1}{\ln(b/a)}, \qquad \boxed{\frac{T(r) - T_1}{T_2 - T_1} = \frac{\ln(r/a)}{\ln(b/a)}}
$$

Sıcaklık dağılımı **logaritmiktir** (düzlem duvardaki gibi doğrusal değildir).

**Aktarılan ısı** (boyu $H$):

$$
\dot Q = -k\,(2\pi rH)\frac{dT}{dr} = \frac{T_1 - T_2}{\dfrac{\ln(b/a)}{2\pi kH}}
\quad\Longrightarrow\quad
\boxed{R_{silindir} = \frac{\ln(r_2/r_1)}{2\pi kH}}
$$

## Çok katmanlı silindir (yalıtımlı boru)

İçte akışkan, sonra boru cidarı, sonra yalıtım, dışta akışkan:

$$
R_{top} = \frac{1}{h_i\,2\pi r_1H} + \frac{\ln(r_2/r_1)}{2\pi k_1H} + \frac{\ln(r_3/r_2)}{2\pi k_2H} + \frac{1}{h_d\,2\pi r_3H}
$$

$$
\dot Q = \frac{T_{\infty,i} - T_{\infty,d}}{R_{top}}
$$

> **İpucu:** "Birim uzunluk başına ısı kaybı" sorulursa $H = 1$ m al; sonuç W/m çıkar.

> **Dikkat:** Taşınım dirençlerinde **o yüzeyin** yarıçapını kullan: iç taşınımda $r_1$, dış taşınımda en dıştaki $r_3$.

> **Kaynak:** El yazısı ders notları, [s. 6–11](../pdf/ders-notlari-1.pdf#page=6).
