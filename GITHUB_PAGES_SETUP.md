# GitHub Pages Kurulum Rehberi

## Hata: "Get Pages site failed"

Bu hata, GitHub Pages'in henüz aktifleştirilmemiş olmasından kaynaklanır. Şu adımları izleyin:

## Adım 1: GitHub Pages'i Aktifleştirme

1. **GitHub Repository'nize gidin**
   - Repository ana sayfasında **Settings** (Ayarlar) sekmesine tıklayın

2. **Pages Ayarlarına Gidin**
   - Sol menüden **Pages** seçeneğine tıklayın
   - Veya direkt olarak: `https://github.com/KULLANICI_ADI/REPO_ADI/settings/pages`

3. **Source'u Ayarlayın**
   - **Source** bölümünde dropdown menüyü açın
   - **GitHub Actions** seçeneğini seçin
   - **Save** butonuna tıklayın

## Adım 2: Workflow'u Tekrar Çalıştırma

Pages aktifleştirildikten sonra:

1. **Actions sekmesine gidin**
   - Repository'de **Actions** sekmesine tıklayın
   - Başarısız workflow'u bulun
   - Sağ üstteki **Re-run jobs** butonuna tıklayın
   - Veya yeni bir commit yapın (workflow otomatik çalışacak)

## Adım 3: Doğrulama

1. **Actions sekmesinde kontrol edin**
   - Workflow'un başarıyla tamamlandığını görün
   - Yeşil tik işareti görünmelidir

2. **Pages ayarlarını kontrol edin**
   - Settings → Pages'e tekrar gidin
   - Site URL'inizi göreceksiniz: `https://KULLANICI_ADI.github.io/REPO_ADI/`

## Alternatif: Manuel Kurulum

Eğer GitHub Actions çalışmazsa, manuel olarak da yayınlayabilirsiniz:

### Yöntem 1: gh-pages Branch Kullanma

```bash
# Build yapın
npm run build

# gh-pages branch oluşturun ve yükleyin
npm install -g gh-pages
gh-pages -d out
```

### Yöntem 2: GitHub UI ile

1. Settings → Pages
2. Source: **Deploy from a branch** seçin
3. Branch: **main** seçin
4. Folder: **/ (root)** seçin
5. Save

**Not:** Bu yöntem için `out` klasörünü root'ta tutmanız gerekir.

## Sorun Giderme

### "Not Found" Hatası
- Pages'in aktifleştirildiğinden emin olun
- Repository'nin public olduğundan emin olun (veya GitHub Pro kullanıyorsanız private de olabilir)

### Build Başarısız
- `package.json` dosyasının doğru olduğundan emin olun
- Actions sekmesinde build loglarını kontrol edin

### Site Görünmüyor
- Birkaç dakika bekleyin (DNS propagation)
- Tarayıcı cache'ini temizleyin
- Incognito/Private modda deneyin

## İletişim

Sorun devam ederse:
1. Actions sekmesindeki hata loglarını kontrol edin
2. GitHub Pages dokümantasyonunu inceleyin: https://docs.github.com/en/pages
