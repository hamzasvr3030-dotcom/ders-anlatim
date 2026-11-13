# Formül özeti

## Birimler

$1\ \text{MPa} = 1\ \text{N/mm}^2$ · $1\ \text{GPa} = 10^3\ \text{MPa}$ · $1\ \text{kN·m} = 10^6\ \text{N·mm}$ · Hesapta N–mm–MPa kullan.

## İç kuvvetler

| | |
|---|---|
| Düzgün yayılı yük eşdeğeri | $Q = ql$, ortada |
| Üçgen yayılı yük eşdeğeri | $Q = ql/2$, sıfır ucundan $2l/3$ |
| Diferansiyel bağıntılar | $dT/dz = -q$, $\;dM/dz = T$ |
| Alan yöntemi | $M_2 - M_1 = \int T\,dz$ |
| Ekstremum | $T = 0$ olan yerde $M$ maksimum/minimum |
| Basit kiriş, ortada $P$ | $M_{max} = PL/4$ |
| Basit kiriş, düzgün $q$ | $M_{max} = qL^2/8$ |

## Eksenel kuvvet

| | |
|---|---|
| Normal gerilme | $\sigma = N/A$ |
| Birim uzama | $\varepsilon = \Delta L/L$ |
| Hooke | $\sigma = E\varepsilon$ |
| Uzama | $\Delta L = \dfrac{NL}{EA}$, kademeli: $\sum \dfrac{N_iL_i}{E_iA_i}$ |
| Yay sabiti | $k = EA/L$ |
| Kendi ağırlığı | $\Delta L = \dfrac{\gamma L^2}{2E}$ |
| V sistemi | $N = \dfrac{P}{2\cos\alpha}$, $\;\delta = \dfrac{PL}{2AE\cos^2\alpha}$ |

## Malzeme ve emniyet

| | |
|---|---|
| Poisson | $\nu = -\varepsilon_{enine}/\varepsilon_{boyuna}$, $\;0 < \nu < 0{,}5$ |
| Kayma modülü | $G = \dfrac{E}{2(1+\nu)}$, $\;\tau = G\gamma$ |
| Emniyet gerilmesi | $\sigma_{em} = \sigma_{ak}/S$ (gevrek: $\sigma_{max}/n$) |
| Boyutlandırma | $A \ge P/\sigma_{em}$ |
| Tahkik | $P/A \le \sigma_{em}$ |
| Yük tayini | $P \le \sigma_{em}A$ |

## Sıcaklık ve hiperstatik

| | |
|---|---|
| Isıl uzama | $\Delta L_T = L\alpha\Delta T$ |
| Toplam | $\Delta L = \dfrac{NL}{EA} + L\alpha\Delta T$ |
| Tam engelli çubuk | $\sigma = -E\alpha\Delta T$ |
| İki ucu ankastre, ara yük $F$ | $R_A = Fb/L$, $\;R_B = Fa/L$ |
| Çözüm sırası | Denge + uygunluk + malzeme bağıntısı |

## Gerilme analizi

| | |
|---|---|
| Bir eksenli | $\sigma_n = \sigma_1\cos^2\alpha$, $\;\tau = -\dfrac{\sigma_1}{2}\sin2\alpha$, $\;\tau_{max} = \sigma_1/2$ (45°'de) |
| Düzlem dönüşümü | $\sigma_\theta = \dfrac{\sigma_x+\sigma_y}{2} + \dfrac{\sigma_x-\sigma_y}{2}\cos2\theta + \tau_{xy}\sin2\theta$ |
| | $\tau_\theta = -\dfrac{\sigma_x-\sigma_y}{2}\sin2\theta + \tau_{xy}\cos2\theta$ |
| Asal gerilmeler | $\sigma_{1,2} = \dfrac{\sigma_x+\sigma_y}{2} \pm R$ |
| Mohr yarıçapı | $R = \tau_{max} = \sqrt{\left(\dfrac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2}$ |
| Asal açı | $\tan2\theta_p = \dfrac{2\tau_{xy}}{\sigma_x - \sigma_y}$ |
