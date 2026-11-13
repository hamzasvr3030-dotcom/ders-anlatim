# Bağlama elemanları ve kamalar

Kamalar, mil ile göbeğin (dişli, kasnak, kaplin) **bağıl dönmesini engelleyip moment iletir.**

## Bağlantı ilkeleri

| İlke | Kuvvet nasıl iletilir? | Örnekler |
|---|---|---|
| **Şekil bağlı** | Elemanın geometrisiyle | Uygu kaması (feder), pim, kamalı mil |
| **Kuvvet bağlı** | Sürtünmeyle | Oyuk kama, sıkı geçme, konik geçme |
| **Malzeme bağlı** | Malzeme bütünlüğüyle (çözülemez) | Kaynak, lehim, yapıştırma |

- **Enine kamalar:** Genişliği boyunca zorlanır; eksenel bağlantı içindir.
- **Boyuna kamalar:** Uzunluğu boyunca zorlanır; moment iletimi içindir. **A tipi** uçları yuvarlak (parmak frezeyle açılan yuva), **B tipi** uçları düz (disk frezeyle).

## Uygu kaması (feder) hesabı

Kama kesiti ($b\times h$) ve yuva derinlikleri ($t_1$ milde, $t_2$ göbekte) **mil çapına göre tablodan** seçilir. Hesaplanan tek büyüklük **kama boyudur.**

**Çevresel kuvvet:**

$$
F_t = \frac{2M_d}{d}
$$

**Efektif (taşıyıcı) boy:** A tipinde $L = l - b$, B tipinde $L = l$.

**Ezilme (yüzey basıncı):**

$$
p = \frac{F_t}{t\,L} \le p_{em}
$$

Temas yüksekliği $t$ olarak notlarda göbek tarafı için $t_2$, $(h - t_1)$ veya $h/2$ kullanılır; göbek tarafı genellikle kritiktir.

**Kesme:**

$$
\tau = \frac{F_t}{b\,L} \le \tau_{em}
$$

İki şarttan bulunan **büyük boy** seçilir ve standart boya yuvarlanır.

### Örnek – Redüktör çıkış mili (A tipi)

$P = 10$ kW, $n = 750$ d/d, $d = 30$ mm (tablodan $b = 8$, $h = 7$ mm), $p_{em} = 80$ N/mm².

1. $M_b = \dfrac{30P}{\pi n} = \dfrac{30\cdot10\,000}{\pi\cdot750} = 127{,}3$ N·m
2. $F_t = 2\cdot127{,}3\times10^3/30 = 8487$ N
3. Ezilme (temas yüksekliği $h/2$): $l \ge \dfrac{2F_t}{h\,p_{em}} + b = \dfrac{2\cdot8487}{7\cdot80} + 8 = 38{,}3$ mm → **$l = 40$ mm**
4. Gösterim: **A 8×7×40 DIN 6885**
5. Kesme gerilmesi: $\tau = \dfrac{8487}{8\cdot(40 - 8)} = 33{,}2$ N/mm²

### Örnek – Göbek ezilmesi belirleyici

$M_b = 8800$ daN·cm, $d = 60$ mm (tablodan $b = 18$, $h = 11$, $t_1 = 6{,}8$ mm), göbek $p_{em} = 600$ daN/cm², kama $\tau_{em} = 300$ daN/cm², göbek genişliği 110 mm.

1. $F_t = 2\cdot8800/6 = 2933$ daN
2. Ezilme: $l \ge \dfrac{2933}{(1{,}1 - 0{,}68)\cdot600} = 11{,}64$ cm
3. Kesme: $l \ge \dfrac{2933}{1{,}8\cdot300} = 5{,}43$ cm
4. Gerekli boy 116 mm > göbek genişliği 110 mm → **kama sığmaz**: göbek genişletilmeli veya daha mukavemetli malzeme seçilmeli.

## Oyuk kama (kuvvet bağlı)

Eğimli kama ($\tan\alpha = 1/100$) çakılarak mil ile göbek arasında normal kuvvet $F_N$ oluşturur; moment **sürtünmeyle** iletilir.

$$
M_s = \mu F_N d, \qquad p = \frac{F_N}{bL} \le p_{em}
$$

**Çakma ve sökme kuvvetleri** ($\mu = \tan\rho$):

$$
F_ç \approx F_N(\tan\alpha + 2\tan\rho), \qquad F_{sök} \approx F_N(\tan\alpha - 2\tan\rho)
$$

$F_{sök}$ negatif çıkar: kama kendiliğinden çıkmaz, **çekilerek** sökülür.

**Otoblokaj şartı:** $\tan\alpha \le 2\tan\rho$. Standart eğim (0,01) ve $\mu \approx 0{,}1$ ile her zaman sağlanır.

### Örnek – Çakma kuvvetinden iletilebilen güç

Kama 1800 N ile çakılmış; $d = 50$ mm, $n = 1200$ d/d, $\tan\alpha = 0{,}01$, $\mu = 0{,}11$.

1. $1800 = F_N(0{,}01 + 0{,}22) \Rightarrow F_N = 7826$ N
2. $M_d = \mu F_N d = 0{,}11\cdot7826\cdot50 = 43\,043$ N·mm
3. $P = M_d\,\omega = 43{,}04\cdot\dfrac{\pi\cdot1200}{30} = 5{,}41$ kW

> Oyuk kamalar sürtünmeye dayandığı için **büyük ve darbeli momentlerde kullanılmaz.**
