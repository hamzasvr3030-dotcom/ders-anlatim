Isı transferi, **sıcaklık farkı nedeniyle** enerjinin bir yerden başka bir yere aktarılmasını inceler. Termodinamik bir sistemin ne kadar enerji aldığını söyler; ısı transferi bu aktarımın **ne kadar hızlı** olduğunu hesaplar.

## Dersin dayandığı dört temel yasa

1. Termodinamiğin I. yasası (enerjinin korunumu)
2. Termodinamiğin II. yasası (ısı kendiliğinden sıcaktan soğuğa akar)
3. Kütlenin korunumu yasası
4. Newton'un II. hareket yasası

Enerji dengesi her problemin başlangıç noktasıdır:

$$
E_g - E_ç = \Delta E_{sistem}
$$

$\Delta E_{sistem}$: sistemin depoladığı enerji.

## Fourier ısı iletim kanunu

Kalınlığı $L$, alanı $A$ olan bir levhanın iki yüzü $T_1 > T_2$ sıcaklığındaysa, levhadan geçen ısı sıcaklık farkı ve alanla doğru, kalınlıkla ters orantılıdır:

$$
\dot Q \propto \frac{A\,(T_1 - T_2)}{L} \quad\Longrightarrow\quad \boxed{\dot Q = k\,A\,\frac{T_1 - T_2}{L}}
$$

| Sembol | Anlamı | Birim |
|---|---|---|
| $\dot Q$ | Isı geçiş hızı (ısı miktarı) | W |
| $T$ | Sıcaklık | °C veya K |
| $k$ | Isı iletim katsayısı (malzemeye bağlı) | W/(m·K) = W/(m·°C) |
| $L$ | Levha kalınlığı | m |
| $A$ | Isı geçiş yüzey alanı | m² |

### Diferansiyel biçim

Levhanın içinde $\Delta x$ kalınlığında ince bir dilim alırsak $\dot Q = -kA\,\Delta T/\Delta x$ olur. $\Delta x \to 0$ limitinde:

$$
\boxed{\dot Q = -k\,A\,\frac{dT}{dx}} \qquad \boxed{q = \frac{\dot Q}{A} = -k\,\frac{dT}{dx}}\ \ [\text{W/m}^2]
$$

$q$: **ısı akısı** (birim alandan geçen ısı).

> **Eksi işaret neden var?** Isı, sıcaklığın **azaldığı** yönde akar. $T_1 > T_2$ ise $dT/dx < 0$ olur, $(-)\cdot(-) = +$ ve ısı $+x$ yönünde akar. $dT/dx > 0$ ise $q$ negatif çıkar: ısı $-x$ yönündedir.

> **Not:** Hesapta negatif bir $\dot Q$ bulursan bu yanlış değildir; ısının seçtiğin pozitif yönün **tersine** aktığını gösterir.

> **Kaynak:** El yazısı ders notları, [s. 1–2](../pdf/ders-notlari-1.pdf#page=1).
