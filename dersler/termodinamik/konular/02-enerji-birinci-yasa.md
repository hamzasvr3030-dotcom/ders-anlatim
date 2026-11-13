# Enerji, ısı, iş ve birinci yasa

## Enerjinin biçimleri

- **Makroskopik:** Sistemin bir dış referansa göre sahip olduğu enerji: kinetik ve potansiyel.
- **Mikroskopik:** Moleküler yapıyla ilgili, referanstan bağımsız. Toplamına **iç enerji** $U$ denir: duyulur + gizli + kimyasal + nükleer.

$$
E = U + KE + PE = U + \frac{mV^2}{2} + mgz, \qquad e = u + \frac{V^2}{2} + gz
$$

> $V^2/2$ terimini kJ/kg'a çevirmek için **1000'e böl** (1 kJ/kg = 1000 m²/s²).

**Kütle debisi ve enerji debisi:**

$$
\dot m = \rho\,\dot V = \rho\,A\,V_{ort}, \qquad \dot E = \dot m\,e
$$

**Mekanik enerji** (bir türbinle tamamen işe dönüşebilen kısım), akan akışkan için:

$$
e_{mek} = \frac{P}{\rho} + \frac{V^2}{2} + gz
$$

## Isı

Sıcaklık farkı nedeniyle sistem ile çevresi arasında olan enerji geçişidir. Enerji yalnızca **sınırı geçerken** ısıdır; bir sistemin "ısısı" olmaz.

- **Adyabatik süreç:** $Q = 0$ (iyi yalıtım veya sıcaklık farkı yok)
- Isı geçiş yolları: **iletim**, **taşınım**, **ışınım**

## İş

Sıcaklık farkı **dışındaki** her enerji etkileşimi: hareket eden piston, dönen mil, sınırı geçen elektrik kablosu.

**Isı ve işin ortak özellikleri:** İkisi de sınır olgusudur; sistemin enerjisi vardır, ısısı ya da işi yoktur. İkisi de **yola bağlı** fonksiyonlardır (özellikler ise nokta fonksiyonudur):

$$
\int_1^2 \delta W = W_{12}\ (\neq W_2 - W_1), \qquad \int_1^2 dV = V_2 - V_1
$$

**İşaret kuralı (klasik):** Sisteme verilen ısı $+$, sistemin yaptığı iş $+$.

### İş türleri

| İş | Formül |
|---|---|
| Elektrik | $W_e = V I\,\Delta t$, $\;\dot W_e = VI = I^2R$ |
| Mil | $W_{mil} = 2\pi n T$, $\;\dot W_{mil} = 2\pi\dot n T$ |
| Yay | $W_{yay} = \tfrac12 k(x_2^2 - x_1^2)$ |
| Yükseltme | $W_g = mg(z_2 - z_1)$ |
| Hızlandırma | $W_a = \tfrac12 m(V_2^2 - V_1^2)$ |
| Sınır (P dV) | $W_s = \int P\,dV$ (Konu 5) |

## Birinci yasa: enerji dengesi

$$
\boxed{E_{giren} - E_{çıkan} = \Delta E_{sistem}}, \qquad \Delta E = \Delta U + \Delta KE + \Delta PE
$$

$$
E_g - E_ç = (Q_g - Q_ç) + (W_g - W_ç) + (E_{kütle,g} - E_{kütle,ç})
$$

Kapalı sistemde kütle terimi yoktur. **Çevrimde** $\Delta E = 0$, dolayısıyla $Q_{net} = W_{net}$.

## Verimler

$$
\eta = \frac{\text{istenen çıktı}}{\text{gerekli girdi}}
$$

| Cihaz | Verim |
|---|---|
| Yanma | $\eta_{yanma} = Q/HV$ |
| Jeneratör | $\eta_{jen} = \dot W_{elek,ç}/\dot W_{mil,g}$ |
| Motor | $\eta_{motor} = \dot W_{mil,ç}/\dot W_{elek,g}$ |
| Pompa | $\eta_{pompa} = \Delta\dot E_{mek,akışkan}/\dot W_{mil,g}$ |
| Türbin | $\eta_{türbin} = \dot W_{mil,ç}/\lvert\Delta\dot E_{mek,akışkan}\rvert$ |
| Pompa-motor | $\eta_{pompa}\,\eta_{motor}$ |
| Santral (toplam) | $\eta_{yanma}\,\eta_{ısıl}\,\eta_{jen}$ |

**HHV / LHV:** Yanma ürünlerindeki su tamamen yoğuşursa üst ısıl değer (HHV), buhar olarak kalırsa alt ısıl değer (LHV).

## Çözümlü örnekler

**Krank mili gücü.** $T = 200$ N·m, $\dot n = 4000$ dev/dak:

$$
\dot W = 2\pi\cdot\frac{4000}{60}\cdot200 = 83\,776\ \text{W} \approx 83{,}8\ \text{kW}
$$

**Rampada sabit hızla çıkış.** $m = 1200$ kg, $V = 90$ km/h, eğim 30°. Düşey hız $25\sin30° = 12{,}5$ m/s:

$$
\dot W_g = mg\,V_{düşey} = 1200\cdot9{,}81\cdot12{,}5 = 147\ \text{kW}
$$

**Hızlandırma.** 900 kg'lık araç 20 s'de 0 → 80 km/h:

$$
W_a = \tfrac12\cdot900\cdot(22{,}22)^2 = 222\ \text{kJ}, \qquad \dot W = 222/20 = 11{,}1\ \text{kW}
$$

**Soğutulan ve karıştırılan sıvı.** $U_1 = 800$ kJ, dışarı 500 kJ ısı, karıştırıcı 100 kJ iş veriyor:

$$
W_{mil,g} - Q_ç = U_2 - U_1 \;\Rightarrow\; 100 - 500 = U_2 - 800 \;\Rightarrow\; U_2 = 400\ \text{kJ}
$$

**20 W'lık fan 8 m/s üfleyebilir mi?** $\dot m = 1$ kg/s, sürekli çalışma: $\dot W = \dot m V^2/2$

$$
V_{max} = \sqrt{2\cdot20/1} = 6{,}3\ \text{m/s} < 8\ \text{m/s}
$$

İstek fiziksel olarak gerçekleşemez.

> **Isı mı, iş mi?** Elektrikli fırında direnç teli sistemin **içindeyse** sınırı elektronlar geçer: **iş**. Sistem yalnız fırın havasıysa enerji telden havaya sıcaklık farkıyla geçer: **ısı**. Cevap seçtiğin sınıra bağlıdır.
