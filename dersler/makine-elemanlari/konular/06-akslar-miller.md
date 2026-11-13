# Akslar ve miller

| | Aks (dingil) | Mil |
|---|---|---|
| Döndürme momenti | **İletmez** | **İletir** |
| Zorlanma | Yalnız eğilme | Burulma + (çoğunlukla) eğilme |
| Hareket | Sabit veya dönen | Döner |

- Dönen bir aks veya milde **eğilme gerilmesi her turda yön değiştirir** (tam değişken).
- **Muylu:** Milin yatak içinde kalan kısmı. Yatak basıncı $p = F/(dB)$.
- Malzeme: St50, St60, St70, C35, C45, 16MnCr5…
- Emniyet katsayısı: sabit aks $S = 3…5$, dönen aks $S = 4…6$.

## Aks hesabı

Ortadan yüklü aksta: $F_A = F_B = F/2$, $\;M_{e,max} = FL/4$.

**Dolu aks:**

$$
\sigma_e = \frac{M_e}{\pi d^3/32} \approx \frac{10M_e}{d^3} \le \sigma_{em} \quad\Rightarrow\quad \boxed{d = \sqrt[3]{\frac{32M_e}{\pi\sigma_{em}}}}
$$

**İçi boş aks** ($c = d_i/d_d$):

$$
d_d = \sqrt[3]{\frac{32M_e}{\pi\sigma_{em}(1 - c^4)}}
$$

Emniyet gerilmesi: statik $\sigma_{em} = \sigma_{AK}/S$; dinamik $\sigma_{em} = \dfrac{\sigma_{eD}K_yK_b}{SK_ç}$.

> **Neden içi boş?** Eğilme gerilmesi dış lifte en büyük, merkezde sıfırdır; içteki malzeme az çalışır. Aynı mukavemet için çok daha hafif bir parça elde edilir.

### Örnek – Yük vagonu aksı

Sabit aks, St42 ($\sigma_{AK} = 360$ N/mm²), $S = 4$; yataklar arası 2300 mm, ortada 40 000 N.

1. $M_e = 40\,000\cdot2300/4 = 23\times10^6$ N·mm, $\;\sigma_{em} = 360/4 = 90$ N/mm²
2. **Dolu:** $d = \sqrt[3]{\dfrac{32\cdot23\times10^6}{\pi\cdot90}} = 137{,}5$ mm → **140 mm**
3. **İçi boş** ($c = 0{,}8$): $d_d = 137{,}5/\sqrt[3]{1 - 0{,}8^4} = 164$ mm → **170 / 140 mm**
4. Ağırlık oranı = alan oranı: $\dfrac{170^2 - 140^2}{140^2} = 0{,}474$ → içi boş aks dolunun **%47'si** ağırlığında.

## Mil hesabı

**Yalnız burulma (ön boyutlandırma):**

$$
\tau = \frac{16M_b}{\pi d^3} \approx \frac{5M_b}{d^3} \le \tau_{em} \quad\Rightarrow\quad \boxed{d = \sqrt[3]{\frac{16M_b}{\pi\tau_{em}}}}
$$

Ön boyutlandırmada eğilme bilinmediği için $\tau_{em}$ düşük tutulur ($S = 10…14$).

**Eğilme + burulma (Bach'a göre, zorlanma katsayısı $\alpha_0 = \sigma_{em}/(1{,}73\,\tau_{em})$):**

$$
\sigma_B = \sqrt{\sigma_e^2 + 3(\alpha_0\tau_b)^2} \le \sigma_{em}
$$

### Örnek – 150 BG ileten mil

$P = 150$ BG, $n = 450$ d/d, $\tau_{em} = 150$ daN/cm², $G = 85\times10^4$ daN/cm², $L = 150$ mm; içi boş mil için $d/D = 2/3$.

1. $M_b = 71\,620\cdot150/450 = 23\,873$ daN·cm
2. Dolu: $d = \sqrt[3]{\dfrac{16\cdot23\,873}{\pi\cdot150}} = 9{,}32$ cm → **95 mm**
3. İçi boş: $D = 9{,}32/\sqrt[3]{1 - (2/3)^4} = 10{,}03$ cm → **100 / 65 mm**
4. Ağırlık: dolu $9{,}5^2 = 90{,}25$; içi boş $10^2 - 6{,}5^2 = 57{,}75$ → içi boş mil **%36 daha hafif**.
5. Burulma açısı ($\varphi = M_bL/(GI_p)$): ikisi de ≈ 0,03° (≈ 0,2°/m) < 0,25°/m sınırı ✓

### Örnek – Kasnaklı mil (konsol yük)

Kasnak Ø90 cm, kayış kolları 300 ve 100 daN, kasnak ağırlığı 75 daN; kasnak B yatağından 250 mm dışarıda; $\sigma_{eş,em} = 630$ daN/cm².

1. Toplam aşağı kuvvet $F = 300 + 100 + 75 = 475$ daN
2. B yatağındaki eğilme: $M_e = 475\cdot25 = 11\,875$ daN·cm
3. Burulma: $M_b = (300 - 100)\cdot45 = 9000$ daN·cm
4. $\sigma_{eş} = \dfrac{32}{\pi d^3}\sqrt{M_e^2 + \tfrac12M_b^2} \le 630 \Rightarrow d = 6{,}02$ cm → **65 mm**

## Deformasyon ve titreşim

**Sehim sınırı:** $f/L \le 1/3000$ (genel), $1/5000$ (takım tezgâhı).

**Burulma açısı:**

$$
\varphi = \frac{M_bL}{GI_p}\cdot\frac{180}{\pi}\ [°], \qquad \varphi_{em} \approx 0{,}25° – 0{,}5°/\text{m}
$$

**Kritik devir:** Milin kendi doğal frekansında dönmesi **rezonansa** yol açar.

$$
\omega_k = \sqrt{\frac{k}{m}}, \qquad n_k \approx 300\sqrt{\frac{1}{\delta\,[\text{cm}]}}\ [\text{d/d}]
$$

$\delta$: milin statik çökmesi. Çalışma devri kritik devirden uzak tutulur: altında $n \approx (0{,}7…0{,}8)n_k$, üstünde $n \approx (1{,}2…1{,}3)n_k$. Çok kütleli sistemde **Dunkerley:** $\dfrac{1}{\omega_k^2} = \sum\dfrac{1}{\omega_i^2}$.
