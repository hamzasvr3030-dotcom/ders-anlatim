# Formül özeti

Bütün dersin formülleri tek sayfada. Açılar $+x$ ekseninden **SYT** ölçülür.

## Serbestlik derecesi

| | Formül |
|---|---|
| Grübler–Kutzbach | $F = \lambda(l - j - 1) + \sum f_i$ ($\lambda = 3$ düzlem, $6$ uzay) |
| Düzlemsel alternatif | $F = 3(l-1) - 2e_1 - e_2$ |
| Döner, kayar, vida çifti | $f = 1$ |
| Kam, dişli, çatal mafsal | $f = 2$ |
| Yorum | $F<0$ statik belirsiz · $F=0$ statik belirli · $F=1$ mecburi hareketli · $F>1$ çok s.d.li |

Bir noktada $k$ uzuv birleşiyorsa $k-1$ mafsal say. Makara gibi **etkisiz s.d.**leri çıkar.

## Konum analizi

**Krank-biyel** ($r_2e^{i\theta_2} + r_3e^{i\theta_3} = s + id$):

$$
s = r_2\cos\theta_2 \pm \sqrt{r_3^2 - (d - r_2\sin\theta_2)^2}, \qquad \theta_3 = \operatorname{atan2}(d - r_2\sin\theta_2,\; s - r_2\cos\theta_2)
$$

**Dört çubuk – Freudenstein:**

$$
K_1\cos\theta_4 - K_2\cos\theta_2 + K_3 = \cos(\theta_2 - \theta_4)
$$

$$
K_1 = \tfrac{r_1}{r_2},\; K_2 = \tfrac{r_1}{r_4},\; K_3 = \tfrac{r_1^2 + r_2^2 - r_3^2 + r_4^2}{2r_2r_4}
$$

$$
A = K_1 - K_3 - (1-K_2)\cos\theta_2,\quad B = 2\sin\theta_2,\quad C = (1+K_2)\cos\theta_2 - K_1 - K_3
$$

$$
\theta_4 = 2\arctan\frac{-B \pm\sqrt{B^2 - 4AC}}{2A}, \qquad \theta_3 = \operatorname{atan2}(r_4\sin\theta_4 - r_2\sin\theta_2,\; r_1 + r_4\cos\theta_4 - r_2\cos\theta_2)
$$

**Kol-kızak** ($r_2e^{i\theta_2} = r_1 + (r_4 + is_{43})e^{i\theta_4}$):

$$
A = r_1 - r_4 - r_2\cos\theta_2,\; B = 2r_2\sin\theta_2,\; C = r_2\cos\theta_2 - r_1 - r_4,\qquad s_{43}^2 = r_1^2 + r_2^2 - r_4^2 - 2r_1r_2\cos\theta_2
$$

## Hız ve ivme – temel

| | |
|---|---|
| Dönme hızı | $V = r\omega$, yarıçapa dik |
| Teğetsel ivme | $a^t = r\alpha$ |
| Normal ivme | $a^n = r\omega^2$, merkeze doğru |
| Bağıl hız | $\vec V_B = \vec V_A + \vec V_{B/A}$, $V_{B/A} = AB\cdot\omega$, $AB$'ye dik |
| Bağıl ivme | $\vec a_B = \vec a_A + \vec a^t_{B/A} + \vec a^n_{B/A}$ |
| Coriolis | $a^c = 2\omega V_{bağıl}$; bağıl hızı $\omega$ yönünde 90° döndür |

## Hız ve ivme – mekanizmalar

**Krank-biyel:**

$$
\omega_3 = -\frac{r_2\omega_2\cos\theta_2}{r_3\cos\theta_3}, \qquad \dot s = -\frac{r_2\omega_2\sin(\theta_2-\theta_3)}{\cos\theta_3}
$$

$$
\alpha_3 = \frac{r_2\omega_2^2\sin\theta_2 + r_3\omega_3^2\sin\theta_3 - r_2\alpha_2\cos\theta_2}{r_3\cos\theta_3}
$$

$$
\ddot s = -r_2\alpha_2\sin\theta_2 - r_2\omega_2^2\cos\theta_2 - r_3\alpha_3\sin\theta_3 - r_3\omega_3^2\cos\theta_3
$$

**Dört çubuk:**

$$
\omega_3 = -\frac{r_2\omega_2\sin(\theta_2-\theta_4)}{r_3\sin(\theta_3-\theta_4)}, \qquad \omega_4 = \frac{r_2\omega_2\sin(\theta_2-\theta_3)}{r_4\sin(\theta_4-\theta_3)}
$$

$$
\alpha_3 = \frac{r_4\omega_4^2 - r_2\alpha_2\sin(\theta_2-\theta_4) - r_2\omega_2^2\cos(\theta_2-\theta_4) - r_3\omega_3^2\cos(\theta_3-\theta_4)}{r_3\sin(\theta_3-\theta_4)}
$$

$$
\alpha_4 = \frac{r_2\alpha_2\sin(\theta_2-\theta_3) + r_2\omega_2^2\cos(\theta_2-\theta_3) + r_3\omega_3^2 - r_4\omega_4^2\cos(\theta_4-\theta_3)}{r_4\sin(\theta_4-\theta_3)}
$$

**Kol-kızak:**

$$
\omega_4 = \frac{r_2\omega_2\sin(\theta_2-\theta_4)}{s_{43}}, \qquad \dot s_{43} = r_2\omega_2\cos(\theta_2-\theta_4) - r_4\omega_4
$$

$$
\alpha_4 = \frac{r_2\alpha_2\sin(\theta_2-\theta_4) + r_2\omega_2^2\cos(\theta_2-\theta_4) - 2\dot s_{43}\omega_4 - r_4\omega_4^2}{s_{43}}
$$

## Dişliler

| | |
|---|---|
| Hız oranı | $\dfrac{\omega_3}{\omega_2} = \mp\dfrac{r_2}{r_3} = \mp\dfrac{T_2}{T_3}$ (dış $-$, iç $+$) |
| Modül | $m = d/T$, taksimat $t = \pi m$ |
| Basit/birleşik zincir | $\dfrac{\omega_{giriş}}{\omega_{çıkış}} = (-1)^n\dfrac{\prod T_{tahrik\;edilen}}{\prod T_{tahrik\;eden}}$ |
| Planet (formül yöntemi) | $\dfrac{\omega_{son} - \omega_K}{\omega_{ilk} - \omega_K} = \pm\dfrac{\prod T_{tahrik\;eden}}{\prod T_{tahrik\;edilen}}$ |
| Güneş sabit | $\omega_P = (1 + T_G/T_P)\,\omega_K$ |
| Eş eksenli vites kutusu | Her kademede $T_1 + T_2$ aynı |
