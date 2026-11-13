# Akışkan kinematiği

Kinematik, akışkan hareketini doğuran kuvvetlere bakmadan **hareketin kendisini** tanımlar.

## Lagrange ve Euler tanımlamaları

- **Lagrange:** Tek tek akışkan parçacıklarını takip eder (bilardo topları gibi). Akışkanda zordur.
- **Euler:** Uzayda sabit bir **akış alanı** tanımlar; hız, basınç gibi alan değişkenlerini konum ve zamanın fonksiyonu olarak yazar: $\vec V(x, y, z, t)$. Akışkanlar mekaniğinde genellikle bu kullanılır.

## İvme ve maddesel türev

Euler tanımlamasında bir parçacığın ivmesi, hem zamana bağlı değişimden hem de parçacığın farklı hızlı bölgelere taşınmasından gelir:

$$
\vec a = \frac{D\vec V}{Dt} = \underbrace{\frac{\partial\vec V}{\partial t}}_{\text{yerel}} + \underbrace{(\vec V\cdot\nabla)\vec V}_{\text{taşınım (advektif)}}
$$

$$
a_x = \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z}
$$

> **Sürekli akışta bile ivme olabilir.** Daralan bir lülede akış sürekli olsa da parçacık hızlanır (taşınım ivmesi).

Herhangi bir özellik için **maddesel (toplam) türev:** $\dfrac{D}{Dt} = \dfrac{\partial}{\partial t} + \vec V\cdot\nabla$.

## Akış görselleştirme

| Çizgi | Tanım |
|---|---|
| **Akım çizgisi** | Her noktada yerel hız vektörüne teğet olan eğri: $\dfrac{dx}{u} = \dfrac{dy}{v}$ |
| **Yörünge çizgisi** | Bir parçacığın izlediği gerçek yol |
| **Duman (iz) çizgisi** | Belirli bir noktadan sırayla geçen parçacıkların anlık konumları |
| **Zaman çizgisi** | Aynı anda işaretlenen komşu parçacıkların oluşturduğu çizgi |

> **Sürekli akışta** akım çizgisi, yörünge çizgisi ve duman çizgisi **çakışır.**

## Akışkan elemanının hareketi ve şekil değiştirmesi

Bir akışkan elemanı dört temel hareket yapar: **öteleme, dönme, doğrusal şekil değiştirme, açısal (kayma) şekil değiştirme.**

**Hacimsel şekil değiştirme hızı:**

$$
\frac{1}{V}\frac{DV}{Dt} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = \nabla\cdot\vec V
$$

Sıkıştırılamaz akışta bu ifade **sıfırdır**.

## Girdaplılık (vortisite) ve dönümlülük

$$
\vec\zeta = \nabla\times\vec V = 2\vec\omega
$$

2-boyutlu ($xy$) akışta: $\zeta_z = \dfrac{\partial v}{\partial x} - \dfrac{\partial u}{\partial y}$

- $\vec\zeta \ne 0$: **dönümlü (rotasyonel)** akış. Sınır tabakalar, iz bölgeleri.
- $\vec\zeta = 0$: **dönümsüz (irrotasyonel)** akış. Duvarlardan uzak serbest akış bölgeleri.

> Kasırganın büyük bölümü aslında dönümsüzdür; yalnızca merkezi (fırtınanın gözü) dönümlüdür.

**Sirkülasyon:** $\Gamma = \oint_C \vec V\cdot d\vec s = \int_A \vec\zeta\cdot\vec n\,dA$ (Stokes teoremi).

## Reynolds taşınım teoremi (RTT)

Sistem için yazılan korunum yasalarını kontrol hacmine çevirir. $B$ herhangi bir yaygın özellik, $b = B/m$:

$$
\boxed{\frac{dB_{sis}}{dt} = \frac{d}{dt}\int_{KH}\rho b\,dV + \int_{KY}\rho b\,(\vec V_r\cdot\vec n)\,dA}
$$

Sistemdeki değişim = kontrol hacmindeki birikim + kontrol yüzeyinden net çıkış.

- $B = m$, $b = 1$ → kütle korunumu
- $B = m\vec V$, $b = \vec V$ → momentum denklemi
- $B = E$, $b = e$ → enerji denklemi
