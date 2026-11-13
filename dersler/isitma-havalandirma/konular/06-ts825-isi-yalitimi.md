# TS 825 ısı yalıtımı ve bina enerji performansı

## TS 825 Binalarda Isı Yalıtım Kuralları

**Amaç:** Binaların ısıtılması ve soğutulmasında kullanılan enerji miktarlarını sınırlamak ve enerji tasarrufu sağlamak. Standart; net ısıtma ve soğutma enerjisi ihtiyacının ve yapı elemanlarından su buharı geçişinin hesap yöntemini belirler. (Güncel sürüm **TS 825:2024**, Nisan 2025'te yürürlüğe girdi; bina enerji performansı için **TS EN ISO 13790** uygulanır.)

Kullanım amaçları:

- Yeni bir bina için farklı mimari tasarım seçeneklerini karşılaştırıp **en iyi enerji performansını** veren seçeneği belirlemek,
- Mevcut binaların net ısıtma ve soğutma enerji ihtiyacını belirlemek,
- Yenileme (yalıtım) projelerinin etkisini hesaplamak.

Türkiye, iklim verilerine göre **ısıtma bölgelerine** ayrılmıştır (1. bölge en sıcak, örneğin Antalya, Mersin; yüksek numaralı bölgeler en soğuk). Her bölge için yapı elemanlarının izin verilen **en büyük U değerleri** farklıdır.

## Isıl geçirgenlik katsayısı U

Çok katmanlı bir yapı elemanının (duvar, tavan, döşeme) toplam ısıl direnci:

$$
\boxed{\frac{1}{U} = R_{si} + \sum\frac{d_j}{\lambda_j} + R_{se}}
$$

- $d$: katman kalınlığı (m), $\lambda$: ısıl iletkenlik (W/m·K)
- $R_{si}$, $R_{se}$: iç ve dış yüzeylerin ısıl taşınım ve ışınım dirençleri. Duvarlar için tipik: $R_{si} = 0{,}13$, $R_{se} = 0{,}04$ m²·K/W.
- $U$ birimi: W/m²·K. **U ne kadar küçükse yalıtım o kadar iyidir.**

### Örnek

Duvar: 2 cm iç sıva ($\lambda = 0{,}87$) + 19 cm tuğla ($\lambda = 0{,}45$) + 5 cm EPS yalıtım ($\lambda = 0{,}035$) + 3 cm dış sıva ($\lambda = 0{,}87$):

$$
\frac{1}{U} = 0{,}13 + \frac{0{,}02}{0{,}87} + \frac{0{,}19}{0{,}45} + \frac{0{,}05}{0{,}035} + \frac{0{,}03}{0{,}87} + 0{,}04 = 2{,}078 \;\Rightarrow\; U = 0{,}48\ \text{W/m}^2\text{K}
$$

Yalıtım katmanı tek başına direncin **yaklaşık %70'ini** sağlar.

## Özgül ısı kaybı

$$
\boxed{H = H_T + H_V}\ [\text{W/K}]
$$

**İletimle kayıp:**

$$
H_T = \sum AU + \sum lU_l = U_DA_D + U_PA_P + U_KA_K + 0{,}8\,U_TA_T + 0{,}5\,U_tA_t + \dots
$$

- $D$: dış duvar, $P$: pencere, $K$: dış kapı, $T$: tavan, $t$: taban (döşeme)
- Tavan doğrudan dış havayla temas ediyorsa (teras) 0,8 yerine **1** alınır.
- Taban dış havaya açıksa 0,5 yerine **1**; toprağa temas ediyorsa **0,5** alınır.
- $\sum lU_l$: **ısı köprüleri** (kolon, kiriş, döşeme uçları) için doğrusal kayıplar.

**Havalandırmayla kayıp:**

$$
H_V = 0{,}33\,n_h\,V_h
$$

$n_h$: saatlik hava değişim sayısı (1/h), $V_h$: havalandırılan hacim (m³; brüt hacmin ≈ 0,8'i). 0,33 ≈ havanın $\rho c_p$ değeri (Wh/m³·K).

## Isı kazançları

**İç kazançlar** (insanlar, aydınlatma, cihazlar): $\Phi_i = 5\ \text{W/m}^2 \times A_n$ (konutlar için); $A_n$ net kullanım alanı ($\approx 0{,}32\,V_{brüt}$).

**Güneş kazançları:** $\Phi_s = \sum r_i\,g_i\,I_i\,A_i$ — $r$: gölgelenme faktörü, $g$: camın güneş enerjisi geçirgenliği, $I$: yöne ve aya göre güneş ışınımı, $A$: pencere alanı.

**Aylık net ısıtma enerjisi ihtiyacı:**

$$
Q_{ay} = \left[H\,(\theta_i - \theta_e) - \eta_{ay}\,(\Phi_i + \Phi_s)\right]\cdot t
$$

$\eta$: kazanç kullanım faktörü (kazançların ne kadarının ısıtmaya katkı yaptığı). Yıllık ihtiyaç, ısıtma yapılan ayların toplamıdır ve standarttaki sınır değerle karşılaştırılır.

## Ders notundaki örnek

20 m × 8 m tabanlı, 4 katlı (her kat 3 m, toplam 12 m) bina. $U_D = 0{,}561$, $U_P = 1{,}8$ (çift camlı), $U_T = 0{,}375$, $U_t = 0{,}581$ W/m²K.

1. Pencere alanı: kat başına 11,56 m² → $A_P = 46{,}24$ m²
2. Dış duvar: $A_D = (20\cdot12\cdot2) + (8\cdot12\cdot2) - 46{,}24 = 625{,}76$ m²
3. Tavan ve taban: $A_T = A_t = 160$ m²
4. $H_T = 0{,}561\cdot625{,}76 + 1{,}8\cdot46{,}24 + 0{,}8\cdot0{,}375\cdot160 + 0{,}5\cdot0{,}581\cdot160 = 528{,}76$ W/K
5. $V_h = 0{,}8\cdot1920 = 1536$ m³, $n_h = 0{,}8$ → $H_V = 0{,}33\cdot0{,}8\cdot1536 = 405{,}5$ W/K
6. $H = 934{,}3$ W/K
7. İç kazanç: $A_n = 0{,}32\cdot1920 = 614{,}4$ m² → $\Phi_i = 5\cdot614{,}4 = 3072$ W

## Enerji Kimlik Belgesi (EKB)

Binanın enerji tüketimini ve sera gazı salımını **A'dan G'ye** sınıflandıran belge. Birincil enerji tüketimi (kWh/m²·yıl), bina tipi ve ısıtma bölgesine göre bir **referans göstergesiyle** karşılaştırılır. Ulusal hesap yöntemi **BEP-TR** yazılımıyla uygulanır.

**Yeşil Sertifika (YeS-TR):** 1 Ocak 2026'dan itibaren, yeni yapı ruhsatı alınacak kamuya ait sağlık, eğitim, yurt ve hizmet binalarından toplam inşaat alanı **10 000 m² ve üzeri** olanlar için zorunludur.
