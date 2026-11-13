# Pim, perno ve sıkı geçmeler

## Pimler

Görevleri: **bağlama**, **merkezleme** (konumlama) ve **emniyet** (aşırı yükte kopup makineyi koruma). Pimler **kesme** ve **ezilmeye** göre hesaplanır. Pim çapı yaklaşık $d_p = (0{,}2…0{,}3)d$.

### Radyal (enine) pim

Mil-göbek bağlantısında mili çapı boyunca delen pim; iki kesitte kesilir.

$$
\tau = \frac{4M_b}{\pi d_p^2\,d} \le \tau_{em}
$$

**Pim–mil arasında** (üçgen basınç dağılımı):

$$
p_{max} = \frac{6M_b}{d^2\,d_p} \le p_{em}
$$

**Pim–göbek arasında:**

$$
p_1 = \frac{4M_b}{(D_G^2 - d^2)\,d_p} \le p_{em}
$$

### Eksenel (boyuna) pim

Mil ile göbeğin birleşim çizgisine eksen boyunca çakılır:

$$
p = \frac{4M_b}{d\,d_p\,L}, \qquad \tau = \frac{2M_b}{d\,d_p\,L}
$$

### Alıştırma

$d = 40$ mm, $M_b = 20\,000$ daN·mm, $d_p = 10$ mm, $D_G = 80$ mm:

$$
\tau = \frac{4\cdot20\,000}{\pi\cdot100\cdot40} = 6{,}37, \quad p_{max} = \frac{6\cdot20\,000}{1600\cdot10} = 7{,}5, \quad p_1 = \frac{4\cdot20\,000}{4800\cdot10} = 1{,}67\ \text{daN/mm}^2
$$

En kritik değer pim–mil basıncıdır.

## Pernolar

Mafsallı bağlantılarda kullanılan pim türü (piston pimi, makara mili, çatal bağlantı). **Yüzey basıncı** ve **eğilmeye** göre hesaplanır.

Çatal bağlantıda (ortadaki göz genişliği $b$, çatal kollarının her biri $b_1$):

$$
p_1 = \frac{F}{b\,d} \le p_{em}, \qquad p_2 = \frac{F}{2b_1d} \le p_{em}
$$

$$
\sigma_e = \frac{\frac{F}{4}(b + b_1)}{\pi d^3/32} \le \sigma_{em}
$$

Önerilen oranlar: $b = (1{,}5…1{,}7)d$, $\;b_1 = (0{,}3…0{,}5)b$.

## Sıkı (pres) geçmeler

Mil, göbek deliğinden biraz büyük yapılır; montajdan sonra temas yüzeyinde oluşan **basınç** sürtünme ile moment ve eksenel kuvvet iletir.

**Avantajlar:** Ek eleman gerekmez; kama yuvası olmadığı için çentik etkisi yoktur (dinamik yüke uygun); iyi merkezleme.

**Montaj:**

- **Pres (boyuna) geçme:** Oda sıcaklığında, yavaşça (2–3 mm/s), pahlı mil ucu ve yağlama ile.
- **Sıcak (radyal) geçme:** Göbek ısıtılır veya mil soğutulur. Pürüzler daha az ezildiğinden daha güçlü bağlantı verir.

### Temel bağıntılar

İletilecek moment ve pres kuvveti ($p$: temas basıncı, $b$: göbek genişliği):

$$
M_s = \frac{\mu\pi b d^2 p}{2}, \qquad F_{max} = \mu\pi d b\,p
$$

Momenti $S$ emniyetle iletecek en küçük basınç:

$$
\boxed{p_{min} = \frac{2M_dS}{\mu\pi d^2b}}
$$

Göbeğin dayanabileceği en büyük basınç ($Q_g = d/D_g$, Tresca):

$$
\tau_{max} = \frac{p}{1 - Q_g^2} \le \tau_{em} \quad\Rightarrow\quad p_{max} = \tau_{em}(1 - Q_g^2)
$$

Basınç ile çap farkı (sıkılık) arasındaki ilişki:

$$
\Delta d = p\,d\left[\frac{\frac{1 + Q_m^2}{1 - Q_m^2} - \nu_m}{E_m} + \frac{\frac{1 + Q_g^2}{1 - Q_g^2} + \nu_g}{E_g}\right]
$$

Dolu milde $Q_m = 0$. Montajda pürüzlerin yaklaşık %60'ı ezildiğinden ölçülmesi gereken sıkılık:

$$
\Delta d^* = \Delta d + Z, \qquad Z = 1{,}2\,(R_{t,g} + R_{t,m})
$$

**Göbeğin ısıtılması gereken sıcaklık farkı:**

$$
\Delta t = \frac{S_{max} + B_m}{\alpha_g\,d}
$$

$B_m$: montaj boşluğu (≈ $d/1000$ veya $S_{max}/2$).

### Örnek

$M_d = 300$ N·m, $S = 1{,}25$; $d = 45$, $D_g = 90$, $b = 75$ mm; dolu çelik mil ($E = 2{,}06\times10^5$), dökme göbek ($E = 0{,}98\times10^5$, $\sigma_{AK} = 130$), $\nu = 0{,}3$ (mil) / 0,25 (göbek), $\mu = 0{,}12$, $R_{t,g} = 15$, $R_{t,m} = 5$ µm.

1. $p_{min} = \dfrac{2\cdot300\,000\cdot1{,}25}{0{,}12\,\pi\cdot45^2\cdot75} = 13{,}1$ N/mm²
2. $Q_g = 0{,}5$, $\tau_{em} = 65$ → $p_{max} = 65(1 - 0{,}25) = 48{,}75$ N/mm²
3. $K = \dfrac{1 - 0{,}3}{2{,}06\times10^5} + \dfrac{1{,}667 + 0{,}25}{0{,}98\times10^5} = 2{,}296\times10^{-5}$ mm²/N
4. $\Delta d_{min} = p_{min}dK = 13{,}5$ µm, $\;\Delta d_{max} = p_{max}dK = 50{,}4$ µm
5. $Z = 1{,}2(15 + 5) = 24$ µm → gerekli sıkılık **37,5 µm ≤ S ≤ 74,4 µm**
6. Göbek Ø45 **H6** (0/+16) ile mil **t6** (+54/+70): $S_{min} = 54 - 16 = 38$ ✓, $S_{max} = 70$ ✓ → **Ø45 H6/t6**
7. Montaj: $\Delta t = \dfrac{0{,}070 + 0{,}050}{10^{-5}\cdot45} \approx 267$ °C
