# Rijit cismin hız ve ivmesi

Düzlemdeki hareket üç türe ayrılır:

1. **Öteleme**
2. **Sabit bir eksen etrafında dönme**
3. **Genel düzlemsel hareket** (öteleme + dönme)

## 1. Öteleme

Cisim üzerindeki her nokta **paralel yörüngeler** çizer; cisim üzerindeki bir doğru hep ilk konumuna paralel kalır.

$$
\vec r_B = \vec r_A + \vec r_{AB}, \qquad \vec r_{AB} = \text{sabit}
\;\Rightarrow\;
\boxed{\vec V_B = \vec V_A, \quad \vec a_B = \vec a_A}
$$

> Öteleme yapan cismin **bütün noktalarının hızı ve ivmesi aynıdır.**

## 2. Sabit eksen etrafında dönme

Eksen düzleme diktir ve düzlemi $A_0$ noktasında (dönme merkezi) keser. Her nokta $A_0$ merkezli dairesel yaylar üzerinde hareket eder.

Konum: $\vec r_A = r_A e^{i\theta}$ ($r_A$ sabit). Açısal hız $\omega = \dot\theta$, açısal ivme $\alpha = \dot\omega = \ddot\theta$.

### Hız

$$
\vec V_A = i\,r_A\,\omega\,e^{i\theta} = \vec\omega \times \vec r_A
$$

- Şiddeti: $V_A = r_A\,\omega$
- Yönü: $A_0A$ doğrusuna **dik**, $\omega$ yönünde. ($i = e^{i\pi/2}$ çarpanı vektörü 90° SYT döndürür.)

### İvme

$$
\vec a_A = \underbrace{i\,r_A\,\alpha\,e^{i\theta}}_{\vec a_A^{\,t}} \;\underbrace{-\; r_A\,\omega^2 e^{i\theta}}_{\vec a_A^{\,n}}
$$

| Bileşen | Şiddet | Yön |
|---|---|---|
| Teğetsel $a^t$ | $r\alpha$ | Yörüngeye teğet, $A_0A$'ya dik, $\alpha$ yönünde |
| Normal $a^n$ | $r\omega^2$ | **Dönme merkezine doğru** |

$$
a_A = \sqrt{(r\alpha)^2 + (r\omega^2)^2}
$$

## 3. Genel düzlemsel hareket – bağıl hareket

Genel hareket, bir **öteleme** (her nokta $\Delta \vec r_A$ kadar kayar) ile ardından $A'$ etrafında bir **dönmenin** ($\Delta\theta$) toplamı olarak düşünülür. $A'$ hareketli olduğundan bu dönme **bağıl harekettir.**

$$
\vec r_B = \vec r_A + \vec r_{B/A}, \qquad \vec r_{B/A} = b\,e^{i\theta}\;(b = |AB| \text{ sabit})
$$

### Bağıl hız

$$
\boxed{\vec V_B = \vec V_A + \vec V_{B/A}}, \qquad \vec V_{B/A} = i\,b\,\omega\,e^{i\theta} = \vec\omega\times\vec r_{B/A}
$$

$V_{B/A} = b\omega$, yönü $AB$'ye **dik**.

### Bağıl ivme

$$
\boxed{\vec a_B = \vec a_A + \vec a_{B/A}^{\,t} + \vec a_{B/A}^{\,n}}
$$

$$
a_{B/A}^t = b\,\alpha \;(AB\text{'ye dik}), \qquad a_{B/A}^n = b\,\omega^2 \;(B\text{'den } A\text{'ya doğru})
$$

## 4. Hareketli bir uzuv üzerinde kayma – Coriolis ivmesi

2 uzvu $A_0$ etrafında $\omega$ ile dönüyor, 3 uzvu (blok) 2 üzerinde **kayıyor.** $B$ noktası hem 2'de ($B_2$) hem 3'te ($B_3$) bulunur. Konum ikisi için de $\vec r_B = r e^{i\theta}$, ama:

- $B_2$ için $r$ **sabit**
- $B_3$ için $r$ **değişken** (kayma var)

### Hız

$$
\vec V_{B_3} = \underbrace{i\,r\,\omega\,e^{i\theta}}_{\vec V_{B_2}} + \underbrace{\dot r\,e^{i\theta}}_{\vec V_{B_3/B_2}}
$$

Bağıl hız $\dot r$, kayma yönündedir (bağıl yörüngeye teğet).

### İvme

$$
\vec a_{B_3} = \underbrace{i r\alpha e^{i\theta}}_{a_{B_2}^t}
\underbrace{- r\omega^2 e^{i\theta}}_{a_{B_2}^n}
+ \underbrace{\ddot r\, e^{i\theta}}_{a_{B_3/B_2}^t}
+ \underbrace{2\,i\,\dot r\,\omega\, e^{i\theta}}_{a^c\text{ (Coriolis)}}
$$

$$
\boxed{a^c = 2\,\omega\,V_{bağıl}}
$$

> **Coriolis ivmesinin yönü:** Bağıl hız vektörünü **açısal hız yönünde 90° döndür.** ($\omega$ SYT ise bağıl hızı 90° SYT çevir.)

Coriolis terimi iki etkinin toplamıdır: 2 uzvunun dönmesi bağıl hızın yönünü değiştirir ($\dot r\omega$), bağıl hareket de dönen noktanın yarıçapını değiştirir ($\dot r\omega$). İkisinin toplamı $2\dot r\omega$.

> **Ne zaman ortaya çıkar?** Bir nokta **dönen** bir uzuv üzerinde **kayıyorsa** (kol-kızak, vargel, hidrolik silindirli mekanizmalar). Kayma yoksa ya da kızak dönmüyorsa Coriolis terimi sıfırdır.

## Özet tablo

| Hareket | Hız | İvme |
|---|---|---|
| Öteleme | $V_B = V_A$ | $a_B = a_A$ |
| Sabit eksen etrafında dönme | $r\omega$, yarıçapa dik | $a^t = r\alpha$, $a^n = r\omega^2$ (merkeze) |
| Genel düzlemsel | $V_B = V_A + V_{B/A}$ | $a_B = a_A + a^t_{B/A} + a^n_{B/A}$ |
| Dönen uzuv üzerinde kayma | $V_{B_3} = V_{B_2} + V_{B_3/B_2}$ | $a_{B_3} = a_{B_2} + a^t_{B_3/B_2} + 2\omega V_{B_3/B_2}$ |
