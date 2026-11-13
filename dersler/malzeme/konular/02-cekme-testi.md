# Çekme testi

Malzemenin statik yük altındaki **elastik ve plastik davranışını** belirler. Standart numune tek eksende, sabit hızla, kopana kadar çekilir; her yük değerinde uzama ölçülür.

- **Elastik şekil değişimi:** Yük kalkınca numune ilk boyutlarına döner.
- **Plastik (kalıcı) şekil değişimi:** Yük kalkınca ilk boyutlara dönmez.

Numuneler silindirik veya dikdörtgen (lama) kesitli olur. Çekme cihazı, numunenin bağlandığı iki çene ile bunları hareket ettiren kirişlerden oluşur; modern cihazlar bilgisayar kontrollüdür ve kuvvet–uzama eğrisini kaydeder.

> Deney hızı ve sıcaklık arttıkça ölçülen mukavemet değişir. Bu yüzden deney standartta belirtilen hız ve sıcaklıkta yapılmalıdır.

## Mühendislik gerilmesi ve gerinimi

$$
\boxed{\sigma = \frac{F}{A_0}}, \qquad \boxed{\varepsilon = \frac{\Delta L}{L_0} = \frac{L - L_0}{L_0}}, \qquad \%\text{uzama} = \varepsilon\times100
$$

$A_0$: ilk kesit alanı, $L_0$: ilk ölçü boyu.

### Örnek 1

1,25 cm çaplı çubuğa 2500 kg'lık yük asılıyor:

$$
F = 2500\cdot9{,}81 = 24\,525\ \text{N}, \quad A_0 = \frac{\pi\cdot0{,}0125^2}{4} = 1{,}227\times10^{-4}\ \text{m}^2, \quad \sigma = 2{,}0\times10^8\ \text{Pa} = 200\ \text{MPa}
$$

### Örnek 2

Alüminyum numunede ölçü işaretleri 50 mm aralıklı; çekmeden sonra 67 mm:

$$
\varepsilon = \frac{67 - 50}{50} = 0{,}34, \qquad \%\text{uzama} = \%34
$$

## Gerilme–gerinim diyagramı

| Bölge / nokta | Açıklama |
|---|---|
| **Elastik bölge** | Doğrusal; Hooke yasası $\sigma = E\varepsilon$ geçerli |
| **Orantı sınırı** | Doğrusallığın bittiği nokta |
| **Akma dayanımı** $\sigma_{ak}$ | Plastik şekil değişiminin başladığı gerilme |
| **Pekleşme bölgesi** | Plastik şekil değişimiyle malzeme sertleşir, gerilme artar |
| **Çekme dayanımı** $\sigma_{ç}$ (UTS) | Diyagramın en yüksek noktası; burada **boyun verme** başlar |
| **Kopma** | Numune kırılır |

**Elastisite modülü** (Young modülü), elastik bölgenin eğimidir: $E = \sigma/\varepsilon$. Malzemenin **rijitliğini** gösterir. Çelik ≈ 200–210 GPa, alüminyum ≈ 70 GPa.

### Belirgin akma göstermeyen malzemeler

Alüminyum, bakır gibi malzemelerde akma noktası belirgin değildir. Akma dayanımı **%0,2 kalıcı uzama (offset) yöntemiyle** bulunur: gerinim ekseninde 0,002'den elastik doğruya paralel bir doğru çizilir; eğriyi kestiği nokta $\sigma_{0,2}$'dir.

**Belirgin akma** gösteren düşük karbonlu çeliklerde **üst ve alt akma noktaları** görülür.

## Süneklik ölçüleri

$$
\%\text{Uzama} = \frac{L_k - L_0}{L_0}\times100, \qquad \%\text{Kesit daralması} = \frac{A_0 - A_k}{A_0}\times100
$$

$L_k$, $A_k$: kopmadan sonraki ölçü boyu ve en dar kesit alanı.

## Sünek ve gevrek davranış

| | Sünek | Gevrek |
|---|---|---|
| Plastik şekil değişimi | Büyük | Çok az veya yok |
| Boyun verme | Var | Yok |
| Kırılma yüzeyi | **Kap-koni** biçimli, lifli, mat | Düz, parlak, kristalin |
| Örnek | Yapı çeliği, alüminyum, bakır | Dökme demir, cam, seramik |

## Mühendislik ve gerçek gerilme

Mühendislik gerilmesi hep **ilk alan** $A_0$ ile hesaplanır. Oysa numune çekildikçe incelir, özellikle boyun vermeden sonra kesit hızla küçülür. **Gerçek gerilme** anlık alanla hesaplanır:

$$
\sigma_g = \frac{F}{A_i} = \sigma(1 + \varepsilon), \qquad \varepsilon_g = \ln\frac{L_i}{L_0} = \ln(1 + \varepsilon)
$$

(Bu bağıntılar boyun vermenin başlangıcına kadar geçerlidir.) Mühendislik eğrisi boyun vermeden sonra düşerken, gerçek gerilme eğrisi **kopmaya kadar yükselir**, çünkü malzeme aslında pekleşmeye devam eder.

## Diğer büyüklükler

- **Rezilyans:** Elastik bölgede birim hacimde depolanan enerji, $U_r = \dfrac{\sigma_{ak}^2}{2E}$ (elastik bölgenin altındaki alan).
- **Tokluk (statik):** Kopmaya kadar birim hacimde yutulan enerji; diyagramın altındaki **toplam alan.**
