# Sürünme ve yorulma deneyleri

## Sürünme

Sabit bir yük veya gerilme altındaki metal, **zamanla ilerleyen kalıcı şekil değişimine** uğrayabilir. Bu zamana bağlı gerinime **sürünme** denir.

- Yüksek sıcaklıkta önemlidir: genellikle **$T > 0{,}4–0{,}5\,T_e$** ($T_e$: mutlak ergime sıcaklığı).
- Gaz türbini kanatları, kazan boruları, buhar boruları, jet motoru parçaları gibi yüksek sıcaklıkta çalışan parçalarda **çalışma sıcaklığını sınırlayan** etkendir.
- Kurşun gibi düşük ergime sıcaklıklı metaller **oda sıcaklığında** bile sürünebilir.

### Sürünme eğrisi

Sabit yük ve yüksek sıcaklıkta uzama–zaman eğrisi dört kısımdan oluşur:

| Kısım | Açıklama |
|---|---|
| **Ani uzama** | Yük uygulanır uygulanmaz oluşan (elastik + bir miktar plastik) uzama |
| **1. kademe (geçiş, birincil)** | Pekleşme baskın; sürünme hızı **zamanla azalır** |
| **2. kademe (kararlı, ikincil)** | Pekleşme ile toparlanma dengede; sürünme hızı **sabit** ve en düşük. Tasarımda bu hız kullanılır |
| **3. kademe (üçüncül)** | Boyun verme, iç boşluklar; sürünme hızı **artar** ve **kopma** olur |

Sıcaklık veya gerilme arttıkça eğri dikleşir: kararlı sürünme hızı artar, kopma süresi kısalır.

**Sürünme deneyinin çıktıları:** kararlı sürünme hızı, belirli sürede belirli uzamaya yol açan gerilme, **sürünme-kopma ömrü.**

## Yorulma

Değişken (tekrarlı) gerilme altındaki malzeme, **statik dayanımının çok altındaki** gerilmelerde bile belirli bir çevrim sayısından sonra kırılabilir. Makine parçalarındaki hasarların büyük çoğunluğu yorulmadan kaynaklanır.

### Yorulma kırılmasının aşamaları

1. **Çatlak başlangıcı:** Genellikle yüzeydeki bir çentik, çizik, kalıntı veya gerilme yığılması bölgesinde.
2. **Çatlak ilerlemesi:** Her çevrimde çatlak biraz büyür; kırılma yüzeyinde **istiridye kabuğu (beach marks)** izleri ve mikroskopta **yorulma çizgileri** görülür.
3. **Ani kırılma:** Kalan kesit yükü taşıyamaz hâle gelince gevrek ve pürüzlü bir son kırılma bölgesi oluşur.

### Yorulma deneyi ve Wöhler (S-N) eğrisi

Numuneler (genellikle **dönen eğmeli** deney cihazında) farklı gerilme genliklerinde kopana kadar yüklenir; gerilme genliği–çevrim sayısı (logaritmik) grafiği çizilir.

- **Çeliklerde** eğri belirli bir çevrimden sonra (≈ $10^6$–$10^7$) **yataylaşır:** bu gerilmenin altında malzeme sonsuz ömürlüdür → **yorulma (sürekli mukavemet) sınırı.** Çelik için yaklaşık $\sigma_D \approx 0{,}5\,\sigma_ç$.
- **Alüminyum ve demir dışı metallerde** belirgin yatay kısım yoktur; tasarım belirli bir çevrim sayısındaki (örneğin $10^8$) **yorulma dayanımına** göre yapılır.

**Gerilme parametreleri:**

$$
\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2}, \qquad \sigma_g = \frac{\sigma_{max} - \sigma_{min}}{2}, \qquad R = \frac{\sigma_{min}}{\sigma_{max}}
$$

### Yorulma ömrünü etkileyen faktörler

- **Yüzey kalitesi:** Pürüzlü yüzey ömrü kısaltır; parlatma uzatır.
- **Çentikler ve kesit değişimleri:** Gerilme yığılması → yuvarlatılmış geçişler kullanılır.
- **Ortalama gerilme:** Çekme ortalama gerilmesi ömrü kısaltır.
- **Yüzey işlemleri:** **Bilyalı dövme (shot peening)**, nitrürleme, sementasyon yüzeyde **basma artık gerilmesi** oluşturarak ömrü uzatır.
- **Korozyon:** Korozif ortam yorulma dayanımını büyük ölçüde düşürür (korozyonlu yorulma).
- **Boyut:** Büyük parçalarda hata olasılığı daha yüksektir.
