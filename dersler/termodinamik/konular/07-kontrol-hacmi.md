# Kontrol hacimleri: kütle ve enerji korunumu

## Kütlenin korunumu

$$
\dot m = \rho\,V_{ort}\,A\ [\text{kg/s}], \qquad \dot V = V_{ort}A = \frac{\dot m}{\rho} = \dot m\,v\ [\text{m}^3/\text{s}]
$$

$$
\dot m_g - \dot m_ç = \frac{dm_{KH}}{dt}
$$

**Sürekli akışta:** $\sum\dot m_g = \sum\dot m_ç$. Tek giriş-çıkış: $\rho_1V_1A_1 = \rho_2V_2A_2$. Sıkıştırılamaz akışta: $V_1A_1 = V_2A_2$.

## Akış işi ve akan akışkanın enerjisi

Akışkanı kontrol hacmine itmek için gereken iş **akış işidir**:

$$
w_{akış} = Pv
$$

Akan akışkanın birim kütle başına toplam enerjisi:

$$
\theta = Pv + e = \boxed{h + \frac{V^2}{2} + gz}
$$

> Entalpi $h = u + Pv$, akış işini **zaten içerir**. Kontrol hacmi analizinde iç enerji yerine entalpi kullanmamızın sebebi budur.

## Sürekli akış enerji denklemi

$$
\dot E_g = \dot E_ç: \qquad \dot Q_g + \dot W_g + \sum\dot m\,\theta_g = \dot Q_ç + \dot W_ç + \sum\dot m\,\theta_ç
$$

Tek giriş-çıkışlı cihazda (sisteme verilen ısı, sistemin yaptığı iş pozitif):

$$
\boxed{\dot Q - \dot W = \dot m\left[h_2 - h_1 + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)\right]}
$$

## Sürekli akış cihazları

| Cihaz | Kabuller | Enerji denklemi |
|---|---|---|
| **Lüle** (hız ↑, basınç ↓) | $\dot Q \approx 0$, $\dot W = 0$ | $h_1 + \dfrac{V_1^2}{2} = h_2 + \dfrac{V_2^2}{2}$ |
| **Yayıcı / difüzör** (basınç ↑, hız ↓) | Aynı | Aynı |
| **Türbin** | $\Delta KE$, $\Delta PE$ ≈ 0 | $\dot W_ç = \dot m(h_1 - h_2)$ (adyabatik) |
| **Kompresör, pompa, fan** | | $\dot W_g = \dot m(h_2 - h_1) + \dot Q_ç$ |
| **Kısılma vanası** | $\dot Q = \dot W = 0$ | $h_2 \approx h_1$ (izentalpik) |
| **Karışma odası** | Adyabatik | $\dot m_1h_1 + \dot m_2h_2 = \dot m_3h_3$ |
| **Isı değiştirici** | Dışarıya adyabatik | $\dot m_A(h_{A,g} - h_{A,ç}) = \dot m_B(h_{B,ç} - h_{B,g})$ |
| **Boru ve kanal akışı** | | $\dot Q + \dot W_e = \dot m c_p (T_2 - T_1)$ |

> **Kısılma vanası:** Basınç büyük ölçüde düşer, genellikle sıcaklık da düşer (buzdolabının çalışma ilkesi). **İdeal gazda** $h = h(T)$ olduğundan sıcaklık değişmez.

## Çözümlü örnekler

**Bahçe hortumu.** 40 L'lik kova 50 s'de doluyor; fıskiye çıkışı Ø0,8 cm:

$$
\dot V = 0{,}8\ \text{L/s}, \quad \dot m = 0{,}8\ \text{kg/s}, \quad V_ç = \frac{0{,}8\times10^{-3}}{\pi\,(0{,}004)^2} = 15{,}9\ \text{m/s}
$$

**Düdüklü tencere.** 150 kPa, 40 dakikada 0,6 L su eksiliyor; çıkış alanı 8 mm² (150 kPa: $v_f = 0{,}001053$, $v_g = 1{,}1594$, $u_g = 2519{,}2$, $h_g = 2693{,}1$):

$$
m = \frac{0{,}6\times10^{-3}}{0{,}001053} = 0{,}570\ \text{kg}, \quad \dot m = 2{,}37\times10^{-4}\ \text{kg/s}, \quad V = \frac{\dot m\,v_g}{A} = 34{,}3\ \text{m/s}
$$

$$
e_{akış} = Pv = h_g - u_g = 173{,}9\ \text{kJ/kg}, \qquad \dot E_{kütle} = \dot m\,h_g = 0{,}638\ \text{kW}
$$

**Lülede hava.** Hava 500 K, 10 m/s ile adyabatik lüleye giriyor, 200 m/s ile çıkıyor ($c_p = 1{,}005$):

$$
T_2 = T_1 - \frac{V_2^2 - V_1^2}{2c_p} = 500 - \frac{40\,000 - 100}{2\cdot1005} = 480{,}1\ \text{K}
$$

**Kompresör.** 0,5 kg/s hava adyabatik olarak 300 K'den 450 K'e sıkıştırılıyor:

$$
\dot W_g = \dot m\,c_p(T_2 - T_1) = 0{,}5\cdot1{,}005\cdot150 = 75{,}4\ \text{kW}
$$

**Karışma (duş T-bağlantısı).** 80 °C sıcak su ile 20 °C soğuk su karışıp 40 °C oluyor. Sıvılar için $h \approx cT$:

$$
y = \frac{\dot m_{sıcak}}{\dot m_{soğuk}} = \frac{h_3 - h_2}{h_1 - h_3} = \frac{40 - 20}{80 - 40} = 0{,}5
$$

## Zamana bağlı (dolma-boşalma) süreçler

$$
m_g - m_ç = (m_2 - m_1)_{KH}
$$

$$
Q_g + W_g + \sum m_g h_g - Q_ç - W_ç - \sum m_ç h_ç = (m_2u_2 - m_1u_1)_{KH}
$$

**Tankın boşalması.** Ø0,9 m tanktan Ø1,3 cm delikten su akıyor, $V = \sqrt{2gh}$. Seviyenin 1,2 m'den 0,6 m'ye inme süresi:

$$
t = \frac{\sqrt{h_0} - \sqrt{h}}{\sqrt{g/2}}\left(\frac{D_{tank}}{D_{jet}}\right)^2 = \frac{\sqrt{1{,}2} - \sqrt{0{,}6}}{\sqrt{9{,}81/2}}\left(\frac{0{,}9}{0{,}013}\right)^2 \approx 694\ \text{s} \approx 11{,}6\ \text{dk}
$$
