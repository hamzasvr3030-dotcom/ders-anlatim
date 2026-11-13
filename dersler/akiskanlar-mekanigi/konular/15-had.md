# Hesaplamalı akışkanlar dinamiğine (HAD / CFD) giriş

**HAD**, akışın temel diferansiyel denklemlerini (süreklilik, Navier–Stokes, gerekirse enerji) bilgisayarda **sayısal** olarak çözer. Deneyin ve analitik çözümün yetmediği karmaşık geometrilerde kullanılır.

## Temel adımlar

1. **Hesaplama bölgesi** seçilir ve geometri hazırlanır.
2. Bölge küçük hücrelere bölünür: **ağ (mesh / grid).**
3. **Sınır koşulları** atanır.
4. Akışkan, akış tipi (laminer/türbülanslı, sürekli/zamana bağlı), türbülans modeli seçilir.
5. **Başlangıç tahmini** verilir; çözücü yinelemeli olarak çalışır.
6. **Yakınsama** izlenir (artıklar, residuals).
7. Sonuçlar **son işlem** ile incelenir: hız vektörleri, basınç konturları, akım çizgileri, kuvvetler.

## Ağ (mesh)

- **Yapılandırılmış ağ:** Dörtgen/altı yüzlü düzenli hücreler; basit geometrilerde verimlidir.
- **Yapılandırılmamış ağ:** Üçgen/dörtyüzlü hücreler; karmaşık geometrilere kolayca uyar.
- **Hibrit ağ:** Duvar yakınında ince prizma katmanları (sınır tabakayı çözmek için), içeride yapılandırılmamış hücreler.

**Ağ kalitesi:** Hücre çarpıklığı (skewness) düşük olmalı, komşu hücre boyutları ani değişmemelidir.

> **Ağdan bağımsızlık (grid independence):** Ağ sıklaştırıldığında sonuç (örneğin sürükleme katsayısı) artık değişmiyorsa çözüm ağdan bağımsızdır. Bu kontrol yapılmadan CFD sonucuna güvenilmez.

## Sınır koşulları

| Koşul | Kullanım |
|---|---|
| **Duvar** | Kaymama şartı (hız = duvar hızı) |
| **Hız girişi** | Girişte hız profili verilir |
| **Basınç girişi / çıkışı** | Basınç değeri verilir |
| **Simetri** | Simetri düzleminde normal hız ve gradyenler sıfır |
| **Periyodik** | Tekrarlayan geometrilerde bir yüzeyden çıkan akış diğerinden girer |
| **Uzak alan** | Cismin çok uzağındaki serbest akış |

## Türbülans modelleme

Türbülanslı akışta bütün girdap ölçeklerini çözmek (**DNS**) çok pahalıdır. Pratikte:

- **RANS modelleri:** Zaman ortalamalı denklemler + türbülans modeli. En yaygın olanlar **k-ε** ve **k-ω (SST).**
- **LES:** Büyük girdaplar çözülür, küçükler modellenir.

**Duvar fonksiyonları ve $y^+$:** Duvara en yakın hücrenin boyutsuz uzaklığı $y^+$, seçilen duvar yaklaşımına uygun olmalıdır (duvar fonksiyonuyla ~30–300, sınır tabakayı tam çözerken ~1).

## Hatalar ve doğrulama

- **Ayrıklaştırma hatası:** Ağ yeterince sık değil.
- **Yakınsama hatası:** Yineleme erken durduruldu.
- **Modelleme hatası:** Yanlış türbülans modeli veya sınır koşulu.
- **Doğrulama (verification):** Denklemler doğru çözülüyor mu?
- **Geçerleme (validation):** Doğru denklemler çözülüyor mu? Deney sonuçlarıyla karşılaştırılır.

> CFD bir "renkli resim üretme" aracı değildir. Sonuç, ancak ağ, sınır koşulları ve model seçimi kadar güvenilirdir.
