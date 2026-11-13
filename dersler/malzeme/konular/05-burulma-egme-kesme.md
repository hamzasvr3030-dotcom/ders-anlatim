# Burulma, eğme ve kesme testleri

## Burulma testi

Malzemenin **kayma modülü** $G$ ve **kayma akma gerilmesi** $\tau_A$ gibi özelliklerini belirler. Mil, aks, cıvata, perçin, **matkap ucu** gibi burulmaya çalışan parçalar için önemlidir. Plastik şekil değişimi çalışmalarında ve metallerin **tel çekilebilme** ve **dövülebilme** özelliklerinin belirlenmesinde de kullanılır (takım çelikleri için yüksek sıcaklıkta).

**Deney:** İki ucundan bağlanan numunenin bir ucu sabit tutulur, diğer ucuna burulma momenti $M_b$ uygulanır; moment ve **burulma açısı** $\varphi$ ölçülür.

- **Burulma açısı** $\varphi$: Serbest uçtaki bir noktanın eksene göre döndüğü açı.
- **Kayma açısı** $\gamma$: Yüzeydeki bir lifin eksenle yaptığı açı.

$$
\gamma = \frac{r\,\varphi}{L}, \qquad \tau = \frac{M_b\,r}{I_p}, \qquad I_p = \frac{\pi d^4}{32}
$$

Dolu daire kesitte en büyük kayma gerilmesi yüzeydedir: $\tau_{max} = \dfrac{16M_b}{\pi d^3}$.

**Kayma modülü** (rijitlik modülü), $\tau$–$\gamma$ grafiğinin doğrusal kısmının eğimidir:

$$
\boxed{G = \frac{\tau}{\gamma} = \frac{M_bL}{I_p\,\varphi}}, \qquad G = \frac{E}{2(1+\nu)}
$$

> Burulmada kesit her yerde aynı kalır, boyun verme olmaz; bu yüzden büyük plastik şekil değişimlerini incelemek için çekmeden daha uygundur.

**Kırılma şekli:** Sünek malzemeler en büyük kayma gerilmesinin olduğu **eksene dik** düzlemden; gevrek malzemeler en büyük çekme gerilmesinin olduğu **45°'lik helis** yüzeyden kırılır (tebeşiri burarak kırmayı dene).

## Eğme testi

Kirişe benzer şekilde iki mesnede oturtulan numuneye ortadan (3 noktalı) veya iki noktadan (4 noktalı) yük uygulanır.

**3 noktalı eğmede**, dikdörtgen kesitli ($b\times h$), mesnet açıklığı $L$ olan numune için en büyük eğilme gerilmesi:

$$
\boxed{\sigma_e = \frac{M_e}{W_e} = \frac{3FL}{2bh^2}}
$$

Dairesel kesitte: $\sigma_e = \dfrac{8FL}{\pi d^3}$.

**Örnek:** $F = 1000$ N, $L = 100$ mm, $b = h = 10$ mm → $\sigma_e = \dfrac{3\cdot1000\cdot100}{2\cdot10\cdot100} = 150$ MPa.

**Kullanım:**

- **Gevrek malzemelerin** (seramik, dökme demir, cam, beton) dayanımını ölçmek: çekme numunesi hazırlamak ve bağlamak zordur. Sonuç **eğilme dayanımı (kopma modülü)** olarak verilir.
- **Katlama (bükme) deneyi:** Sünek malzemelerde ve özellikle **kaynak dikişlerinde** şekil değiştirme kabiliyetini kontrol etmek. Numune belirli bir açıya kadar bükülür; dış yüzeyde çatlak oluşup oluşmadığına bakılır.

**Eğme sehimi:** 3 noktalı eğmede $f = \dfrac{FL^3}{48EI}$; buradan elastisite modülü de hesaplanabilir.

## Kesme ve kayma testleri

Malzemenin **kesme (makaslama) dayanımını** belirler. Perçin, pim, cıvata ve kaynak dikişleri gibi kesmeye çalışan bağlantı elemanları için önemlidir.

- **Tek kesmeli:** Numune bir kesitte kesilir, $\tau = F/A$.
- **Çift kesmeli:** Numune iki kesitte kesilir, $\tau = F/(2A)$.

Sünek metallerde kesme dayanımı yaklaşık $\tau_K \approx (0{,}6–0{,}8)\,\sigma_ç$ olarak alınabilir.

**Kayma testi:** Özellikle yapıştırma ve lehim bağlantılarında, kompozitlerde katmanlar arası kayma dayanımını ölçmek için bindirmeli numunelerle yapılır.
