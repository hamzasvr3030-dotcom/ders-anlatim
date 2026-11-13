# Serbestlik derecesi

## Tanım

Bir cismin konumunu (veya hareketini) belirlemek için gereken **birbirinden bağımsız parametre sayısına** serbestlik derecesi (s.d.) denir.

### Düzlemde bir rijit cisim: s.d. = 3

Cisim üzerindeki iki nokta $A(x_A, y_A)$ ve $B(x_B, y_B)$ toplam 4 parametre verir. Ancak $AB$ uzunluğu sabit olduğundan bir **bağ denklemi** vardır:

$$
(x_A - x_B)^2 + (y_A - y_B)^2 = l^2
$$

$4 - 1 = 3$. Yani düzlemdeki bir cismin konumu $(x_A, y_A, \theta)$ ile tam olarak belirlenir.

### Uzayda bir rijit cisim: s.d. = 6

Doğrusal olmayan 3 nokta 9 koordinat verir. Aralarındaki 3 uzaklık sabit olduğundan 3 bağ denklemi vardır: $9 - 3 = 6$.

## Eleman çiftinin serbestlik derecesi

Bir kinematik çiftin s.d., birleştirdiği iki uzuvdan biri **sabit tutulduğunda** diğerinin yapabildiği bağımsız hareket sayısıdır.

$$
\text{Düzlemsel: } 0 < f < 3, \qquad \text{Uzaysal: } 0 < f < 6
$$

| Eleman çifti | Gösterim | s.d. ($f$) |
|---|---|---|
| Döner çift (mafsal) | R | 1 |
| Kayar çift | P | 1 |
| Vida çifti (öteleme dönmeye bağlı) | H | 1 |
| Çatal mafsal (kayar-döner) | – | 2 |
| Kam çifti (kayarak yuvarlanma) | YEÇ | 2 |
| Dişli çifti | YEÇ | 2 |
| Düzlemsel çift | – | 3 |

> Düzlemde **1 s.d.li** çiftler (R, P) 2 hareketi, **2 s.d.li** çiftler (kam, dişli) 1 hareketi kısıtlar.

## Mekanizmanın serbestlik derecesi

Bir mekanizmadaki **bütün uzuvların** konumunu belirlemek için gereken bağımsız parametre sayısıdır.

**Pratik anlamı:**

- Mekanizmanın konum, hız ve ivme analizini yapabilmek için **s.d. kadar uzvun** hareketinin bilinmesi gerekir.
- Mekanizmanın çalışması için **s.d. kadar uzva tahrik** (motor, silindir) uygulanmalıdır.

> **Örnek:** Krank-biyel mekanizmasında krank açısı $\theta_2$ bilinirse biyel açısı ve piston konumu $s$ hesaplanabilir. Tek bir parametre yetiyor, o hâlde s.d. = 1. Beş uzuvlu (iki krankı yere bağlı) kapalı mekanizmada ise iki açı gerekir, s.d. = 2.

## Grübler–Kutzbach denklemi

Semboller:

| Sembol | Anlamı |
|---|---|
| $\lambda$ | Çalışılan uzayın s.d.: düzlem için **3**, uzay için **6** |
| $l$ | Uzuv sayısı (**sabit uzuv dahil**) |
| $j$ | Mafsal (kinematik çift) sayısı |
| $f_i$ | $i$. mafsalın s.d. |
| $F$ | Mekanizmanın s.d. |

**Çıkarılışı:** Bir uzuv sabit olduğundan $(l-1)$ hareketli uzuv vardır. Hiç mafsal olmasaydı $F = \lambda(l-1)$ olurdu. Her mafsal $(\lambda - f_i)$ kadar s.d. kısıtlar:

$$
F = \lambda(l-1) - \sum_{i=1}^{j} (\lambda - f_i)
$$

$$
\boxed{F = \lambda\,(l - j - 1) + \sum_{i=1}^{j} f_i}
$$

### Alternatif (düzlemsel) form

$e_1$: 1 s.d.li çift sayısı (R, P), $e_2$: 2 s.d.li çift sayısı (kam, dişli):

$$
\boxed{F = 3\,(l - 1) - 2e_1 - e_2}
$$

## Çözümlü örnekler

**Örnek 1 – Dört çubuk mekanizması.** Uzuvlar 1-2-3-4, çiftler 1-2, 2-3, 3-4, 4-1, hepsi R.

$l = 4,\; j = 4,\; \sum f_i = 4 \;\Rightarrow\; F = 3(4 - 4 - 1) + 4 = 1$

**Örnek 2 – Krank-biyel.** Çiftler 1-2 (R), 2-3 (R), 3-4 (R), 4-1 (P).

$F = 3(4 - 4 - 1) + 4 = 1$

**Örnek 3 – Kam çifti olan 5 uzuvlu mekanizma.** Çiftler: 1-2, 2-3, 3-4, 4-1, 5-1 (R) ve 4-5 (kam, YEÇ, $f = 2$).

$l = 5,\; j = 6,\; \sum f_i = 7 \;\Rightarrow\; F = 3(5 - 6 - 1) + 7 = 1$

Alternatif formla: $e_1 = 5,\; e_2 = 1 \;\Rightarrow\; F = 3(5-1) - 2\cdot5 - 1 = 1$ ✓

**Örnek 4 – Üçlü mafsal içeren mekanizma.** $l = 6$, $j = 7$, $\sum f_i = 7 \Rightarrow F = 3(6 - 7 - 1) + 7 = 1$

> **Dikkat:** Bir noktada $k$ uzuv birleşiyorsa orada **$k - 1$ tane** mafsal sayılır. Üç uzvun buluştuğu bir pim 2 mafsaldır.

**Örnek 6 – Vargel (hızlı geri dönüş) mekanizması.** Çiftler 1-2 R, 2-3 R, 3-4 P, 4-1 R, 4-5 R, 5-6 R, 6-1 P.

$l = 6,\; j = 7 \Rightarrow F = 3(6 - 7 - 1) + 7 = 1$. Mecburi hareketli; Watt zincirinden türemiştir.

**Örnek 7 – Kepçe mekanizması.** $l = 10,\; j = 13$ (hepsi 1 s.d.li).

$F = 3(10 - 13 - 1) + 13 = 1$ veya $F = 3(10-1) - 2\cdot13 = 1$

**Örnek 9.** $l = 11$, 12 R + 2 P $\Rightarrow e_1 = 14$: $F = 3(11 - 1) - 2\cdot14 = 2$

**Örnek 11 (dişli içeren).** $l = 8$, 8 R + 1 P ($e_1 = 9$) ve iki adet 2 s.d.li çift ($e_2 = 2$), yani $j = 11$, $\sum f_i = 9 + 2\cdot2 = 13$:

$F = 3(8-1) - 2\cdot9 - 2 = 1$ veya $F = 3(8 - 11 - 1) + 13 = 1$

## Serbestlik derecesine göre yapılar

| $F$ | Yapı |
|---|---|
| $F < 0$ | Statik belirsiz konstrüksiyon (hiperstatik) |
| $F = 0$ | Statik belirli konstrüksiyon (kafes, hareket etmez) |
| $F = 1$ | **Zorunlu (mecburi) hareketli mekanizma** |
| $F > 1$ | Çok serbestlik dereceli mekanizma |

## Formülün yanıldığı özel durumlar

### Etkisiz serbestlik derecesi

İzleyicinin ucunda serbestçe dönen bir **makara (toparlak)** varsa formül $F = 2$ verir. Ama makaranın kendi ekseni etrafında dönmesi mekanizmanın çalışmasını etkilemez, sadece sürtünmeyi azaltır.

$$
F_{gerçek} = F_{formül} - (\text{etkisiz s.d.}) = 2 - 1 = 1
$$

Makara kaldırılıp izleyici doğrudan kama değdirilirse: $l = 3, e_1 = 2, e_2 = 1 \Rightarrow F = 1$ ✓

### Fazladan kapalılık (redundant constraint)

Özel boyutlar yüzünden formülün $0$ verdiği hâlde hareket edebilen mekanizmalar vardır.

- **Paralel kol mekanizması:** Karşılıklı uzuv boyları eşit olan 5 uzuvlu yapı: $l = 5, e_1 = 6 \Rightarrow F = 0$, ama mekanizma hareket eder.
- **Kaymadan yuvarlanan teker:** Kayma olmadığı için temas 1 s.d.li gibi davranır.

> Bu durumlarda formül sonucuna "!?" konur ve geometriye bakarak gerçek s.d. bulunur. **Örnek 12**'de (7 uzuv, 9 R) formül $F = 0$ verir; bu bir uyarıdır, mekanizmanın özel boyutları kontrol edilmelidir.

## Kendini dene

Slayt sonundaki "Çözülecek problemler" için yöntem:

1. Uzuvları numarala (gövde = 1). Gövdenin farklı yerlerdeki bütün parçaları **tek uzuv** sayılır.
2. Her mafsalı "uzuv–uzuv, tür, $f$" şeklinde tabloya yaz. Üçlü birleşimleri 2 mafsal say.
3. Hem $F = 3(l - j - 1) + \sum f_i$ hem $F = 3(l-1) - 2e_1 - e_2$ ile hesapla; iki sonuç aynı çıkmalı.
4. Makara, paralel kol gibi özel durumları kontrol et.
