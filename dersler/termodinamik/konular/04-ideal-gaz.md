# İdeal gaz ve gerçek gaz davranışı

## İdeal gaz hal denklemi

$$
\boxed{Pv = RT}, \qquad PV = mRT = N R_u T
$$

$$
R = \frac{R_u}{M}, \qquad R_u = 8{,}314\ \text{kJ/kmol·K}
$$

| Gaz | $M$ (kg/kmol) | $R$ (kJ/kg·K) |
|---|---|---|
| Hava | 28,97 | 0,287 |
| Azot | 28,01 | 0,2968 |
| Oksijen | 32,00 | 0,2598 |
| Helyum | 4,003 | 2,0769 |
| Su buharı | 18,015 | 0,4615 |

> $T$ **mutlak** sıcaklık (K), $P$ **mutlak** basınç olmalıdır. En sık yapılan hata °C veya etkin basınç kullanmaktır.

Sabit kütle için iki hal arasında:

$$
\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}
$$

### Ne zaman geçerli?

- **Düşük basınç ve yüksek sıcaklıkta** (yoğunluk küçükken) gazlar ideal davranır.
- Kritik noktaya ve doymuş buhar eğrisine yaklaştıkça hata büyür.
- **Su buharı:** $P < 10$ kPa'da her sıcaklıkta ideal gaz (hata < %0,1); iklimlendirmede (kısmi basınç çok düşük) ideal gaz kabul edilir; **buharlı güç santrallerinde edilemez**, tablo kullanılır.

## Gerçek gaz: sıkıştırılabilme çarpanı

$$
\boxed{Z = \frac{Pv}{RT} = \frac{v_{gerçek}}{v_{ideal}}}
$$

İdeal gazda $Z = 1$. $Z$ 1'den uzaklaştıkça ideal davranıştan sapma artar.

**İndirgenmiş özellikler:**

$$
P_R = \frac{P}{P_{kr}}, \qquad T_R = \frac{T}{T_{kr}}, \qquad v_R = \frac{v_{gerçek}}{RT_{kr}/P_{kr}}
$$

**Karşılıklı haller ilkesi:** Aynı $P_R$ ve $T_R$ değerlerinde bütün gazların $Z$ değeri yaklaşık aynıdır. Bu yüzden tek bir **genelleştirilmiş Z diyagramı** bütün gazlar için kullanılır.

- $P_R \ll 1$: gaz $T$'den bağımsız olarak ideal davranır.
- $T_R > 2$: $P_R < 4$ ise ideal davranış iyi bir yaklaşımdır.
- Kritik nokta civarında sapma en büyüktür.

## Diğer hal denklemleri

**Van der Waals** (moleküller arası çekim $a$ ve molekül hacmi $b$ için düzeltme):

$$
\left(P + \frac{a}{v^2}\right)(v - b) = RT, \qquad a = \frac{27R^2T_{kr}^2}{64P_{kr}}, \qquad b = \frac{RT_{kr}}{8P_{kr}}
$$

- **Beattie-Bridgeman:** 5 sabit; $\rho \le 0{,}8\rho_{kr}$ için hassas.
- **Benedict-Webb-Rubin:** 8 sabit; $\rho \le 2{,}5\rho_{kr}$ için hassas.
- **Virial:** $P = \dfrac{RT}{v} + \dfrac{a(T)}{v^2} + \dfrac{b(T)}{v^3} + \dots$

## Örnek

0,5 m³ kapta 400 kPa, 27 °C azot. Kütlesi?

$$
m = \frac{PV}{RT} = \frac{400\cdot0{,}5}{0{,}297\cdot300} = 2{,}245\ \text{kg}
$$

Kap 77 °C'ye ısıtılırsa (sabit hacim):

$$
P_2 = P_1\frac{T_2}{T_1} = 400\cdot\frac{350}{300} = 466{,}7\ \text{kPa}
$$
