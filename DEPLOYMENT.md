# GitHub Pages Deployment Guide

Bu proje GitHub Pages üzerinde otomatik olarak yayınlanacak şekilde yapılandırılmıştır.

## Otomatik Yayınlama (Önerilen)

### 1. GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluşturun
2. Repository adını seçin (örn: `phishing-simulator`)

### 2. Projeyi GitHub'a Yükleme

Terminal'de proje klasöründe şu komutları çalıştırın:

```bash
# Git repository başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Interactive Phishing Simulator"

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub repository'yi ekle (YOUR_USERNAME ve YOUR_REPO_NAME'i değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# GitHub'a yükle
git push -u origin main
```

### 3. GitHub Pages'i Aktifleştirme

1. GitHub'da repository'nize gidin
2. **Settings** (Ayarlar) sekmesine tıklayın
3. Sol menüden **Pages** seçeneğine tıklayın
4. **Source** bölümünde **GitHub Actions** seçeneğini seçin
5. Ayarları kaydedin

### 4. Otomatik Yayınlama

- Her `main` branch'ine push yaptığınızda, GitHub Actions otomatik olarak:
  - Projeyi build eder
  - Statik dosyaları oluşturur
  - GitHub Pages'e yayınlar

### 5. Site Adresiniz

Yayınlandıktan sonra siteniz şu adreste olacak:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Not:** İlk yayınlama 1-2 dakika sürebilir. Sonraki güncellemeler genellikle daha hızlıdır.

## Manuel Yayınlama

Eğer otomatik yayınlama kullanmak istemiyorsanız:

```bash
# Projeyi build et
npm run build

# 'out' klasörü statik dosyaları içerir
# Bu klasörün içeriğini GitHub Pages branch'inize yükleyin
```

## Sorun Giderme

### Build Hataları

Eğer GitHub Actions'da build hatası alırsanız:

1. **Actions** sekmesine gidin
2. Başarısız workflow'u açın
3. Hata mesajlarını kontrol edin
4. Genellikle dependency sorunları olabilir, `package.json`'ı kontrol edin

### Site Görünmüyor

1. GitHub Pages ayarlarını kontrol edin
2. Actions sekmesinde deployment'ın tamamlandığından emin olun
3. Birkaç dakika bekleyin (DNS propagation için)
4. Tarayıcı cache'ini temizleyin

### Yol (Path) Sorunları

Proje `trailingSlash: true` ile yapılandırılmıştır, bu GitHub Pages ile uyumludur.

## Güncelleme

Kod değişikliklerinden sonra:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

GitHub Actions otomatik olarak yeni versiyonu yayınlayacaktır.
