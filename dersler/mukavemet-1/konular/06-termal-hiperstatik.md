# Termal gerilmeler ve hiperstatik problemler

## Isıl uzama

Sıcaklığı $\Delta T$ kadar değişen serbest bir çubuk:

$$
\boxed{\Delta L_T = L\,\alpha\,\Delta T}, \qquad \varepsilon_T = \alpha\,\Delta T
$$

$\alpha$: ısıl genleşme katsayısı (1/°C). Çelik için ≈ $11{,}7\times10^{-6}$, alüminyum için ≈ $23{,}6\times10^{-6}$.

Yük ve sıcaklık birlikte varsa:

$$
\Delta L = \frac{N\,L}{E\,A} + L\,\alpha\,\Delta T
$$

> **En önemli kural:** Sıcaklık değişimi **tek başına gerilme oluşturmaz.** Gerilme ancak uzama **engellenirse** doğar.

Uzaması tamamen engellenmiş (iki rijit duvar arasındaki) çubuk:

$$
\boxed{\sigma_T = -E\,\alpha\,\Delta T}, \qquad P = E\,A\,\alpha\,\Delta T
$$

### Örnek 1 – Serbest uçlu milde sıcaklık + yük

A'da ankastre, C ucu serbest çelik mil: AB ($A = 400$ mm², $L = 200$ mm), BC ($A = 300$ mm², $L = 150$ mm). B'de 12 kN; sıcaklık 25 → 125 °C; $E = 200$ GPa, $\alpha = 11{,}7\times10^{-6}$.

- İç kuvvetler: $N_{AB} = 12$ kN, $N_{BC} = 0$.
- C serbest olduğundan ısıl uzama engellenmez, **termal gerilme yoktur**: $\sigma_{AB} = 30$ MPa, $\sigma_{BC} = 0$.
- Boy değişimi: $0{,}03 + 0{,}234 + 0{,}1755 = 0{,}44$ mm.

> Ders notunda burada $\sigma_{AB} = 30 + E\alpha\Delta T = 264$ MPa bulunmuş. Bu kavramsal bir hatadır: $E\alpha\Delta T$ yalnızca uzama engellendiğinde gerilme oluşturur. Boy değişimi sonucu (0,44 mm) ise doğrudur.

## Hiperstatik (statikçe belirsiz) problemler

Bilinmeyen sayısı denge denklemi sayısından fazladır. Çözüm üç ayaklıdır:

1. **Denge:** Statik denklemler
2. **Uygunluk (geometri):** Şekil değiştirmeler arasındaki ilişki (toplam uzama sıfır, rijit kolda orantı, vb.)
3. **Malzeme bağıntısı:** $\Delta L = NL/(EA) + L\alpha\Delta T$

**Süperpozisyon yolu:** Fazla mesneti kaldır → serbest şekil değiştirmeyi hesapla ($\delta_T$ veya $\delta_P$) → bilinmeyen tepkiyi uygula ($\delta_R$) → gerçek koşula eşitle (örneğin $\delta_T + \delta_R = 0$).

### Örnek 2 – İki duvar arasında soğuyan çubuk

+24 °C'de iki rijit duvar arasına tam oturuyor; AC: $A = 380$ mm², CB: $A = 750$ mm², her biri 300 mm. Sıcaklık −45 °C'ye düşüyor; $E = 200$ GPa, $\alpha = 11{,}7\times10^{-6}$.

1. B'yi kaldır, serbest kısalma: $\delta_T = 11{,}7\times10^{-6}\cdot(-69)\cdot600 = -0{,}484$ mm
2. $R_B$'yi uygula: $\delta_R = \dfrac{R_B}{200\,000}\left(\dfrac{300}{380} + \dfrac{300}{750}\right) = 5{,}947\times10^{-6}R_B$
3. Uygunluk: $\delta_T + \delta_R = 0 \Rightarrow R_B = 81{,}4$ kN
4. Gerilmeler (çekme): $\sigma_{AC} = 214{,}3$ MPa, $\sigma_{CB} = 108{,}6$ MPa

### Örnek 3 – İki ucu ankastre çubuğa ara yük

Boy $L$; ara kesitte $F$; üst parça $a$, alt parça $b$. Alt mesnedi kaldırıp $R_B$ ile geri iterek $\Delta L = 0$ yazılırsa:

$$
R_A = \frac{F\,b}{L}\ (\text{üst, çekme}), \qquad R_B = \frac{F\,a}{L}\ (\text{alt, basma})
$$

Yük hangi mesnede **yakınsa** o mesnet daha fazla yük alır.

### Örnek 4 – İki halatla asılı rijit çubuk

ABC rijit çubuğu A'da mafsallı; B (1 m) ve C (2 m) noktalarından özdeş çelik halatlar; C'de 20 kN.

1. Statik: $F_B\cdot1 + F_C\cdot2 = 40$ → tek denklem, iki bilinmeyen.
2. Uygunluk: çubuk A etrafında döner, $\delta_C = 2\delta_B$. Halatlar özdeş olduğundan $F_C = 2F_B$.
3. $5F_B = 40 \Rightarrow F_B = 8$ kN, $F_C = 16$ kN.

### Örnek 5 – Üç çubuklu simetrik sistem

Orta çubuk düşey (boy $OB$), yan çubuklar düşeyle $\alpha$ açısı yapıyor, hepsi aynı $EA$; B'de $P$ aşağı.

- Uygunluk: yan çubuğun uzaması $= \delta\cos\alpha$, boyu $OB/\cos\alpha$ → $S_1 = S_2\cos^2\alpha$

$$
S_2 = \frac{P}{1 + 2\cos^3\alpha}, \qquad S_1 = S_3 = \frac{P\cos^2\alpha}{1 + 2\cos^3\alpha}
$$

$\alpha = 30°$, $P = 10$ kN için $S_2 = 4{,}35$ kN, $S_1 = 3{,}26$ kN. **Rijit olan (kısa) orta çubuk daha fazla yük alır.**

### Örnek 6 – Isınan pirinç silindir ve çelik çubuk

CDE rijit kolu E'de mafsallı; D'de (E'den 0,3 m) Ø30 pirinç silindir ($L = 0{,}3$ m, $E = 105$ GPa, $\alpha = 20{,}9\times10^{-6}$, $\Delta T = 30$ °C); C'de (E'den 0,75 m) Ø22 çelik çubuk ($L = 0{,}9$ m, $E = 200$ GPa).

1. Statik: $F_ç = 0{,}4F_p$. Geometri: $\delta_C = 2{,}5\,\delta_D$.
2. $\delta_C = 4{,}735\times10^{-6}F_p$; $\quad \delta_D = 0{,}1881 - 4{,}042\times10^{-6}F_p$ (ısıl uzama − bastırma)
3. $F_p = 31{,}7$ kN, $\sigma_{pirinç} = 44{,}8$ MPa (basma).

## Sık yapılan hatalar

- Uzaması serbest olan çubukta termal gerilme hesaplamak.
- Hiperstatik problemi yalnız statikle çözmeye çalışmak; uygunluk şartını yazmamak.
- Rijit kolda yer değiştirmelerin mafsala uzaklıkla orantılı olduğunu unutmak.
- Isıl uzama ile mekanik kısalmanın işaretlerini karıştırmak: her terimin yönünü şekil üzerinde düşün.
