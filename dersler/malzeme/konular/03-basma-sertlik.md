# Basma testi ve sertlik testleri

## Basma testi

Çekme deneyinin tersidir: standart numune sabit sıcaklıkta, tek eksende, belirli hızla, malzeme yük taşıyamaz hâle gelene kadar **bastırılır.** Basma dayanımı, en büyük basma gerilmesidir. Çekme cihazlarıyla basma deneyi de yapılabilir.

**Neden önemli?**

- Taş, tuğla, beton, **dökme demir** gibi gevrek malzemelerin **çekme dayanımı düşük, basma dayanımı yüksektir**; bu malzemeler basma yükü taşıyacak şekilde kullanılır.
- Gevrek malzemelerin çekmede uzaması ve kesit daralması neredeyse sıfır olduğundan, **sünekliklerini** ölçmek için basma deneyi daha uygundur.
- Çok küçük numunelerle yapılabilir: pahalı veya az bulunan malzemelerde avantajlıdır.
- Yatak metalleri gibi basmaya çalışan malzemeler için gereklidir.

**Fıçılaşma:** Sünek malzemelerin basma deneyinde, numune uçlarıyla basma plakaları arasındaki sürtünme nedeniyle numune ortadan şişer (fıçı şeklini alır). Sünek malzemeler basmada genellikle kırılmaz, yassılaşır; gevrek malzemeler eksenle yaklaşık **45°** açı yapan düzlemden kayarak kırılır.

> Numune boyu/çap oranı önemlidir: çok uzun numune **burkulur**, çok kısa numunede sürtünme etkisi baskın olur. Genellikle $h/d \approx 1{,}5–3$ alınır.

## Sertlik

**Sertlik**, malzemenin kendisine batırılmaya çalışılan daha sert bir cisme karşı gösterdiği **dirençtir** (kalıcı ize karşı direnç). Hızlı, ucuz ve neredeyse tahribatsızdır (yüzeyde küçük bir iz kalır). Sertlik ile çekme dayanımı arasında yaklaşık bir ilişki vardır: çelikler için $\sigma_ç\,[\text{MPa}] \approx 3{,}45\cdot HB$.

### Brinell sertliği (HB)

Sertleştirilmiş çelik veya sert metal **bilye** ($D$, genellikle 10 mm) belirli bir kuvvetle ($F$, örneğin 3000 kgf) yüzeye bastırılır; oluşan izin çapı $d$ ölçülür.

$$
\boxed{HB = \frac{2F}{\pi D\left(D - \sqrt{D^2 - d^2}\right)}}\quad (F:\ \text{kgf},\ D, d:\ \text{mm})
$$

**Örnek:** $F = 3000$ kgf, $D = 10$ mm, $d = 4{,}0$ mm → $HB \approx 229$.

Büyük iz bıraktığı için **heterojen malzemelerde** (dökme demir) ortalama değer verir; çok sert ve ince parçalara uygun değildir.

### Vickers sertliği (HV)

Tepe açısı **136°** olan **kare tabanlı elmas piramit** batırılır; izin köşegen ortalaması $d$ ölçülür.

$$
\boxed{HV = \frac{1{,}8544\,F}{d^2}}\quad (F:\ \text{kgf},\ d:\ \text{mm})
$$

**Örnek:** $F = 30$ kgf, $d = 0{,}4$ mm → $HV \approx 348$.

Çok yumuşaktan çok serte kadar **bütün malzemelerde** kullanılabilir; küçük yüklerle **mikrosertlik** ölçümü (ince kaplamalar, tek tek fazlar) yapılabilir.

### Rockwell sertliği (HR)

Ölçüm **iz derinliğine** dayanır ve sonuç doğrudan cihazdan okunur (hızlı, endüstride yaygın).

1. Küçük bir **ön yük** (10 kgf) uygulanır, sıfır noktası alınır.
2. **Ana yük** eklenir, sonra kaldırılır.
3. Ön yük altında kalan **kalıcı derinlik** farkı sertlik değerine dönüştürülür.

| Ölçek | Batıcı uç | Toplam yük | Kullanım |
|---|---|---|---|
| **HRC** | 120° elmas koni | 150 kgf | Sertleştirilmiş çelikler |
| **HRB** | 1/16" çelik bilye | 100 kgf | Yumuşak çelik, pirinç, alüminyum |
| **HRA** | 120° elmas koni | 60 kgf | Sert metaller, ince sertleştirilmiş tabakalar |

### Diğer sertlik yöntemleri

- **Shore (geri sıçrama / durometre):** Elastomer ve plastikler için; ya da düşürülen çekicin geri sıçrama yüksekliği.
- **Mohs:** Mineralleri birbirini çizme yeteneğine göre 1 (talk) – 10 (elmas) arası sıralar.

> **Ölçüm kuralları:** Yüzey temiz ve düz olmalı; numune kalınlığı iz derinliğinin en az ~10 katı olmalı; izler birbirine ve kenara çok yakın yapılmamalıdır.
