# Kinematik diyagram, zincir ve yer değişimi

## Kinematik diyagram

Gerçek bir makinenin fotoğrafı veya teknik resmi kinematik analiz için gereğinden fazla ayrıntı içerir. **Kinematik diyagram**, mekanizmayı yalnızca hareketi belirleyen ögelerle gösteren basitleştirilmiş çizimdir:

- Her uzuv bir çizgi, üçgen veya çokgen olarak çizilir ve **numaralanır** (sabit uzuv/gövde genellikle **1**).
- Döner mafsallar küçük daireyle, kayar mafsallar dikdörtgen bloklarla gösterilir.
- Sabit uzva bağlı noktalar taralı zemin işaretiyle belirtilir ($A_0$, $B_0$ gibi alt indisli harfler sabit noktalardır).

Slaytlarda kinematik diyagramı çizilen örnekler: krank-biyel mekanizması, damper kaldırma mekanizması, masa lambası, traktör yük çekme mekanizması, lastikli yükleyici (loader).

> **İpucu:** Bir rijit cismin fiziksel şekli kinematik analizde önemli değildir. Bu yüzden iki mafsalı olan bir uzuv tek bir doğru, üç mafsalı olan bir uzuv bir üçgen olarak çizilebilir.

## Kinematik zincir

Birbirlerine kinematik çiftlerle bağlanan uzuvlar bir **kinematik zincir** oluşturur. Kinematik zincir, gerçek mekanizmanın bir modelidir.

> **Önemli fark:** Kinematik zincirde **sabit uzuv yoktur.** Zincirin uzuvlarından biri sabitlendiğinde (yere bağlandığında) zincir bir **mekanizmaya** dönüşür.

Uzuvlar taşıdıkları mafsal sayısına göre adlandırılır: **ikili uzuv** (2 mafsal), **üçlü uzuv** (3 mafsal) vb.

## Dört uzuvlu kinematik zincirler

Dört uzuvlu zincirlerden, mafsal türlerine göre şu mekanizmalar türetilir:

| Zincir | Mafsallar | Türetilen mekanizmalar |
|---|---|---|
| 4R | 4 döner | Dört çubuk mekanizması |
| 3R 1P | 3 döner, 1 kayar | Krank-biyel, kol-kızak |
| 2R 2P (kayar mafsallar karşılıklı) | 2 döner, 2 kayar | Sürgü-kızak |
| 2R 2P (kayar mafsallar komşu) | 2 döner, 2 kayar | Çift sürgü, Scotch-yoke |

## Altı uzuvlu kinematik zincirler

Altı uzuvlu, tek serbestlik dereceli iki temel zincir vardır. İkisinde de **iki adet üçlü uzuv** bulunur; fark, üçlü uzuvların birbirine nasıl bağlandığıdır.

- **Watt zinciri:** Üçlü uzuvlar **komşudur** (doğrudan birbirine mafsallıdır).
- **Stephenson zinciri:** Üçlü uzuvlar birbirine **ikili uzuvlar üzerinden** bağlanır.

Hangi uzvun sabitlendiğine göre farklı mekanizmalar elde edilir:

| Zincir | Sabit uzuv | Mekanizma |
|---|---|---|
| Watt | İkili uzuv | **Watt I** |
| Watt | Üçlü uzuv | **Watt II** |
| Stephenson | 5 veya 6 numaralı uzuv | **Stephenson I** |
| Stephenson | 2 veya 3 numaralı uzuv | **Stephenson II** |
| Stephenson | Üçlü uzuv | **Stephenson III** |

> **Örnek:** Vargel (hızlı geri dönüş, *quick-return*) mekanizması **Watt zincirinden** türetilmiştir.

## Kinematik yer değişimi (inversiyon)

Aynı kinematik zincirde **farklı uzuvlar sabitlenerek** farklı hareketler elde edilebilir. Buna **kinematik yer değişimi (inversiyon)** denir. Elde edilen mekanizmalar birbirinden tamamen farklı olabilir, bazen de benzer hareketler verebilir.

Krank-biyel zincirinin dört inversiyonu klasik örnektir: gövde sabitse krank-biyel; krank sabitse dönen silindirli (döner motor tipi) mekanizma; biyel sabitse salınan silindirli mekanizma; piston sabitse el pompası tipi mekanizma elde edilir.

## Konstrüksiyon değişiklikleri

Kinematiği değiştirmeden mekanizmanın fiziksel yapısı değiştirilebilir:

- **Mafsal genişletmesi:** Döner mafsalın çapı büyütülerek (eksantrik gibi) kranka dönüştürülmesi.
- **Boş–dolu değişimi:** Kayar mafsalda hangi uzvun içte (dolu), hangisinin dışta (boş) olduğunun değiştirilmesi.

Bu değişiklikler hareketi aynı bırakır; mukavemet, yer ve imalat kolaylığı için yapılır.
