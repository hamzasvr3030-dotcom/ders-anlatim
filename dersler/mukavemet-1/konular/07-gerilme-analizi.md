# Gerilme analizi ve Mohr dairesi

Kesitteki eğik gerilme vektörünün yüzey **normaline izdüşümü** normal gerilme $\sigma_n$, **kesite paralel izdüşümü** kayma gerilmesi $\tau$'dur. En genel durumda gerilme 9 bileşenli bir tensördür; $\tau_{xy} = \tau_{yx}$, $\tau_{xz} = \tau_{zx}$, $\tau_{yz} = \tau_{zy}$ olduğundan **6 bağımsız** bileşen vardır:

$$
[\sigma] = \begin{bmatrix} \sigma_x & \tau_{xy} & \tau_{xz} \\ \tau_{yx} & \sigma_y & \tau_{yz} \\ \tau_{zx} & \tau_{zy} & \sigma_z \end{bmatrix}
$$

> Gerilme noktasal bir büyüklük olduğundan denge, gerilmeler **etkidikleri alanla** çarpılarak (kuvvete çevrilerek) yazılır.

## Bir eksenli gerilme hali

Eksenel $N$ taşıyan çubukta, normali eksenle $\alpha$ açısı yapan eğik düzlem:

$$
\sigma_1 = \frac{N}{A}
$$

$$
\boxed{\sigma_n = \sigma_1\cos^2\alpha = \frac{\sigma_1}{2} + \frac{\sigma_1}{2}\cos2\alpha}
\qquad
\boxed{\tau = -\frac{\sigma_1}{2}\sin2\alpha}
$$

| Düzlem | $\sigma_n$ | $\tau$ |
|---|---|---|
| $\alpha = 0$ (dik kesit) | $\sigma_1$ (**maksimum**) | 0 |
| $\alpha = 45°$ | $\sigma_1/2$ | $\pm\sigma_1/2$ (**maksimum**) |
| $\alpha = 90°$ | 0 | 0 |

Önemli özellikler:

- Birbirine dik iki düzlemdeki normal gerilmelerin toplamı sabittir: $\sigma(\alpha) + \sigma(\alpha + 90°) = \sigma_1$ (invaryant).
- Birbirine dik düzlemlerde kayma gerilmeleri eşit ve zıt işaretlidir.
- En büyük kayma gerilmesi **45°'lik düzlemdedir.** Sünek numunelerin çekmede 45°'lik yüzeyden kırılmasının nedeni budur.

### Örnek

20×10 mm kesitli çubuk, $N = 10$ kN, $\alpha = 30°$:

$$
\sigma_1 = \frac{10\,000}{200} = 50\ \text{MPa}, \quad \sigma_n = 50\cos^2 30° = 37{,}5\ \text{MPa}, \quad \tau = -25\sin60° = -21{,}65\ \text{MPa}
$$

## İki eksenli (düzlem) gerilme hali

Elemanda $\sigma_x$, $\sigma_y$ ve $\tau_{xy}$ varsa, $x$ ekseniyle $\theta$ açısı yapan düzlemde:

$$
\sigma_\theta = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2}\cos2\theta + \tau_{xy}\sin2\theta
$$

$$
\tau_\theta = -\frac{\sigma_x - \sigma_y}{2}\sin2\theta + \tau_{xy}\cos2\theta
$$

### Asal gerilmeler

Kayma gerilmesinin sıfır olduğu düzlemlerdeki normal gerilmeler:

$$
\boxed{\sigma_{1,2} = \frac{\sigma_x + \sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}}
\qquad
\tan2\theta_p = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}
$$

### En büyük kayma gerilmesi

$$
\boxed{\tau_{max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} = \frac{\sigma_1 - \sigma_2}{2}}
$$

Asal düzlemlerle **45°** açı yapan düzlemlerde oluşur; bu düzlemlerde normal gerilme $\sigma_{ort} = (\sigma_x + \sigma_y)/2$'dir.

## Mohr dairesi

Dönüşüm denklemleri bir dairenin parametrik denklemidir:

- **Merkez:** $C = \left(\dfrac{\sigma_x + \sigma_y}{2},\; 0\right)$
- **Yarıçap:** $R = \sqrt{\left(\dfrac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$

**Çizim adımları:**

1. Yatay eksen $\sigma$, düşey eksen $\tau$.
2. $X(\sigma_x, \tau_{xy})$ ve $Y(\sigma_y, -\tau_{xy})$ noktalarını işaretle. İkisini birleştiren doğru $\sigma$ eksenini merkezde keser.
3. Merkez ve yarıçapla daireyi çiz.
4. Dairenin $\sigma$ eksenini kestiği noktalar **asal gerilmeler** $\sigma_1$, $\sigma_2$'dir.
5. Dairenin en üst ve en alt noktaları $\pm\tau_{max}$'tır.
6. Eleman üzerinde $\theta$ kadar dönmek, dairede **$2\theta$** kadar dönmeye karşılık gelir.

> Bir eksenli halde ($\sigma_y = \tau_{xy} = 0$) daire orijinden geçer: merkez $\sigma_1/2$, yarıçap $\sigma_1/2$. Bu, $\tau_{max} = \sigma_1/2$ sonucunu görsel olarak verir.

### Sayısal örnek

$\sigma_x = 80$ MPa, $\sigma_y = -40$ MPa, $\tau_{xy} = 25$ MPa:

$$
C = 20, \qquad R = \sqrt{60^2 + 25^2} = 65\ \text{MPa}
$$

$$
\sigma_1 = 85\ \text{MPa}, \quad \sigma_2 = -45\ \text{MPa}, \quad \tau_{max} = 65\ \text{MPa}, \quad 2\theta_p = \tan^{-1}\frac{50}{120} = 22{,}6° \Rightarrow \theta_p = 11{,}3°
$$

## Sık yapılan hatalar

- Mohr dairesinde açıyı $2\theta$ yerine $\theta$ almak.
- $\tau_{xy}$'nin işaret kuralını karıştırmak; kendi notundaki kuralı baştan sabitle.
- Asal düzlemlerde kayma gerilmesinin sıfır, en büyük kayma düzleminde normal gerilmenin **sıfır olmadığını** ($\sigma_{ort}$) unutmak.
