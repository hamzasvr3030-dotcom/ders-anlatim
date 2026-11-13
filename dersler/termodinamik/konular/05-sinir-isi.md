# Kapalı sistemler: hareketli sınır işi

Piston-silindir düzeneğinde gazın genişlemesi veya sıkıştırılması sırasında yapılan işe **hareketli sınır işi** (*P dV işi*) denir. Süreç **sanki-dengeli** kabul edilir.

$$
\delta W_s = F\,ds = PA\,ds = P\,dV, \qquad \boxed{W_s = \int_1^2 P\,dV}\ [\text{kJ}]
$$

- Genişlemede $W_s > 0$ (sistem iş yapar), sıkıştırmada $W_s < 0$.
- **P-V diyagramında sınır işi = süreç eğrisinin altındaki alan.** Aynı uç haller arasında farklı yollar farklı iş verir; iş yola bağlıdır.
- Çevrimde net iş = kapalı eğrinin çevrelediği alan.
- Birim kontrolü: 1 kPa·m³ = 1 kJ.

## Özel süreçler

| Süreç | Koşul | Sınır işi |
|---|---|---|
| Sabit hacim | $dV = 0$ | $W_s = 0$ |
| Sabit basınç (izobarik) | $P = P_0$ | $W_s = P_0(V_2 - V_1) = mP_0(v_2 - v_1)$ |
| İzotermal, ideal gaz | $PV = C$ | $W_s = P_1V_1\ln\dfrac{V_2}{V_1} = mRT\ln\dfrac{V_2}{V_1}$ |
| Politropik ($n \ne 1$) | $PV^n = C$ | $W_s = \dfrac{P_2V_2 - P_1V_1}{1 - n}$ |
| Politropik, ideal gaz | | $W_s = \dfrac{mR(T_2 - T_1)}{1 - n}$ |
| Doğrusal yay + atmosfer | $P$ doğrusal | $W_s = \dfrac{P_1 + P_2}{2}(V_2 - V_1)$ |

> Politropik süreç genel bir modeldir: $n = 0$ izobarik, $n = 1$ izotermal (ideal gaz), $n = k$ izentropik (ideal gaz), $n \to \infty$ izokorik.

## Çözümlü örnekler

**Rijit kapta hava soğutuluyor.** 500 kPa, 150 °C → 400 kPa, 65 °C. Kap rijit, $dV = 0$ → $W_s = 0$.

**Sabit basınçta su buharı ısıtılıyor.** 5 kg, 400 kPa, 200 → 250 °C (A-6: $v_1 = 0{,}53434$, $v_2 = 0{,}59520$ m³/kg):

$$
W_s = mP_0(v_2 - v_1) = 5\cdot400\cdot(0{,}59520 - 0{,}53434) = 121{,}7\ \text{kJ}
$$

**İzotermal sıkıştırma.** Hava 100 kPa, 80 °C sabit; $V_1 = 0{,}4 \to V_2 = 0{,}1$ m³:

$$
W_s = P_1V_1\ln\frac{V_2}{V_1} = 100\cdot0{,}4\cdot\ln\frac{0{,}1}{0{,}4} = -55{,}5\ \text{kJ}
$$

Eksi işaret: sisteme iş yapılıyor (sıkıştırmada her zaman negatif).

**Yaylı pistonda genişleme.** $P_1 = 200$ kPa, $V_1 = 0{,}05$ m³; yay $k = 150$ kN/m (başta kuvvetsiz); $A = 0{,}25$ m²; hacim iki katına çıkıyor.

1. Piston yer değiştirmesi: $x = \Delta V/A = 0{,}05/0{,}25 = 0{,}2$ m
2. Yay kuvveti: $F = kx = 30$ kN → $\Delta P = F/A = 120$ kPa → $P_2 = 320$ kPa
3. Toplam iş (yamuk alanı): $W = \dfrac{200 + 320}{2}\cdot0{,}05 = 13$ kJ
4. Yaya giden kısım: $W_{yay} = \tfrac12 kx^2 = \tfrac12\cdot150\cdot0{,}2^2 = 3$ kJ; kalan 10 kJ atmosfere ve piston ağırlığına karşı yapılır.

**Politropik genişleme (kendin dene).** Hava 1 MPa, 0,02 m³'ten $PV^{1{,}3} = C$ ile 0,1 m³'e genişliyor:

$$
P_2 = 1000\left(\frac{0{,}02}{0{,}1}\right)^{1{,}3} = 123{,}4\ \text{kPa}, \qquad W_s = \frac{123{,}4\cdot0{,}1 - 1000\cdot0{,}02}{1 - 1{,}3} = 25{,}5\ \text{kJ}
$$
