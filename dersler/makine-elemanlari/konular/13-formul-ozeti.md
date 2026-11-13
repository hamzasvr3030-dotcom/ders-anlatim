# Formül özeti

## Birimler ve moment

$1\ \text{daN} = 10\ \text{N}$ · $1\ \text{daN/mm}^2 = 10\ \text{MPa}$ · $M_b = 9550\,P[\text{kW}]/n$ [N·m] · $M_b = 71\,620\,N[\text{BG}]/n$ [daN·cm]

## Mukavemet

| | |
|---|---|
| Emniyet | $\sigma \le \sigma^*/S$ |
| Çekme, kesme, yüzey basıncı | $\sigma = F/A$, $\;\tau = F/A$, $\;p = F/(dl)$ |
| Eğilme / burulma | $\sigma_e = M_e/W_e$, $\;\tau_b = M_b/W_p$ |
| Dolu daire | $W_e = \pi d^3/32$, $\;W_p = \pi d^3/16$, $\;I = \pi d^4/64$ |
| Euler burkulma | $F_{kr} = \pi^2EI_{min}/L_k^2$ |
| Von Mises | $\sigma_B = \sqrt{\sigma^2 + 3\tau^2}$, $\;M_B = \sqrt{M_e^2 + 0{,}75M_b^2}$ |
| Tresca | $\sigma_B = \sqrt{\sigma^2 + 4\tau^2}$, $\;M_B = \sqrt{M_e^2 + M_b^2}$ |

## Yorulma

| | |
|---|---|
| Ortalama, genlik | $\sigma_m = \dfrac{\sigma_{max} + \sigma_{min}}{2}$, $\;\sigma_g = \dfrac{\sigma_{max} - \sigma_{min}}{2}$ |
| Eleman sürekli mukavemeti | $\sigma^*_D = K_yK_b\sigma_D/K_ç$ |
| Çentik faktörü | $K_ç = 1 + q(K_t - 1)$ |
| Soderberg | $\dfrac{1}{S} = \dfrac{\sigma_g}{\sigma^*_D} + \dfrac{\sigma_m}{\sigma_{AK}}$ |
| Çelik yaklaşık değerler | $\sigma_{eD} \approx 0{,}5\sigma_K$, $\;\sigma_{çD} \approx 0{,}4\sigma_K$ |

## Tolerans

| | |
|---|---|
| Tolerans | $T = $ üst sapma − alt sapma |
| En büyük / en küçük boşluk | $D_{max} - d_{min}$ / $D_{min} - d_{max}$ |
| En büyük / en küçük sıkılık | $d_{max} - D_{min}$ / $d_{min} - D_{max}$ |

## Aks ve mil

| | |
|---|---|
| Dolu aks | $d = \sqrt[3]{32M_e/(\pi\sigma_{em})}$ |
| İçi boş aks | $d_d = \sqrt[3]{32M_e/(\pi\sigma_{em}(1 - c^4))}$ |
| Burulma mili | $d = \sqrt[3]{16M_b/(\pi\tau_{em})}$ |
| Burulma açısı | $\varphi = M_bL/(GI_p)$ |
| Kritik devir | $n_k \approx 300\sqrt{1/\delta[\text{cm}]}$ |

## Kama, pim, sıkı geçme

| | |
|---|---|
| Çevresel kuvvet | $F_t = 2M_d/d$ |
| Uygu kaması | $p = F_t/(tL) \le p_{em}$, $\;\tau = F_t/(bL) \le \tau_{em}$ (A tipi $L = l - b$) |
| Oyuk kama | $M_s = \mu F_Nd$, $\;F_ç \approx F_N(\tan\alpha + 2\tan\rho)$ |
| Otoblokaj | $\tan\alpha \le 2\tan\rho$ |
| Radyal pim | $\tau = \dfrac{4M_b}{\pi d_p^2d}$, $\;p_{max} = \dfrac{6M_b}{d^2d_p}$ |
| Sıkı geçme | $p_{min} = \dfrac{2M_dS}{\mu\pi d^2b}$, $\;p_{max} = \tau_{em}(1 - Q_g^2)$ |
| Isıtma | $\Delta t = (S_{max} + B_m)/(\alpha_gd)$ |

## Cıvata

| | |
|---|---|
| Helis açısı | $\tan\alpha = h/(\pi d_2)$ |
| Sıkma momenti | $M_s = F_{ön}\left[\tfrac{d_2}{2}\tan(\alpha + \rho') + \mu_Ar_A\right]$ |
| Ek kuvvet | $F_z = F_i\,C_c/(C_c + C_p)$ |
| Kalan sıkma | $F'_{ön} = F_{ön} - F_iC_p/(C_c + C_p)$ |
| Genlik | $\sigma_g = F_z/(2A_1)$ |
| Eksantrik grup | $F_K = F/z$, $\;F_{M,i} = Mr_i/\sum r^2$ |
| Kalite 8.8 | $\sigma_K = 800$, $\;\sigma_{AK} = 640$ MPa |

## Perçin, kaynak, yapıştırma

| | |
|---|---|
| Perçin kesme | $\tau = F/(nm\pi d_1^2/4)$ |
| Perçin ezilme | $\sigma = F/(nd_1s)$ |
| Kaynak dikişi | $\sigma = F/\sum al_h$, $\;l_h = l - 2a$ |
| Yapıştırma (bindirme) | $\tau = F/(bl_ü)$ |
