# İş ölçümü: normal ve standart süre

**Her sınavda çıkan kalıp.** İş ölçümü (zaman etüdü), **eğitimli ve deneyimli bir işçinin**, belirli bir işi **tanımlanmış bir yöntemle ve normal bir tempoyla** yapması için gereken süreyi belirleme tekniğidir. Bulunan süreye **standart süre** denir.

## İşletme neden iş ölçümüne ihtiyaç duyar?

Sınavda hemen hemen aynı kelimelerle soruluyor. Cevapta şunlara değin:

1. **Maliyet hesabı ve fiyatlandırma:** Ürün başına işçilik maliyeti standart süreyle hesaplanır; teklif ve satış fiyatı buna dayanır.
2. **Üretim planlama ve kapasite:** Bir vardiyada kaç ürün üretileceği, kaç makine ve işçi gerektiği, teslim tarihleri ancak süreler biliniyorsa belirlenebilir.
3. **İş gücü ihtiyacının belirlenmesi:** Kaç kişi istihdam edileceği hesaplanır.
4. **Performans değerlendirme ve ücretlendirme:** Teşvikli (prim) ücret sistemleri standart süreye göre kurulur; çalışanlar adil biçimde karşılaştırılır.
5. **Yöntem karşılaştırma ve verimlilik artışı:** Farklı çalışma yöntemlerinin süreleri karşılaştırılır, kayıp zamanlar ortaya çıkar.
6. **Hat dengeleme:** Montaj hattındaki istasyonlar arasında iş yükü eşitlenir, darboğazlar giderilir.
7. **Bütçe ve maliyet kontrolü:** Gerçekleşen süreler standartla karşılaştırılarak sapmalar izlenir.

## Ölçümü yapan personel neden tecrübeli bir uzman olmalı?

1. **Tempo (performans) değerlendirmesi** gözleme dayanan öznel bir yargıdır. İşçinin normalden hızlı mı yavaş mı çalıştığını doğru tahmin etmek ancak deneyimle mümkündür.
2. İşin **elemanlara (iş öğelerine) doğru ayrılması** ve başlangıç–bitiş noktalarının doğru belirlenmesi uzmanlık ister.
3. **Hatalı ve anormal ölçümleri** (dikkat dağınıklığı, makine arızası, kayıt hatası) ayırt edip ayıklamak gerekir.
4. Uygun **gözlem sayısını** istatistiksel olarak belirlemek ve kronometreyi doğru kullanmak bilgi ister.
5. **Tolerans paylarını** (kişisel ihtiyaç, yorgunluk, beklemeler) iş koşullarına göre doğru belirlemek gerekir.
6. İşçilerin **güvenini** kazanmak, ölçüm sırasında doğal çalışmalarını sağlamak ve itirazlara karşı sonuçları savunabilmek gerekir. Hatalı bir standart süre ya işçiyi mağdur eder ya da maliyetleri yanlış gösterir.

## Hesap adımları

**1. Gözlenen (ortalama) süre.** Ölçümlerdeki **anormal değerler atılır**, kalanların ortalaması alınır:

$$
\bar t = \frac{\sum t_k}{n}
$$

> Sınavlardaki ölçüm listelerinde her zaman **bir tane bariz hatalı değer** var: 60 yerine 600, 275 yerine 2755, 140 yerine 1480 gibi (muhtemelen kayıt hatası, bir sıfır fazla). Bu değeri atmadan ortalama almak, sonucu tamamen bozar. Çözümde "anormal değer olduğu için hesaba katılmadı" diye mutlaka belirt.

**2. Normal süre (NS).** Gözlenen süre, işçinin temposuna (performans oranına) göre düzeltilir:

$$
\boxed{NS = \bar t \times \text{tempo}}
$$

| Verilen | Tempo (performans) çarpanı | Anlamı |
|---|---|---|
| Normal | 1,00 | Süre değişmez |
| %10 hızlı | 1,10 | Hızlı çalışan işçinin süresi **uzatılır** |
| %25 hızlı | 1,25 | |
| %15 yavaş | 0,85 | Yavaş çalışan işçinin süresi **kısaltılır** |

> **Mantık:** Hızlı çalışan bir işçi işi normalden kısa sürede bitirir; normal bir işçi aynı işi daha uzun sürede yapacağı için süre büyütülür. Yavaş işçide tersi geçerlidir.

**3. Standart süre (SS).** Normal süreye kişisel ihtiyaçlar, yorgunluk ve kaçınılmaz beklemeler için **tolerans** eklenir. Sınav kâğıdındaki el yazısı notta verilen formül:

$$
\boxed{SS = \frac{NS}{1 - \text{tolerans}}}
$$

Bu formülde tolerans, **toplam çalışma süresinin** yüzdesi olarak tanımlanır. Bazı kitaplar toleransı normal sürenin yüzdesi olarak tanımlar ve $SS = NS(1 + \text{tolerans})$ kullanır. Sınavda derste verilen $NS/(1 - t)$ formülünü kullan, hangi formülü kullandığını da yaz.

## Sınav sorusu (Final 2026)

| İşlem | Ölçülen süreler | Tempo | Tolerans |
|---|---|---|---|
| 1 | 28, 32, 34, 30, ~~135~~, 35 | %10 hızlı | %15 |
| 2 | 128, 142, ~~5~~, 134, 136 | %15 yavaş | %20 |
| 3 | 58, 63, 54, 60, 59, ~~600~~ | normal | %18 |

**İşlem 1:** 135 anormal. $\bar t = (28 + 32 + 34 + 30 + 35)/5 = 31{,}8$
$NS = 31{,}8\times1{,}10 = 34{,}98$ → $SS = 34{,}98/0{,}85 = \mathbf{41{,}15}$

**İşlem 2:** 5 anormal. $\bar t = (128 + 142 + 134 + 136)/4 = 135$
$NS = 135\times0{,}85 = 114{,}75$ → $SS = 114{,}75/0{,}80 = \mathbf{143{,}44}$

**İşlem 3:** 600 anormal. $\bar t = (58 + 63 + 54 + 60 + 59)/5 = 58{,}8$
$NS = 58{,}8\times1{,}00 = 58{,}8$ → $SS = 58{,}8/0{,}82 = \mathbf{71{,}71}$

## Sınav sorusu (Büt 2025)

| İşlem | Ölçülen süreler | Tempo | Tolerans |
|---|---|---|---|
| 1 | 278, 272, 275, 280, ~~2755~~ | %15 yavaş | %22 |
| 2 | 122, 119, ~~1938~~, 105, 115 | normal | %25 |
| 3 | 70, 82, 58, ~~580~~, 50 | %25 hızlı | %18 |

| İşlem | $\bar t$ | NS | SS = NS/(1 − t) |
|---|---|---|---|
| 1 | 276,25 | $276{,}25\times0{,}85 = 234{,}81$ | $234{,}81/0{,}78 = $ **301,04** |
| 2 | 115,25 | 115,25 | $115{,}25/0{,}75 = $ **153,67** |
| 3 | 65,00 | $65\times1{,}25 = 81{,}25$ | $81{,}25/0{,}82 = $ **99,09** |

## Gözlem sayısı

Gerekli gözlem sayısı, istenen güven düzeyi ve doğruluğa göre hesaplanır. %95 güven ve ±%5 doğruluk için yaygın kullanılan formül:

$$
N' = \left(\frac{40\sqrt{N\sum t^2 - (\sum t)^2}}{\sum t}\right)^2
$$

$N'$, yapılan gözlem sayısı $N$'den büyükse ek ölçüm yapılmalıdır.

## İş ölçümü teknikleri

- **Kronometreyle zaman etüdü:** En yaygın yöntemdir; sınav soruları bu yönteme dayanır.
- **İş örneklemesi:** Rastgele anlarda yapılan anlık gözlemlerle, zamanın hangi faaliyetlere harcandığı oransal olarak bulunur.
- **Önceden belirlenmiş zaman standartları (MTM, Work Factor):** Temel hareketlerin tablolardaki sürelerinden işin süresi sentezlenir.
- **Standart veriler:** Benzer işlerin daha önce belirlenmiş süreleri kullanılır.
