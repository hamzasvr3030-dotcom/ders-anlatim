## Biot sayısı

$$
\boxed{Bi = \frac{R_{iletim}}{R_{taşınım}} = \frac{L_c/(kA)}{1/(hA)} = \frac{h\,L_c}{k}}
$$

Cismin içindeki iletim direnci ile yüzeydeki taşınım direncinin oranıdır (iç direnç / dış direnç).

| Durum | Anlamı | Hesap yöntemi |
|---|---|---|
| $Bi \to 0$ ($Bi < 0{,}1$) | İç direnç çok küçük, cisim içinde sıcaklık **düzgün** | **Toplu sistem** (lumped) |
| $Bi \to \infty$ | Yüzey direnci yok, yüzey anında $T_\infty$'a ulaşır | Yalnız iletim (Konu 9) |
| $Bi \approx 1$ | İki direnç benzer büyüklükte | İletim + taşınım (Konu 9) |

> **Not:** Defterde Biot sayısı "iletim direnci / yalıtım direnci" olarak yazılmış; payda **taşınım** direncidir.

## Toplu sistem analizi ($Bi < 0{,}1$)

Cisim içinde sıcaklık her an aynı ($T = T(t)$). Enerji dengesi: yüzeyden taşınımla kaybedilen ısı = iç enerjideki azalma:

$$
-hA_s(T - T_\infty) = \rho V c\,\frac{dT}{dt}
$$

$\theta = T - T_\infty$ ile değişkenlere ayırıp integral alınır, başlangıç şartı $t = 0$'da $T = T_i$:

$$
\boxed{\frac{T(t) - T_\infty}{T_i - T_\infty} = e^{-\frac{hA_s}{\rho Vc}\,t} = e^{-Bi\cdot Fo}}
$$

**Karakteristik uzunluk ve Fourier sayısı:**

$$
L_c = \frac{V}{A_s}, \qquad Fo = \frac{\alpha\,t}{L_c^2}, \qquad \frac{hA_s t}{\rho Vc} = Bi\cdot Fo
$$

| Geometri | $L_c = V/A_s$ |
|---|---|
| Kalınlığı $2L$ olan levha (iki yüzden) | $L$ (kalınlığın yarısı) |
| Uzun silindir (yarıçap $r$) | $r/2$ |
| Küre (yarıçap $r$) | $r/3$ |
| Kısa silindir, prizma vb. | $V/A_s$'yi doğrudan hesapla |

> **Dikkat:** Defterdeki iki örnekte (çelik çubuk ve biberon) $L_c$ yerine yarıçap $r$ kullanılmış. Bu, süreyi silindirde yaklaşık **iki kat** fazla çıkarır. Doğrusu $L_c = V/A_s$'dir; düzeltilmiş çözümler örneklerde.

$b = hA_s/(\rho Vc)$ (1/s) **zaman sabitinin** tersidir. $b$ büyüdükçe cisim çevre sıcaklığına daha hızlı ulaşır.

## Toplam aktarılan ısı

$$
Q = m\,c\,\left[T_i - T(t)\right]\ \ \text{(J)}, \qquad Q_{max} = m\,c\,(T_i - T_\infty)
$$

> **Kaynak:** El yazısı ders notları, [s. 28–30](../pdf/ders-notlari-1.pdf#page=28).
