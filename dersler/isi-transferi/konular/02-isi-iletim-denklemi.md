## Tek boyutlu ısı iletim denkleminin çıkarılışı

Kesit alanı $A$, kalınlığı $\Delta x$ olan bir eleman alalım. İçinde $\dot g$ (W/m³) kadar ısı üretiliyor olsun. Enerji dengesi:

$$
E_g - E_ç + E_{üretilen} = E_{depolanan}
$$

| Terim | İfade |
|---|---|
| Giren ısı | $\dot Q_x$ |
| Çıkan ısı | $\dot Q_{x+\Delta x}$ |
| Üretilen | $\dot g\,A\,\Delta x$ |
| Depolanan | $\rho\,A\,\Delta x\,c\,\dfrac{\partial T}{\partial t}$ |

$\rho$: yoğunluk (kg/m³), $c$: özgül ısı (J/kg·K). Katı ve sıvılarda $c_p = c_v = c$.

Denkleme koyup $A\,\Delta x$'e bölersek ve $\Delta x \to 0$ alırsak:

$$
-\frac{1}{A}\frac{\partial}{\partial x}(A\,q) + \dot g = \rho c\frac{\partial T}{\partial t}
\quad\Longrightarrow\quad
\frac{1}{A}\frac{\partial}{\partial x}\left(A\,k\frac{\partial T}{\partial x}\right) + \dot g = \rho c\frac{\partial T}{\partial t}
$$

Alan sabitse (düzlem duvar):

$$
\boxed{\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) + \dot g = \rho c\frac{\partial T}{\partial t}}
$$

## Üç boyutlu biçim

$$
\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) + \frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot g = \rho c\frac{\partial T}{\partial t}
$$

$k$ sabitse:

$$
\boxed{\nabla^2 T + \frac{\dot g}{k} = \frac{1}{\alpha}\frac{\partial T}{\partial t}}, \qquad \nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}
$$

**Isıl yayınım katsayısı** (ısının katı içinde yayılma hızı):

$$
\alpha = \frac{k}{\rho c}\ \left[\frac{\text{m}^2}{\text{s}}\right]
$$

> **Not:** Defterde $\alpha$ için "ısı yalıtım katsayısı" yazıyor; doğru adı **ısıl yayınım (difüzivite) katsayısıdır**. Büyük $\alpha$, ısının malzemede hızlı yayıldığı anlamına gelir.

## Özel durumlar

| Durum | Denklem |
|---|---|
| Sürekli rejim (zamanla değişim yok) | $\nabla^2T + \dfrac{\dot g}{k} = 0$ |
| Isı üretimi yok, zamana bağlı | $\nabla^2T = \dfrac{1}{\alpha}\dfrac{\partial T}{\partial t}$ |
| Isı üretimi yok, sürekli rejim | $\nabla^2T = 0$ (Laplace) |

## Silindirik ve küresel koordinatlar (tek boyutlu, radyal)

Tek bir genel formla yazılabilir:

$$
\frac{1}{r^n}\frac{\partial}{\partial r}\left(r^n k\frac{\partial T}{\partial r}\right) + \dot g = \rho c\frac{\partial T}{\partial t}
$$

| Koordinat | $n$ | Denklem |
|---|---|---|
| Kartezyen ($r \to x$) | 0 | $\dfrac{\partial}{\partial x}\left(k\dfrac{\partial T}{\partial x}\right) + \dot g = \rho c\dfrac{\partial T}{\partial t}$ |
| Silindirik | 1 | $\dfrac{1}{r}\dfrac{\partial}{\partial r}\left(r\,k\dfrac{\partial T}{\partial r}\right) + \dot g = \rho c\dfrac{\partial T}{\partial t}$ |
| Küresel | 2 | $\dfrac{1}{r^2}\dfrac{\partial}{\partial r}\left(r^2k\dfrac{\partial T}{\partial r}\right) + \dot g = \rho c\dfrac{\partial T}{\partial t}$ |

> **Kaynak:** El yazısı ders notları, [s. 2–3](../pdf/ders-notlari-1.pdf#page=2).
