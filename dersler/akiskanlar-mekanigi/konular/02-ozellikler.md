# Akışkanların özellikleri

## Sürekli ortam yaklaşımı

Madde moleküllerden oluşur, ama moleküller arası mesafe ilgilendiğimiz boyutlardan çok küçükse akışkan **sürekli** kabul edilir: özellikler noktadan noktaya sürekli değişir. (Çok seyreltik gazlarda, örneğin uzay boşluğunda, geçersizdir.)

## Yoğunluk

$$
\rho = \frac{m}{V}, \qquad v = \frac{1}{\rho}, \qquad SG = \frac{\rho}{\rho_{su}}, \qquad \gamma_s = \rho g
$$

İdeal gaz: $P = \rho R T$. Sıvıların yoğunluğu basınçla çok az değişir; sıkıştırılamaz kabul edilir.

## Buhar basıncı ve kavitasyon

Saf bir maddenin belirli bir sıcaklıkta faz değiştirdiği basınç **doyma (buhar) basıncıdır** $P_v$. Su için 20 °C'de $P_v \approx 2{,}34$ kPa.

> **Kavitasyon:** Akışta yerel basınç buhar basıncının altına düşerse sıvı içinde buhar kabarcıkları oluşur. Kabarcıklar yüksek basınç bölgesine geçince çöker; bu, gürültü, titreşim, verim düşüşü ve pompa çarklarında **aşınmaya** yol açar.

## Enerji ve özgül ısılar

Akan akışkanın toplam enerjisi: $\theta = h + V^2/2 + gz$, burada $h = u + P/\rho$. Sıkıştırılamaz madde için $c_p = c_v = c$.

## Sıkıştırılabilirlik

**Hacimsel elastisite modülü (sıkıştırılabilirlik katsayısı):**

$$
\kappa = -v\left(\frac{\partial P}{\partial v}\right)_T = \rho\left(\frac{\partial P}{\partial\rho}\right)_T \approx \frac{\Delta P}{\Delta\rho/\rho}
$$

Su için $\kappa \approx 2{,}1\times10^9$ Pa: yoğunluğu %1 artırmak için ~210 atm gerekir. İdeal gazda (izotermal) $\kappa = P$.

**Hacimsel genleşme katsayısı:** $\beta = -\dfrac{1}{\rho}\left(\dfrac{\partial\rho}{\partial T}\right)_P$. İdeal gazda $\beta = 1/T$. Doğal taşınımın sebebi sıcaklıkla yoğunluğun değişmesidir.

**Ses hızı:**

$$
c = \sqrt{\left(\frac{\partial P}{\partial\rho}\right)_s}, \qquad \text{ideal gaz: } c = \sqrt{kRT}
$$

300 K havada: $c = \sqrt{1{,}4\cdot287\cdot300} = 347$ m/s.

## Viskozite

Akışkanın akmaya karşı iç direncidir. **Newton tipi akışkanlarda** kayma gerilmesi, şekil değiştirme hızıyla (hız gradyeniyle) doğru orantılıdır:

$$
\boxed{\tau = \mu\,\frac{du}{dy}}
$$

- $\mu$: **dinamik viskozite** (Pa·s = kg/m·s)
- $\nu = \mu/\rho$: **kinematik viskozite** (m²/s)
- Su (20 °C): $\mu \approx 1{,}0\times10^{-3}$ Pa·s, $\nu \approx 1{,}0\times10^{-6}$ m²/s

> Sıcaklık artınca **sıvıların** viskozitesi **azalır** (moleküller arası çekim zayıflar), **gazların** viskozitesi **artar** (moleküler çarpışmalar artar).

**Newton tipi olmayan akışkanlar:** kan, boya, diş macunu, ketçap gibi. Kayma gerilmesi ile şekil değiştirme hızı doğrusal değildir.

### Örnek – İki levha arasındaki yağ

$\mu = 0{,}8$ Pa·s yağ, alt levha sabit, üst levha $V = 0{,}5$ m/s ile hareket ediyor; aralık $h = 2$ mm, levha alanı $A = 0{,}3$ m². Hız profili doğrusal ($du/dy = V/h$):

$$
F = \tau A = \mu\frac{V}{h}A = 0{,}8\cdot\frac{0{,}5}{0{,}002}\cdot0{,}3 = 60\ \text{N}
$$

## Yüzey gerilmesi ve kılcallık

Sıvı yüzeyindeki moleküller içe doğru çekilir; yüzey gergin bir zar gibi davranır. **Yüzey gerilmesi** $\sigma_s$ (N/m): su-hava için 20 °C'de 0,073 N/m.

**Damla veya kabarcık içindeki basınç farkı:**

$$
\Delta P_{damla} = \frac{2\sigma_s}{R}, \qquad \Delta P_{sabun\ köpüğü} = \frac{4\sigma_s}{R}
$$

**Kılcal yükselme** (temas açısı $\phi$, tüp yarıçapı $R$):

$$
\boxed{h = \frac{2\sigma_s\cos\phi}{\rho g R}}
$$

Su–cam için $\phi \approx 0°$ (ıslatan, yükselir); cıva–cam için $\phi \approx 130°$ (ıslatmayan, alçalır).

**Örnek:** 0,6 mm çaplı cam tüpte su: $h = \dfrac{2\cdot0{,}073}{1000\cdot9{,}81\cdot0{,}0003} = 0{,}050$ m ≈ **5 cm**.
