# Viskoz dış akışlar: direnç ve kaldırma kuvveti

## Direnç (sürükleme) ve kaldırma

Akışkan bir cisme **basınç** ve **kayma gerilmesi** kuvvetleri uygular. Bileşke kuvvetin

- akış yönündeki bileşeni **direnç (sürükleme) kuvveti** $F_D$,
- akışa dik bileşeni **kaldırma kuvveti** $F_L$'dir.

$$
\boxed{F_D = C_D\,\frac12\rho V^2A}, \qquad \boxed{F_L = C_L\,\frac12\rho V^2A}
$$

$A$: genellikle **ön (izdüşüm) alan**; kanat profillerinde ise **planform alanı** (kanat alanı).

## Sürtünme ve basınç direnci

$$
C_D = C_{D,sürtünme} + C_{D,basınç}
$$

- **Sürtünme direnci:** Duvar kayma gerilmesinden doğar. İnce, akışa paralel cisimlerde baskındır (düz levha).
- **Basınç (şekil) direnci:** Akış ayrılması ve arkadaki düşük basınçlı **iz bölgesinden** doğar. Küt cisimlerde baskındır.

> **Aerodinamik şekillendirme:** Cismin arkasını uzatıp incelterek ayrılmayı geciktirmek basınç direncini büyük ölçüde azaltır, ama yüzey alanını artırarak sürtünme direncini biraz yükseltir.

## Düz levha üzerinde akış

Yerel Reynolds sayısı $Re_x = Vx/\nu$; geçiş $Re_{kr} \approx 5\times10^5$.

| | Laminer | Türbülanslı ($5\times10^5 < Re < 10^7$) |
|---|---|---|
| Yerel sürtünme katsayısı | $C_{f,x} = \dfrac{0{,}664}{\sqrt{Re_x}}$ | $C_{f,x} = \dfrac{0{,}059}{Re_x^{1/5}}$ |
| Ortalama (levha boyunca) | $C_f = \dfrac{1{,}328}{\sqrt{Re_L}}$ | $C_f = \dfrac{0{,}074}{Re_L^{1/5}}$ |

$$
F_D = C_f\,\frac12\rho V^2\,(b L)
$$

## Silindir ve küre üzerinde akış

- Düşük Re'de akış cisme yapışık kalır; Re arttıkça arkada **girdaplar**, sonra periyodik **Kármán girdap caddesi** oluşur.
- $10^3 < Re < 2\times10^5$ aralığında küre için $C_D \approx 0{,}5$ (silindir için ≈ 1,2) ve yaklaşık sabittir.
- $Re \approx 2\times10^5$ civarında sınır tabaka türbülansa geçer, ayrılma geriye kayar, iz daralır ve $C_D$ ani olarak düşer (**direnç krizi**). Golf toplarındaki çukurlar bu geçişi daha düşük hızda tetikler.

## Kaldırma kuvveti ve kanat profilleri

- Kanat profilinin alt yüzeyinde basınç yüksek, üst yüzeyinde düşüktür; bu basınç farkı kaldırma kuvveti oluşturur.
- **Hücum açısı** arttıkça $C_L$ artar; belirli bir açıdan sonra üst yüzeyde akış ayrılır ve kaldırma aniden düşer: **perdövites (stall).**
- **Flaplar** iniş-kalkışta $C_L$'yi artırır.
- Sonlu kanatlarda uçlardan **uç girdapları** oluşur ve **indüklenmiş direnç** doğar. Kanatçıklar (winglet) bu etkiyi azaltır.
- **Magnus etkisi:** Dönen top veya silindir akışta kaldırma kuvveti üretir.

**Uçuş koşulu:** Ağırlık = kaldırma kuvveti

$$
W = C_L\,\frac12\rho V^2A \;\Rightarrow\; V_{min} = \sqrt{\frac{2W}{\rho\,C_{L,max}\,A}}
$$

## Örnek – Otomobil direnci

$C_D = 0{,}3$, ön alan $A = 2{,}2$ m², hava $\rho = 1{,}2$ kg/m³, $V = 100$ km/h $= 27{,}8$ m/s:

$$
F_D = 0{,}3\cdot\frac12\cdot1{,}2\cdot27{,}8^2\cdot2{,}2 = 306\ \text{N}, \qquad \dot W = F_DV = 8{,}5\ \text{kW}
$$

Direnç hızın **karesiyle**, onu yenmek için gereken güç hızın **küpüyle** artar. Hız %10 artarsa güç ≈ %33 artar.
