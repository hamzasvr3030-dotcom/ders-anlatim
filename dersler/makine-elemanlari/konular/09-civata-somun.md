# Cıvata-somun bağlantıları

En yaygın **çözülebilen** bağlantıdır. Vida bir eğik düzlemin silindire sarılmış hâlidir.

## Vida geometrisi

- $d$: diş üstü (anma) çapı · $d_1$ (veya $d_3$): diş dibi çapı · $d_2$: bölüm (ortalama) çapı
- $h$: hatve (adım). Çok ağızlı vidada ilerleme $h_t = z_0h$.

$$
\tan\alpha = \frac{h}{\pi d_2}
$$

Diş profilleri: metrik (60°), Whitworth (55°), trapez, testere, kare (hareket vidaları), yuvarlak.

**Kalite sınıfı** (örneğin 8.8): $\sigma_K = 8\cdot100 = 800$ MPa, $\sigma_{AK} = 8\cdot8\cdot10 = 640$ MPa.

## Sıkma momenti

Sürtünme açısı ($\beta$: diş profil açısı):

$$
\tan\rho' = \mu' = \frac{\mu}{\cos(\beta/2)}
$$

Metrik vidada $\mu' \approx 1{,}15\mu$. Somunu sıkmak için gereken moment, **diş sürtünmesi + somun altı sürtünmesinin** toplamıdır:

$$
\boxed{M_s = F_{ön}\left[\frac{d_2}{2}\tan(\alpha + \rho') + \mu_Ar_A\right]}
$$

$r_A$: somun altı ortalama sürtünme yarıçapı (≈ $0{,}7d$). $\mu$ verilmemişse 0,10 alınabilir.

**Vida verimi:** $\eta = \dfrac{\tan\alpha}{\tan(\alpha + \rho')}$

**Otoblokaj (kendiliğinden gevşememe):** $\alpha < \rho'$. Bağlama vidaları bu şartı sağlar.

## Ön gerilmeli bağlantı ve işletme kuvveti

Cıvata önce $F_{ön}$ ile sıkılır; sonra işletmede $F_i$ kuvveti eklenir. Cıvata ve sıkıştırılan parçalar birer yay gibi davranır:

$$
C_c = \frac{E_cA_c}{L_c}, \qquad C_p = \frac{E_pA_p}{L_p}
$$

İşletme kuvvetinin cıvataya gelen kısmı (ek kuvvet) ve kalan sıkma kuvveti:

$$
\boxed{F_z = F_i\frac{C_c}{C_c + C_p}}, \qquad F_{top} = F_{ön} + F_z, \qquad F'_{ön} = F_{ön} - F_i\frac{C_p}{C_c + C_p} > 0
$$

> Sıkıştırılan parçalar cıvatadan çok daha rijit olduğundan işletme kuvvetinin **küçük bir kısmı** cıvataya geçer. Bu, ön gerilmenin cıvatayı yorulmaya karşı korumasının sebebidir. Pratikte $F_{ön} = (2{,}5…3{,}5)F_i$.

**Değişken yükte genlik gerilmesi:**

$$
\sigma_g = \frac{F_z}{2A_1} \le \sigma_{g,em}
$$

### Örnek – M16 ön gerilmeli bağlantı

$F_{ön} = 30$ kN, $F_i = 0…10$ kN, M16 ($d_1 = 13{,}546$, $d_2 = 14{,}701$, $h = 2$ mm), sıkıştırılan boy 50 mm.

1. $\alpha = \arctan\dfrac{2}{\pi\cdot14{,}701} = 2{,}48°$, $\;\rho = \arctan0{,}15 = 8{,}53°$
2. $M_s = 30\,000\left[\dfrac{14{,}701}{2}\tan11{,}01° + 11{,}2\cdot0{,}1\right] = 76{,}5$ N·m
3. $A_c = 144$ mm², $A_p = 406$ mm² → $C_c = 605\,000$, $C_p = 1\,705\,000$ N/mm
4. $F_z = \dfrac{10\,000}{1 + C_p/C_c} = 2618$ N, $\;F_{max} = 32\,618$ N
5. 6.9 kalitesi: $\sigma_{AK} = 540$ MPa; $\sigma_ç = 30\,000/144 = 208$ MPa < $540/2 = 270$ ✓
6. Genlik: $\sigma_g = \dfrac{2618/2}{144} = 9{,}1$ MPa (yorulma açısından çok düşük) ✓

## Eksantrik yüklü cıvata grubu (kesme)

1. Cıvata grubunun **ağırlık merkezini** bul.
2. Kuvveti ağırlık merkezine taşı: $F$ + moment $M = Fe$.
3. Doğrudan kesme payı (hepsine eşit, $F$ yönünde): $F_K = F/z$
4. Moment payı ($r_i$'ye dik): $F_{M,i} = \dfrac{Mr_i}{\sum r^2}$
5. Her cıvatada vektörel toplam: $F_{top} = \sqrt{F_K^2 + F_M^2 + 2F_KF_M\cos\theta}$
6. En yüklü cıvata için: $d = \sqrt{\dfrac{4F_{top}}{\pi\tau_{em}}}$

### Örnek

4 cıvata, her biri grubun ağırlık merkezinden $r = 50$ mm uzaklıkta; $F = 10$ kN, ağırlık merkezine uzaklığı (kol) 300 mm; St34, $\tau_{em} = 110$ MPa:

$$
F_K = \frac{10\,000}{4} = 2500\ \text{N}, \qquad F_M = \frac{10\,000\cdot300\cdot50}{4\cdot50^2} = 15\,000\ \text{N}
$$

En kritik cıvatada iki kuvvet aynı yönde: $F_{top} = 17\,500$ N → $d = \sqrt{\dfrac{4\cdot17\,500}{\pi\cdot110}} = 14{,}2$ mm → **M16**.

## Diğer hesaplar

- **Yalnız eksenel yük, ön gerilmesiz:** $\sigma_ç = F/A_1 \le \sigma_{AK}/S$ ($S = 1{,}5…2$)
- **Sıkma sırasında burulma etkisi:** $\sigma_B \approx (1{,}2…1{,}35)\sigma_ç$
- **Hareket vidası (kriko):** Vida basmaya, kol ise $M_s = F\left[\dfrac{d_2}{2}\tan(\alpha + \rho) + \mu_tr_t\right]$ momentini yenmeye göre hesaplanır.
