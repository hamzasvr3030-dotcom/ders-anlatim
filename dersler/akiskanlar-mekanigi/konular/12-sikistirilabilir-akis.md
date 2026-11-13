# Sıkıştırılabilir akış

Yoğunluk değişimlerinin önemli olduğu yüksek hızlı gaz akışları. Genellikle $Ma > 0{,}3$ için sıkıştırılabilirlik dikkate alınır.

## Durma (toplam) halleri

Akışkan adyabatik olarak durdurulursa ulaşacağı hal:

$$
h_0 = h + \frac{V^2}{2}, \qquad \boxed{T_0 = T + \frac{V^2}{2c_p}}
$$

İzentropik durdurulursa: $\dfrac{P_0}{P} = \left(\dfrac{T_0}{T}\right)^{k/(k-1)}$

## Ses hızı ve Mach sayısı

$$
\boxed{c = \sqrt{kRT}}, \qquad Ma = \frac{V}{c}
$$

300 K havada $c = 347$ m/s.

## İzentropik akış bağıntıları (ideal gaz)

$$
\frac{T_0}{T} = 1 + \frac{k-1}{2}Ma^2, \qquad
\frac{P_0}{P} = \left[1 + \frac{k-1}{2}Ma^2\right]^{k/(k-1)}, \qquad
\frac{\rho_0}{\rho} = \left[1 + \frac{k-1}{2}Ma^2\right]^{1/(k-1)}
$$

**Kritik haller** ($Ma = 1$, $k = 1{,}4$):

$$
\frac{T^*}{T_0} = 0{,}8333, \qquad \frac{P^*}{P_0} = 0{,}5283, \qquad \frac{\rho^*}{\rho_0} = 0{,}6339
$$

**Örnek:** Hava $Ma = 2$'de: $T_0/T = 1 + 0{,}2\cdot4 = 1{,}8$, $\;P_0/P = 1{,}8^{3{,}5} = 7{,}82$.

## Alan–hız ilişkisi

$$
\frac{dA}{A} = \frac{dP}{\rho V^2}\left(1 - Ma^2\right)
$$

| | Ses altı ($Ma < 1$) | Ses üstü ($Ma > 1$) |
|---|---|---|
| Daralan kanal | Hız artar | Hız azalır |
| Genişleyen kanal | Hız azalır | Hız artar |

> Ses altı akışı ses üstüne çıkarmak için **daralan-genişleyen (de Laval) lüle** gerekir. $Ma = 1$ yalnızca **boğazda** (en dar kesitte) olabilir.

$$
\frac{A}{A^*} = \frac{1}{Ma}\left[\frac{2}{k+1}\left(1 + \frac{k-1}{2}Ma^2\right)\right]^{(k+1)/(2(k-1))}
$$

## Daralan lülede akış ve tıkanma

Arka basınç $P_b$ düşürüldükçe debi artar. $P_b/P_0 = P^*/P_0 = 0{,}5283$ olunca çıkışta $Ma = 1$ olur; daha fazla düşürmek debiyi artırmaz: **tıkanmış (choked) akış.**

$$
\dot m_{max} = A^*P_0\sqrt{\frac{k}{RT_0}}\left(\frac{2}{k+1}\right)^{(k+1)/(2(k-1))}
$$

## Normal şok dalgası

Ses üstü akışta çok ince bir bölgede ani ve **tersinmez** değişim:

- Şoktan sonra akış **ses altıdır** ($Ma_2 < 1$).
- Basınç, sıcaklık ve yoğunluk **artar**; hız **azalır.**
- $T_0$ sabit kalır (adyabatik), $P_0$ **azalır** (entropi artar).

$$
Ma_2^2 = \frac{Ma_1^2 + 2/(k-1)}{\frac{2k}{k-1}Ma_1^2 - 1}, \qquad \frac{P_2}{P_1} = \frac{1 + kMa_1^2}{1 + kMa_2^2}
$$

**Örnek:** $Ma_1 = 2$ ($k = 1{,}4$): $Ma_2 = 0{,}577$, $P_2/P_1 = 4{,}5$.

**Eğik şoklar ve genleşme dalgaları:** Ses üstü akış bir kama üzerinden saptırıldığında eğik şok, dışbükey köşeden döndüğünde **Prandtl–Meyer genleşme dalgaları** oluşur.

## Isı transferli ve sürtünmeli akış

- **Rayleigh akışı:** Sürtünmesiz, ısı transferli sabit kesitli akış. Isıtma, akışı her iki taraftan $Ma = 1$'e doğru iter.
- **Fanno akışı:** Adyabatik, sürtünmeli sabit kesitli akış. Sürtünme de akışı $Ma = 1$'e doğru iter.
