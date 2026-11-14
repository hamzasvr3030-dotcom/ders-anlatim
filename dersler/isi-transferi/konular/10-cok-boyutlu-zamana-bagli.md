Isı birden fazla yönde aktarılıyorsa (kısa silindir, dikdörtgen çubuk, prizma), çözüm tek boyutlu çözümlerin **çarpımıdır** (çarpım çözümü):

$$
\left(\frac{T_0 - T_\infty}{T_i - T_\infty}\right)_{çok\ boyutlu} = \prod\left(\frac{T_0 - T_\infty}{T_i - T_\infty}\right)_{tek\ boyutlu}
$$

| Cisim | Eşdeğer |
|---|---|
| Sonsuz dikdörtgen çubuk ($2L_1\times2L_2$) | $2L_1$ levha × $2L_2$ levha |
| Kısa silindir (çap $D$, boy $2L$) | $D$ çaplı sonsuz silindir × $2L$ kalınlıklı levha |
| Dikdörtgen prizma ($2L_1\times2L_2\times2L_3$) | Üç levhanın çarpımı |

> **Dikkat:** Defterdeki çizimlerde parçalar "+" işaretiyle birleştirilmiş, ama formül **çarpımdır**. Toplamak yanlış sonuç verir.

Her tek boyutlu çözüm kendi $Bi$ ve $Fo$ değeriyle ayrı ayrı bulunur:

- Levha: $Bi = hL/k$, $Fo = \alpha t/L^2$ ($L$: yarı kalınlık)
- Silindir: $Bi = hr_0/k$, $Fo = \alpha t/r_0^2$

## Çok boyutlu sistemde aktarılan ısı

Isı oranları **çarpılmaz**; şu bağıntıyla birleştirilir:

$$
\left(\frac{Q}{Q_{max}}\right)_{2B} = \left(\frac{Q}{Q_{max}}\right)_1 + \left(\frac{Q}{Q_{max}}\right)_2\left[1 - \left(\frac{Q}{Q_{max}}\right)_1\right]
$$

Üç boyutta bir terim daha eklenir: $+\left(\dfrac{Q}{Q_{max}}\right)_3\left[1 - \left(\dfrac{Q}{Q_{max}}\right)_1\right]\left[1 - \left(\dfrac{Q}{Q_{max}}\right)_2\right]$.

> **Kaynak:** El yazısı ders notları, [s. 40–43](../pdf/ders-notlari-1.pdf#page=40).
