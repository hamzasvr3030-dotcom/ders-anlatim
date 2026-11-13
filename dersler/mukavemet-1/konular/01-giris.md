# Giriş ve temel kavramlar

**Mukavemet** (*strength of materials*), cisimlerin yük altındaki davranışını inceler: iç kuvvetler, gerilmeler ve şekil değiştirmeler. Mühendisliğin temel sorusu yapının güvenilir olmasıdır; bunun iki ayağı **uygun malzeme seçimi** ve **boyutlandırmadır.**

> **Statik ile farkı:** Statik bir rafın dengede olup olmadığını sorar. Mukavemet rafın dengede olduğunu kabul eder ve "raf tahtası bu kitapların altında kırılır mı, ne kadar sehim yapar?" diye sorar.

## Cisim türleri

| Tür | Davranış | Örnek |
|---|---|---|
| **Elastik** | Yük kalkınca şekil değişimi tamamen geri döner | Yay, lastik |
| **Plastik** | Kalıcı şekil değişimi olur | Hamur, kil |
| **Elasto-plastik** | Bir sınırı aşınca kısmen geri döner, kısmen kalıcı olur | Bükülen ataş |
| **Homojen** | Özellikler her noktada aynı | Çelik çubuk |
| **İzotrop** | Özellikler her doğrultuda aynı | Metaller (yaklaşık) |
| **Rijit** | Hiç şekil değiştirmez (idealleştirme) | Statikteki cisimler |

## Temel ilkeler

- **Katılaşma (rijitlik) ilkesi:** Denge, cismin şekil değiştirmiş son durumunda, cisim o anda "donmuş" kabul edilerek yazılır.
- **Denge denklemleri:** $\sum \vec F = 0$, $\sum \vec M = 0$. Uzayda 6, düzlemde 3 skaler denklem vardır.
- **Ayırma ilkesi:** Dengedeki cismin hayali olarak kesilen her parçası da dengededir. Parçayı dengede tutan kesitteki kuvvetler **iç kuvvetlerdir.** Kesim yönteminin temeli budur.
- **Eş değerlilik ilkesi:** Statik olarak eşdeğer iki yükleme mukavemet açısından eşdeğer olmayabilir. Bir çubuğu bir ucundan çekmek ile diğer ucundan itmek aynı dengeyi verir, ama biri çekme diğeri basma doğurur.
- **Süperpozisyon:** $R = P_1 + P_2 \Rightarrow \delta = \delta_1 + \delta_2$. Malzeme lineer elastik ve şekil değiştirmeler küçük olmalıdır.
- **Saint-Venant ilkesi:** Yükün uygulandığı bölgeden yeterince uzakta gerilme dağılımı yükün nasıl uygulandığına bağlı değildir. Bu sayede tekil yüklü çubukta da $\sigma = N/A$ düzgün dağılımı kullanılır.
- **Birinci mertebe teorisi:** Küçük terimlerin yanında daha yüksek mertebeden küçük terimler ihmal edilir. Küçük açılarda $\sin\theta \approx \tan\theta \approx \theta$ alınır.

## Geometrisine göre cisimler

- **Bir boyutlu (çubuk):** Bir boyut diğer ikisinden çok büyüktür; kesit şekliyle adlandırılır.
- **İki boyutlu (levha / plaka):** İki boyut üçüncüden çok büyüktür. Notlara göre kesitine dik yüklenirse **levha**, kesitine paralel yüklenirse **plaka** adını alır.
- **Üç boyutlu (blok):** Hiçbir boyut ihmal edilemez.

## Birimler

$$
1\ \text{MPa} = 1\ \text{N/mm}^2 = 10^6\ \text{Pa}, \qquad 1\ \text{GPa} = 10^3\ \text{MPa}, \qquad 1\ \text{kN·m} = 10^6\ \text{N·mm}
$$

> **Pratik kural:** Kuvveti **N**, uzunluğu **mm** alırsan gerilme doğrudan **MPa** çıkar. Çelik için $E = 210\ \text{GPa} = 210\,000\ \text{MPa}$.

**Mini örnek:** Ø10 mm çubuğa 20 kN çekme: $A = \pi\cdot10^2/4 = 78{,}54\ \text{mm}^2$, $\sigma = 20\,000/78{,}54 = 254{,}6\ \text{MPa}$.

> **Sık yapılan hata:** E'yi GPa, uzunluğu mm, kuvveti kN alıp formüle karışık birimlerle girmek. Her şeyi önce N–mm–MPa sistemine çevir. Eski notlardaki birimler için: 1 kgf ≈ 9,81 N, 1 ton(-kuvvet) ≈ 9,81 kN.
