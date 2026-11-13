# Standart ve toleranslar

Hiçbir parça çizimdeki ölçüde **tam olarak** üretilemez. Gerçek ölçü iki sınır arasında kalırsa parça görevini yapar; bu iki sınırın farkına **tolerans** denir. Tolerans sayesinde ekonomik üretim ve parçaların birbirinin yerine kullanılabilmesi (değiştirilebilirlik) mümkün olur.

Üç tür tolerans vardır: **boyut**, **geometrik (şekil ve konum)** ve **yüzey** toleransı.

## Tanımlar

| Büyüklük | Delik | Mil |
|---|---|---|
| Nominal (anma) ölçü | $D_n$ | $d_n$ |
| Üst sapma | $A_ü = D_{max} - D_n$ (ES) | $a_ü = d_{max} - d_n$ (es) |
| Alt sapma | $A_a = D_{min} - D_n$ (EI) | $a_a = d_{min} - d_n$ (ei) |
| Tolerans | $T_D = D_{max} - D_{min} = A_ü - A_a$ | $T_d = d_{max} - d_{min}$ |

**Sıfır çizgisi** nominal ölçüyü gösterir.

## ISO tolerans sistemi

Gösterim: **harf + sayı** (örneğin H7, g6).

- **Harf**, tolerans alanının sıfır çizgisine göre **konumunu** verir: büyük harf **delik**, küçük harf **mil**.
- **Sayı**, **kalite** derecesidir (IT01 … IT18). Sayı büyüdükçe tolerans genişler, maliyet düşer.
  - IT01 – IT4: ölçü aletleri, mastarlar
  - IT5 – IT11: talaşlı imalat (makine parçaları)
  - IT12 – IT18: döküm, dövme, haddeleme

**H deliği:** alt sapma 0 (alt sınır nominal ölçüde). **h mili:** üst sapma 0.

## Geçmeler (alıştırmalar)

| Geçme | Özellik | Birim delik (H) ile milin harfi |
|---|---|---|
| **Boşluklu** | Mil her zaman delikten küçük; bağıl hareket var | a … h |
| **Belirsiz (geçiş)** | Duruma göre boşluk veya sıkılık | j … n |
| **Sıkı** | Mil her zaman delikten büyük; pres veya sıcak montaj | p … zc |

- **Birim delik sistemi:** Delik H sabit tutulur, geçme milin toleransıyla ayarlanır. **Daha yaygındır** (mili işlemek ve ölçmek deliğe göre kolaydır).
- **Birim mil sistemi:** Mil h sabit, delik toleransı değiştirilir (uzun düz çubuklar, aynı mile birden çok geçme).

$$
\text{En büyük boşluk} = D_{max} - d_{min}, \qquad \text{En küçük boşluk} = D_{min} - d_{max}
$$

$$
\text{En büyük sıkılık} = d_{max} - D_{min}, \qquad \text{En küçük sıkılık} = d_{min} - D_{max}
$$

## Örnekler – tablodan sınır ölçüler

| Ölçü | Sapmalar (µm) | En küçük | En büyük | $T$ (µm) |
|---|---|---|---|---|
| Ø40 h6 (mil) | 0 / −16 | 39,984 | 40,000 | 16 |
| Ø40 s6 (mil) | +59 / +43 | 40,043 | 40,059 | 16 |
| Ø70 d8 (mil) | −100 / −146 | 69,854 | 69,900 | 46 |
| Ø70 j7 (mil) | +18 / −12 | 69,988 | 70,018 | 30 |
| Ø90 K8 (delik) | +16 / −38 | 89,962 | 90,016 | 54 |
| Ø90 H6 (delik) | +22 / 0 | 90,000 | 90,022 | 22 |

> h6 ve s6 aynı kalitede (6) olduğundan toleransları aynıdır (16 µm); yalnızca **konumları** farklıdır.

## Örnek – Boşluk şartından geçme seçimi

Mil Ø20 −0,020/−0,055. En büyük boşluk 0,080 mm, en küçük boşluk 0,020 mm isteniyor.

1. $d_{max} = 19{,}980$, $\;d_{min} = 19{,}945$ mm
2. $D_{max} = d_{min} + 0{,}080 = 20{,}025$ mm
3. $D_{min} = d_{max} + 0{,}020 = 20{,}000$ mm
4. Delik 0 / +25 µm aralığına sığmalı → **H7 (0 / +21 µm)** seçilir (H8 = 33 µm sığmaz).
5. Kontrol: en büyük boşluk $20{,}021 - 19{,}945 = 0{,}076 \le 0{,}080$ ✓; en küçük 0,020 ✓
6. Milin sapmaları (−20 / −55 µm) yaklaşık **f8**'e karşılık gelir.

**Sonuç:** Ø20 **H7/f8**, birim delik sisteminde boşluklu geçme.

## Yüzey pürüzlülüğü

$R_a$ (ortalama pürüzlülük) ve $R_t$ / $R_z$ (tepe–çukur yüksekliği) ile belirtilir. Sıkı geçmelerde montaj sırasında pürüzlerin bir kısmı ezilir; bu, sıkılık hesabında dikkate alınır (Konu 8).
