# Ders Anlatımları

Mühendislik dersleri ve dil dersleri için kişisel çalışma sitesi: konu anlatımları (Markdown + LaTeX formül), tekrar kartları (aralıklı tekrar), testler, kelime havuzu ve ders PDF'leri. Derleme gerekmez; GitHub Pages'te olduğu gibi çalışır.

**Canlı site:** https://hamzasvr3030-dotcom.github.io/ders-anlatim/

## İçerik

| Ders | Konu | Kart | PDF / kelime |
|---|---|---|---|
| Mekanizma Tekniği | 8 | 64 | 5 PDF |
| Mukavemet 1 | 8 | 62 | 6 PDF |
| Termodinamik | 8 | 69 | 2 PDF |
| Akışkanlar Mekaniği | 16 | 102 | 15 PDF |
| Makine Elemanları | 13 | 90 | 16 PDF |
| Malzeme | 8 | 67 | 8 PDF |
| Isıtma Havalandırma | 8 | 52 | 2 PDF |
| İngilizce (A1–B2) | 13 | 105 | 1593 kelime |
| Almanca (A1–B2) | 13 | 111 | 1561 kelime |

## Bilgisayarda açmak

`baslat.bat` dosyasına çift tıkla → tarayıcıda `http://localhost:8000` açılır.

## Klasör yapısı

```
dersler/
  dersler.json                 ← bütün derslerin listesi (grup, renk, açıklama)
  <ders-id>/
    ders.json                  ← konular, PDF'ler (dil derslerinde: dil, kelimeler)
    kartlar.json               ← tekrar kartları {konu, on, arka}
    konular/*.md               ← konu anlatımları
    pdf/*.pdf                  ← ders PDF'leri
    kelimeler/a1.tsv …         ← (dil dersleri) kelime<TAB>Türkçe<TAB>tür
```

## Özellikler

- **Sekmeler:** Konular · Tekrar kartları · Test · Kelime havuzu (dil) · PDF'ler
- **Tekrar kartları:** Leitner sistemi (yeni → 1 → 2 → 4 → 8 → 16 gün). İlerleme tarayıcıda saklanır.
- **Test:** Seçilen konulardan 4 şıklı çoktan seçmeli sorular.
- **Kelime havuzu:** Seviye filtresi, arama, tarayıcının sesli okuma özelliğiyle telaffuz.
- **Arama:** Bütün derslerin bütün konularında tam metin arama.
- Açık/koyu tema, mobil uyumlu.

## Yeni ders eklemek

1. `dersler/dersler.json`'a kayıt ekle (`id`, `grup`, `ad`, `kod`, `aciklama`, `renk`).
2. `dersler/<id>/ders.json` oluştur: `konular` (id, baslik, ozet, dosya, isteğe bağlı pdf, bolum) ve `pdfler`.
3. Konu dosyalarını Markdown olarak yaz; formüller `$...$` ve `$$...$$`.
4. İsteğe bağlı `kartlar.json`: `{ "kartlar": [{ "konu": "<konu-id>", "on": "soru", "arka": "cevap" }] }`.
