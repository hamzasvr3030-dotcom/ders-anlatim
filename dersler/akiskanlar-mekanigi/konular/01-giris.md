# Giriş ve temel kavramlar

**Akışkanlar mekaniği**, durgun veya hareketli akışkanların davranışını ve akışkanların katı cisimlerle ya da başka akışkanlarla etkileşimini inceler.

## Akışkan nedir?

Katı, uygulanan **kayma gerilmesine** belirli bir şekil değiştirmeyle direnir ve dengeye gelir. **Akışkan** ise ne kadar küçük olursa olsun bir kayma gerilmesi altında **sürekli şekil değiştirir (akar).**

$$
\text{Basınç} = \frac{\text{normal kuvvet}}{\text{alan}}, \qquad \text{Kayma gerilmesi } \tau = \frac{\text{teğetsel kuvvet}}{\text{alan}}
$$

Durgun bir akışkanda kayma gerilmesi **sıfırdır**; yalnızca basınç (normal gerilme) vardır.

## Kaymama şartı

Bir katı yüzeyle temas eden akışkan yüzeye "yapışır": yüzeydeki akışkan hızı **yüzeyin hızına eşittir.** Bu şart, yüzey yakınında hızın sıfırdan serbest akış değerine çıktığı ince bir bölge, **sınır tabakayı** doğurur. Viskozitenin etkisi en çok bu bölgede hissedilir.

## Akışların sınıflandırılması

| Karşıtlık | Açıklama |
|---|---|
| **Viskoz / viskoz olmayan** | Sürtünme etkileri önemli mi? Sınır tabaka dışında çoğu zaman ihmal edilebilir. |
| **İç / dış / açık kanal** | Boru içi akış; bir cismin etrafındaki akış; serbest yüzeyli akış |
| **Sıkıştırılamaz / sıkıştırılabilir** | Yoğunluk sabit mi? Gazlarda $Ma < 0{,}3$ ise sıkıştırılamaz kabul edilir. |
| **Laminer / türbülanslı** | Düzenli katmanlı akış ile düzensiz, karışık akış |
| **Doğal / zorlanmış** | Yoğunluk farkıyla (kaldırma) ya da pompa/fanla hareket |
| **Sürekli / zamana bağlı** | Bir noktadaki özellikler zamanla değişiyor mu? |
| **1-, 2-, 3-boyutlu** | Hızın kaç koordinata bağlı olduğu |

**Mach sayısı:** $Ma = V/c$. Ses altı ($Ma < 1$), sonik ($= 1$), ses üstü ($> 1$), hipersonik ($\gg 1$).

## Sistem ve kontrol hacmi

- **Sistem (kapalı sistem):** Sabit bir kütle; sınırdan kütle geçmez.
- **Kontrol hacmi (açık sistem):** Uzayda seçilen bir bölge; sınırından (kontrol yüzeyi) kütle geçer. Akışkanlar mekaniğinde çoğunlukla kontrol hacmi kullanılır.

## Boyutlar, birimler ve problem çözme

- Birincil boyutlar: kütle $m$, uzunluk $L$, zaman $t$, sıcaklık $T$, (elektrik akımı, ışık şiddeti, madde miktarı).
- $1\ \text{N} = 1\ \text{kg·m/s}^2$, $\;W = mg$.
- **Boyutsal homojenlik:** Bir denklemdeki bütün terimler aynı boyutta olmalıdır.

**Mühendislik problemi çözme adımları:** Problemi tanımla → şema çiz → kabulleri yaz → fizik yasalarını uygula → özellikleri bul → hesapla → sonucu sorgula.

> **Doğruluk ve hassasiyet:** Sonucu, verilerdeki en az anlamlı basamak sayısıyla ver. Üç anlamlı basamaklı verilerden yedi basamaklı sonuç yazmak yanıltıcıdır.
