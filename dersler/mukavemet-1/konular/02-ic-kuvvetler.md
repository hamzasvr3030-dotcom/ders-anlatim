# İç kuvvetler: kesim yöntemi ve N-T-M diyagramları

Dış kuvvetler kesitin ağırlık merkezine indirgenince kesitte **iç kuvvetler** ortaya çıkar. $y$–$z$ düzleminde yüklenmiş bir çubukta ($z$: çubuk ekseni) üç iç kuvvet vardır:

| Sembol | Ad | Yön |
|---|---|---|
| $N$ | Normal kuvvet | Eksene paralel; çekme $+$, basma $-$ |
| $T$ | Kesme kuvveti | Kesite paralel ($y$ yönünde) |
| $M$ | Eğilme momenti | Çubuğu eğmeye çalışan moment ($x$ ekseni etrafında) |

Bunların $z$'ye göre grafiklerine **N, T, M diyagramları** denir. Amaç, **en tehlikeli kesiti** (en büyük $|M|$, $|T|$, $|N|$) bulmaktır.

> Çubuğu hayali bir testereyle kes. Sol parçanın düşmemesi için kesit yüzeyinden tutan "görünmez bir el" gerekir: itme/çekme $N$, aşağı-yukarı tutma $T$, dönmeyi engelleme $M$.

## Mesnetler

| Mesnet | Tepkiler | Serbest bıraktığı hareket |
|---|---|---|
| Sabit (dönel) mafsal | $R_y$, $R_z$ ($M = 0$) | Dönme |
| Kayıcı (hareketli) mafsal | Yalnız yüzeye dik $R_y$ | Yüzey boyunca kayma + dönme |
| Ankastre | $R_y$, $R_z$, $M$ | Hiçbiri |
| Serbest uç | Tepki yok | Hepsi |
| Ara mafsal | Kuvvet iletir, $M = 0$ | İki parça arasında bağıl dönme |

## Yayılı yükler

| Yük | Eşdeğer tekil yük | Yeri |
|---|---|---|
| Düzgün yayılı $q$ | $Q = q\,l$ | Ortada ($l/2$) |
| Üçgen yayılı (0 → $q$) | $Q = q\,l/2$ | Sıfır ucundan $2l/3$ |

> Eşdeğer yük yalnızca **mesnet tepkisi** hesabında bütün yayılı yük için kullanılır. Kesim yaparken kesilen parçanın yükü yeniden hesaplanır: $q\,z$, kesitten $z/2$ uzakta.

## Kesim yönteminin adımları

1. Serbest cisim diyagramını çiz, **mesnet tepkilerini** bul ($\sum F_z = 0$, $\sum F_y = 0$, $\sum M = 0$). Momenti, iki bilinmeyenin bulunduğu mesnede göre al.
2. Çubuğu **her yük veya geometri değişiminden sonra** kes (tekil yük, mesnet, yayılı yükün başı/sonu, tekil moment).
3. Her kesim için sol (veya sağ) parçanın dengesini yaz: $\sum F_z \to N$, $\sum F_y \to T$, $\sum M_{kesit} \to M$.
4. Bölge sınırlarında değerleri hesapla. $T = 0$ olan noktada $M$'nin ekstremumunu bul. Diyagramları alt alta çiz.

## İşaret kuralı

- **Sol parçada:** $N$ kesitten dışarı (çekme) $+$; $T$ aşağı $+$; $M$ saat yönünün tersi $+$.
- **Sağ parçada (ters kesim):** yönler terstir ($T$ yukarı, $M$ saat yönü $+$).
- Pozitif $M$ kirişi aşağı sarkıtır (alt lifler çekilir): "gülen kiriş".

## Diyagram okuma kuralları

| Bölgedeki yükleme | $T$ diyagramı | $M$ diyagramı |
|---|---|---|
| Yük yok | Sabit | Doğrusal |
| Düzgün yayılı $q$ | Doğrusal (eğim $-q$) | Parabol |
| Tekil kuvvet $P$ | $P$ kadar **sıçrama** | Kırılma (eğim değişir) |
| Tekil moment $C$ | Değişmez | $C$ kadar **sıçrama** |
| $T = 0$ noktası | Sıfırdan geçer | **Ekstremum** |
| Mafsal, kayıcı mesnet, serbest uç (tekil moment yoksa) | – | $M = 0$ |

<div data-arac="kiris"></div>

## Çözümlü örnekler

### Örnek 1 – Ortasından tekil yüklü basit kiriş

$L = 4$ m, A sabit, C kayıcı mafsal, ortada ($z = 2$ m) $P = 10$ kN.

- Tepkiler: $\sum M_A$: $-10\cdot2 + R_C\cdot4 = 0 \Rightarrow R_C = 5$ kN, $R_A = 5$ kN.
- 1. kesim ($0 \le z \le 2$): $T_1 = 5$ kN, $M_1 = 5z$ → $0 \dots 10$ kN·m.
- 2. kesim: $T_2 = 5 - 10 = -5$ kN, $M_2 = 10 - 5z$ → $10 \dots 0$.
- $T$, B'de $+5$'ten $-5$'e atlar (sıçrama = $P$). $M_{max} = 10\ \text{kN·m} = PL/4$.

### Örnek 2 – Düzgün yayılı yüklü basit kiriş

$L = 3$ m, $q = 1$ kN/m, iki ucu mafsallı.

- $Q = 3$ kN (ortada) → $R_A = R_B = 1{,}5$ kN.
- Tek kesim: $T = 1{,}5 - z$, $\quad M = 1{,}5z - z^2/2$.
- $T = 0 \Rightarrow z = 1{,}5$ m: $M_{max} = 1{,}125\ \text{kN·m} = qL^2/8$.

### Örnek 3 – Eğik kuvvet ve normal kuvvet

A sabit ($z = 0$), D kayıcı ($z = 1{,}5$ m); B'de ($0{,}5$ m) 50 t düşey, C'de ($1{,}0$ m) 100 t eğik kuvvet (3-4-5 üçgeni).

1. 100 t'yi ayır: yatay $100\cdot3/5 = 60$ t (sola), düşey $100\cdot4/5 = 80$ t (aşağı).
2. Tepkiler: $R_{Az} = 60$ t; $\sum M_A$: $-50\cdot0{,}5 - 80\cdot1 + 1{,}5R_D = 0 \Rightarrow R_D = 70$ t, $R_{Ay} = 60$ t.
3. A–C arası $N = -60$ t (**basma**: A mesnedi sağa, C'deki bileşen sola iter); C'den sonra $N = 0$.
4. $T$: $60 \to 10 \to -70$ t. $M$: B'de 30, C'de **35 t·m (maksimum)**, D'de 0.

> Kesme ve moment yalnızca **eksene dik** bileşenden, normal kuvvet yalnızca **eksen boyunca** bileşenden doğar.

### Örnek 4 – Yayılı yük + iki tekil yük

$L = 8$ m, A sabit, D kayıcı; A–B (0–4 m) $q = 10$ kN/m; B'de 100 kN, C'de (6 m) 150 kN.

- $Q = 40$ kN ($z = 2$). $\sum M_A$: $-40\cdot2 - 100\cdot4 - 150\cdot6 + 8R_D = 0 \Rightarrow R_D = 172{,}5$ kN, $R_A = 117{,}5$ kN.
- A–B: $T = 117{,}5 - 10z$ ($117{,}5 \to 77{,}5$), $M = 117{,}5z - 5z^2$ ($0 \to 390$).
- B–C: $T = 117{,}5 - 40 - 100 = -22{,}5$ kN, $M = 390 - 22{,}5z$ → C'de 345.
- Ters kesim (D'den): $T = -172{,}5$, $M = 172{,}5z$ → C'de 345 ✓ (iki yönden aynı değer = kontrol).
- $M_{max} = 390$ kN·m (B'de, $T$'nin işaret değiştirdiği yer).

### Örnek 5 – Tekil moment içeren kiriş

$L = 8$ m, A sabit, E kayıcı; B'de (1 m) 100 kN, C–D (2–6 m) $q = 5$ kN/m, D'de (6 m) saat tersi $C = 5$ kN·m.

- $\sum M_A$: $-100\cdot1 - 20\cdot4 + 5 + 8R_E = 0 \Rightarrow R_E = 21{,}875$ kN, $R_A = 98{,}125$ kN.
- $M$: B'de 98,125 (**maksimum**), C'de 96,25; D'nin solunda 48,75, sağında 43,75.
- D'deki **5 kN·m'lik sıçrama** tam olarak uygulanan momente eşittir (kontrol).

## Sık yapılan hatalar

- Eğik kuvveti bileşenlerine ayırmamak; yatay bileşenin $N$ oluşturduğunu unutmak.
- Kesilen parçada bütün yayılı yükün eşdeğerini kullanmak (doğrusu $q\,z$, kolu $z/2$).
- Ters kesimde pozitif yönleri çevirmeyi unutmak.
- Tekil momentin $T$'yi etkilemediğini, $M$'de sıçrama yaptığını unutmak.
- $M_{max}$'ı yalnız bölge uçlarında aramak; $T = 0$ olan iç noktayı kaçırmak.
- Negatif çıkan tepkinin hem yönünü hem işaretini değiştirmek (çift değişiklik). Ya işaretiyle kullan ya da yönünü çevir.
