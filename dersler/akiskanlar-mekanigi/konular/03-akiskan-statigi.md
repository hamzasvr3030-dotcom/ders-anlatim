# Basınç ve akışkan statiği

## Basınç

Durgun akışkanda bir noktadaki basınç **bütün yönlerde aynıdır** (skalerdir). $P_{etkin} = P_{mutlak} - P_{atm}$, $\;P_{vakum} = P_{atm} - P_{mutlak}$.

## Hidrostatik basınç dağılımı

$$
\frac{dP}{dz} = -\rho g \quad\Rightarrow\quad \boxed{P = P_0 + \rho g h}
$$

$h$: serbest yüzeyden aşağı derinlik. Aynı akışkanda **aynı yatay düzlemdeki** bütün noktaların basıncı eşittir (kabın şeklinden bağımsız). **Pascal yasası:** $F_2/F_1 = A_2/A_1$.

## Manometreler ve barometre

$$
P_1 + \rho_1 g h_1 - \rho_2 g h_2 + \dots = P_2, \qquad P_{atm} = \rho_{cıva}\,g\,h
$$

> Aşağı inerken $\rho g h$ ekle, yukarı çıkarken çıkar. Gaz kolonlarındaki basınç değişimi genellikle ihmal edilir.

## Düzlem yüzeylere etkiyen hidrostatik kuvvet

$$
\boxed{F_R = (P_0 + \rho g h_C)\,A = P_{ort}\,A}
$$

$h_C$: yüzeyin **ağırlık merkezinin** derinliği. Bileşke kuvvet ağırlık merkezinden değil, daha aşağıdaki **basınç merkezinden** geçer ($P_0 = P_{atm}$ ise, eğik yüzey boyunca ölçülen $y$ ile):

$$
\boxed{y_P = y_C + \frac{I_{xx,C}}{y_C\,A}}
$$

Dikdörtgen için $I_{xx,C} = ab^3/12$, daire için $\pi R^4/4$.

### Örnek – Düşey dikdörtgen kapak

2 m genişliğinde, 3 m yüksekliğinde kapak; üst kenarı su yüzeyinde.

$$
F_R = \rho g h_C A = 1000\cdot9{,}81\cdot1{,}5\cdot6 = 88{,}3\ \text{kN}
$$

$$
y_P = 1{,}5 + \frac{2\cdot3^3/12}{1{,}5\cdot6} = 2{,}0\ \text{m}
$$

Üçgen basınç dağılımında bileşke, derinliğin **2/3**'ünden geçer.

## Eğri yüzeyler

- **Yatay bileşen** $F_H$: eğri yüzeyin düşey düzlemdeki izdüşümüne etkiyen kuvvete eşittir.
- **Düşey bileşen** $F_V$: yüzeyin üzerindeki akışkanın ağırlığı (+ varsa üstteki basınç kuvveti).
- $F_R = \sqrt{F_H^2 + F_V^2}$, doğrultusu $\tan\alpha = F_V/F_H$.

## Kaldırma kuvveti (Arşimet)

$$
\boxed{F_B = \rho_{akışkan}\,g\,V_{batan}}
$$

Kaldırma kuvveti, yer değiştiren akışkanın ağırlığına eşittir ve batan hacmin ağırlık merkezinden (**kaldırma merkezi**) geçer. Yüzen bir cisim için:

$$
\frac{V_{batan}}{V_{toplam}} = \frac{\rho_{ort,cisim}}{\rho_{akışkan}}
$$

Örneğin buz ($\rho = 920$) denizde ($\rho = 1025$) hacminin yaklaşık **%90'ı** batık yüzer.

## Kararlılık

- **Tamamen batmış cisim:** Ağırlık merkezi $G$, kaldırma merkezi $B$'nin **altındaysa** kararlıdır.
- **Yüzen cisim:** **Metasantr** $M$, $G$'nin **üstündeyse** kararlıdır ($GM > 0$). Gemiler bu yüzden geniş tabanlı yapılır.

## Rijit cisim hareketindeki akışkanlar

Akışkan kabıyla birlikte rijit cisim gibi hareket ediyorsa kayma gerilmesi yoktur:

$$
\nabla P + \rho g\,\vec k = -\rho\,\vec a
$$

**Doğrusal ivmelenme** (yatay $a_x$, düşey $a_z$): serbest yüzeyin eğimi

$$
\tan\theta = \frac{a_x}{g + a_z}
$$

**Düşey eksen etrafında dönme** ($\omega$): serbest yüzey bir **paraboloittir**:

$$
z_s(r) = h_0 - \frac{\omega^2}{4g}\left(R^2 - 2r^2\right)
$$

Yüzeyin ortadan kenara yükselmesi $\Delta z = \omega^2R^2/(2g)$.
