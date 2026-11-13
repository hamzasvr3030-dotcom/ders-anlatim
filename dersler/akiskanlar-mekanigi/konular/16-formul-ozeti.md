# Formül özeti

## Özellikler ve statik

| | |
|---|---|
| Newton viskozite yasası | $\tau = \mu\,du/dy$, $\;\nu = \mu/\rho$ |
| Kılcal yükselme | $h = \dfrac{2\sigma_s\cos\phi}{\rho gR}$ |
| Ses hızı | $c = \sqrt{kRT}$ |
| Hidrostatik | $P = P_0 + \rho gh$ |
| Düzlem yüzey kuvveti | $F_R = P_C A$, $\;y_P = y_C + \dfrac{I_{xx,C}}{y_CA}$ |
| Kaldırma kuvveti | $F_B = \rho_f gV_{batan}$ |
| Dönen kap yüzeyi | $z_s = h_0 - \dfrac{\omega^2}{4g}(R^2 - 2r^2)$ |

## Kinematik ve korunum

| | |
|---|---|
| Maddesel türev | $\dfrac{D}{Dt} = \dfrac{\partial}{\partial t} + \vec V\cdot\nabla$ |
| Girdaplılık | $\vec\zeta = \nabla\times\vec V$ |
| Süreklilik (sıkıştırılamaz) | $\nabla\cdot\vec V = 0$, $\;V_1A_1 = V_2A_2$ |
| Bernoulli | $\dfrac{P}{\rho} + \dfrac{V^2}{2} + gz = $ sabit |
| Pitot | $V = \sqrt{2(P_0 - P)/\rho}$ |
| Torricelli | $V = \sqrt{2gh}$ |
| Enerji denklemi | $\dfrac{P_1}{\rho g} + \alpha_1\dfrac{V_1^2}{2g} + z_1 + h_p = \dfrac{P_2}{\rho g} + \alpha_2\dfrac{V_2^2}{2g} + z_2 + h_t + h_L$ |
| Momentum | $\sum\vec F = \sum_ç\beta\dot m\vec V - \sum_g\beta\dot m\vec V$ |
| Açısal momentum (mil) | $T = \dot m(r_2V_{t2} - r_1V_{t1})$ |
| Akım fonksiyonu | $u = \partial\psi/\partial y$, $\;v = -\partial\psi/\partial x$ |
| Navier–Stokes | $\rho\dfrac{D\vec V}{Dt} = -\nabla P + \rho\vec g + \mu\nabla^2\vec V$ |

## Boyutsuz sayılar

$Re = \dfrac{\rho VL}{\mu}$ · $Fr = \dfrac{V}{\sqrt{gL}}$ · $Eu = \dfrac{\Delta P}{\rho V^2}$ · $Ma = \dfrac{V}{c}$ · $We = \dfrac{\rho V^2L}{\sigma_s}$ · $St = \dfrac{fL}{V}$

## Boru akışı

| | |
|---|---|
| Rejim | Laminer $Re < 2300$, türbülanslı $Re > 4000$ |
| Hidrolik çap | $D_h = 4A_c/p$ |
| Darcy–Weisbach | $h_L = f\dfrac{L}{D}\dfrac{V^2}{2g}$ |
| Laminer | $f = 64/Re$, $\;\Delta P = \dfrac{32\mu LV}{D^2}$, $\;\dot V = \dfrac{\pi D^4\Delta P}{128\mu L}$ |
| Colebrook | $\dfrac{1}{\sqrt f} = -2\log\left(\dfrac{\varepsilon/D}{3{,}7} + \dfrac{2{,}51}{Re\sqrt f}\right)$ |
| Haaland | $\dfrac{1}{\sqrt f} \cong -1{,}8\log\left[\dfrac{6{,}9}{Re} + \left(\dfrac{\varepsilon/D}{3{,}7}\right)^{1{,}11}\right]$ |
| Yerel kayıp | $h_L = K_L\dfrac{V^2}{2g}$ |

## Dış akış

| | |
|---|---|
| Direnç, kaldırma | $F_D = C_D\tfrac12\rho V^2A$, $\;F_L = C_L\tfrac12\rho V^2A$ |
| Düz levha (laminer) | $C_f = 1{,}328/\sqrt{Re_L}$, $\;\delta/x = 4{,}91/\sqrt{Re_x}$ |
| Düz levha (türbülanslı) | $C_f = 0{,}074/Re_L^{1/5}$ |
| Stokes (küre, $Re < 1$) | $F_D = 3\pi\mu VD$, $\;C_D = 24/Re$ |

## Sıkıştırılabilir akış ($k = 1{,}4$)

| | |
|---|---|
| Durma sıcaklığı | $T_0 = T + V^2/(2c_p)$ |
| İzentropik | $\dfrac{T_0}{T} = 1 + \dfrac{k-1}{2}Ma^2$, $\;\dfrac{P_0}{P} = \left(\dfrac{T_0}{T}\right)^{k/(k-1)}$ |
| Kritik oranlar | $T^*/T_0 = 0{,}8333$, $\;P^*/P_0 = 0{,}5283$ |
| Normal şok | $Ma_2^2 = \dfrac{Ma_1^2 + 2/(k-1)}{\frac{2k}{k-1}Ma_1^2 - 1}$ |

## Açık kanal

| | |
|---|---|
| Froude | $Fr = V/\sqrt{gy}$ |
| Özgül enerji | $E_s = y + V^2/(2g)$ |
| Kritik derinlik | $y_c = (q^2/g)^{1/3}$ |
| Manning | $V = \dfrac{1}{n}R_h^{2/3}S_0^{1/2}$ |
| Hidrolik sıçrama | $\dfrac{y_2}{y_1} = \dfrac12\left(-1 + \sqrt{1 + 8Fr_1^2}\right)$ |

## Turbomakineler

| | |
|---|---|
| Pompa verimi | $\eta = \rho g\dot VH/bhp$ |
| NPSH | $\left(\dfrac{P}{\rho g} + \dfrac{V^2}{2g}\right)_g - \dfrac{P_v}{\rho g}$ |
| Benzerlik | $\dot V \propto \omega D^3$, $\;H \propto \omega^2D^2$, $\;bhp \propto \rho\omega^3D^5$ |
| Betz sınırı | $C_{P,max} = 16/27$ |
