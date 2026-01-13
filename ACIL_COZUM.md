# Acil Çözüm - GitHub Pages Deployment

Repository URL'niz: `https://github.com/krkmzEge/interactive-phising-sim`

## ⚠️ ÖNEMLİ: Önce GitHub Pages'i Aktifleştirin!

### Adım 1: GitHub Pages'i Aktifleştirme (ZORUNLU)

1. Bu linke gidin: https://github.com/krkmzEge/interactive-phising-sim/settings/pages

2. **Source** bölümünde:
   - **Deploy from a branch** seçin
   - **Branch**: `gh-pages` seçin (henüz yoksa, deploy sonrası oluşacak)
   - **Folder**: `/ (root)` seçin
   - **Save** butonuna tıklayın

3. **ÖNEMLİ:** Pages aktifleştirildikten sonra birkaç saniye bekleyin.

### Adım 2: Deploy Komutunu Çalıştırın

Terminal'de şu komutu çalıştırın:

```bash
npm run deploy
```

Bu komut:
- ✅ Projeyi build eder
- ✅ `gh-pages` branch'ini oluşturur/yeniler
- ✅ GitHub'a yükler
- ✅ GitHub Pages otomatik yayınlar

### Adım 3: Site Adresiniz

Deploy'dan 1-2 dakika sonra siteniz şu adreste olacak:
```
https://krkmzege.github.io/interactive-phising-sim/
```

## Sorun Giderme

### "gh-pages branch not found" hatası
- Normal! İlk deploy'da branch otomatik oluşacak
- Sadece `npm run deploy` komutunu çalıştırın

### "404 Not Found" hatası
- GitHub Pages'in aktifleştirildiğinden emin olun
- Settings → Pages'de "gh-pages" branch'inin seçili olduğunu kontrol edin
- Birkaç dakika bekleyin (DNS propagation)

### Deploy başarılı ama site görünmüyor
- Tarayıcı cache'ini temizleyin
- Incognito/Private modda deneyin
- 2-3 dakika bekleyin

## Güncelleme

Kod değişikliklerinden sonra:

```bash
npm run deploy
```

Her deploy otomatik olarak yeni versiyonu yayınlar.
