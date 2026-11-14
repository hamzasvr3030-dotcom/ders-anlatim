Bir boruya yalıtım eklemek iletim direncini **artırır**, ama dış yüzey alanı büyüdüğü için taşınım direncini **azaltır**. Bu iki etki yüzünden yalıtım her zaman ısı kaybını azaltmaz.

Dış yarıçapı $r$ olan yalıtımlı borunun toplam direnci (boy $L$):

$$
R_{top} = \underbrace{\frac{\ln(r/r_1)}{2\pi k_2L}}_{\text{iletim, } r \text{ ile artar}} + \underbrace{\frac{1}{2\pi rhL}}_{\text{taşınım, } r \text{ ile azalır}}
\qquad
\dot Q = \frac{T_1 - T_\infty}{R_{top}}
$$

## Kritik yarıçapın bulunması

$\dot Q$'nun en büyük olduğu $r$ için $d\dot Q/dr = 0$:

$$
\frac{1}{k_2r} - \frac{1}{hr^2} = 0 \quad\Longrightarrow\quad \boxed{r_{kr} = \frac{k}{h}}\ \ (\text{silindir})
$$

$k$: **yalıtım malzemesinin** ısı iletim katsayısı. (Küre için $r_{kr} = 2k/h$.)

## Yorum

- $r_1 < r_{kr}$ ise eklenen ilk yalıtım katmanları $R_{top}$'u **küçültür**, ısı kaybı **artar** (istenmeyen durum). Yalıtım ancak $r_{kr}$'yi yeterince aşınca işe yarar.
- $r_1 \ge r_{kr}$ ise her yalıtım katmanı ısı kaybını azaltır.

> **Pratik sonuç:** Buhar boruları gibi büyük çaplı borularda $r_1 \gg r_{kr}$ olduğundan yalıtım her zaman faydalıdır. Çok ince **elektrik kablolarında** ise plastik kaplama ısı kaybını artırır; bu da kablonun soğumasına yardım eder.

> **Not:** Defterde "$r < r_{kr}$ ise yalıtmaya gerek yoktur, $r \ge r_{kr}$ ise gerek vardır" diye özetlenmiş. Daha doğru ifade: $r < r_{kr}$ iken ince yalıtım ısı kaybını artırır; ısı kaybını azaltmak isteniyorsa yalıtım dış yarıçapı $r_{kr}$'den belirgin biçimde büyük seçilmelidir.

> **Kaynak:** El yazısı ders notları, [s. 11–12](../pdf/ders-notlari-1.pdf#page=11).
