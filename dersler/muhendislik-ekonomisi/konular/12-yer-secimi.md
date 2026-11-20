# Yer seçimi ve faktör puanlama

## Yer seçimi neden önemlidir?

Sınavda sözel olarak soruluyor. Cevapta şu noktalara değin:

1. **Uzun vadeli ve geri dönüşü zor bir karardır.** Fabrika kurulduktan sonra taşımak çok pahalıdır; yanlış yer, işletmeyi onlarca yıl etkiler.
2. **Maliyetleri doğrudan belirler.** Hammadde ve ürün taşıma giderleri, işçilik ücretleri, enerji, arsa ve vergi maliyetleri yere göre büyük farklılık gösterir.
3. **Pazara erişimi ve rekabet gücünü etkiler.** Müşteriye yakınlık teslim süresini kısaltır.
4. **Yatırım tutarı büyüktür.** Arsa, bina ve altyapı yatırımları geri alınamaz (batık maliyet).
5. **Çalışan bulma ve tutma** imkânını belirler (nitelikli iş gücü, yaşam koşulları).
6. **Teşvik ve yasal düzenlemeler** bölgeden bölgeye değişir (teşvik bölgeleri, OSB, teknopark).
7. **Çevresel ve sosyal etkiler** taşır (atık, emisyon, halkın kabulü).

## Yer seçimi faktörleri

| Grup | Faktörler |
|---|---|
| **Pazar** | Pazara yakınlık, talep büyüklüğü, rakiplerin konumu |
| **Hammadde** | Hammaddeye ve tedarikçilere yakınlık, kaynak bolluğu |
| **Ulaşım ve taşıma** | Karayolu, demiryolu, liman, havalimanı; taşıma maliyeti |
| **İş gücü** | Nitelikli işçi bulunabilirliği, ücret düzeyi, sendikalaşma |
| **Altyapı** | Organize sanayi bölgesi, enerji, su, doğalgaz, atık arıtma, iletişim |
| **Enerji** | Elektrik maliyeti ve sürekliliği (enerji yoğun sektörlerde kritik) |
| **İklim ve coğrafya** | Güneşlenme süresi, rüzgâr, deprem ve sel riski, zemin |
| **Teşvikler** | Yatırım teşvik bölgesi, vergi indirimi, SGK desteği, arsa tahsisi |
| **Çevre ve yasal** | Çevre mevzuatı, imar, ÇED süreci |
| **Sosyal** | Güvenlik, eğitim ve sağlık imkânları, yaşam kalitesi, halkın tutumu |
| **Kümelenme** | Aynı sektördeki firmalara, yan sanayiye, üniversitelere yakınlık |

## Faktör puanlama (ağırlıklı puan) yöntemi

Sayısal olmayan faktörleri de karşılaştırmaya katmanın en yaygın yoludur:

1. Tesis için önemli faktörleri listele.
2. Her faktöre bir **önem derecesi (ağırlık)** ver. Ağırlıkların toplamı 1 (veya 100) olmalıdır.
3. Her aday yeri her faktör için aynı ölçekle puanla (1–10 veya 1–100).
4. Her yer için **ağırlıklı puanı** hesapla:

$$
\boxed{S_j = \sum_k w_k\,p_{jk}}
$$

5. Ağırlıklı puanı en yüksek olan yer seçilir. Sonuçlar birbirine çok yakınsa maliyet analizi ([grafikle seçim](#/ders/muhendislik-ekonomisi/11-alternatif-grafik)) ile birlikte değerlendirilir.

> **Dikkat:** Puanlar ve ağırlıklar öznel değerlendirmelerdir. Sınavda önemli olan, **gerekçeli** ve **tutarlı** bir tablo kurmaktır; tek bir "doğru cevap" yoktur. Ağırlıkları tesisin niteliğine göre belirle: enerji yoğun bir tesiste enerjinin, ağır ürünlerde taşımanın ağırlığı yüksek olmalıdır.

### Sınav sorusu (Final 2026): motorlu araç lastik fabrikası

Aday şehirler: Sakarya, Eskişehir, Diyarbakır, İzmir.

**Gerekçe:** Lastik fabrikasının en büyük müşterisi otomotiv ana sanayisidir (Marmara ve Bursa çevresi). Hammaddenin (kauçuk, karbon siyahı, çelik kord) büyük kısmı ithal edildiği için **limana yakınlık** önemlidir. Ürün hacimli ve ağırdır; bu nedenle **taşıma maliyeti** yüksektir.

| Faktör | Ağırlık | Sakarya | Eskişehir | Diyarbakır | İzmir |
|---|---|---|---|---|---|
| Pazara (otomotiv sanayisine) yakınlık | 0,25 | 9 | 7 | 3 | 7 |
| Hammaddeye ve limana erişim | 0,15 | 8 | 5 | 3 | 9 |
| Ulaşım ve taşıma | 0,15 | 9 | 8 | 4 | 8 |
| Nitelikli iş gücü | 0,15 | 8 | 7 | 5 | 8 |
| Altyapı (OSB, enerji, su) | 0,10 | 8 | 8 | 6 | 8 |
| Teşvikler | 0,10 | 5 | 6 | 10 | 5 |
| Arsa ve işçilik maliyeti | 0,05 | 6 | 7 | 9 | 5 |
| Çevre ve sosyal faktörler | 0,05 | 7 | 8 | 6 | 7 |
| **Ağırlıklı puan** | **1,00** | **7,95** | **6,90** | **4,90** | **7,40** |

Örnek hesap (Sakarya): $0{,}25(9) + 0{,}15(8) + 0{,}15(9) + 0{,}15(8) + 0{,}10(8) + 0{,}10(5) + 0{,}05(6) + 0{,}05(7) = 7{,}95$

**Karar:** **Sakarya** seçilir. Otomotiv ana sanayisine ve Marmara limanlarına yakınlığı belirleyicidir. Diyarbakır teşvik açısından en avantajlı il olsa da pazar ve tedarik zincirine uzaklığı bu avantajı karşılamıyor.

### Sınav sorusu (Büt 2025): fotovoltaik panel fabrikası

Aday şehirler: Diyarbakır, Sakarya, Konya, İzmir.

**Gerekçe:** Panel üretimi temiz oda, kesintisiz ve ucuz enerji ile nitelikli teknik personel ister. Pazarı güneş enerjisi santralleridir (GES); büyük GES'ler yüksek güneşlenmeli bölgelerde (Konya, Karapınar) kurulur. Hücre ve cam gibi girdiler ithal edildiği için limana erişim de önemlidir.

| Faktör | Ağırlık | Diyarbakır | Sakarya | Konya | İzmir |
|---|---|---|---|---|---|
| Pazara (GES sahalarına) yakınlık | 0,20 | 7 | 5 | 9 | 7 |
| Hammaddeye ve limana erişim | 0,15 | 3 | 8 | 6 | 9 |
| Nitelikli iş gücü | 0,15 | 5 | 8 | 7 | 9 |
| Altyapı ve enerji | 0,15 | 6 | 8 | 8 | 8 |
| Teşvikler | 0,15 | 10 | 5 | 7 | 5 |
| Ulaşım | 0,10 | 4 | 9 | 7 | 8 |
| Arsa maliyeti | 0,05 | 8 | 5 | 8 | 4 |
| Çevre ve sosyal faktörler | 0,05 | 6 | 7 | 8 | 7 |
| **Ağırlıklı puan** | **1,00** | **6,10** | **6,85** | **7,50** | **7,40** |

**Karar:** **Konya** seçilir. GES pazarına yakınlık, sanayi altyapısı, teşvik düzeyi ve uygun arsa maliyeti bir arada değerlendirildiğinde öne çıkıyor. İzmir liman ve iş gücü avantajıyla çok yakın ikincidir; bu kadar yakın sonuçlarda maliyet analiziyle kesin karar verilmelidir.

## Diğer yer seçimi yöntemleri

- **Maliyet (başabaş) analizi:** Her yerin sabit ve değişken maliyeti verilmişse grafikle seçim yapılır ([Grafikle alternatif seçimi](#/ders/muhendislik-ekonomisi/11-alternatif-grafik)).
- **Ağırlık merkezi yöntemi:** Pazar ve tedarik noktalarının koordinatları, taşınan miktarlarla ağırlıklandırılarak taşıma maliyetini en aza indiren nokta bulunur:

$$
\bar x = \frac{\sum x_k Q_k}{\sum Q_k}, \qquad \bar y = \frac{\sum y_k Q_k}{\sum Q_k}
$$

- **Ulaştırma modeli:** Birden çok fabrika ve depo varken toplam taşıma maliyeti doğrusal programlamayla en aza indirilir.
