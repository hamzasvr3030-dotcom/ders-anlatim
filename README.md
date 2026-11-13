# Ders Anlatımları

Konu anlatımlarını (Markdown + LaTeX formül) ve ders PDF'lerini bir arada sunan statik site. Derleme gerekmez; GitHub Pages'te olduğu gibi çalışır.

## Bilgisayarda açmak

`baslat.bat` dosyasına çift tıkla → tarayıcıda `http://localhost:8000` açılır.
(`index.html`'e doğrudan çift tıklamak çalışmaz; tarayıcı yerel dosyaları okumaya izin vermez.)

## Klasör yapısı

```
dersler/
  dersler.json              ← tüm derslerin listesi
  <ders-id>/
    ders.json               ← konular ve PDF'ler
    konular/01-....md       ← konu anlatımları
    pdf/....pdf             ← ders PDF'leri
```

## Yeni ders eklemek

1. `dersler/dersler.json` içine ekle:
   ```json
   { "id": "statik", "ad": "Statik", "kod": "MAK 101", "donem": "2026 Güz", "aciklama": "...", "renk": "#c2410c" }
   ```
2. `dersler/statik/ders.json` oluştur:
   ```json
   {
     "konular": [
       { "id": "01-kuvvetler", "baslik": "Kuvvet vektörleri", "ozet": "...", "dosya": "konular/01-kuvvetler.md",
         "pdf": "pdf/hafta1.pdf", "pdfBaslik": "1. hafta slaytı" }
     ],
     "pdfler": [ { "baslik": "1. hafta slaytı", "dosya": "pdf/hafta1.pdf" } ]
   }
   ```
   (`pdf` ve `pdfBaslik` isteğe bağlı: konunun başında kaynak PDF bağlantısı gösterir.)
3. Konu dosyalarını Markdown olarak yaz. Formüller: satır içi `$...$`, ayrı satır `$$...$$`. Not kutusu için `> **Not:** ...`.
