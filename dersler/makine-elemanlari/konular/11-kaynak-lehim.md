# Kaynak ve lehim bağlantıları

## Kaynak

Aynı veya benzer malzemeden iki metal parçayı, ek yeri mümkün olduğu kadar parçalarla aynı değerde bir bütün oluşturacak şekilde **ısıyla ve sökülemez biçimde** birleştirme işlemidir. Çelik yapılarda, boru ve kazan imalatında, tamirde cıvatalı ve perçinli bağlantıların yerini büyük ölçüde almıştır.

### Kaynak yöntemleri

**Baskı (basınç) kaynağı:** Parçalar hamur kıvamına kadar ısıtılıp baskı altında birleştirilir.
- Ocak kaynağı, gaz baskı kaynağı, elektrik direnç kaynakları (alın, nokta, dikiş), termit baskı, endüksiyon kaynağı.

**Ergitme kaynağı:** Birleşim bölgesi ergitilir; genellikle ilave (katık) malzeme kullanılır.
- Oksi-gaz kaynağı, elektrik ark kaynağı (örtülü elektrot), toz altı kaynağı, koruyucu gaz altında kaynak (**TIG, MIG/MAG**), termit ergitme kaynağı.

### Kaynak kabiliyeti

- %C ≤ 0,3 olan çelikler (St34, St42) kolayca kaynak edilir. **Karbon ve alaşım oranı arttıkça kaynak kabiliyeti azalır.**
- Alüminyum, bakır, bronz, pirinç ve çinkonun kaynak kabiliyeti iyidir.
- Dökme demir ancak özel koşullarda (yaklaşık 600 °C ön ısıtma) kaynak edilebilir.

### Hazırlık ve kalite

- Kalın parçalarda geçiş bölgesinde çatlamayı önlemek için **ön tavlama.**
- Çarpılmayı önlemek için asıl dikişten önce **puntalama.**
- Isıl genleşme için serbest uzamaya izin verilmesi.
- 4 mm'den kalın saclarda nüfuziyet için **kaynak ağzı** açılması.

Dikiş kalitesini etkileyen faktörler: malzeme, ön hazırlık, yöntem, elektrot/katık malzeme, **kaynakçının eğitimi**, kaynak sonrası işlemler (gerilme giderme tavı, düzeltme, korozyon önlemi, muayene).

### Dikiş türleri

- **Alın kaynağı:** Parçalar aynı düzlemde uç uca; I, V, X, U, Y ağızlı.
- **Köşe kaynağı:** Parçalar dik veya bindirmeli; dikiş kesiti üçgendir.

### Dikiş hesabı

**Hesap kalınlığı** $a$: Alın kaynağında levha kalınlığı; köşe kaynağında üçgen kesitin **yüksekliği** (dikiş kalınlığı), $a \approx 0{,}7\,z$ ($z$: kenar boyu).

**Hesap boyu:** $l_h = l - 2a$ (dikiş başı ve sonundaki kusurlu krater bölgeleri çıkarılır).

$$
\text{Çekme/basma:}\quad \sigma = \frac{F}{\sum a\,l_h} \le \sigma_{k,em}, \qquad \text{Kesme:}\quad \tau = \frac{F}{\sum a\,l_h} \le \tau_{k,em}
$$

$$
\text{Eğilme:}\quad \sigma_e = \frac{M_e}{W_k} \le \sigma_{k,em}
$$

$W_k$: dikiş kesitinin (dikişlerin birleşim düzlemine yatırılmış hâlinin) mukavemet momenti.

**Bileşik zorlanma:** $\sigma_{eş} = \sqrt{\sigma^2 + \tau^2}$ (kaynak hesabında yaygın kabul) veya ilgili yönetmeliğin bağıntısı.

**Dikiş emniyet gerilmesi:**

$$
\sigma_{k,em} = v_1\,v_2\,\sigma_{em}
$$

$v_1$: dikiş şekil faktörü (zorlanma türüne göre), $v_2$: dikiş kalite faktörü (muayeneli / muayenesiz).

> **Kaynaklı yapılarda yorulma:** Dikiş kökü ve geçiş bölgesi çentik etkisi yaratır. Dinamik yükte dikişler taşlanıp yumuşak geçişli yapılmalı, alın kaynağı tercih edilmelidir.

## Lehim

Parçalardan **daha düşük erime sıcaklığındaki** bir ilave metal (lehim) eritilerek yapılan birleştirme. Ana parçalar **ergimez**; lehim kılcallıkla yüzeyler arasına dolar ve **adezyonla** tutunur.

| | Yumuşak lehim | Sert lehim |
|---|---|---|
| Erime sıcaklığı | < 450 °C | > 450 °C |
| Lehim alaşımı | Kalay-kurşun (Sn-Pb), kalay-gümüş | Pirinç, gümüş, bakır alaşımları |
| Mukavemet | Düşük | Yüksek |
| Kullanım | Elektronik, ince sac, sızdırmazlık | Boru bağlantıları, takım uçları |

- Yüzeyler temiz olmalı; oksit tabakasını gidermek ve oluşumunu engellemek için **dekapan (flux)** kullanılır.
- Lehim bağlantıları genellikle **kesmeye** zorlanacak şekilde (bindirmeli) tasarlanır: $\tau = F/(b\,l) \le \tau_{em}$.
- Avantaj: farklı metalleri birleştirebilir, ısıl gerilme ve çarpılma kaynağa göre azdır.
