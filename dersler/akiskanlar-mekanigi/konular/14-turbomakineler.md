# Turbomakineler

Dönen bir çark (rotor) ile akışkan arasında enerji alışverişi yapan makineler.

- **Pompa (enerji veren):** pompa (sıvı), fan (düşük basınç artışlı gaz), üfleyici, kompresör (yüksek basınç artışlı gaz).
- **Türbin (enerji alan):** su, buhar, gaz ve rüzgâr türbinleri.

Akış yönüne göre: **radyal (santrifüj)**, **eksenel**, **karışık akışlı.** Ayrıca **pozitif yer değiştirmeli** makineler (dişli pompa, pistonlu pompa) akışkanı kapalı hacimlerle taşır.

## Pompa performansı

**Net yük** (pompanın akışkana verdiği yük):

$$
H = \left(\frac{P}{\rho g} + \frac{V^2}{2g} + z\right)_{çıkış} - \left(\frac{P}{\rho g} + \frac{V^2}{2g} + z\right)_{giriş}
$$

**Su beygir gücü ve verim:**

$$
\dot W_{su} = \rho g\dot VH, \qquad \eta_{pompa} = \frac{\rho g\dot VH}{bhp}
$$

$bhp$: pompa miline verilen güç (fren gücü). **Pompa karakteristik eğrileri:** $H$, $\eta$ ve $bhp$'nin debiyle değişimi. Kapalı vana yükü (shutoff head) $\dot V = 0$'daki yük, serbest akış ise $H = 0$'daki debidir. Verimin en yüksek olduğu nokta **en iyi verim noktası (BEP).**

**Çalışma noktası:** Pompa eğrisi ile **sistem eğrisinin** kesişimi:

$$
H_{gerekli} = (z_2 - z_1) + \frac{P_2 - P_1}{\rho g} + h_{L,toplam}(\dot V)
$$

## Kavitasyon ve NPSH

Pompa girişinde basınç buhar basıncının altına düşerse kavitasyon oluşur. Bunu önlemek için:

$$
NPSH = \left(\frac{P}{\rho g} + \frac{V^2}{2g}\right)_{giriş} - \frac{P_v}{\rho g}, \qquad NPSH_{mevcut} > NPSH_{gerekli}
$$

Pompayı sıvı seviyesine yakın (veya altına) yerleştirmek, emiş borusunu kısa ve geniş tutmak $NPSH_{mevcut}$'u artırır.

## Seri ve paralel pompalar

- **Seri:** Aynı debide yükler toplanır → yüksek yük gereken sistemler.
- **Paralel:** Aynı yükte debiler toplanır → yüksek debi gereken sistemler.

## Euler turbomakine denklemi

Açısal momentum denkleminden (Bölüm 6):

$$
\boxed{T_{mil} = \rho\dot V\,(r_2V_{2,t} - r_1V_{1,t})}, \qquad \dot W_{mil} = \omega T_{mil}
$$

İdeal yük: $H = \dfrac{1}{g}(\omega r_2V_{2,t} - \omega r_1V_{1,t})$. Hız üçgenleri (mutlak hız = çark hızı + bağıl hız) ile $V_t$ bileşenleri bulunur.

## Benzerlik yasaları (affinity laws)

Geometrik olarak benzer iki pompa (veya aynı pompa farklı devirde) için:

$$
\frac{\dot V_B}{\dot V_A} = \frac{\omega_B}{\omega_A}\left(\frac{D_B}{D_A}\right)^3, \qquad
\frac{H_B}{H_A} = \left(\frac{\omega_B}{\omega_A}\right)^2\left(\frac{D_B}{D_A}\right)^2, \qquad
\frac{bhp_B}{bhp_A} = \frac{\rho_B}{\rho_A}\left(\frac{\omega_B}{\omega_A}\right)^3\left(\frac{D_B}{D_A}\right)^5
$$

**Örnek:** 1450 d/d'da 0,05 m³/s, 30 m, 18 kW veren pompa 1750 d/d'da çalıştırılırsa:

$$
\dot V = 0{,}05\cdot\frac{1750}{1450} = 0{,}060\ \text{m}^3/\text{s}, \quad H = 30\left(\frac{1750}{1450}\right)^2 = 43{,}7\ \text{m}, \quad bhp = 18\left(\frac{1750}{1450}\right)^3 = 31{,}6\ \text{kW}
$$

**Özgül hız** $N_{Sp} = \dfrac{\omega\sqrt{\dot V}}{(gH)^{3/4}}$: düşük değerlerde **santrifüj**, orta değerlerde **karışık akışlı**, yüksek değerlerde **eksenel** pompa uygundur.

## Türbinler

| Türbin | Tip | Uygun koşul |
|---|---|---|
| **Pelton** | Darbe (impuls) | Yüksek düşü, düşük debi |
| **Francis** | Tepki, radyal/karışık | Orta düşü, orta debi |
| **Kaplan / pervane** | Tepki, eksenel | Düşük düşü, yüksek debi |

- **Darbe türbini:** Akışkan bir lüleyle hızlandırılır; bütün basınç düşüşü lülede olur, çark atmosfer basıncındadır.
- **Tepki türbini:** Çark akışkanla tamamen doludur; basınç düşüşü çark içinde de olur.

Türbin verimi: $\eta_{türbin} = \dfrac{bhp}{\rho g\dot VH}$.

**Rüzgâr türbinleri:** Rüzgâr gücü $\dot W = \tfrac12\rho AV^3$; teorik üst sınır **Betz sınırı** $C_P = 16/27 \approx 0{,}593$.
