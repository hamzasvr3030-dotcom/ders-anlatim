# Isı kaybı hesabı (kalorifer projesi)

Kalorifer projesinde her ısıtılan hacmin ısı kaybı ayrı ayrı hesaplanır ve **ısı kaybı cetveline** yazılır (TS 2164). Bu değerler ısıtıcı seçiminin, boru ve kazan boyutlandırmasının temelidir.

## Tasarım sıcaklıkları

- **İç hacim sıcaklıkları** (tablolardan): oturma odası, yatak odası 20 °C; banyo 24 °C; merdiven, hol gibi hacimler daha düşük.
- **Dış tasarım sıcaklığı**, şehre göre tablodan alınır (örneğin Diyarbakır −9 °C).

## İletim ısı kaybı

Her yapı bileşeni (dış duvar, pencere, kapı, tavan, döşeme, ısıtılmayan komşu hacme bakan iç duvar) için:

$$
\boxed{Q_0 = \sum A\,U\,\Delta T}
$$

$\Delta T$: iç sıcaklık ile o bileşenin öbür tarafındaki sıcaklık farkı (dış hava, toprak veya komşu hacim). Kendisi de 20 °C olan komşu bir odaya bakan duvarda $\Delta T = 0$, kayıp yoktur.

**Isı kaybı cetvelindeki sütunlar (özetle):** bileşen işareti, yönü, kalınlığı, uzunluk × yükseklik, brüt alan, çıkarılan alan (pencere, kapı), net alan, U, ΔT, ısı kaybı.

**Bileşen kısaltmaları:** DD dış duvar, İD iç duvar, ÇCP çift camlı pencere, DK dış kapı, İK iç kapı, BK balkon kapısı, Ta tavan, Dö döşeme, Ko kolon, Ki kiriş, BP beton perde.

## Artırımlar (zamlar)

İletim kaybı aşağıdaki artırımlarla düzeltilir:

$$
Q_T = Q_0\,(1 + Z_D + Z_W + Z_H)
$$

**$Z_D$ – birleşik (işletme) artırımı:** Isıtma sisteminin çalışma biçimine ve $D = \dfrac{Q_0}{A_{top}(T_i - T_d)}$ katsayısına göre tablodan seçilir.

| İşletme durumu | Açıklama |
|---|---|
| **1. işletme** | Sürekli çalışma, geceleri ateş azaltılır (konut, hastane) |
| **2. işletme** | Kazan her gün ≈ 10 saat söner (okul, kamu binası) |
| **3. işletme** | Kazan her gün 14 saat veya daha uzun söner (spor salonu, az kullanılan yerler) |

Kazan ne kadar uzun sönük kalırsa, binayı yeniden ısıtmak için daha fazla güç gerekir; artırım büyür.

**$Z_W$ – kat yüksekliği artırımı:** Yükseklik arttıkça rüzgâr hızı ve sızıntı artar; bina kat sayısına ve hacmin bulunduğu kata göre tablodan alınır.

**$Z_H$ – yön artırımı:** Güneş alan cephelerde azaltma, soğuk cephelerde artırma. Tek dış duvarı olan hacimde o duvarın yönü, iki dış duvarlı hacimde **köşenin** yönü alınır.

| Yön | G | GB | B | KB | K | KD | D | GD |
|---|---|---|---|---|---|---|---|---|
| $Z_H$ (%) | −5 | −5 | 0 | +5 | +5 | +5 | 0 | −5 |

## Sızıntı (enfiltrasyon) ısı kaybı

Pencere ve kapı aralıklarından sızan soğuk havayı ısıtmak için:

$$
\boxed{Q_s = \frac{1}{3{,}6}\sum(a\,l)\,R\,H\,\Delta T\,Z_e}\ [\text{W}]
$$

- $a$: doğramanın hava sızdırganlık katsayısı (m³/m·h; tablodan)
- $l$: pencere/kapının **açılan** kısımlarının çevre uzunluğu (m). Doğrama belli değilse tablodan yaklaşık değer alınır.
- $R$: oda durum katsayısı (iç kapıların geçirgenliğine bağlı; ör. 0,9)
- $H$: bina durum katsayısı (rüzgâr bölgesi ve binanın konumuna göre)
- $Z_e$: köşe artırımı. **Her iki dış duvarında da pencere veya kapı** bulunan köşe hacimlerde $Z_e = 1{,}2$, diğerlerinde 1.

## Toplam ısı kaybı

$$
Q = Q_T + Q_s
$$

- Bu hesap bütün ısıtılan hacimler için tekrarlanır.
- **Isıtılmayan hacimlerin** (merdiven boşluğu, hol, antre) kayıpları hesaplanıp komşu ısıtılan hacimlere eklenir veya ayrı değerlendirilir.
- Bütün yapının ısı kaybı cetveli doldurulur; toplam, kazan kapasitesinin temelidir:

$$
Q_K = Q_h\,(1 + Z_R)
$$

## Projenin akışı

1. Mimari plan ve kesitlerden hacimlerin ölçüleri, yapı bileşenleri ve yönleri çıkarılır.
2. Yapı bileşenlerinin U değerleri hesaplanır (TS 825 ile uyumlu).
3. Her hacim için ısı kaybı cetveli doldurulur.
4. **Isıtıcılar seçilir** (radyatör dilim sayısı / panel boyu).
5. **Kolon şeması** çizilir (düşey kolonlar, radyatör bağlantıları, kat geçişleri); klasördeki *Kemaliye A ve B Blok kolon şeması* buna bir örnektir.
6. **Boru çapları** ve basınç kayıpları hesaplanır; en elverişsiz devreye göre **pompa** seçilir.
7. **Kazan, brülör, genleşme deposu, baca ve yakıt deposu** boyutlandırılır.
