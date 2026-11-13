# Mukavemet bilgisi: gerilmeler, hipotezler, emniyet

## Mukavemet hesabının mantığı

Dış kuvvet ve momentler parçada iç kuvvetler ve **gerilme** oluşturur. Hesabın amacı, oluşan gerilmeyi malzemenin sınır değeriyle karşılaştırmaktır:

$$
\boxed{\sigma \le \sigma_{em} = \frac{\sigma^*}{S}}, \qquad \tau \le \tau_{em} = \frac{\tau^*}{S}
$$

$\sigma^*$: malzemenin mukavemet sınırı (sünek malzemede akma $\sigma_{AK}$, gevrekte kopma $\sigma_K$), $S$: emniyet katsayısı.

Hesap üç amaçla yapılır: **boyutlandırma** (kesiti bul), **yük taşıma kabiliyeti** (izin verilen yükü bul), **kontrol** (verilen parça emniyetli mi).

## Basit gerilmeler

| Zorlanma | Gerilme | Not |
|---|---|---|
| Çekme / basma | $\sigma = F/A$ | $\Delta l = Fl/(EA)$ |
| Kesme (makaslama) | $\tau_k = F/A$ | Cıvata, pim, perçin |
| Yüzey basıncı | $p = F/A_{izdüşüm} = F/(d\,l)$ | Hareket yoksa ezilme, varsa aşınma |
| Eğilme | $\sigma_e = M_e/W_e$ | Tarafsız eksende 0, dış lifte en büyük |
| Burulma | $\tau_b = M_b/W_p$ | $\varphi = M_bL/(GI_p)$ |

### Kesit değerleri

| Kesit | $I$ | $W_e$ | $W_p$ |
|---|---|---|---|
| Dolu daire ($d$) | $\pi d^4/64 \approx 0{,}05d^4$ | $\pi d^3/32 \approx 0{,}1d^3$ | $\pi d^3/16 \approx 0{,}2d^3$ |
| Boru ($D$, $d_i$) | $\pi(D^4 - d_i^4)/64$ | $\pi(D^4 - d_i^4)/(32D)$ | $\pi(D^4 - d_i^4)/(16D)$ |
| Dikdörtgen ($b\times h$) | $bh^3/12$ | $bh^2/6$ | – |

### Sehim (çökme)

| Durum | $M_{e,max}$ | Sehim $f$ |
|---|---|---|
| Basit kiriş, ortada $F$ | $FL/4$ | $FL^3/(48EI)$ |
| Basit kiriş, yayılı toplam $F$ | $FL/8$ | $5FL^3/(384EI)$ |
| Konsol, uçta $F$ | $FL$ | $FL^3/(3EI)$ |

### Burkulma (Euler)

İnce uzun çubuk basmada kritik yükü aşınca aniden yana bükülür:

$$
F_{kr} = \frac{\pi^2EI_{min}}{L_k^2}, \qquad S \ge 5
$$

Burkulma boyu $L_k$: bir ucu ankastre-diğeri serbest $2L$; iki ucu mafsallı $L$; ankastre-mafsallı $0{,}7L$; iki ucu ankastre $0{,}5L$.

## Bileşik gerilme ve kırılma hipotezleri

Kesitte hem $\sigma$ hem $\tau$ varsa tek bir **eşdeğer gerilme** $\sigma_B$ hesaplanıp sınır değerle karşılaştırılır.

| Hipotez | Eşdeğer gerilme | Eşdeğer moment (mil) | Kullanım |
|---|---|---|---|
| En büyük normal gerilme | $\tfrac12\sigma + \tfrac12\sqrt{\sigma^2 + 4\tau^2}$ | $\tfrac12M_e + \tfrac12\sqrt{M_e^2 + M_b^2}$ | Gevrek |
| En büyük kayma (Tresca) | $\sqrt{\sigma^2 + 4\tau^2}$ | $\sqrt{M_e^2 + M_b^2}$ | Sünek |
| Biçim değiştirme enerjisi (Von Mises) | $\sqrt{\sigma^2 + 3\tau^2}$ | $\sqrt{M_e^2 + 0{,}75M_b^2}$ | Sünek |

Tresca'ya göre $\tau_{AK} = 0{,}5\sigma_{AK}$, Von Mises'e göre $\tau_{AK} = 0{,}577\sigma_{AK}$.

## Emniyet katsayısı seçimi

| $S$ | Koşul |
|---|---|
| 1,25 – 1,5 | Kuvvetler kesin biliniyor, koşullar kontrollü |
| 1,5 – 2 | Sabit çevre, kolay tespit edilen kuvvetler |
| 2 – 2,5 | Normal koşullar, orta kalite malzeme |
| 2,5 – 3 | Az denenmiş veya kırılgan malzeme |
| 3 – 4 | Denenmemiş malzeme, belirsiz koşullar |
| ≥ 5 | Burkulma |

## Çözümlü örnek – Kritik noktadaki gerilmeler

Ankastre dairesel çubuk; $\sigma_{AK} = 600$ MPa, $F_v = 10$ kN (enine), $F_a = 20$ kN (eksenel çekme), $M_b = 450$ N·m. (Notta boyut verilmediği için $d = 30$ mm, kol $L = 30$ mm alındı.) Von Mises hipotezi.

1. $A = \pi\cdot30^2/4 = 706{,}9$ mm² → $\sigma_ç = 20\,000/706{,}9 = 28{,}3$ MPa (her noktada)
2. $M_e = 10\,000\cdot30 = 300\,000$ N·mm → $\sigma_e = \dfrac{32M_e}{\pi d^3} = 113{,}2$ MPa (üst lif A çekme, alt lif C basma)
3. $\tau_b = \dfrac{16M_b}{\pi d^3} = 84{,}9$ MPa (bütün çevrede)
4. Enine kuvvetin kayma gerilmesi (yalnız tarafsız eksende, B): $\tau_k = \dfrac{4F_v}{3A} = 18{,}9$ MPa
5. Eşdeğer gerilmeler:
   - A: $\sigma = 141{,}5$, $\tau = 84{,}9$ → $\sigma_B = \sqrt{141{,}5^2 + 3\cdot84{,}9^2} = 204{,}0$ MPa
   - B: $\sigma = 28{,}3$, $\tau = 103{,}7$ → 181,9 MPa
   - C: $\sigma = -84{,}9$, $\tau = 84{,}9$ → 169,8 MPa
6. **Kritik nokta A**, emniyet katsayısı $S = 600/204 = 2{,}94$.

> Aynı tip gerilmeler cebirsel olarak toplanır: $\sigma = F/A \pm M_e/W_e$. Farklı tip gerilmeler ($\sigma$ ile $\tau$) hipotezle birleştirilir.
