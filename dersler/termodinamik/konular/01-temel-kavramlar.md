# Temel kavramlar, sıcaklık ve basınç

**Termodinamik** enerjinin bilimidir (*therme* = ısı, *dynamis* = güç). Temel ilkesi **enerjinin korunumudur**: enerji biçim değiştirir ama toplamı sabit kalır.

- **Birinci yasa:** Enerji yoktan var edilemez, var olan yok edilemez.
- **İkinci yasa:** Enerjinin yalnız miktarı değil **niteliği** de önemlidir; doğal süreçler niteliğin azaldığı yönde gerçekleşir. Isı kendiliğinden sıcaktan soğuğa akar.
- Mühendislikte **klasik (makroskopik) termodinamik** kullanılır; tek tek moleküllere bakılmaz.

## Birimler ve türdeşlik

$$
1\ \text{N} = 1\ \text{kg·m/s}^2, \quad W = mg, \quad 1\ \text{J} = 1\ \text{N·m}, \quad 1\ \text{kPa·m}^3 = 1\ \text{kJ}
$$

1 kgf = 9,81 N · 1 cal = 4,1868 J · 1 Btu = 1,0551 kJ

> **Türdeşlik:** Bir denklemdeki bütün terimlerin birimi aynı olmalıdır. $E = 25\ \text{kJ} + 7\ \text{kJ/kg}$ yanlıştır; ikinci terim kütleyle çarpılmalıdır: $E = 25 + 7m$.

## Sistemler

| Sistem | Kütle geçişi | Enerji geçişi | Örnek |
|---|---|---|---|
| **Kapalı** (kontrol kütlesi) | Yok | Isı ve iş geçebilir | Piston-silindir, buzdolabındaki gazoz kutusu |
| **Açık** (kontrol hacmi) | Var | Var | Kompresör, türbin, lüle, araba radyatörü |
| **Yalıtılmış** | Yok | Yok | – |

## Özellikler

- **Yeğin (intensive):** Kütleden bağımsız: $T$, $P$, $\rho$
- **Yaygın (extensive):** Kütleyle orantılı: $m$, $V$, $E$
- **Özgül:** Yaygın özellik / kütle: $v = V/m$, $e = E/m$

> **Ayırt etme testi:** Sistemi ikiye böl. Yarıya inen özellik yaygındır.

$$
\rho = \frac{m}{V}, \qquad v = \frac{1}{\rho}, \qquad \gamma_s = \rho g, \qquad SG = \frac{\rho}{\rho_{su}}
$$

## Hal ve denge

- **Hal önermesi:** Basit sıkıştırılabilir bir sistemin hali **iki bağımsız yeğin özellikle** belirlenir.
- **Denge türleri:** ısıl (her yerde aynı $T$), mekanik ($P$ zamanla değişmez), faz, kimyasal.
- **Sanki-statik (sanki-dengeli) süreç:** Sistem her an dengeye çok yakın kalacak kadar yavaş gerçekleşir.
- **Özel süreçler:** izotermal ($T$ sabit), izobarik ($P$ sabit), izokorik ($v$ sabit), adyabatik (ısı geçişi yok).
- **Çevrim:** Sistem ilk haline geri döner.
- **Sürekli akış:** Kontrol hacmindeki özellikler konumla değişebilir, **zamanla değişmez.**

## Sıcaklık

**Sıfırıncı yasa:** İki cisim üçüncü bir cisimle ısıl dengedeyse, birbirleriyle de ısıl dengededir. Termometrenin çalışma ilkesi budur.

$$
T(\text{K}) = T(°\text{C}) + 273{,}15, \qquad T(\text{R}) = T(°\text{F}) + 459{,}67, \qquad T(°\text{F}) = 1{,}8\,T(°\text{C}) + 32
$$

Sıcaklık **farklarında** K ile °C birbirinin yerine kullanılabilir: $\Delta T(\text{K}) = \Delta T(°\text{C})$.

## Basınç

$$
P = \frac{F}{A}\ [\text{Pa}], \qquad 1\ \text{bar} = 10^5\ \text{Pa}, \qquad 1\ \text{atm} = 101{,}325\ \text{kPa}
$$

$$
P_{etkin} = P_{mutlak} - P_{atm}, \qquad P_{vakum} = P_{atm} - P_{mutlak}
$$

Aksi belirtilmedikçe termodinamik hesaplarda $P$ **mutlak** basınçtır.

**Derinlikle değişim:**

$$
\Delta P = \rho g\,\Delta z, \qquad P = P_{atm} + \rho g h
$$

Aynı akışkanda aynı yatay düzlemdeki noktaların basıncı eşittir. **Pascal yasası:** $F_2/F_1 = A_2/A_1$ (hidrolik kaldıraç).

### Manometre ve barometre

$$
P_1 + \rho_1 g h_1 - \rho_2 g h_2 + \dots = P_2, \qquad P_{atm} = \rho_{cıva}\,g\,h
$$

> **Kural:** Akışkan kolonunda **aşağı inerken** $\rho g h$ ekle, **yukarı çıkarken** çıkar.

## Çözümlü örnekler

**Vakumlu oda.** $P_{atm} = 100$ kPa, vakum göstergesi 40 kPa → $P_{mutlak} = 100 - 40 = 60$ kPa.

**Çok akışkanlı manometre.** $P_{atm} = 85{,}6$ kPa; su $h_1 = 0{,}1$ m, yağ $h_2 = 0{,}2$ m ($\rho = 850$), cıva $h_3 = 0{,}35$ m ($\rho = 13\,600$).

$$
P_1 = P_{atm} + g(\rho_{cıva}h_3 - \rho_{su}h_1 - \rho_{yağ}h_2) = 85{,}6 + 9{,}81\,\frac{4760 - 100 - 170}{1000} = 129{,}6\ \text{kPa}
$$

**Yaylı piston.** $m = 4$ kg, $A = 35$ cm², $F_{yay} = 60$ N, $P_{atm} = 95$ kPa. Pistonun düşey dengesi:

$$
P = P_{atm} + \frac{mg + F_{yay}}{A} = 95 + \frac{4\cdot9{,}81 + 60}{35\times10^{-4}}\cdot10^{-3} = 123{,}4\ \text{kPa}
$$

**Diferansiyel cıva yüksekliği.** $P_{etkin} = 80$ kPa; $SG_{cıva} = 13{,}6$, $SG_{yağ} = 0{,}72$; $h_{yağ} = 0{,}75$ m, $h_{su} = 0{,}3$ m:

$$
\frac{80\,000}{1000\cdot9{,}81} = 0{,}72\cdot0{,}75 + 13{,}6\,h_{cıva} - 0{,}3 \;\Rightarrow\; h_{cıva} = 0{,}582\ \text{m}
$$

## Problem çözme adımları

1. Problemi kendi cümlelerinle yaz → 2. Şema çiz, sistemi işaretle → 3. Kabulleri yaz (sürekli akış, ideal gaz, KE ≈ 0…) → 4. Fiziksel yasaları uygula → 5. Özellikleri tablolardan bul → 6. Hesapla → 7. Sonucu sorgula (mantıklı mı, birimler tutuyor mu?)
