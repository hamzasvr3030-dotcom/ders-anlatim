# Çekme deneyi, Poisson oranı ve emniyet

## Çekme deneyi

Standart numune çekme cihazında koparılana kadar artan yükle çekilir. Her yükte uzama ölçülür; $\sigma = P/A_0$ ve $\varepsilon = \Delta L/L_0$ hesaplanarak **σ–ε diyagramı** çizilir.

| Nokta | Ad | Anlamı |
|---|---|---|
| Orantı sınırı $\sigma_0$ | Doğrusal bölgenin sonu | $E = \tan\alpha = \sigma_0/\varepsilon$ burada ölçülür |
| Akma $\sigma_{ak}$ | Plastik şekil değişimi başlar | Emniyet hesabının temeli (sünek malzeme) |
| Çekme dayanımı $\sigma_{max}$ | Diyagramın tepesi | Boyun verme başlar |
| Kopma $\sigma_k$ | Numune kopar | |

> **Sünek** malzemeler (yapı çeliği) belirgin akma ve büyük uzama gösterir. **Gevrek** malzemeler (dökme demir, cam) akma göstermeden kopar; hesapta $\sigma_{max}$ kullanılır.

Bazı yapı çeliklerinin değerleri (notlardan):

| $\sigma_{max}$ (MPa) | 324–490 | 363–491 | 412–490 | 510–608 | 686–834 |
|---|---|---|---|---|---|
| $\sigma_{ak}$ (MPa) | 186 | 235 | 255 | 353 | 363 |

## Poisson oranı ve kayma modülü

Çekilen çubuk boyca uzarken enine daralır:

$$
\boxed{\nu = -\frac{\varepsilon_{enine}}{\varepsilon_{boyuna}}}, \qquad 0 < \nu < 0{,}5
$$

Metallerde $\nu \approx 0{,}3$. $\nu = 0{,}5$ hacmin tam sabit kalmasına karşılık gelir.

$$
\boxed{G = \frac{E}{2(1+\nu)}}, \qquad \tau = G\,\gamma
$$

### Örnek – Deney verisinden E ve ν

$d = 16$ mm, $L = 500$ mm, $P = 12$ kN; boy uzaması 300 μm, çap değişimi −2,4 μm.

$$
\sigma = \frac{12\,000}{201{,}06} = 59{,}7\ \text{MPa}, \quad \varepsilon_x = \frac{0{,}300}{500} = 6\times10^{-4}, \quad \varepsilon_y = \frac{-0{,}0024}{16} = -1{,}5\times10^{-4}
$$

$$
E = \frac{\sigma}{\varepsilon_x} = 99{,}5\ \text{GPa}, \qquad \nu = \frac{1{,}5}{6} = 0{,}25, \qquad G = \frac{99{,}5}{2\cdot1{,}25} = 39{,}8\ \text{GPa}
$$

## Emniyet

Bir parçanın taşıyabileceği gerilmeyi sınırlamak için **emniyet katsayısı** $S$ (veya $n$) kullanılır:

$$
\boxed{\sigma_{em} = \frac{\sigma_{ak}}{S}} \quad (S \ge 1{,}5), \qquad \tau_{em} \approx \frac{\sigma_{em}}{2}
$$

Gevrek malzemede veya dayanım kopmaya göre verildiyse: $\sigma_{em} = \sigma_{max}/n$.

### Üç tip problem

| Problem | Bilinen | Hesap |
|---|---|---|
| **Kesit tayini** (boyutlandırma) | $P$, $\sigma_{em}$ | $A \ge P/\sigma_{em}$ |
| **Tahkik** (kontrol) | $P$, $A$, $\sigma_{em}$ | $P/A \le \sigma_{em}$ mi? |
| **Yük tayini** | $A$, $\sigma_{em}$ | $P \le \sigma_{em}\,A$ |

> Çaplar hesaptan çıkan değerin **üstüne** yuvarlanır (25,23 mm → 26 mm). Aşağı yuvarlamak emniyeti bozar.

### Örnek 1 – Kafes sistemde tahkik ve yeni çap

AB (yatay, 0,8 m, Ø50) ve BC (1,0 m, Ø20) alüminyum çubuklar; C, A'nın 0,6 m üstünde; B'de 30 kN; $\sigma_{em} = 100$ MPa.

1. B düğümü ($\cos\theta = 0{,}8$, $\sin\theta = 0{,}6$): $F_{BC} = 30/0{,}6 = 50$ kN (çekme), $F_{AB} = -40$ kN (basma).
2. Tahkik: $\sigma_{AB} = 40\,000/1963{,}5 = 20{,}4$ MPa ✓; $\quad \sigma_{BC} = 50\,000/314{,}16 = 159{,}2$ MPa ✗ (> 100).
3. Yeni çap: $A_{BC} \ge 500$ mm² → $d \ge 25{,}23$ mm → **26 mm**.

### Örnek 2 – Uç uca iki çubuğun taşıyabileceği yük

Tavana asılı $A_1 = 144$ mm² ve $A_2 = 72$ mm² çubuklar; birleşimde ve alt uçta birer $P$; $\sigma_{em} = 10$ MPa.

- Üst çubuk $N_1 = 2P$: $2P/144 \le 10 \Rightarrow P \le 720$ N
- Alt çubuk $N_2 = P$: $P/72 \le 10 \Rightarrow P \le 720$ N

$P_{em} = 720$ N. Bir yük tayininde **bütün** çubuklar kontrol edilir ve **en küçük** değer seçilir.

### Örnek 3 – Çekme ve basmada farklı emniyet gerilmesi

Kafeste $\sigma_{em,çekme} = 140$ MPa, $\sigma_{em,basma} = 100$ MPa. Düğüm yönteminden $AC = +20$ kN, $AD = +99$ kN, $CD = -50$ kN bulunursa:

$$
A_{AC} = \frac{20\,000}{140} = 142{,}9\ \text{mm}^2, \quad A_{AD} = \frac{99\,000}{140} = 707{,}1\ \text{mm}^2, \quad A_{CD} = \frac{50\,000}{100} = 500\ \text{mm}^2
$$

> Düğüm yönteminde **iki bilinmeyenli düğümden** başla; düzlemde bir düğüm için yalnızca iki denge denklemi vardır.
