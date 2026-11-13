# Yük–kesme–moment bağıntıları (integrasyon metodu)

> Klasördeki "Bölüm 2.2 – İntegrasyon metodu" PDF'i **0 bayt (boş)**. Bu sayfa standart ders kitabı bilgisiyle, kesim yöntemi sonuçlarını kontrol etmek için hazırlandı. Dosyanın doğru sürümünü hocandan isteyebilirsin.

## Diferansiyel bağıntılar

Kirişten $dz$ uzunluğunda küçük bir parça kesip dengesini yazalım (işaret kuralı: $q$ aşağı $+$, $T$ sol parçada aşağı $+$, $M$ sarkma $+$):

$$
\boxed{\frac{dT}{dz} = -q(z)} \qquad \boxed{\frac{dM}{dz} = T(z)}
$$

İntegral alınırsa:

$$
T(z) = T(0) - \int_0^z q\,dz, \qquad M(z) = M(0) + \int_0^z T\,dz
$$

Tekil kuvvetler $T$'de, tekil momentler $M$'de **sıçrama** olarak ayrıca eklenir.

## Yorumlar

- $T$ diyagramının **eğimi** $-q$'dur. Yük yoksa $T$ sabittir; düzgün yayılı yükte doğrusaldır.
- $M$ diyagramının **eğimi** $T$'dir. Bu yüzden $T = 0$ olan noktada $M$'nin teğeti yataydır, yani orada **ekstremum** vardır.
- **Alan yöntemi:** İki nokta arasındaki moment farkı, $T$ diyagramının o aralıktaki **alanına** eşittir:

$$
M_2 - M_1 = \int_{z_1}^{z_2} T\,dz
$$

## Kontrol örnekleri

**Kesim yöntemindeki Örnek 4:** A–B arasında $T = 117{,}5 - 10z$.

$$
M(4) = \int_0^4 (117{,}5 - 10z)\,dz = 470 - 80 = 390\ \text{kN·m} \;✓
$$

**Örnek 2 (düzgün yayılı, $q = 1$):** $T(0) = 1{,}5$ ise

$$
T = 1{,}5 - z, \qquad M = \int_0^z (1{,}5 - z)\,dz = 1{,}5z - \frac{z^2}{2} \;✓
$$

## Pratik kullanım (diyagramı hızlı çizme)

1. Mesnet tepkilerini bul.
2. Soldan başla: $T$, tekil kuvvetlerde sıçrar, yayılı yükte $-q$ eğimiyle iner.
3. $M$'yi $T$ alanlarını toplayarak çiz. Pozitif $T$ alanı $M$'yi artırır, negatif alan azaltır.
4. Tekil momentlerde $M$'ye sıçrama ekle.
5. Sağ uçta $T$ ve $M$ sınır koşullarına (serbest uçta 0, mafsalda $M = 0$) dönmelisin. Dönmüyorsan bir hata var.
