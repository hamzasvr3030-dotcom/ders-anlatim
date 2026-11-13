# Kapalı sistem enerji dengesi ve özgül ısılar

## Enerji dengesi

$$
E_g - E_ç = \Delta E_{sistem}
$$

Klasik işaret kuralıyla (sisteme verilen ısı ve sistemin yaptığı iş pozitif):

$$
\boxed{Q_{net,g} - W_{net,ç} = \Delta U + \Delta KE + \Delta PE}
$$

Hareketsiz sistem: $Q - W = m(u_2 - u_1)$. Çevrim: $Q = W$.

### Sabit basınçta özel durum

İş, sınır işi ve diğer işlerin toplamıysa ($W = W_{diğer} + W_s$), sabit basınçta $W_s + \Delta U = \Delta H$ olur:

$$
\boxed{Q - W_{diğer} = H_2 - H_1 = m(h_2 - h_1)}
$$

> Sabit basınçlı piston-silindir problemlerinde sınır işini ayrıca hesaplamak yerine doğrudan **entalpi** farkını kullan.

## Özgül ısılar

- $c_v$: birim kütlenin sıcaklığını **sabit hacimde** 1 °C artırmak için gereken enerji.
- $c_p$: aynısı **sabit basınçta**. Genişleme işi de karşılandığı için **$c_p > c_v$**.

$$
c_v = \left(\frac{\partial u}{\partial T}\right)_v, \qquad c_p = \left(\frac{\partial h}{\partial T}\right)_p
$$

Birim: kJ/kg·°C = kJ/kg·K.

## İdeal gazlar

Joule deneyi: ideal gazda $u$, $h$, $c_v$, $c_p$ **yalnızca sıcaklığa** bağlıdır.

$$
du = c_v\,dT, \qquad dh = c_p\,dT, \qquad \boxed{c_p = c_v + R}, \qquad k = \frac{c_p}{c_v}
$$

| Gaz (300 K) | $c_p$ | $c_v$ | $k$ |
|---|---|---|---|
| Hava | 1,005 | 0,718 | 1,4 |
| Helyum (tek atomlu) | 5,19 | 3,12 | 1,667 |

$\Delta u$ ve $\Delta h$ hesaplamanın üç yolu:

1. **Tablolar** (A-17 vb.): en kolay ve en hassas.
2. $c_p(T) = a + bT + cT^2 + dT^3$ ifadesinin integrali.
3. **Ortalama özgül ısı** (ortalama sıcaklıkta): $\Delta u = c_{v,ort}\Delta T$, $\;\Delta h = c_{p,ort}\Delta T$.

> $\Delta u = c_v\Delta T$ ideal gazda **her süreç için** geçerlidir; sabit hacim şartı gerekmez. Örneğin hava 300 → 600 K için tablodan $\Delta u = 220{,}7$ kJ/kg, ortalama $c_v$ (0,733) ile 219,9 kJ/kg.

## Katılar ve sıvılar (sıkıştırılamaz maddeler)

$$
c_p = c_v = c, \qquad \Delta u \approx c_{ort}\Delta T, \qquad \Delta h = \Delta u + v\,\Delta P
$$

- Katılar ve sabit basınçta ısıtılan sıvılar: $\Delta h \approx \Delta u \approx c\,\Delta T$.
- Sabit sıcaklıkta sıvı (pompa): $\Delta h = v\,\Delta P$.

## Çözümlü örnekler

**Sabit basınçta elektrikli ısıtma.** 300 kPa'da 25 g doymuş su buharı; 120 V, 0,2 A ile 5 dakika ısıtılıyor; 3,7 kJ ısı kaybı var.

$$
W_e = VI\Delta t = 120\cdot0{,}2\cdot300 = 7{,}2\ \text{kJ}, \qquad h_1 = h_{g@300\,kPa} = 2724{,}9\ \text{kJ/kg}
$$

$$
7{,}2 - 3{,}7 = 0{,}025\,(h_2 - 2724{,}9) \;\Rightarrow\; h_2 = 2864{,}9\ \text{kJ/kg} \;\Rightarrow\; T_2 \approx 200\ °\text{C}
$$

**Helyumun karıştırılması.** Yalıtılmış rijit kapta 0,7 kg He, 27 °C, 350 kPa; 15 W'lık karıştırıcı 30 dakika çalışıyor ($c_v = 3{,}1156$):

$$
W = 0{,}015\cdot1800 = 27\ \text{kJ} = m c_v (T_2 - T_1) \;\Rightarrow\; T_2 = 39{,}4\ °\text{C}
$$

$$
P_2 = P_1\frac{T_2}{T_1} = 350\cdot\frac{312{,}4}{300} = 364{,}5\ \text{kPa}
$$

**Sabit basınçta azotun ısıtılması.** 400 kPa, 27 °C, 0,5 m³ N₂; 120 V, 2 A, 5 dakika; 2,8 kJ ısı kaybı ($R = 0{,}297$, $c_p = 1{,}039$):

$$
m = \frac{400\cdot0{,}5}{0{,}297\cdot300} = 2{,}245\ \text{kg}, \qquad 72 - 2{,}8 = 2{,}245\cdot1{,}039\,(T_2 - 27) \;\Rightarrow\; T_2 = 56{,}7\ °\text{C}
$$

**Pabuçlu piston.** Hava 150 kPa, 27 °C, 400 L. Piston 350 kPa'da kalkıyor; hacim iki katına çıkana kadar ısıtılıyor.

1. Süreç: önce sabit hacim (150 → 350 kPa), sonra sabit basınç (0,4 → 0,8 m³).
2. $T_3 = T_1\dfrac{P_3V_3}{P_1V_1} = 300\cdot\dfrac{350\cdot2}{150} = 1400$ K
3. $W = 350\cdot(0{,}8 - 0{,}4) = 140$ kJ
4. $m = \dfrac{150\cdot0{,}4}{0{,}287\cdot300} = 0{,}697$ kg; tablodan $u_1 = 214{,}07$, $u_3 = 1113{,}52$ kJ/kg

$$
Q = m(u_3 - u_1) + W = 0{,}697\,(899{,}45) + 140 = 767\ \text{kJ}
$$

**Suyun vakumlu bölmeye genişlemesi.** 200 kPa, 25 °C'de 5 kg su; eşit hacimli diğer bölme vakum. Perde kalkıyor, son sıcaklık yine 25 °C.

- $V_1 \approx 5\cdot0{,}001 = 0{,}005$ m³, kap $0{,}01$ m³ → $v_2 = 0{,}002$ m³/kg ($v_f < v_2 < v_g$): karışım, $P_2 = 3{,}17$ kPa.
- Vakuma genişlemede sınır işi **sıfırdır** (karşı basınç yok). $Q = m(u_2 - u_1) = +0{,}25$ kJ.
