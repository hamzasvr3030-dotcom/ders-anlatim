# Proje programlama: CPM ve PERT

## Ağ diyagramları

Bir projenin faaliyetlerini, aralarındaki **öncelik ilişkilerini** ve sürelerini gösteren şemalardır. Projenin en erken ne zaman biteceği, hangi faaliyetlerin geciktirilemeyeceği ve kaynakların nasıl planlanacağı bu şemalarla belirlenir.

- **CPM (Kritik Yol Yöntemi):** Faaliyet süreleri **kesin** kabul edilir; normal ve hızlandırılmış (sıkışık) süre ile maliyet ilişkisi kurulur.
- **PERT (Program Değerlendirme ve Gözden Geçirme Tekniği):** Süreler **belirsizdir**; her faaliyet için üç tahmin yapılır.

İki yöntemin uygulama biçimi aynıdır.

### Gösterim

- **Okla gösterim (AOA):** Faaliyetler oklar, olaylar düğümlerdir. Bazen süresi sıfır olan **hayali (kukla) faaliyetler** gerekir.
- **Düğümle gösterim (AON):** Faaliyetler düğümlerdir, oklar öncelikleri gösterir.

## Zaman hesabı

**İleri geçiş** (başlangıçtan sona doğru):

$$
EB_j = \max_{i \to j}(ES_i), \qquad ES_j = EB_j + t_j
$$

**Geri geçiş** (sondan başlangıca doğru, proje süresi $T$'den):

$$
GS_j = \min_{j \to k}(GB_k), \qquad GB_j = GS_j - t_j
$$

$EB$: en erken başlama, $ES$: en erken sona erme, $GB$: en geç başlama, $GS$: en geç sona erme.

**Bolluk (serbest zaman):**

$$
\boxed{TB = GB - EB = GS - ES}
$$

**Kritik yol:** Bolluğu **sıfır** olan faaliyetlerin oluşturduğu, başlangıçtan sona en uzun yoldur. Kritik faaliyetlerdeki her gecikme projeyi aynı miktarda geciktirir.

> **Örnek:**
>
> | Faaliyet | Öncül | Süre (gün) | EB | ES | GB | GS | Bolluk |
> |---|---|---|---|---|---|---|---|
> | A | — | 3 | 0 | 3 | 0 | 3 | **0** |
> | B | — | 2 | 0 | 2 | 5 | 7 | 5 |
> | C | A | 4 | 3 | 7 | 3 | 7 | **0** |
> | D | A | 3 | 3 | 6 | 6 | 9 | 3 |
> | E | B, C | 5 | 7 | 12 | 7 | 12 | **0** |
> | F | D | 3 | 6 | 9 | 9 | 12 | 3 |
>
> Proje süresi 12 gün; **kritik yol A–C–E**. B 5 gün, D ve F 3'er gün geciktirilebilir. (D ile F aynı yol üzerinde olduğu için bu 3 günlük bolluğu paylaşırlar.)

## PERT: üç zaman tahmini

$a$: iyimser, $m$: en olası, $b$: kötümser süre.

$$
\boxed{t_e = \frac{a + 4m + b}{6}}, \qquad \sigma^2 = \left(\frac{b - a}{6}\right)^2
$$

Proje süresi, kritik yoldaki $t_e$ değerlerinin toplamıdır. Proje varyansı, kritik yoldaki varyansların toplamıdır. Projenin $T$ sürede bitme olasılığı normal dağılımla hesaplanır:

$$
z = \frac{T - \sum t_e}{\sqrt{\sum\sigma^2}}
$$

> **Örnek:** $a = 2$, $m = 5$, $b = 14$ gün → $t_e = (2 + 20 + 14)/6 = 6$ gün, $\sigma = 12/6 = 2$ gün.

## CPM: zaman–maliyet dengesi (sıkıştırma)

Bir faaliyet ek kaynakla (fazla mesai, ek ekipman) hızlandırılabilir. Bir günlük sıkıştırmanın maliyeti:

$$
\text{Sıkıştırma maliyeti} = \frac{M_{hızlı} - M_{normal}}{t_{normal} - t_{hızlı}}
$$

Proje kısaltılırken **yalnızca kritik yoldaki** ve günlük sıkıştırma maliyeti **en düşük** olan faaliyet kısaltılır. Her adımda kritik yol yeniden kontrol edilir, çünkü yeni kritik yollar oluşabilir. Toplam maliyet = doğrudan maliyetler + dolaylı (genel) giderler; toplamın en küçük olduğu süre **optimum proje süresidir**.

## Ağ diyagramlarının yararları

1. Faaliyetler arası ilişkiler açıkça görülür; gecikmeler önceden fark edilir.
2. Kritik faaliyetlere yönetim dikkati yoğunlaştırılır.
3. Kaynaklar (işçi, makine) bolluklu faaliyetlerden kaydırılarak dengelenir.
4. Proje süresi ve maliyeti arasında bilinçli seçim yapılır.
5. Uygulama sırasında ilerleme planla karşılaştırılarak denetlenir.
