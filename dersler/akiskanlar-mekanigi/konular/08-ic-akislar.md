# İç akışlar (boru akışı)

## Reynolds sayısı ve akış rejimi

$$
\boxed{Re = \frac{\rho V_{ort}D}{\mu} = \frac{V_{ort}D}{\nu}}
$$

| $Re$ | Rejim |
|---|---|
| $\lesssim 2300$ | Laminer |
| $2300 – 4000$ | Geçiş |
| $\gtrsim 4000$ | Türbülanslı |

Dairesel olmayan kesitler için **hidrolik çap:** $D_h = 4A_c/p$ ($p$: ıslak çevre).

## Giriş bölgesi

Borunun girişinde hız profili gelişir; profilin artık değişmediği bölgeye **tam gelişmiş akış** denir. Hidrodinamik giriş uzunluğu:

$$
L_{h,laminer} \approx 0{,}05\,Re\,D, \qquad L_{h,türbülanslı} \approx 10D
$$

## Laminer akış (Hagen–Poiseuille)

Tam gelişmiş laminer akışta hız profili parabolik: $u(r) = 2V_{ort}\left(1 - \dfrac{r^2}{R^2}\right)$, $u_{max} = 2V_{ort}$.

$$
\Delta P = \frac{32\mu LV_{ort}}{D^2}, \qquad \dot V = \frac{\pi D^4\Delta P}{128\mu L}, \qquad \boxed{f = \frac{64}{Re}}
$$

## Basınç kaybı ve yük kaybı (Darcy–Weisbach)

$$
\boxed{\Delta P_L = f\,\frac{L}{D}\,\frac{\rho V^2}{2}}, \qquad \boxed{h_L = f\,\frac{L}{D}\,\frac{V^2}{2g}}
$$

$f$: Darcy sürtünme faktörü. Pompa gücü: $\dot W_{pompa} = \dot V\,\Delta P_L$.

## Türbülanslı akış ve Moody diyagramı

Türbülanslı akışta $f$, hem $Re$'ye hem **bağıl pürüzlülüğe** $\varepsilon/D$ bağlıdır.

**Colebrook denklemi** (örtük):

$$
\frac{1}{\sqrt f} = -2{,}0\log\left(\frac{\varepsilon/D}{3{,}7} + \frac{2{,}51}{Re\sqrt f}\right)
$$

**Haaland denklemi** (açık, %2 hata içinde):

$$
\frac{1}{\sqrt f} \cong -1{,}8\log\left[\frac{6{,}9}{Re} + \left(\frac{\varepsilon/D}{3{,}7}\right)^{1{,}11}\right]
$$

**Moody diyagramı** bu ilişkinin grafiğidir. Çok yüksek Re'de $f$ yalnızca $\varepsilon/D$'ye bağlıdır (tam pürüzlü bölge).

<div data-arac="moody"></div>

### Örnek – Türbülanslı akış

20 °C su ($\nu = 1{,}004\times10^{-6}$), Ø5 cm düzgün (pürüzsüz) boru, $V = 2$ m/s, $L = 100$ m:

$$
Re = \frac{2\cdot0{,}05}{1{,}004\times10^{-6}} = 99\,600\ (\text{türbülanslı}), \qquad f \approx 0{,}0180\ (\text{Colebrook})
$$

$$
h_L = 0{,}018\cdot\frac{100}{0{,}05}\cdot\frac{2^2}{2\cdot9{,}81} = 7{,}34\ \text{m}, \qquad \Delta P = \rho g h_L \approx 72\ \text{kPa}
$$

### Örnek – Laminer akış

Yağ ($\rho = 900$, $\mu = 0{,}1$ Pa·s), Ø2 cm boru, $V = 0{,}5$ m/s: $Re = 90$ (laminer), $f = 64/90 = 0{,}711$; metre başına basınç düşümü $32\mu V/D^2 = 4000$ Pa/m.

## Yerel (küçük) kayıplar

Vanalar, dirsekler, giriş-çıkışlar, genişleme-daralmalar:

$$
h_L = K_L\frac{V^2}{2g}, \qquad h_{L,toplam} = \left(f\frac{L}{D} + \sum K_L\right)\frac{V^2}{2g}
$$

| Eleman | $K_L$ (yaklaşık) |
|---|---|
| Keskin kenarlı giriş | 0,5 |
| Yuvarlatılmış giriş | 0,03 |
| Boru çıkışı (tanka) | $\alpha \approx 1{,}05$ |
| 90° dirsek (flanşlı, yumuşak) | 0,3 |
| Tam açık sürgülü vana | 0,2 |
| Tam açık glob vana | 10 |

**Ani genişleme:** $K_L = \alpha\left(1 - \dfrac{A_1}{A_2}\right)^2$

## Boru şebekeleri

- **Seri borular:** Debi aynı, yük kayıpları toplanır.
- **Paralel borular:** Her koldaki yük kaybı aynı, debiler toplanır.

**Pompalı sistemde çalışma noktası:** Pompa karakteristik eğrisi ile sistem eğrisinin ($h_{gerekli} = \Delta z + $ kayıplar) kesiştiği nokta.

## Debi ölçümü

Orifis, lüle ve venturi metreler basınç farkından debi verir: $\dot V = A_0C_d\sqrt{\dfrac{2(P_1 - P_2)}{\rho(1 - \beta^4)}}$, $\beta = d/D$. Ayrıca rotametre, türbin tipi, ultrasonik, elektromanyetik debimetreler kullanılır.
