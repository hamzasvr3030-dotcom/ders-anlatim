# Isıtıcılar ve boyler

**Isıtıcılar**, hacimlerin ısı ihtiyacını karşılayan ısı değiştiricilerdir.

## Isıtıcı türleri

### 1. Boru tipi ısıtıcılar

- **Çıplak boru:** Uygun çapta bir borunun belirli uzunlukta dolaştırılmasıyla kolayca yapılır. Sera ısıtması, **yerden ısıtma** (PEX – çapraz bağlı polietilen borular), konvektörler.
- **Kanatlı boru:** Isı transferini artırmak için boru üzerine kanatlar takılır. Kanatlı borunun taşınım katsayısı çıplak borununkinden biraz küçük olsa da alan çok büyük olduğundan **birim boydaki ısıl kapasite daha yüksektir.** Kanat tipi, boyutu ve malzemesi kapasiteyi etkiler.

### 2. Konvektörler

Çıplak veya kanatlı borunun bir kaset içine yerleştirilmesiyle yapılır; ısıyı ağırlıklı olarak **taşınımla** verir.

- **Doğal taşınımlı:** Isınan hava yükselir, kasetin altından soğuk hava girer.
- **Zorlanmış taşınımlı:**
  - **Fan-coil:** Kanatlı serpantin + elektrik motorlu fan. Döşeme, duvar ve tavan tipleri vardır. **Soğutmada da** kullanılabilir; 2 veya 4 borulu sistemlerle aynı binada farklı hacimlerde ısıtma ve soğutma yapılabilir. Oda termostatıyla çalışır; 3–30 kW kapasitelerde. Otel, hastane, konut gibi konfor uygulamaları.
  - **Isıtma apareyi (cihazı):** Kanatlı serpantin + fan; **yüksek tavanlı büyük hacimler** (atölye, depo, spor salonu).

### 3. Radyatörler

Isının önemli bir kısmını **ışınımla**, kalanını taşınımla verir.

| Tür | Özellik |
|---|---|
| **Döküm (dilimli)** | Dayanıklı, korozyona dirençli, ağır, ısıl ataleti büyük |
| **Çelik dilimli** | Daha hafif |
| **Panel radyatör** | Günümüzde en yaygın; ince, hafif, düşük su hacmi (hızlı tepki); PKKP gibi tipleri (panel-konvektör-konvektör-panel) |
| **Alüminyum** | Hafif, yüksek ısı iletimi, hızlı ısınır |
| **Havlupan** | Banyolar için |

**Radyatör seçimi:** Kataloglarda verilen ısıl güç standart koşullar (örneğin 90/70/20 °C) içindir. Farklı su sıcaklıklarında güç düzeltilir:

$$
Q = Q_n\left(\frac{\Delta T}{\Delta T_n}\right)^{m}, \qquad \Delta T = \frac{T_g + T_d}{2} - T_{oda}, \qquad m \approx 1{,}3
$$

Hacmin ısı kaybını karşılayacak sayıda dilim veya uygun boyda panel seçilir. Radyatörler genellikle soğuk hava kaynağı olan **pencere altlarına** yerleştirilir; böylece pencereden inen soğuk hava akımı engellenir.

### 4. Yerden (döşemeden) ısıtma

Döşemeye gömülü borularda düşük sıcaklıklı su (≈ 35–55 °C) dolaşır. Sıcaklık dağılımı insan için idealdir (ayaklar sıcak, baş serin), ısıtıcı görünmez; yoğuşmalı kazan ve **ısı pompasıyla** çok uyumludur. Ataleti büyük olduğundan tepkisi yavaştır.

## Boyler (sıcak kullanım suyu)

Konut, otel, hastane, yurt gibi yerlerin **sıcak su ihtiyacını** karşılamak için kullanılan **ısı değiştiricili depolara** boyler denir.

- **Serpantinli boyler:** Kazan suyu depo içindeki serpantinden geçerek kullanım suyunu ısıtır (dik tip, hızlı).
- **Gömlekli boyler:** Kazan suyu deponun dış ceketinde dolaşır.

### Tesisatta dikkat edilecekler

- Isınan suyun hacim artışı için uygun **genleşme tankı.**
- Soğuk su giriş hattına **çek valf.**
- Kullanım suyu sıcaklığını sabitlemek için serpantin hattını kontrol eden **termostat** ve otomatik kontrol.
- Uygun değerde **emniyet ventili.**
- **Lejyonella** bakterisinin üremesini önlemek için sistem belirli aralıklarla **65 °C'ye** ısıtılmalıdır (termal dezenfeksiyon).

### Boyler hesabı

1. Kullanım yerine ve sayısına göre **günlük ve saatlik sıcak su ihtiyacı** tablolardan bulunur (örneğin kişi başı, banyo başı, lavabo başı litre).
2. Bütün musluklar aynı anda açılmayacağından **eş zamanlı kullanım faktörü** $\varphi$ uygulanır. Daire sayısı arttıkça $\varphi$ küçülür (ders notundaki tablodan: 1 daire 1,0; 2 daire 0,86; 10 daire 0,47; 20 daire 0,40; 100 daire 0,28; 200 daire 0,25).
3. Gerekli ısıl güç:

$$
Q_{boyler} = \dot m\,c\,(T_{sıcak} - T_{soğuk})
$$

4. Depo hacmi, pik süresindeki tüketime ve ısıtma (toparlanma) süresine göre seçilir.
