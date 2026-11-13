# Kazanlar ve kazan dairesi

## Kazan verimi

$$
\eta_K = \frac{\text{suya aktarılan faydalı ısı}}{\text{yakıtın verdiği ısı}} = \frac{\dot Q_K}{\dot m_{yakıt}H_u}
$$

$H_u$: yakıtın **alt ısıl değeri.** Kayıplar: baca gazıyla atılan ısı, kazan yüzeyinden ışınım/taşınım, eksik yanma.

**Yoğuşmalı kazanlar:** Baca gazındaki su buharı yoğuşturularak gizli ısısı geri kazanılır. Alt ısıl değere göre hesaplanan verim **%100'ün üstünde** (≈ %106–109) çıkabilir. Bunun için dönüş suyu sıcaklığı düşük olmalıdır (yoğuşma için ≈ 55 °C altı) → düşük sıcaklıklı sistemlerle birlikte kullanılır.

### Bina Enerji Performansı (BEP) yönetmeliği kriterleri

- Merkezi ısıtmalı binalarda kazan verimi **katı yakıtlı kazanlarda %75'ten**, sıvı ve gaz yakıtlı kazanlarda ilgili yönetmelikteki **2 yıldız (\*\*)** verim sınıfından düşük olamaz.
- Verim şartları hem **nominal güçte** hem **%30 kısmi yükte** sağlanmalıdır.

| Kazan tipi | Nominal güçte verim (%) | %30 kısmi yükte verim (%) |
|---|---|---|
| Standart kazan | $\ge 84 + 2\log P_n$ | $\ge 80 + 3\log P_n$ |
| Düşük sıcaklık kazanı | $\ge 87{,}5 + 1{,}5\log P_n$ | $\ge 87{,}5 + 1{,}5\log P_n$ |
| Gaz yoğuşmalı kazan | $\ge 91 + \log P_n$ | $\ge 97 + \log P_n$ |

$P_n$: nominal güç (kW).

- Merkezi ısıtma sistemlerinin yerleşimi **TS 2192**'ye, gaz yakıtlı sistemlerinki **TS 3818**'e göre yapılır.

## Kazan kapasitesi

$$
\boxed{Q_K = Q_h\,(1 + Z_R)}
$$

$Q_h$: bütün ısıtıcıların toplam ısıl gücü (ısı kaybı hesabından), $Z_R$: boru kayıpları ve ilk ısınma için artırım katsayısı (tablodan). Birim dönüşümü: $1\ \text{kW} = 860\ \text{kcal/h}$.

## Kazan dairesi tasarımı

### Yer seçimi ve güvenlik

- 0,5 bar'dan yüksek basınçlı buhar ve kızgın su kazanlarının meskûn hacimlerin altına yerleştirilebilmesi için **su hacmi (m³) × işletme basıncı (bar) ≤ 10** olmalıdır. Sağlanamıyorsa üzerinde kat olmayan **ayrı bir kazan dairesi** yapılır.
- Kazanlar, su hacmi ve işletme basıncına karşılık gelen doymuş buhar sıcaklığına bağlı $V\cdot(T - 100)$ değerine göre üç sınıfa ayrılır.

**Yırtılma (patlama) yüzeyi:** Aşağıdakilerden biri varsa, kazan patlamasında binanın zarar görmemesi için kazan dairesinin tavanında veya dış duvarında zayıf bir **yırtılma yüzeyi** yapılması zorunludur:

- Tek bir kazanın gücü **140 kW**'tan (120 000 kcal/h) fazla, veya
- Kazan dairesinin toplam kapasitesi **1400 kW**'tan (1 200 000 kcal/h) fazla, veya
- Kurulu kapasite / kazan dairesi hacmi **1100 W/m³**'ten fazla.

### Yerleşim kuralları

- Kazanlar **bacaya en yakın** yere konur.
- Yakıt deposu, kazan dairesinden **120 dakika yangına dayanıklı** bir bölmeyle ayrılır.
- Kazanlar betonarme zemin üzerinde, en az **200 mm** kalınlığında ateş tuğlası kaide üzerine oturtulur. Brülörlü kazanlarda brülörün altı yerden en az **30 cm** yukarıda olmalıdır (fan toz emmesin).
- Izgara derinliği 1500 mm'yi geçen katı yakıtlı kazanlarda kaide yüksekliği en az 400 mm olmalıdır.
- Sızan suların toplanması için en az **0,25 m³**'lük bir **pis su çukuru** yapılır; fuel-oil akıntıları buraya kesinlikle akıtılmaz.
- Kazan dairesinin net yüksekliği dökme dilimli kazanlarda en az **2,10 m**; kollektörler kazanın üzerindeyse en az kazan yüksekliği + 1,90 m.
- Ana şalter ve panolar giriş kapısının yanında ve sızdırmaz tipte olmalı; kazan dairesinde **yangın tüpü** bulunmalı.
- Doğal aydınlatma açıklıkları binanın diğer pencerelerinin altına gelmemelidir.
- Yeterli **yanma havası** için alt ve üst havalandırma menfezleri bırakılır.

### Yakıt tankı

- Kazandan yanmaz bir duvarla ayrılır; tank altına, tank hacminin 1/3'ünü alacak taşma (havuz) bölmesi yapılır.
- Tank, belirli bir süre (genellikle **20–30 gün**) yetecek kadar yakıt alacak şekilde boyutlandırılır.
- Fuel-oil, pompalanabilmesi için **serpantinle ısıtılır** (özgül ısısı ≈ 2,1 kJ/kg·K).
