# Kütle, Bernoulli ve enerji denklemleri

## Kütlenin korunumu

$$
\frac{d}{dt}\int_{KH}\rho\,dV + \int_{KY}\rho(\vec V\cdot\vec n)\,dA = 0
$$

**Sürekli akış:** $\sum\dot m_g = \sum\dot m_ç$, $\;\dot m = \rho V_{ort}A$.
**Sıkıştırılamaz:** $\sum\dot V_g = \sum\dot V_ç$, tek akışta $V_1A_1 = V_2A_2$.

> Bahçe hortumunun ucunu sıkıştırınca suyun hızlanmasının sebebi budur: alan küçülür, hız artar.

## Mekanik enerji ve verim

Akan akışkanın birim kütle başına mekanik enerjisi $e_{mek} = P/\rho + V^2/2 + gz$.

$$
\eta_{pompa} = \frac{\Delta\dot E_{mek,akışkan}}{\dot W_{mil,g}} = \frac{\rho g\dot V h_{pompa,u}}{\dot W_{mil}}, \qquad \eta_{türbin} = \frac{\dot W_{mil,ç}}{\lvert\Delta\dot E_{mek,akışkan}\rvert}
$$

## Bernoulli denklemi

Bir **akım çizgisi** boyunca, **sürekli**, **sıkıştırılamaz**, **sürtünmesiz** akışta, mil işi ve ısı geçişi yoksa:

$$
\boxed{\frac{P}{\rho} + \frac{V^2}{2} + gz = \text{sabit}} \qquad\text{veya}\qquad \frac{P}{\rho g} + \frac{V^2}{2g} + z = H
$$

| Terim | Basınç cinsinden | Yük (m) cinsinden |
|---|---|---|
| Statik | $P$ | $P/\rho g$ (basınç yükü) |
| Dinamik | $\rho V^2/2$ | $V^2/2g$ (hız yükü) |
| Hidrostatik | $\rho g z$ | $z$ (yükseklik yükü) |

**Durma basıncı:** $P_0 = P + \tfrac12\rho V^2$.

> **Bernoulli'yi ne zaman kullanma:** Sürtünmenin önemli olduğu uzun borular ve dar geçitler, pompa/türbin/fan bulunan kesitler arası, sıcaklığın önemli değiştiği akışlar, ani genişleme ve ayrılma bölgeleri, $Ma > 0{,}3$ gaz akışları.

### Uygulamalar

**Pitot tüpü (hız ölçümü):**

$$
V = \sqrt{\frac{2(P_0 - P)}{\rho}}
$$

**Torricelli (açık tanktan boşalma):**

$$
V = \sqrt{2gh}
$$

5 m derinlikteki delikten çıkan su: $V = \sqrt{2\cdot9{,}81\cdot5} = 9{,}9$ m/s.

**Venturi metre:** Daralan kesitte hız artar, basınç düşer. Süreklilik ve Bernoulli birlikte:

$$
\dot V = A_2\sqrt{\frac{2(P_1 - P_2)}{\rho\,(1 - (A_2/A_1)^2)}}
$$

**Hidrolik eğim çizgisi (HGL) ve enerji eğim çizgisi (EGL):** HGL = $P/\rho g + z$; EGL = HGL + $V^2/2g$. Sürtünmesiz akışta EGL yataydır; sürtünme kaybı EGL'yi aşağı eğer, pompa yükseltir, türbin düşürür.

## Genel enerji denklemi

Sürekli, sıkıştırılamaz akışta iki kesit arası:

$$
\boxed{\frac{P_1}{\rho g} + \alpha_1\frac{V_1^2}{2g} + z_1 + h_{pompa,u} = \frac{P_2}{\rho g} + \alpha_2\frac{V_2^2}{2g} + z_2 + h_{türbin,e} + h_L}
$$

- $h_L$: sürtünme ve diğer kayıplardan doğan **yük kaybı**
- $\alpha$: kinetik enerji düzeltme katsayısı (tam gelişmiş laminer boru akışında 2, türbülanslıda ≈ 1,05)

### Örnek – Pompa verimi

Pompa 0,05 m³/s suyu 30 m yükseltiyor; mil gücü 18 kW:

$$
\eta_{pompa} = \frac{\rho g\dot V h}{\dot W_{mil}} = \frac{1000\cdot9{,}81\cdot0{,}05\cdot30}{18\,000} = 0{,}82
$$
