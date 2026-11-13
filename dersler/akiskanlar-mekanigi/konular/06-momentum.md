# Akış sistemlerinin momentum analizi

## Newton yasaları ve kontrol hacmi

Reynolds taşınım teoreminde $B = m\vec V$ alınırsa:

$$
\sum\vec F = \frac{d}{dt}\int_{KH}\rho\vec V\,dV + \int_{KY}\rho\vec V(\vec V_r\cdot\vec n)\,dA
$$

**Sürekli akış, tek boyutlu giriş-çıkışlar:**

$$
\boxed{\sum\vec F = \sum_{ç}\beta\,\dot m\,\vec V - \sum_{g}\beta\,\dot m\,\vec V}
$$

$\beta$: momentum akısı düzeltme katsayısı (laminer boru akışında 4/3, türbülanslıda ≈ 1,03; çoğu problemde 1 alınır).

## Kontrol hacmine etkiyen kuvvetler

- **Kütle kuvvetleri:** yerçekimi $\int\rho\vec g\,dV$
- **Yüzey kuvvetleri:** basınç ve viskoz kuvvetler, mesnet/bağlantı tepkileri

> **İpucu:** Atmosfere açık bütün yüzeylerde etkin basınç kullanırsan atmosfer basıncı otomatik olarak düşer; çünkü düzgün bir basınç kapalı bir yüzeye net kuvvet uygulamaz.

## Tipik problemler

**Sabit plakaya çarpan jet.** Yatay jet düşey plakaya çarpıp yanlara dağılıyor:

$$
F = \dot m V = \rho A V^2
$$

Ø5 cm, 20 m/s su jeti: $\dot m = 1000\cdot(\pi\cdot0{,}05^2/4)\cdot20 = 39{,}3$ kg/s, $F = 39{,}3\cdot20 = 785$ N.

**Hareketli plaka / kanat** ($u$ hızıyla jetten uzaklaşıyor): bağıl hız $V - u$ kullanılır. Tek kanatta $F = \rho A(V - u)^2$.

**Dirsek (redüksiyonlu dirsek).** Kontrol hacmi dirseği kapsar. $x$ ve $y$ yönlerinde ayrı yazılır:

$$
F_{Rx} + P_{1,etkin}A_1 - P_{2,etkin}A_2\cos\theta = \beta\dot m(V_2\cos\theta - V_1)
$$

$$
F_{Rz} - P_{2,etkin}A_2\sin\theta - W = \beta\dot m V_2\sin\theta
$$

$F_R$: dirseği yerinde tutmak için cıvatalara etkiyen kuvvet.

**İtki (jet motoru, roket).** Sabit uçak koordinatlarında: $F_{itki} = \dot m(V_{çıkış} - V_{giriş})$.

**Rüzgar türbini (Betz sınırı).** İdeal bir rüzgar türbininin rüzgârın kinetik enerjisinden alabileceği en yüksek oran:

$$
\eta_{max} = \frac{16}{27} \approx 0{,}593
$$

## Açısal momentum denklemi

$$
\sum\vec M = \sum_{ç}\vec r\times\dot m\vec V - \sum_{g}\vec r\times\dot m\vec V
$$

Tek eksen etrafında dönen makinelerde (pompa, türbin, çim fıskiyesi):

$$
\boxed{T_{mil} = \dot m\,(r_2V_{t,2} - r_1V_{t,1})}, \qquad \dot W_{mil} = \omega\,T_{mil}
$$

$V_t$: hızın teğetsel bileşeni. Bu, turbomakinelerin temelindeki **Euler türbin denklemidir** (Bölüm 14).

> **Çim fıskiyesi:** Su nozullardan teğetsel olarak çıkınca fıskiyeye tepki momenti uygular ve onu döndürür. Sürtünme yoksa fıskiye, mutlak teğetsel çıkış hızını sıfır yapacak hıza kadar hızlanır.
