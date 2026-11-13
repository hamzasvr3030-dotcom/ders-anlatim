# Giriş ve temel kavramlar

## Mekanizma tekniği nerede durur?

Makine mühendisliğinde **dinamik** iki kola ayrılır:

| Dal | İlgilendiği şey |
|---|---|
| **Kinematik** | Hareketin kendisi (konum, hız, ivme). Kuvvetlere bakmaz. |
| **Kinetik** | Hareketi doğuran kuvvetler ve momentler. |

Bu derste ağırlık **kinematik** üzerindedir: bir mekanizmanın giriş uzvu belli bir şekilde hareket ettiğinde diğer uzuvların nasıl hareket edeceğini buluruz.

## Mekanizma ve makine

- **Mekanizma:** Belirli bir düzene göre hareket iletecek biçimde şekillendirilip bir araya getirilmiş **direngen (rijit) cisimler topluluğudur.** Örnek: krank-biyel mekanizması, kam mekanizması, dişli mekanizması.
- **Makine:** Mekanik kuvvetler yoluyla **mekanik iş üreten** sistemdir. Tek başına bir işlevi yerine getirir ve genellikle **birçok mekanizma** içerir.

> **Örnek:** 4 silindirli bir içten yanmalı motorda 4 adet krank-biyel mekanizması vardır (piston → biyel → krank mili). Supapları ise kam mili üzerindeki **kamlar** açıp kapatır. Motor bir *makinedir*, içindeki krank-biyel ve kam düzenekleri *mekanizmadır*.

Günlük hayattan başka örnekler: ekskavatör ve hidrolik yükleyici kolları, oto cam kaldırma mekanizması, masa lambası, beklemeli hareket üreten **Geneva (Malta haçı)** ve **cırcır** mekanizmaları, kam ve dişli mekanizmaları.

## Dersin kapsamı

Mekanizmalar üç başlık altında incelenir:

1. **Mekanizma sistematiği:** kavramlar, ilkeler, sınıflandırmalar.
2. **Mekanizma kinematiği:** verilen bir mekanizmada giriş–çıkış ilişkisinin belirlenmesi (analiz).
3. **Mekanizma tasarımı:** istenen giriş–çıkış ilişkisini sağlayacak mekanizmanın seçilip boyutlandırılması (sentez).

## Temel kavramlar

**Rijit (direngen) cisim:** Hiçbir boyutu hiçbir şekilde değişmeyen cisimdir. Kuvvet uygulansa da iki noktası arasındaki uzaklık sabit kalır.

**Uzuv:** Mekanizmayı oluşturan her bir rijit elemandır. Krank-biyel mekanizmasında uzuvlar: **gövde (1), krank (2), biyel (3), piston (4)**.

**Kinematik çift (mafsal, eleman çifti):** İki uzvun, birbirlerine göre **bağıl harekete izin verecek şekilde** birleşmesidir.

Krank-biyel mekanizmasındaki kinematik çiftler:

| Çift | Türü |
|---|---|
| Gövde – krank | Döner çift |
| Krank – biyel | Döner çift |
| Biyel – piston | Döner çift |
| Piston – silindir (gövde) | Kayar çift |

## Kinematik çiftlerin sınıflandırılması

### Bağlantının sağlanma şekline göre

- **Kapalı eleman çiftleri**
  - **Kuvvet kapalı (KKEÇ):** Temas bir kuvvetle (ağırlık, yay) korunur. Örnek: kam ile üzerine yayla bastırılan izleyici.
  - **Şekil kapalı (ŞKEÇ):** Temas geometriyle garanti edilir. Örnek: kanal içinde hareket eden pim.
- **Açık eleman çiftleri:** Temas her an kendiliğinden sağlanmaz; uzuvlar ayrılabilir.

### Temas şekline göre

- **Adi eleman çifti (AEÇ):** Uzuvlar **yüzey** boyunca temas eder (döner mafsal, kayar mafsal).
- **Yüksek eleman çifti (YEÇ):** Uzuvlar **nokta veya çizgi** boyunca temas eder (kam–izleyici, dişli–dişli).

## Mekanizmaların işlevlerine göre sınıflandırılması

| Tür | Neyle ilgilenir? |
|---|---|
| **Yörünge oluşturan** | Mekanizma üzerindeki bir noktanın izlediği yol |
| **Fonksiyon oluşturan** | Yere bağlı uzuvların açıları arasındaki ilişki (giriş açısı ↔ çıkış açısı) |
| **Hareket oluşturan** | Bağlantı uzvunun (örneğin biyelin) bütün olarak konumu ve yönelimi |

> **Sınav ipucu:** "Krank-biyel mekanizmasındaki uzuvları ve kinematik çiftleri sayınız" tipi sorular çok sık çıkar. Her çiftin hangi iki uzuv arasında olduğunu ve türünü (döner R / kayar P) yazmayı alışkanlık hâline getir; serbestlik derecesi hesabında bu liste doğrudan kullanılır.
