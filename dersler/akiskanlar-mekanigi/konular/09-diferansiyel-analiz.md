# Diferansiyel akış analizi

Kontrol hacmi analizi toplam büyüklükleri (net kuvvet, debi) verir. **Diferansiyel analiz** ise akış alanındaki her noktada hız ve basıncı bulmayı amaçlar.

## Süreklilik denklemi

$$
\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\vec V) = 0
$$

**Sıkıştırılamaz akış:**

$$
\boxed{\nabla\cdot\vec V = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0}
$$

Silindirik koordinatlarda: $\dfrac{1}{r}\dfrac{\partial(ru_r)}{\partial r} + \dfrac{1}{r}\dfrac{\partial u_\theta}{\partial\theta} + \dfrac{\partial u_z}{\partial z} = 0$

> Verilen bir hız alanının fiziksel olarak mümkün olup olmadığını kontrol etmek için önce süreklilik denklemini sağlayıp sağlamadığına bak.

## Akım fonksiyonu

2-boyutlu sıkıştırılamaz akışta süreklilik denklemini **otomatik olarak** sağlayan fonksiyon:

$$
\boxed{u = \frac{\partial\psi}{\partial y}, \qquad v = -\frac{\partial\psi}{\partial x}}
$$

- $\psi$ = sabit eğrileri **akım çizgileridir.**
- İki akım çizgisi arasındaki birim derinlik başına hacimsel debi: $\dot V/b = \psi_2 - \psi_1$.
- Akım çizgileri birbirine yaklaştıkça hız artar.

## Momentum denklemi: Cauchy ve Navier–Stokes

Diferansiyel momentum denklemi (Cauchy): $\rho\dfrac{D\vec V}{Dt} = \rho\vec g + \nabla\cdot\sigma_{ij}$

Newton tipi, sıkıştırılamaz, sabit viskoziteli akışkan için **Navier–Stokes denklemi:**

$$
\boxed{\rho\frac{D\vec V}{Dt} = -\nabla P + \rho\vec g + \mu\nabla^2\vec V}
$$

$x$ bileşeni:

$$
\rho\left(\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z}\right) = -\frac{\partial P}{\partial x} + \rho g_x + \mu\left(\frac{\partial^2u}{\partial x^2} + \frac{\partial^2u}{\partial y^2} + \frac{\partial^2u}{\partial z^2}\right)
$$

Süreklilik + üç momentum denklemi = **4 denklem, 4 bilinmeyen** ($u$, $v$, $w$, $P$).

## Sınır koşulları

- **Kaymama:** Katı duvarda akışkan hızı = duvar hızı.
- **Giriş/çıkış:** Hız veya basınç belirtilir.
- **Simetri:** Simetri düzleminde normal türevler sıfırdır.
- **Serbest yüzey:** Basınç atmosfer basıncına eşit, kayma gerilmesi ≈ 0.

## Tam çözümler

**Couette akışı** (iki paralel levha, üstteki $V$ hızıyla hareket ediyor, basınç gradyeni yok):

$$
u(y) = V\frac{y}{h}, \qquad \tau = \mu\frac{V}{h}
$$

**Basınç gradyenli Couette akışı:**

$$
u(y) = V\frac{y}{h} + \frac{1}{2\mu}\frac{dP}{dx}\left(y^2 - hy\right)
$$

**Boruda tam gelişmiş laminer akış (Poiseuille):**

$$
u(r) = \frac{1}{4\mu}\frac{dP}{dx}\left(r^2 - R^2\right), \qquad V_{ort} = \frac{R^2}{8\mu}\left(-\frac{dP}{dx}\right)
$$

Bu sonuç, Bölüm 8'deki Hagen–Poiseuille bağıntısıyla aynıdır.

## Basınç alanının hesabı

Hız alanı bilinip süreklilik sağlanıyorsa, Navier–Stokes denklemleri $\partial P/\partial x$ ve $\partial P/\partial y$'yi verir. Bu iki ifade integre edilerek $P(x, y)$ bulunur. Karışık türevler eşit olmalıdır: $\dfrac{\partial^2P}{\partial x\partial y} = \dfrac{\partial^2P}{\partial y\partial x}$; eşit değilse hız alanı Navier–Stokes'u sağlamıyordur.
