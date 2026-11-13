# Konum analizi

Kinematik analiz, bütün boyutları bilinen bir mekanizmada uzuvların ve noktaların **konum, hız ve ivmelerinin** hesaplanmasıdır. İlk adım her zaman **konum analizidir**; hız ve ivme, konum denklemlerinin türevinden gelir.

> **İşaret kuralı (bütün konularda geçerli):** Açılar pozitif $x$ ekseninden **saat yelkovanının tersi (SYT)** yönünde ölçülür ve SYT pozitiftir. Saat yelkovanı yönü (SY) negatiftir.

## Bir noktanın konumu: üç gösterim

| Gösterim | Konum |
|---|---|
| Kartezyen | $\vec r = x\,\vec i + y\,\vec j$ |
| Kutupsal | $r\angle\theta$, burada $r = \sqrt{x^2+y^2}$ ve $\theta = \operatorname{atan2}(y, x)$ |
| Karmaşık sayı | $z = x + iy = r(\cos\theta + i\sin\theta) = r\,e^{i\theta}$ |

Bu derste en çok **karmaşık sayı (üstel) gösterimi** kullanılır, çünkü türev almak çok kolaydır:

$$
\frac{d}{dt}\left(r e^{i\theta}\right) = i\,r\,\dot\theta\, e^{i\theta} \quad (r \text{ sabitse})
$$

Kullanışlı eşitlikler: $e^{i\pi/2} = i$, $\; e^{i\pi} = -1$, $\; \cos\theta = \dfrac{e^{i\theta}+e^{-i\theta}}{2}$, $\; \sin\theta = \dfrac{e^{i\theta}-e^{-i\theta}}{2i}$.

## Rijit cisim varsayımının üç sonucu

1. Düzlemde hareket eden rijit bir cismin konumu, cisim üzerindeki **iki noktanın** konumuyla (veya bir nokta ile bir doğrunun açısıyla) tam olarak belirlenir.
2. Bir doğru üzerindeki noktaların **o doğru yönündeki hız bileşenleri eşittir.** Bu yüzden iki nokta arasındaki bağıl hız daima o iki noktayı birleştiren doğruya **diktir.**
3. Cismin fiziksel şekli önemsizdir; uzuv bir $AB$ doğrusu olarak gösterilebilir.

## Vektörel çevrim (döngü kapama) denklemleri

Tek s.d.li bir mekanizmada giriş uzvunun açısı $q$ **esas genelleştirilmiş koordinattır** (bilinen). Diğer hareketli uzuvların konum değişkenleri $s_1, s_2, \dots, s_k$ **ikincil koordinatlardır** (bilinmeyen) ve $q$'ya bağlıdır.

$l$ uzuvlu kapalı bir mekanizmada:

- Bilinmeyen sayısı: $k = l - 2$
- Yazılabilecek bağımsız vektörel çevrim denklemi: $\dfrac{l}{2} - 1$
- Her vektörel denklem düzlemde **2 skaler denklem** verir. Böylece $k$ bilinmeyen için $k$ denklem elde edilir.

> **Dikkat:** Çevrim denklemi yazılırken vektör yönleri ve toplam işaretleri tutarlı olmalıdır. Vektörün yönünü ok yönüne göre seç, açısını o vektörün $+x$ ile yaptığı SYT açı olarak al.

### Dört çubuk mekanizması

$$
\vec{A_0A} + \vec{AB} = \vec{A_0B_0} + \vec{B_0B}
\quad\Longrightarrow\quad
r_2 e^{i\theta_2} + r_3 e^{i\theta_3} = r_1 + r_4 e^{i\theta_4}
$$

Gerçel ve sanal kısımlar:

$$
\begin{aligned}
x &: \; r_2\cos\theta_2 + r_3\cos\theta_3 - r_1 - r_4\cos\theta_4 = 0 \\
y &: \; r_2\sin\theta_2 + r_3\sin\theta_3 - r_4\sin\theta_4 = 0
\end{aligned}
$$

### Krank-biyel mekanizması (kaçıklık $d$)

$$
r_2 e^{i\theta_2} + r_3 e^{i\theta_3} = s + i\,d
$$

### Kol-kızak mekanizması

4 uzvu 3 uzvu üzerinde kayar. $s_{43}$, 4'ün 3'e göre bağıl konumudur ve 4 uzvuna diktir:

$$
r_2 e^{i\theta_2} = r_1 + r_4 e^{i\theta_4} + s_{43}\,e^{i(\theta_4 + \pi/2)} = r_1 + (r_4 + i\,s_{43})\,e^{i\theta_4}
$$

### Çok gözlü mekanizmalar

6 uzuvlu bir mekanizmada $l/2 - 1 = 2$ vektörel denklem, yani 4 skaler denklem yazılır; bu da 4 bilinmeyene ($\theta_3, \theta_4, \theta_5, s$ gibi) yeter. Önce birinci gözün denklemleri çözülür, bulunan açılar ikinci göze aktarılır.

## Krank-biyel: analitik çözüm

$$
r_3\cos\theta_3 = s - r_2\cos q, \qquad r_3\sin\theta_3 = d - r_2\sin q
$$

İki denklemin karesi alınıp toplanırsa $\theta_3$ yok olur:

$$
s^2 - 2r_2\cos q\; s + \left(r_2^2 + d^2 - r_3^2 - 2 d\, r_2 \sin q\right) = 0
$$

$$
\boxed{s = r_2\cos q \pm \sqrt{r_3^2 - (d - r_2\sin q)^2}}
\qquad
\boxed{\theta_3 = \operatorname{atan2}\!\left(d - r_2\sin q,\; s - r_2\cos q\right)}
$$

İki kök, aynı krank açısında mekanizmanın iki farklı montaj biçimine karşılık gelir (piston krankın sağında veya solunda).

**Merkezcil krank-biyel ($d = 0$)** motorlarda ve pistonlu pompalarda kullanılır:

$$
s = r_2\cos q + r_3\sqrt{1 - \lambda^2 \sin^2 q}, \qquad \lambda = \frac{r_2}{r_3}
$$

## Dört çubuk: Freudenstein denklemi

$r_3 e^{i\theta_3} = r_1 + r_4 e^{i\theta_4} - r_2 e^{i\theta_2}$ eşitliğinin kendisi ile eşleniği çarpılırsa ($\theta_3$ yok olur):

$$
\boxed{K_1\cos\theta_4 - K_2\cos\theta_2 + K_3 = \cos(\theta_2 - \theta_4)}
$$

$$
K_1 = \frac{r_1}{r_2}, \qquad K_2 = \frac{r_1}{r_4}, \qquad K_3 = \frac{r_1^2 + r_2^2 - r_3^2 + r_4^2}{2\,r_2 r_4}
$$

Yarım açı dönüşümü $t = \tan(\theta_4/2)$, $\;\cos\theta_4 = \dfrac{1-t^2}{1+t^2}$, $\;\sin\theta_4 = \dfrac{2t}{1+t^2}$ ile ikinci dereceden denkleme dönüşür:

$$
A\,t^2 + B\,t + C = 0
$$

$$
A = K_1 - K_3 - (1 - K_2)\cos\theta_2, \qquad B = 2\sin\theta_2, \qquad C = (1 + K_2)\cos\theta_2 - K_1 - K_3
$$

$$
\boxed{\theta_4 = 2\arctan\!\left(\frac{-B \pm \sqrt{B^2 - 4AC}}{2A}\right)}
$$

- İki kök **açık montaj** ve **çapraz montaj** durumlarıdır.
- $B^2 - 4AC < 0$ ise mekanizma o $\theta_2$ açısında **monte edilemez.**

$\theta_4$ bulunduktan sonra $\theta_3$:

$$
\theta_3 = \operatorname{atan2}\!\left(r_4\sin\theta_4 - r_2\sin\theta_2,\;\; r_1 + r_4\cos\theta_4 - r_2\cos\theta_2\right)
$$

> Slaytta $\theta_3 = \sin^{-1}(\dots)$ kullanılıyor. Bu, $\theta_3$ 90°'yi aştığında yanlış çeyreği verebilir; `atan2` her zaman doğru çeyreği verir.

## Raven yöntemi (geometrik/kosinüs teoremi)

$A$ ile $B_0$'ı birleştiren köşegen $s$ çizilir:

$$
s = \sqrt{r_1^2 + r_2^2 - 2r_1 r_2\cos\theta_2}
$$

$$
\beta = \cos^{-1}\!\frac{r_1^2 + s^2 - r_2^2}{2r_1 s}, \qquad
\psi = \cos^{-1}\!\frac{r_4^2 + s^2 - r_3^2}{2 r_4 s}, \qquad
\gamma = \cos^{-1}\!\frac{r_3^2 + r_4^2 - s^2}{2 r_3 r_4}
$$

Buradan $\theta_4 = \pi - (\beta \pm \psi)$ ve $\theta_3 = \theta_4 - \gamma$ bulunur (± montaj biçimine göre, $\theta_2 > 180°$ için $\beta$'nın işaretine dikkat).

## Sayısal örnek 1 – Dört çubukta bağlama noktası

$r_1 = 70$, $r_2 = 35$, $r_3 = 62{,}3$, $r_4 = 56$, $b_3 = 84{,}1$, $c_3 = 126{,}6$ mm. $\theta_2 = 60°$ iken 3 uzvu üzerindeki $C$ noktasının konumu?

**1) Katsayılar:** $K_1 = 2$, $\;K_2 = 1{,}25$, $\;K_3 = 1{,}37238$

$$
A = 0{,}752625, \qquad B = 1{,}73205, \qquad C = -2{,}247375
$$

**2) Kökler:** $\sqrt{B^2 - 4AC} = 3{,}1251$

| Montaj | $t$ | $\theta_4$ | $\theta_3$ |
|---|---|---|---|
| Açık | $(-1{,}732 + 3{,}125)/1{,}505 = 0{,}9256$ | $85{,}56°$ | $24{,}18°$ |
| Çapraz | $(-1{,}732 - 3{,}125)/1{,}505 = -3{,}227$ | $214{,}44°$ | $275{,}82°$ |

**3) $ABC$ üçgeninde $A$ köşesindeki açı** (kosinüs teoremi):

$$
\gamma = \cos^{-1}\frac{r_3^2 + c_3^2 - b_3^2}{2 r_3 c_3} = \cos^{-1}(0{,}8137) = 35{,}538°
$$

**4) $C$ noktası** ($\vec{A_0C} = \vec{A_0A} + \vec{AC}$), açık montaj için:

$$
\begin{aligned}
x_C &= r_2\cos\theta_2 + c_3\cos(\theta_3 + \gamma) = 81{,}33 \text{ mm}\\
y_C &= r_2\sin\theta_2 + c_3\sin(\theta_3 + \gamma) = 139{,}64 \text{ mm}
\end{aligned}
$$

> Mekanizma üzerindeki bir noktanın konumunu bulmak için **önce uzuvların açıları** bulunmalıdır.

## Kol-kızak: analitik çözüm

Çevrim denklemi $e^{-i\theta_4}$ ile çarpılıp gerçel ve sanal kısımlar ayrılırsa:

$$
r_2\cos(\theta_2 - \theta_4) - r_1\cos\theta_4 - r_4 = 0,
\qquad
s_{43} = r_2\sin(\theta_2-\theta_4) + r_1\sin\theta_4
$$

Yarım açı dönüşümüyle $A t^2 + B t + C = 0$, $t = \tan(\theta_4/2)$:

$$
A = r_1 - r_4 - r_2\cos\theta_2, \qquad B = 2 r_2 \sin\theta_2, \qquad C = r_2\cos\theta_2 - r_1 - r_4
$$

Kayma mesafesi doğrudan (çevrim denklemi ile eşleniğinin çarpımından):

$$
\boxed{s_{43}^2 = r_1^2 + r_2^2 - r_4^2 - 2 r_1 r_2\cos\theta_2}
$$

> Slayttaki $B = 2\sin\theta_2$ ifadesinde $r_2$ çarpanı eksik görünüyor. Doğrusu $B = 2r_2\sin\theta_2$ (örnekte $\theta_2 = 0$ olduğu için sonuç değişmiyor).

### Sayısal örnek 2

$r_1 = 200$, $r_2 = 70$, $r_4 = 80$ mm, $\theta_2 = 0°$:

$$
A = 200 - 80 - 70 = 50, \qquad B = 0, \qquad C = 70 - 200 - 80 = -210
$$

$$
t = \pm\sqrt{210/50} = \pm 2{,}049 \;\Rightarrow\; \theta_4 = \pm 127{,}98°
$$

$$
s_{43} = \sqrt{200^2 + 70^2 - 80^2 - 2\cdot200\cdot70} = 102{,}47 \text{ mm}
$$

## Ödevler (slayttan)

1. Örnek 2'deki kol-kızak mekanizmasında $\theta_2 = 45°$ alarak konum analizini karmaşık sayılar, Raven ve geometrik yöntemlerle yap. *(Kontrol için: açık montajda $\theta_4 \approx 102{,}12°$, $s_{43} \approx 136{,}75$ mm.)*
2. Altı uzuvlu mekanizmada ($A_0A = 250$, $AB = 1225$, $CB = 350$, $C_0C = 600$, $BD = 600$, $DE = 1100$, $A_0C_0 = 710$ mm) $\theta_2 = 60°$ için 3, 4, 5 ve 6 uzuvlarının konumlarını bul.
3. ve 4. $A_0B_0 = 14$, $A_0A = 7$, $AB = 12{,}46$, $B_0B = 11{,}2$, $BC = 35$ cm, $\theta_2 = 120°$ için 3, 4, 5 ve 6 uzuvlarının konumları.

> **Hesap ipucu:** Ters tanjant için hesap makinesinde `atan` yerine mümkünse `atan2(y, x)` kullan. `atan` yalnızca −90° ile 90° arasında sonuç verir ve çeyrek hatasına yol açar.
