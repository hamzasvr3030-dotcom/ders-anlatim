## İletim

| | |
|---|---|
| Fourier | $\dot Q = -kA\dfrac{dT}{dx}$, $\;q = -k\dfrac{dT}{dx}$ |
| Düzlem duvar | $\dot Q = kA\dfrac{T_1 - T_2}{L}$ |
| Isı iletim denklemi | $\nabla^2T + \dfrac{\dot g}{k} = \dfrac{1}{\alpha}\dfrac{\partial T}{\partial t}$, $\;\alpha = \dfrac{k}{\rho c}$ |
| Radyal genel form | $\dfrac{1}{r^n}\dfrac{\partial}{\partial r}\left(r^nk\dfrac{\partial T}{\partial r}\right) + \dot g = \rho c\dfrac{\partial T}{\partial t}$ ($n = 0, 1, 2$) |

## Isıl dirençler

| | |
|---|---|
| Düzlem duvar | $R = L/(kA)$ |
| Silindir | $R = \ln(r_2/r_1)/(2\pi kL)$ |
| Taşınım | $R = 1/(hA)$ |
| Seri | $R_{top} = \sum R_i$ |
| Paralel | $1/R_{top} = \sum 1/R_i$ |
| Isı geçişi | $\dot Q = \Delta T/R_{top}$ |

## Silindir ve kritik yarıçap

| | |
|---|---|
| Isı üretimli tel | $T(r) = \dfrac{\dot g(a^2 - r^2)}{4k} + \dfrac{\dot ga}{2h} + T_\infty$ |
| Boş silindir | $\dfrac{T - T_1}{T_2 - T_1} = \dfrac{\ln(r/a)}{\ln(b/a)}$ |
| Kritik yarıçap | Silindir $r_{kr} = k/h$, küre $r_{kr} = 2k/h$ |

## Kanatçıklar ($m = \sqrt{hP/(kA)}$, $\theta_d = T_d - T_\infty$)

| Durum | Sıcaklık | Isı |
|---|---|---|
| Sonsuz uzun | $\theta/\theta_d = e^{-mx}$ | $\theta_d\sqrt{hPkA}$ |
| Ucu yalıtılmış | $\theta/\theta_d = \dfrac{\cosh m(L-x)}{\cosh mL}$ | $\theta_d\sqrt{hPkA}\tanh mL$ |
| Uçta taşınım | $L_c = L + A/P$ ile yalıtılmış uç | |
| Verim | $\eta = \dot Q_{kanat}/[hA_{kanat}(T_d - T_\infty)]$ | |
| Etkinlik | $\varepsilon = \dot Q_{kanatlı}/\dot Q_{kanatsız}$ | |

## Zamana bağlı iletim

| | |
|---|---|
| Biot, Fourier | $Bi = hL_c/k$, $\;Fo = \alpha t/L_c^2$ |
| Toplu sistem ($Bi < 0{,}1$) | $\dfrac{T - T_\infty}{T_i - T_\infty} = e^{-Bi\,Fo} = e^{-\frac{hA_s}{\rho Vc}t}$, $\;L_c = V/A_s$ |
| Tek terim (merkez) | $\theta_0 = A_1e^{-\lambda_1^2Fo}$ ($Fo > 0{,}2$) |
| Levha konum | $\theta = \theta_0\cos(\lambda_1x/L)$ |
| Silindir konum | $\theta = \theta_0J_0(\lambda_1r/r_0)$ |
| Q₀ | $\rho cV(T_i - T_\infty)$ |
| Çok boyutlu | Sıcaklık oranları çarpılır |
