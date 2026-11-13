# Navier–Stokes denkleminin yaklaşık çözümleri

Navier–Stokes denklemi doğrusal değildir ve çok az problemde tam çözümü vardır. Akışın bazı bölgelerinde bazı terimler diğerlerinden çok küçük olduğundan ihmal edilerek **yaklaşık çözümler** elde edilir.

## Boyutsuz Navier–Stokes denklemi

Karakteristik uzunluk $L$, hız $V$ ve frekans $f$ ile boyutsuzlaştırılınca:

$$
[St]\frac{\partial\vec V^*}{\partial t^*} + (\vec V^*\cdot\nabla^*)\vec V^* = -[Eu]\nabla^*P^* + \left[\frac{1}{Fr^2}\right]\vec g^* + \left[\frac{1}{Re}\right]\nabla^{*2}\vec V^*
$$

Hangi terimin ihmal edilebileceğine **Re**, **Fr**, **St**, **Eu** sayıları karar verir.

## 1. Sürünme akışı (Stokes akışı), $Re \ll 1$

Atalet terimleri ihmal edilir; viskoz kuvvetler basınç kuvvetleriyle dengelenir:

$$
\nabla P = \mu\nabla^2\vec V
$$

Mikroorganizmaların hareketi, çok viskoz akışkanlar, toz partikülleri. Yoğunluk denklemde yer almaz.

**Küre üzerindeki sürükleme kuvveti (Stokes yasası):**

$$
\boxed{F_D = 3\pi\mu VD}, \qquad C_D = \frac{24}{Re}\quad(Re < 1)
$$

## 2. Viskoz olmayan akış bölgeleri (Euler denklemi), $Re \gg 1$

Duvardan uzak bölgelerde viskoz terim ihmal edilir:

$$
\rho\frac{D\vec V}{Dt} = -\nabla P + \rho\vec g
$$

Bir akım çizgisi boyunca integre edilince **Bernoulli denklemi** elde edilir.

## 3. Dönümsüz (potansiyel) akış

Akış hem viskoz değil hem de dönümsüzse ($\nabla\times\vec V = 0$), hız bir **hız potansiyelinin** gradyeni olarak yazılabilir:

$$
\vec V = \nabla\phi, \qquad \nabla^2\phi = 0\ (\text{Laplace denklemi})
$$

- Bernoulli denklemi bu durumda **akım çizgisinden bağımsız olarak** bütün akış alanında geçerlidir.
- Laplace denklemi doğrusal olduğundan çözümler **süperpoze** edilebilir.

**Temel düzlemsel potansiyel akışlar:**

| Akış | $\phi$ | $\psi$ |
|---|---|---|
| Düzgün akış | $Vx$ | $Vy$ |
| Kaynak / kuyu | $\dfrac{\dot V/L}{2\pi}\ln r$ | $\dfrac{\dot V/L}{2\pi}\theta$ |
| Çizgisel girdap | $\dfrac{\Gamma}{2\pi}\theta$ | $-\dfrac{\Gamma}{2\pi}\ln r$ |
| Dublet | $\dfrac{K\cos\theta}{r}$ | $-\dfrac{K\sin\theta}{r}$ |

Düzgün akış + dublet = **silindir etrafında akış**; buna girdap eklenirse dönen silindirde **kaldırma kuvveti** (Magnus etkisi) elde edilir: $F_L = \rho V\Gamma$ (Kutta–Joukowski).

> **d'Alembert paradoksu:** Potansiyel akış teorisi silindir üzerinde **sıfır sürükleme** verir; gerçekte sınır tabaka ayrılması nedeniyle sürükleme vardır.

## 4. Sınır tabaka yaklaşımı

Yüksek Re'de viskoz etkiler duvara yakın **ince bir tabakaya** sıkışır. Bu tabakada:

- $\partial P/\partial y \approx 0$: basınç, dış akıştan sınır tabakaya aynen geçer.
- Akış yönündeki ikinci türevler ihmal edilir.

**Düz levhada sınır tabaka kalınlığı:**

$$
\text{Laminer: } \frac{\delta}{x} = \frac{4{,}91}{\sqrt{Re_x}}, \qquad \text{Türbülanslı: } \frac{\delta}{x} \approx \frac{0{,}38}{Re_x^{1/5}}
$$

Levhada laminerden türbülansa geçiş: $Re_{x,kr} \approx 5\times10^5$.

**Ters basınç gradyeni** ($dP/dx > 0$): Sınır tabakadaki akışkan yavaşlar; duvardaki hız gradyeni sıfıra düşünce **akış ayrılması** olur. Bu, cisimlerin arkasında iz bölgesi ve basınç sürüklemesi oluşturur.

**Sınır tabaka kalınlık tanımları:** $\delta$ (hızın %99'a ulaştığı yer), $\delta^*$ (yer değiştirme kalınlığı), $\theta$ (momentum kalınlığı).
