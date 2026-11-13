# Eksenel normal kuvvet: gerilme ve uzama

Temel mukavemet hallerinin ilkidir: çubukta yalnızca **eksen doğrultusunda** yük vardır. Yük kesitten dışarı doğruysa **çekme**, içeri doğruysa **basma**dır. Örnekler: kolonlar, kablolar, kafes sistem çubukları.

## Gerilme

$$
\boxed{\sigma = \frac{N}{A}} \quad [\text{N/mm}^2 = \text{MPa}]
$$

- Kesite **dik** iç kuvvetler normal gerilme $\sigma$, kesite **paralel** olanlar kayma gerilmesi $\tau$ oluşturur.
- Varsayım: kuvvet kesitin ağırlık merkezinden geçer ve kesit yük noktasından yeterince uzaktadır (Saint-Venant).

> Halat çekme yarışında halatın her kesitinde aynı kuvvet vardır. Halat bir yerde incelirse aynı kuvvet daha küçük alana düşer ve halat oradan kopar. Bu yüzden kuvvet yerine **gerilmeyle** çalışırız.

## Hooke kanunu ve uzama

$$
\boxed{\sigma = E\,\varepsilon}, \qquad \varepsilon = \frac{\Delta L}{L}, \qquad \boxed{\Delta L = \frac{N\,L}{E\,A}}
$$

- $E$: elastisite modülü (malzemenin uzamaya direnci), $EA$: uzama rijitliği.
- $N > 0$ uzama, $N < 0$ kısalma.
- Çubuk bir yay gibi davranır: $N = k\,\Delta L$, $k = EA/L$.

**Kademeli çubuk** (her parçada $N$, $E$, $A$ sabit):

$$
\Delta L_{toplam} = \sum_i \frac{N_i\,L_i}{E_i\,A_i}
$$

## Çözümlü örnekler

### Örnek 1 – Ø10 çelik çubuk

$N = 10$ kN çekme, $E = 210\,000$ MPa, $L = 100$ mm.

$$
A = \frac{\pi\cdot10^2}{4} = 78{,}54\ \text{mm}^2, \quad \sigma = \frac{10\,000}{78{,}54} = 127{,}3\ \text{MPa}, \quad \Delta L = \frac{10\,000\cdot100}{210\,000\cdot78{,}54} = 0{,}0606\ \text{mm}
$$

### Örnek 2 – Kademeli çubukta N diyagramı

A'da ankastre; AB = 100 mm Ø10, BC = 200 mm Ø10, CD = 200 mm Ø5. B'de 750 N (+z), C'de 450 N (−z), D'de 300 N (+z).

1. Tepki: $R_A + 750 - 450 + 300 = 0 \Rightarrow R_A = -600$ N (sola).
2. İç kuvvetler: $N_1 = 600$ N, $N_2 = 600 - 750 = -150$ N, $N_3 = 300$ N (sağdan).
3. Uzamalar ($A_{10} = 78{,}54$, $A_5 = 19{,}63$ mm²):

$$
\Delta L = \frac{600\cdot100}{210\,000\cdot78{,}54} - \frac{150\cdot200}{210\,000\cdot78{,}54} + \frac{300\cdot200}{210\,000\cdot19{,}63} = 16{,}37\times10^{-3}\ \text{mm}
$$

4. Gerilmeler: $7{,}64$; $-1{,}91$; **15,28 MPa** (en büyük gerilme en ince kısımda).

### Örnek 3 – Toplam boy değişimini sıfır yapan yük

Alüminyum ($E = 70$ GPa) düşey çubuk: alt kısım Ø12, 400 mm; üst kısım Ø8, 600 mm. Üst uçta $P = 4$ kN yukarı, birleşimde $Q$ aşağı. $\Sigma\Delta L = 0$ için $Q$?

$$
\frac{4000\cdot600}{70\,000\cdot50{,}27} + \frac{(4000 - Q)\cdot400}{70\,000\cdot113{,}1} = 0
\;\Rightarrow\; Q = 17{,}5\ \text{kN}
$$

Alt kısım basmada kalmalı ($N_2 = -13{,}5$ kN) ki üst kısmın uzamasını dengelesin.

### Örnek 4 – Rijit bloğun yatay kalması

2 m'lik AC bloğu A'dan çelik AB ($L = 1$ m, $E = 210$ GPa), C'den alüminyum DC ($L = 0{,}5$ m, Ø10, $E = 70$ GPa) çubuklarıyla asılı. 10 kN yük A'dan 0,75 m'de. Çelik çubuğun çapı?

1. Statik: $\sum M_A$: $N_{al}\cdot2 = 10\,000\cdot0{,}75 \Rightarrow N_{al} = 3750$ N, $N_ç = 6250$ N.
2. Yatay kalma şartı: $\Delta L_ç = \Delta L_{al}$

$$
\frac{6250\cdot1000}{210\,000\,A_ç} = \frac{3750\cdot500}{70\,000\cdot78{,}54} = 0{,}341\ \text{mm}
\;\Rightarrow\; A_ç = 87{,}3\ \text{mm}^2,\; d = 10{,}54 \to 11\ \text{mm}
$$

### Örnek 5 – Rijit kolda yer değiştirmeler

BDE rijit çubuğu: AB alüminyum ($E = 70$ GPa, $A = 500$ mm², $L = 0{,}3$ m), CD çelik ($E = 200$ GPa, $A = 600$ mm², $L = 0{,}4$ m). BD = 0,2 m, DE = 0,4 m, E ucunda 30 kN aşağı.

1. Kuvvetler: $\sum M_B$: $F_{CD} = 90$ kN (çekme); $\sum M_D$: $F_{AB} = -60$ kN (basma).
2. $\delta_D = \dfrac{90\,000\cdot400}{600\cdot200\,000} = 0{,}300$ mm ↓, $\quad \delta_B = \dfrac{60\,000\cdot300}{500\cdot70\,000} = 0{,}514$ mm ↑.
3. Benzer üçgenler: dönme noktası D'den $x = 73{,}7$ mm, $\delta_E = 0{,}3\cdot\dfrac{400 + 73{,}7}{73{,}7} = 1{,}93$ mm ↓.

> Rijit bir kolda yer değiştirmeler, kolun döndüğü noktaya olan **uzaklıkla orantılıdır.**

### Örnek 6 – Somun sıkma ile oluşan gerilme

İki Ø18 çelik cıvata ($L = 450$ mm, $E = 200$ GPa) arasında Ø38 alüminyum çubuk ($L = 300$ mm, $E = 70$ GPa). Diş adımı 2,5 mm, somunlar ¼ tur sıkılıyor.

1. Somunun ilerlemesi $2{,}5/4 = 0{,}625$ mm; bu, **cıvatanın uzaması + çubuğun kısalması** ile karşılanır.
2. Denge: $P_r = 2P_b$.

$$
0{,}625 = \underbrace{8{,}842\times10^{-6}P_b}_{\text{cıvata}} + \underbrace{3{,}779\times10^{-6}\cdot 2P_b}_{\text{çubuk}}
\;\Rightarrow\; P_b = 38{,}1\ \text{kN},\; P_r = 76{,}2\ \text{kN}
$$

3. $\sigma_{çubuk} = 76\,200/1134{,}1 = 67{,}2$ MPa (basma).

## Kendi ağırlığı altında çubuk

Asılı bir çubukta $x$ derinliğindeki kesit, altındaki ağırlığı taşır:

$$
\Delta L = \frac{F\,L}{EA} + \frac{\gamma\,L^2}{2E}
$$

Kendi ağırlığından oluşan uzama, toplam ağırlığın **yarısı** uca asılmış gibidir. 100 m'lik çelik tel kendi ağırlığıyla yaklaşık 1,87 mm uzar.

**Simetrik V sistemi** (iki çubuk, aralarında $2\alpha$, uçta $P$):

$$
N = \frac{P}{2\cos\alpha}, \qquad \delta_{düşey} = \frac{P\,L}{2AE\cos^2\alpha}
$$
