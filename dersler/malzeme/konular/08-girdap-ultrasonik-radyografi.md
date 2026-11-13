# Girdap akımı, ultrasonik, kızılötesi ve radyografik muayene

## Girdap akımlarıyla (eddy current) muayene

**İlke:** Alternatif akım geçen bir bobin, değişken bir manyetik alan oluşturur. Bobin **iletken** bir malzemeye yaklaştırılınca malzeme yüzeyinde dairesel **girdap (fuko, eddy) akımları** indüklenir. Bu akımlar da kendi manyetik alanlarını oluşturup bobinin empedansını değiştirir.

Malzemedeki bir çatlak, kalınlık değişimi veya metalürjik farklılık, **elektriksel iletkenliği** yerel olarak değiştirir; girdap akımları farklı bir yol izler ve bu değişim bobin tarafından algılanıp osiloskop veya voltmetrede okunur.

**Deri (yüzey) etkisi:** Girdap akımları yüzeyde yoğunlaşır; **frekans arttıkça nüfuz derinliği azalır.** Yüksek frekans → yüzey hataları; düşük frekans → daha derin.

**Kullanım alanları:**

- Yüzey ve yüzeye yakın çatlakların bulunması (uçak gövdesi, ısı eşanjörü boruları)
- İletkenlik ve sertlik ölçümü, malzeme ayırma (yanlış alaşımın tespiti)
- Kaplama ve boya kalınlığı ölçümü
- Isıl işlem kontrolü

**Avantajları:** Temassız, çok hızlı, otomasyona uygun, sarf malzemesi yok. **Sınırlamaları:** Yalnız **iletken** malzemeler; nüfuz derinliği sınırlı; referans numune gerekir.

> Girdap akımları enerji kaynağı olarak da kullanılır: **indüksiyon ocakları ve ergitme fırınları**, indüksiyonla yüzey sertleştirme, transformatörler.

## Ultrasonik muayene

İnsan kulağının duyamadığı yüksek frekanslı (**20 kHz'in üstü**, muayenede genellikle **0,5–25 MHz**) ses dalgaları malzemeye gönderilir. Dalgalar bir hataya veya arka yüzeye çarpınca **yansır**; yansıyan sinyalin geliş süresi ve şiddeti ölçülür.

Ultrason **piezoelektrik** kristallerle üretilir ve algılanır (elektrik sinyali ↔ mekanik titreşim). Prob ile parça arasındaki havayı gidermek için **akuplan** (yağ, jel, su) kullanılır; çünkü ultrason havada çok zayıflar.

### Dalga türleri

| Dalga | Parçacık hareketi | Kullanım |
|---|---|---|
| **Boyuna** | Yayılma yönünde | Düz problarla; katı, sıvı ve gazda ilerler |
| **Enine** | Yayılma yönüne dik | Açılı problarla, **kaynak muayenesi**; sıvı ve gazda ilerlemez |
| **Yüzey (Rayleigh)** | Yalnızca yüzeyde, bir dalga boyu derinliğe kadar | Yüzey çatlakları |
| **Plaka (Lamb)** | İnce levhalar boyunca | Sac ve ince borular |

### Yöntemler

- **Darbe-yankı (pulse-echo):** Tek prob hem gönderir hem alır. Hata yankısı arka yüzey yankısından **önce** gelir; süreden hatanın **derinliği** hesaplanır: $d = \dfrac{v\,t}{2}$.
- **Geçirme (through-transmission):** Bir prob gönderir, karşı taraftaki diğer prob alır; hata sinyali zayıflatır.
- **Kalınlık ölçümü:** Korozyonla incelmiş boru ve tankların duvar kalınlığı tek taraftan ölçülür.

**Avantajları:** **İç hataları** bulur, derinliğini ve boyutunu verir; tek taraftan erişim yeter; kalın parçalara uygundur; radyasyon tehlikesi yoktur. **Sınırlamaları:** Uzmanlık ister; pürüzlü, çok ince veya karmaşık parçalarda zordur; kaba taneli malzemelerde (döküm) sinyal saçılır.

> Ultrason enerji kaynağı olarak da kullanılır: **ultrasonik temizleme**, ultrasonik kaynak (plastik).

## Kızılötesi (termografik) muayene

Her cisim sıcaklığına bağlı olarak **kızılötesi ışınım** yayar. Termal kamera bu ışınımı algılayıp yüzeydeki **sıcaklık dağılımını** görüntüye dönüştürür.

- **Pasif termografi:** Parçanın kendi ısısı izlenir (çalışan makineler, elektrik panoları).
- **Aktif termografi:** Parça dışarıdan ısıtılır; iç hatalar ısı akışını değiştirdiği için yüzeyde farklı sıcaklık bölgeleri oluşur (kompozitlerde ayrılma, yapışma hataları).

**Uygulamalar:** Elektrik bağlantılarında aşırı ısınma, yataklarda ve motorlarda arıza tespiti (kestirimci bakım), bina yalıtım kayıpları, kompozit ve kaplama hataları, üretim süreçlerinin izlenmesi.

**Avantajları:** **Temassız**, uzaktan, geniş alanı hızla tarar; çalışan sistemde uygulanır.

## Radyografik muayene

**X ışınları** (röntgen tüpü) veya **gama ışınları** (radyoaktif izotop: Ir-192, Co-60) parçadan geçirilir; karşı taraftaki film veya dijital dedektör üzerinde bir görüntü oluşur.

- Işınım, malzemede **kalınlığa ve yoğunluğa** bağlı olarak zayıflar.
- Boşluk, gözenek, cüruf gibi hatalı bölgelerde daha az malzeme olduğundan daha fazla ışınım geçer → filmde **daha koyu** görünür.

**Bulduğu hatalar:** **Hacimsel** iç hatalar: gaz boşlukları, gözenekler, cüruf kalıntıları, büzülme boşlukları, kaynakta nüfuziyet eksikliği. Işın yönüne paralel düzlemsel çatlaklar görünür, dik olanlar zor görünür.

**Kullanım:** Kaynak dikişleri, dökümler, basınçlı kaplar, boru hatları.

| | X ışını | Gama ışını |
|---|---|---|
| Kaynak | Elektrikli tüp (açıp kapatılabilir) | Radyoaktif izotop (sürekli ışır) |
| Taşınabilirlik | Daha az | Sahaya kolay götürülür, elektrik gerekmez |
| Görüntü kalitesi | Genellikle daha iyi | Daha kalın parçalara uygun |

**Avantajları:** Kalıcı kayıt (film/dijital görüntü), iç hataların doğrudan görüntülenmesi. **Dezavantajları:** **Radyasyon güvenliği** (insan ve çevre için tehlike, lisans ve güvenlik alanı gerekir); pahalı ekipman; iki taraftan erişim gerekir.

> **Dijital radyografi**, filme göre daha hızlı sonuç verir, görüntü bilgisayarda işlenebilir ve kolayca arşivlenir.
