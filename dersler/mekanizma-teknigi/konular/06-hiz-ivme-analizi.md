# Mekanizmalarda hız ve ivme analizi

Konum analizinde yazılan çevrim (bağ) denklemlerinin zamana göre **birinci türevi hızı, ikinci türevi ivmeyi** verir. Önce konum analizinin yapılmış olduğu, giriş uzvunun $\omega_2$ ve $\alpha_2$ değerlerinin bilindiği varsayılır.

> **Genel kural:** Bir uzuv üzerindeki herhangi bir noktanın hız ve ivmesini bulmadan önce, o uzvu diğer uzuvlara bağlayan **mafsal merkezlerinin** hız ve ivmesi bulunmalıdır.

**Kısa yol:** $r e^{i\theta}$ biçimindeki bir terimin türevleri ($r$ sabit):

$$
\frac{d}{dt}\left(re^{i\theta}\right) = i r\omega e^{i\theta}, \qquad
\frac{d^2}{dt^2}\left(re^{i\theta}\right) = i r\alpha e^{i\theta} - r\omega^2 e^{i\theta}
$$

Bilinmeyenlerden birini yok etmek için denklemi $e^{-i\theta_k}$ ile çarpıp gerçel veya sanal kısmını almak en hızlı yoldur.

> Aşağıdaki formüllerde bütün açılar, ilgili vektörün $+x$ ekseniyle yaptığı SYT açıdır. Formüllerin tamamı sayısal türevle karşılaştırılarak doğrulandı.

## Krank-biyel mekanizması

Çevrim: $r_2 e^{i\theta_2} + r_3 e^{i\theta_3} = s + i d$ ($\theta_3$: $AB$ vektörünün açısı)

### Hız

$$
i r_2\omega_2 e^{i\theta_2} + i r_3\omega_3 e^{i\theta_3} = \dot s
$$

Bu, bağıl hız denklemidir: $\vec V_B = \vec V_A + \vec V_{B/A}$.

$$
\boxed{\omega_3 = -\frac{r_2\,\omega_2\cos\theta_2}{r_3\cos\theta_3}}
\qquad
\boxed{\dot s = V_B = -\frac{r_2\,\omega_2\sin(\theta_2 - \theta_3)}{\cos\theta_3}}
$$

> Kontrol: $d = 0$ ve $\theta_2 = 90°$ iken $\dot s = -r_2\omega_2$ çıkar. Bu anda piston, krank piminin yatay hızıyla hareket eder.

### İvme

$$
\boxed{\alpha_3 = \frac{r_2\omega_2^2\sin\theta_2 + r_3\omega_3^2\sin\theta_3 - r_2\alpha_2\cos\theta_2}{r_3\cos\theta_3}}
$$

$$
\boxed{\ddot s = -r_2\alpha_2\sin\theta_2 - r_2\omega_2^2\cos\theta_2 - r_3\alpha_3\sin\theta_3 - r_3\omega_3^2\cos\theta_3}
$$

Vektörel karşılığı: $\vec a_B = \vec a_A^{\,t} + \vec a_A^{\,n} + \vec a_{B/A}^{\,t} + \vec a_{B/A}^{\,n}$.

## Dört çubuk mekanizması

Çevrim: $r_2 e^{i\theta_2} + r_3 e^{i\theta_3} = r_1 + r_4 e^{i\theta_4}$

### Hız

$$
i r_2\omega_2 e^{i\theta_2} + i r_3\omega_3 e^{i\theta_3} = i r_4\omega_4 e^{i\theta_4}
\quad\Longleftrightarrow\quad
\vec V_A + \vec V_{B/A} = \vec V_B
$$

$$
\boxed{\omega_3 = -\frac{r_2\,\omega_2\sin(\theta_2 - \theta_4)}{r_3\sin(\theta_3 - \theta_4)}}
\qquad
\boxed{\omega_4 = \frac{r_2\,\omega_2\sin(\theta_2 - \theta_3)}{r_4\sin(\theta_4 - \theta_3)}}
$$

### İvme

$$
\boxed{\alpha_3 = \frac{r_4\omega_4^2 - r_2\alpha_2\sin(\theta_2-\theta_4) - r_2\omega_2^2\cos(\theta_2-\theta_4) - r_3\omega_3^2\cos(\theta_3-\theta_4)}{r_3\sin(\theta_3-\theta_4)}}
$$

$$
\boxed{\alpha_4 = \frac{r_2\alpha_2\sin(\theta_2-\theta_3) + r_2\omega_2^2\cos(\theta_2-\theta_3) + r_3\omega_3^2 - r_4\omega_4^2\cos(\theta_4-\theta_3)}{r_4\sin(\theta_4-\theta_3)}}
$$

> **Paydaya dikkat:** $\sin(\theta_3 - \theta_4) = 0$ olduğunda (biyel ile çıkış kolu aynı doğrultuda) formüller tanımsızdır. Bu, mekanizmanın **ölü konumudur.**

### Bağlama noktası $C$

$\vec r_C = r_2 e^{i\theta_2} + c_3 e^{i(\theta_3 + \gamma)}$ ($\gamma$: $AB$ ile $AC$ arasındaki sabit açı)

$$
\vec V_C = i r_2\omega_2 e^{i\theta_2} + i c_3\omega_3 e^{i(\theta_3+\gamma)} \quad (\vec V_C = \vec V_A + \vec V_{C/A})
$$

$$
V_C^2 = r_2^2\omega_2^2 + c_3^2\omega_3^2 + 2 r_2 c_3\,\omega_2\omega_3\cos(\theta_3 + \gamma - \theta_2)
$$

$$
\vec a_C = (i r_2\alpha_2 - r_2\omega_2^2) e^{i\theta_2} + (i c_3\alpha_3 - c_3\omega_3^2)e^{i(\theta_3+\gamma)}
$$

Bileşenler: $x_C$ ve $y_C$ ifadelerinin doğrudan türevi alınarak da bulunabilir. Yön için `atan2` kullan.

## Kol-kızak mekanizması

Çevrim: $r_2 e^{i\theta_2} = r_1 + (r_4 + i s_{43})\,e^{i\theta_4}$

Türev alınıp $e^{-i\theta_4}$ ile çarpılırsa:

$$
r_2\omega_2 e^{i(\theta_2 - \theta_4)} = (\dot s_{43} + r_4\omega_4) + i\,s_{43}\omega_4
$$

### Hız

$$
\boxed{\omega_4 = \frac{r_2\,\omega_2\sin(\theta_2 - \theta_4)}{s_{43}}}
\qquad
\boxed{\dot s_{43} = r_2\omega_2\cos(\theta_2-\theta_4) - r_4\omega_4}
$$

Vektörel karşılığı: $\vec V_{A_4} = \vec V_{A_3} + \vec V_{A_4/A_3}$. Bağıl hız kızak doğrultusundadır.

### İvme

$$
\boxed{\alpha_4 = \frac{r_2\alpha_2\sin(\theta_2-\theta_4) + r_2\omega_2^2\cos(\theta_2-\theta_4) - 2\dot s_{43}\,\omega_4 - r_4\omega_4^2}{s_{43}}}
$$

$$
\boxed{\ddot s_{43} = r_2\alpha_2\cos(\theta_2-\theta_4) - r_2\omega_2(\omega_2-\omega_4)\sin(\theta_2-\theta_4) - r_4\alpha_4}
$$

Payda görünen $2\dot s_{43}\omega_4$ terimi **Coriolis ivmesidir**:

$$
\vec a_{A_4} = \vec a_{A_2}^{\,t} + \vec a_{A_2}^{\,n} + \vec a_{A_4/A_3}^{\,t} + \underbrace{\vec a_{A_4/A_3}^{\,c}}_{2\omega_4 \dot s_{43}}
$$

## Grafiksel çözüm: hız ve ivme poligonları

Bağıl hız denklemi $\vec V_B = \vec V_A + \vec V_{B/A}$ doğrudan çizilebilir:

1. Bir başlangıç noktası $O_v$ seç. $\vec V_A$'yı ölçekli çiz ($r_2\omega_2$, $A_0A$'ya dik).
2. $\vec V_A$'nın ucundan $AB$'ye **dik** bir doğru çiz ($\vec V_{B/A}$'nın doğrultusu).
3. $O_v$'den $\vec V_B$'nin bilinen doğrultusunu çiz (piston için yatay, dört çubukta $B_0B$'ye dik).
4. İki doğrunun kesişimi $b$ noktasıdır. $O_v b = V_B$, $ab = V_{B/A}$ ve $\omega_3 = V_{B/A}/r_3$.

İvme poligonu aynı mantıkla kurulur. Bilinen terimler ($a^n$ bileşenleri, $a_A^t$) önce çizilir; bilinmeyen teğetsel bileşenlerin yalnızca **doğrultusu** bilinir, şiddetleri kesişimden okunur.

> Bir denklemde en fazla **iki skaler bilinmeyen** (iki şiddet, ya da bir şiddet ve bir yön) olabilir; aksi hâlde poligon kapanmaz.

## Sayısal örnek (slayttan): iletim mekanizması

Piston (2) silindir içinde **180 mm/s sabit hızla** yukarı çıkıyor. $s_{12} = 60$ mm için $D$ noktasının konum, hız ve ivmesi istenmiş. Konum için $A t^2 + Bt + C = 0$ ($t = \tan(\theta_3/2)$), hız için türev alıp $e^{\pm i\theta_3}$ ile eleme yapılıyor:

$$
\omega_3 = -\frac{\cos\theta_3}{s_{34}}\,\dot s_{12} = -\frac{\cos 38{,}455°}{290{,}21}\cdot 180 = -0{,}4857 \text{ rad/s}
$$

İvmede de aynı yol izlenir; kayan blok dönen uzuv üzerinde olduğundan $2\dot s_{34}\omega_3$ Coriolis terimi ortaya çıkar.

Slayttaki MATLAB çıktısı:

| Büyüklük | Sonuç |
|---|---|
| $\theta_3$ | 38,455° |
| $s_{34}$ | 290,21 mm |
| $D$ konumu | $(-690{,}57;\;-31{,}25)$ mm |
| $\omega_3$ | −0,4857 rad/s |
| $\dot s_{34}$ | −148,86 mm/s |
| $V_D$ | 439,83 mm/s, açı 76,67° |
| $\alpha_3$ | −0,4365 rad/s² |
| $\ddot s_{34}$ | 35,29 mm/s² |
| $a_D$ | 273,67 mm/s², açı 39,37° |
