# Dişli çarklar ve dişli zincirleri

**Dişliler**, sabit hız oranı ile bir milden diğerine **moment ve hareket** ileten makine elemanlarıdır. Kullanım amaçları:

- dönüş yönünü değiştirmek,
- dönüş hızını artırmak veya azaltmak,
- dönmeyi başka bir eksene taşımak,
- iki eksenin uyumlu (senkron) dönmesini sağlamak.

Dişli çifti bir **yüksek eleman çiftidir** (s.d. = 2). Dişlilerin sürekli temasta kalması için her biri bir uzva döner mafsalla bağlanır. Giriş ve çıkış açıları **doğrusal** bir denklemle bağlı olduğundan dişli sistemlerine **lineer mekanik sistemler** de denir.

## Hız oranı, modül, dişli oranı

Temas noktası $P$'de kayma yoktur (saf yuvarlanma). Bu yüzden iki dişlinin $P$ noktasındaki teğetsel hızları eşittir:

$$
V_P = r_2\,\omega_2 = r_3\,\omega_3
$$

$$
\boxed{N_{23} = \frac{\omega_3}{\omega_2} = \mp\frac{r_2}{r_3} = \mp\frac{d_2}{d_3} = \mp\frac{T_2}{T_3}}
$$

- $T$: diş sayısı, $d = 2r$: **bölüm (taksimat) dairesi çapı**
- **Modül:** $m = \dfrac{d}{T}$ (mm). Birlikte çalışan dişlilerin modülü **aynı olmalıdır.**
- **Taksimat (adım):** $t = \dfrac{\pi d}{T} = \pi m$

> Açısal hızlar, bölüm dairesi yarıçaplarıyla ve diş sayılarıyla **ters orantılıdır.**

| Çift türü | İşaret | Anlamı |
|---|---|---|
| **Dış dişli** çifti | $-$ | Dişliler **ters** yönde döner |
| **İç dişli** çifti (biri halka dişli) | $+$ | Dişliler **aynı** yönde döner |

## Basit dişli zincirleri

Bütün dişlilerin eksenleri **sabittir** (her dişli gövdeye döner mafsalla bağlı).

### Avare dişli

İki dişli arasına üçüncü bir dişli konursa:

$$
\frac{\omega_4}{\omega_2} = \left(-\frac{T_2}{T_3}\right)\left(-\frac{T_3}{T_4}\right) = +\frac{T_2}{T_4}
$$

Aradaki dişlinin diş sayısı **oranı etkilemez**, yalnızca **dönüş yönünü** değiştirir. Bu dişliye **avare dişli** denir.

### Birleşik basit dişli zinciri

Aynı mil üzerinde iki farklı dişli bulunur (örneğin $T_3$ ve $T_3'$ aynı milde, $\omega_3 = \omega_3'$):

$$
\boxed{\frac{\omega_{giriş}}{\omega_{çıkış}} = (-1)^n\,\frac{\text{tahrik edilen dişlilerin diş sayıları çarpımı}}{\text{tahrik eden dişlilerin diş sayıları çarpımı}}}
$$

$n$: dış dişli çifti sayısı.

### Çözümlü örnek

Giriş dişlisi $\omega_2 = 10$ rad/s; $T_2 = 20$, $T_3 = 40$, $T_3' = 22$, $T_4 = 132$. Çıkış hızı?

$$
\frac{\omega_2}{\omega_4} = \frac{T_3\,T_4}{T_2\,T_3'} = \frac{40\cdot132}{20\cdot22} = 12
\quad\Rightarrow\quad
\omega_4 = \frac{10}{12} = 0{,}833 \text{ rad/s}
$$

(İki dış çift olduğundan yön girişle aynıdır.)

## Kademeli dişli kutuları (vites kutuları)

Sabit giriş hızından farklı kademelerde çıkış hızları alınır. Giriş ve çıkış millerinin **aynı eksende** olması için her kademedeki dişli çiftlerinin yarıçapları toplamı, dolayısıyla (aynı modülde) **diş sayıları toplamı eşit** olmalıdır:

$$
T_A + T_B = T_C + T_F = T_D + T_G = T_E + T_H \quad (\text{örnekte } = 60)
$$

**6 kademeli takım tezgâhı dişli kutusu (slayttan):** İki kademe iki grup ile çarpılarak $2 \times 3 = 6$ hız elde edilir:

| Vites | Oran | Değer |
|---|---|---|
| 1 | $\dfrac{36}{94}\cdot\dfrac{42}{65}$ | 0,2475 |
| 2 | $\dfrac{36}{94}\cdot\dfrac{47}{60}$ | 0,3000 * |
| 3 | $\dfrac{36}{94}\cdot\dfrac{53}{54}$ | 0,3759 |
| 4 | $\dfrac{56}{74}\cdot\dfrac{42}{65}$ | 0,4890 |
| 5 | $\dfrac{56}{74}\cdot\dfrac{47}{60}$ | 0,5928 |
| 6 | $\dfrac{56}{74}\cdot\dfrac{53}{54}$ | 0,7427 |

\* Slaytta 2. vites için 0,2937 yazıyor; verilen diş sayılarıyla hesap $1692/5640 = 0{,}3000$ çıkıyor. Diğer beş oran slaytla aynı.

## Planet (gezegen) dişli zincirleri

Dişlilerden en az biri, **hareketli bir uzva (kol, taşıyıcı)** döner mafsalla bağlıdır ve diğer dişlinin etrafında dolaşır. Bu durumda hız oranı artık basit diş sayısı oranına eşit değildir.

- **Güneş dişli** (G): merkezdeki dişli
- **Planet dişli** (P): kol üzerinde dönen dişli
- **Kol** (K): planet dişliyi taşıyan uzuv
- **Halka dişli** (H): iç dişli

**Kullanım alanları:** diferansiyeller, otomatik vites kutuları, iş makineleri, vinçler, şarjlı vida sıkma makineleri. Küçük hacimde **yüksek hız oranları** sağlar.

Temel planet sisteminin s.d. = 2'dir (güneş ve kol bağımsız döndürülebilir).

### Kinematik çıkarım

$Q$ temas noktasında güneş ve planetin hızları eşittir:

$$
r_G\,\omega_G = (r_G + r_P)\,\omega_K - r_P\,\omega_P
\quad\Rightarrow\quad
\frac{\omega_P - \omega_K}{\omega_G - \omega_K} = -\frac{r_G}{r_P} = -\frac{T_G}{T_P}
$$

Paydadaki ve paydaki farklar **kola göre bağıl açısal hızlardır.** Kol üzerinde duran bir gözlemci için sistem basit dişli zinciri gibi davranır.

### Formül yöntemi (genel kural)

$$
\boxed{\frac{\omega_{son} - \omega_{kol}}{\omega_{ilk} - \omega_{kol}} = \pm\frac{\text{tahrik eden dişlilerin diş sayıları çarpımı}}{\text{tahrik edilen dişlilerin diş sayıları çarpımı}}}
$$

- İşaret: kol sabit tutulduğunda ilk ve son dişli **ters** dönüyorsa $-$, **aynı** yönde dönüyorsa $+$.
- Yönler için bir işaret kuralı seç (örneğin SYT $+$, SY $-$) ve bütün hızları bu kurala göre yaz.
- **Güneş sabitse** ($\omega_G = 0$): $\omega_P = \left(1 + \dfrac{T_G}{T_P}\right)\omega_K$

> **Süperpozisyon ile kontrol:** Kol 1 tur dönerken planet de 1 tur döner. Kol sabitken planet, güneş üzerinde $T_G/T_P$ tur atar. Toplam $1 + T_G/T_P$.

## Çözümlü örnekler (slayttan)

**Örnek 1.** $T_G = 60$, $T_P = 22$. Kol 100 dev/dak SYT ($+$), güneş 150 dev/dak SY ($-$). Planet hızı?

$$
\frac{n_P - 100}{-150 - 100} = -\frac{60}{22}
\;\Rightarrow\;
n_P = 100 + 250\cdot\frac{60}{22} = 781{,}8 \text{ dev/dak (SYT)}
$$

**Örnek 3.** Halka dişli $T_2 = 120$, planet $T_3 = 45$ ve $T_3' = 27$ (aynı mil), güneş $T_4 = 48$. $n_2 = 500$ dev/dak SYT, $n_4 = 300$ dev/dak SYT. Kol hızı $n_5$?

Güneşten (4) halkaya (2): 4 → 3' dış çift ($-$), 3 → 2 iç çift ($+$):

$$
\frac{n_2 - n_5}{n_4 - n_5} = -\frac{T_4\,T_3}{T_3'\,T_2} = -\frac{48\cdot45}{27\cdot120} = -\frac23
$$

$$
500 - n_5 = -\tfrac23(300 - n_5) \;\Rightarrow\; n_5 = 420 \text{ dev/dak (SYT)}
$$

**Örnek 4.** Aynı sisteme **sabit** bir halka dişli (1) eklenir, $T_1 = T_4 + 2T_3' = 48 + 54 = 102$. Sistem artık tek s.d.lidir. $n_2 = 500$ dev/dak SYT iken $n_4$?

2 → 3 (iç) ve 3' → 1 (iç):

$$
\frac{n_1 - n_5}{n_2 - n_5} = \frac{T_2\,T_3'}{T_3\,T_1} = \frac{120\cdot27}{45\cdot102} = \frac{12}{17}
\;\xrightarrow{\;n_1 = 0\;}\;
n_5 = -1200 \text{ dev/dak (SY)}
$$

Bu değer Örnek 3'teki denkleme konursa: $500 + 1200 = -\tfrac23(n_4 + 1200) \Rightarrow n_4 = -3750$ dev/dak (**SY**).

**Örnek 5 – Çok yüksek redüksiyon.** İki ardışık planet grubu, her birinde $\dfrac{90\cdot92}{91\cdot91}$ oranı. Giriş kolu $n_2 = 2000$ dev/dak.

$$
n_4 = n_2\left(1 - \frac{90\cdot92}{91\cdot91}\right) = \frac{n_2}{8281},
\qquad
n_6 = \frac{n_4}{8281} = \frac{2000}{8281^2} = 2{,}92\times10^{-5} \text{ dev/dak}
$$

Yani çıkış **günde 0,042 devir**, yaklaşık **23,8 günde bir tur** atar ve girişle aynı yönde döner.

> **Sınav ipucu:** Planet sorularında önce (1) hangi uzvun kol olduğunu, (2) bir ilk ve bir son dişli seçmeyi, (3) kol sabitken ilk–son arasındaki her çiftin dış/iç olduğunu belirle. Sonra formülü yaz. Bilinmeyen sayısı denklem sayısından fazlaysa, sabit dişliyi içeren ikinci bir yol kullan (Örnek 4'teki gibi).
