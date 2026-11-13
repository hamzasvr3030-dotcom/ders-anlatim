# Açık kanal akışı

Serbest yüzeyi atmosfere açık olan sıvı akışları: nehirler, sulama kanalları, kanalizasyon, kısmen dolu borular. Akışı **yerçekimi** ve kanal eğimi sürdürür; basınç serbest yüzeyde atmosfer basıncıdır.

## Temel kavramlar

- **Hidrolik yarıçap:** $R_h = A_c/p$ ($p$: ıslak çevre). Geniş dikdörtgen kanalda $R_h \approx y$.
- **Düzgün akış:** Derinlik ve hız akış boyunca değişmez (eğim kaybı dengeler).
- **Değişken akış:** Derinlik değişir; yavaş değişen (GVF) veya ani değişen (RVF, örneğin hidrolik sıçrama).

## Froude sayısı ve akış rejimleri

$$
\boxed{Fr = \frac{V}{\sqrt{g\,y}}}
$$

| $Fr$ | Rejim | Özellik |
|---|---|---|
| $< 1$ | **Kritik altı** (sakin) | Derin ve yavaş; dalgalar akıntıya karşı ilerleyebilir |
| $= 1$ | **Kritik** | |
| $> 1$ | **Kritik üstü** (hızlı) | Sığ ve hızlı; dalgalar yukarı akışa çıkamaz |

$\sqrt{gy}$, sığ sudaki yüzey dalgalarının hızıdır.

## Özgül enerji

Kanal tabanına göre birim ağırlık başına enerji:

$$
\boxed{E_s = y + \frac{V^2}{2g}}
$$

Belirli bir debi için $E_s$'nin minimum olduğu derinlik **kritik derinliktir.** Dikdörtgen kanalda ($q = \dot V/b$ birim genişlik debisi):

$$
y_c = \left(\frac{q^2}{g}\right)^{1/3}, \qquad E_{s,min} = \frac32 y_c
$$

**Örnek:** $q = 2$ m²/s → $y_c = (4/9{,}81)^{1/3} = 0{,}74$ m.

Aynı $E_s$ için iki derinlik vardır (biri kritik altı, biri kritik üstü): **eşlenik derinlikler.**

## Düzgün akış: Manning denklemi

$$
\boxed{V = \frac{a}{n}R_h^{2/3}S_0^{1/2}}, \qquad \dot V = VA_c
$$

$a = 1$ (SI), $n$: Manning pürüzlülük katsayısı (beton ≈ 0,012–0,015; toprak kanal ≈ 0,022–0,03), $S_0$: taban eğimi.

**Örnek:** 2 m genişliğinde dikdörtgen beton kanal, $y = 1$ m, $n = 0{,}012$, $S_0 = 0{,}001$:

$$
R_h = \frac{2}{4} = 0{,}5\ \text{m}, \qquad V = \frac{1}{0{,}012}(0{,}5)^{2/3}(0{,}001)^{1/2} = 1{,}66\ \text{m/s}, \qquad \dot V = 3{,}32\ \text{m}^3/\text{s}
$$

**En iyi hidrolik kesit:** Belirli bir alan için ıslak çevreyi en aza indiren kesit. Dikdörtgende $y = b/2$; yamuk için yarım altıgen.

## Hidrolik sıçrama

Kritik üstü akışın ani olarak kritik altına geçmesi. Çok türbülanslıdır ve **enerji kaybettirir**; barajların dolusavaklarında enerjiyi kırmak için bilinçli olarak oluşturulur.

$$
\boxed{\frac{y_2}{y_1} = \frac12\left(-1 + \sqrt{1 + 8Fr_1^2}\right)}, \qquad h_L = y_1 - y_2 + \frac{V_1^2 - V_2^2}{2g}
$$

**Örnek:** $y_1 = 0{,}3$ m, $V_1 = 8$ m/s: $Fr_1 = 4{,}66$ → $y_2 = 1{,}83$ m, $V_2 = 1{,}31$ m/s, $h_L = 1{,}64$ m.

## Akış kontrol ve ölçüm yapıları

- **Kapaklar** (sürgülü kapak): altından akış; serbest veya batık akış.
- **Savaklar** (keskin kenarlı, geniş başlıklı): akışı üstünden geçirir; savak üstündeki yük $H$ ölçülerek debi bulunur. Dikdörtgen keskin kenarlı savak için $\dot V \propto bH^{3/2}$, üçgen (V-çentikli) savak için $\dot V \propto H^{5/2}$.
