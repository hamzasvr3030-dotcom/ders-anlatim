# Boyut analizi ve modelleme

## Boyutsal homojenlik

Bir denklemdeki her toplanan terim aynı boyuta sahip olmalıdır. Denklemi bir karakteristik büyüklükle bölerek **boyutsuz** hâle getirmek, parametre sayısını azaltır ve sonuçları genelleştirir.

**Boyut analizinin üç amacı:**

1. Deney yapmadan önce boyutsuz parametreleri bulmak (deney sayısını azaltmak),
2. Model–prototip ölçekleme kurallarını çıkarmak,
3. Değişkenler arası ilişkinin biçimini öngörmek.

## Buckingham Pi teoremi

$n$ değişkenli bir problemde $j$ temel boyut varsa, problem $k = n - j$ adet **boyutsuz Π grubu** ile ifade edilebilir.

**Tekrarlayan değişkenler yöntemi:**

1. $n$ değişkeni listele.
2. Her değişkenin birincil boyutlarını yaz ($M$, $L$, $t$, …).
3. $j$ = birincil boyut sayısı; $k = n - j$ Π grubu bul.
4. $j$ tane **tekrarlayan değişken** seç: hepsini birlikte bütün boyutları içermeli, kendi aralarında Π oluşturmamalı. Bağımlı değişkeni seçme. Genellikle bir uzunluk, bir hız ve bir yoğunluk seçilir ($D$, $V$, $\rho$).
5. Kalan her değişkeni tekrarlayanlarla birleştirip üsleri bularak Π'leri oluştur.
6. Π'leri bilinen boyutsuz sayılara benzeyecek şekilde düzenle.

## Önemli boyutsuz sayılar

| Sayı | Tanım | Oran |
|---|---|---|
| **Reynolds** | $Re = \dfrac{\rho VL}{\mu} = \dfrac{VL}{\nu}$ | Atalet / viskoz kuvvet |
| **Froude** | $Fr = \dfrac{V}{\sqrt{gL}}$ | Atalet / yerçekimi |
| **Euler** | $Eu = \dfrac{\Delta P}{\rho V^2}$ | Basınç / atalet |
| **Mach** | $Ma = \dfrac{V}{c}$ | Akış hızı / ses hızı |
| **Weber** | $We = \dfrac{\rho V^2L}{\sigma_s}$ | Atalet / yüzey gerilmesi |
| **Strouhal** | $St = \dfrac{fL}{V}$ | Salınım / akış hızı |
| **Basınç katsayısı** | $C_p = \dfrac{P - P_\infty}{\tfrac12\rho V^2}$ | |
| **Sürükleme / kaldırma katsayısı** | $C_D = \dfrac{F_D}{\tfrac12\rho V^2A}$ | |

## Benzerlik

Model ile prototip arasında tam benzerlik için üç şart:

1. **Geometrik benzerlik:** Bütün uzunluklar aynı oranda ölçeklenir.
2. **Kinematik benzerlik:** Karşılık gelen noktalarda hız oranları aynıdır.
3. **Dinamik benzerlik:** Bütün kuvvet oranları aynıdır, yani **bütün bağımsız Π grupları eşittir.**

Bu sağlanırsa bağımlı Π grubu da eşittir: $\Pi_{1,m} = \Pi_{1,p}$.

### Örnek – Rüzgâr tünelinde araba modeli

1:10 ölçekli araba modeli aynı havada test ediliyor. Prototip 100 km/h ile gidiyor. Reynolds benzerliği için:

$$
\frac{V_mL_m}{\nu} = \frac{V_pL_p}{\nu} \;\Rightarrow\; V_m = V_p\frac{L_p}{L_m} = 1000\ \text{km/h}
$$

Bu hız ses hızına yakın olduğundan sıkıştırılabilirlik etkileri ortaya çıkar. Pratik çözüm: daha büyük model, basınçlı tünel ya da yüksek Re'de $C_D$'nin Re'den bağımsızlaştığı (**Reynolds bağımsızlığı**) gerçeğinden yararlanmak.

**Eksik benzerlik:** Gemi modellerinde Froude ve Reynolds benzerliğini aynı anda sağlamak pratikte imkânsızdır. Froude benzerliği sağlanır, viskoz etkiler ampirik düzeltmelerle eklenir.
