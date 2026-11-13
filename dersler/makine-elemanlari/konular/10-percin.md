# Perçin bağlantıları

**Perçin:** Bir başı hazır olan, diğer başı (kapama başı) montaj sırasında dövülerek oluşturulan silindirik eleman. Perçin bağlantıları **çözülemez**; sökmek için perçini kesmek gerekir.

Montaj zorluğu nedeniyle makinecilikte önemi azalmıştır, ama **uçak sanayi, çelik yapılar, kazanlar, kayış ve fren balatası, mutfak eşyası, elektronik** gibi alanlarda yaygındır. Kaynak yapılamayan malzemelerde (ısıl işlemli alüminyum alaşımları) tercih edilir.

## Sınıflandırma

**Baş biçimine göre:** yuvarlak başlı, yassı yuvarlak başlı, havşa mercek başlı, havşa yassı mercek başlı, havşa düz başlı, silindir başlı.

**Kullanım yerine göre:** çelik inşaat, kazan, lokomotif perçinleri, diğerleri.

**Bağlantı şekline göre:** **bindirme** veya **alın (kuşaklı)** bağlantı; tek, çift veya çok sıralı; sıralar paralel veya şaşırtmalı (zikzak) dizilebilir.

## Perçinleme işlemi

- Parçalar üst üste getirilip birlikte delinir; perçinin kolay girmesi için delik çapı $d_1$, perçin çapı $d$'den biraz büyüktür (≈ 1 mm).
- Perçin yuvaya oturtulur, çektirmeyle sıkıştırılır, çekiçle dövülür ve üst perçin yuvasıyla kapama başı şekillendirilir.
- **Soğuk perçinleme:** Hafif metaller ve $d < 10$ mm çelik perçinler.
- **Sıcak perçinleme:** Büyük çelik perçinler. Soğurken perçin boyca kısalır ve parçaları birbirine bastırarak sürtünme kuvveti oluşturur.
- Perçin malzemesi, bağlanan parçalarla **aynı** seçilir; farklı genleşme katsayıları bağlantıyı gevşetebilir, farklı metaller galvanik korozyona yol açabilir.

## Hesap kabulleri

1. Perçinleme sonunda perçin gövdesi deliği **tamamen doldurur** → hesaplarda delik çapı $d_1$ kullanılır.
2. Kuvvet bir parçadan diğerine **tamamen perçin gövdesi** üzerinden iletilir (sürtünme ihmal edilir, emniyet tarafında kalınır).

## Mukavemet hesabı

$n$ perçin, her perçinde $m$ kesme yüzeyi (bindirmede 1, çift kuşaklı alın bağlantıda 2), levha kalınlığı $s$:

**Perçin gövdesinin kesilmesi:**

$$
\tau = \frac{F}{n\,m\,\frac{\pi d_1^2}{4}} \le \tau_{em}
$$

**Delik çeperinin ezilmesi:**

$$
\sigma_ez = \frac{F}{n\,d_1\,s} \le \sigma_{ez,em}
$$

**Levhanın delikli kesitten kopması** (bir sırada $n_1$ delik, levha genişliği $b$):

$$
\sigma = \frac{F}{(b - n_1d_1)\,s} \le \sigma_{em}
$$

**Levhanın kenardan yırtılması:** Kenar mesafesi $e \ge (1{,}5…2)d_1$ olmalıdır.

## Konstrüksiyon kuralları

- Perçin çapı, birleştirilen levha kalınlığına göre standart tablolardan seçilir.
- Perçinler arası adım: $t \approx (3…6)d$; kenar mesafesi $e \approx (1{,}5…2)d$.
- Bir sırada çok sayıda perçin yerine birkaç sıra kullanmak levhayı daha az zayıflatır.
- **Perçin bağlantı verimi:** $\eta = \dfrac{\text{bağlantının taşıyabildiği kuvvet}}{\text{deliksiz levhanın taşıyabildiği kuvvet}}$

> Perçin hesabı da cıvata grubunda olduğu gibi yapılır: eksantrik yüklü perçin gruplarında kuvvet ağırlık merkezine taşınır, doğrudan pay ve moment payı vektörel toplanır.
