# Basit GitHub Pages Deployment

GitHub Actions seçeneği görünmüyorsa, bu basit yöntemi kullanın:

## Adım 1: gh-pages Paketini Yükleyin

```bash
npm install
```

## Adım 2: GitHub Pages'i Aktifleştirin (Manuel)

1. GitHub'da repository'nize gidin
2. **Settings** → **Pages**
3. **Source** bölümünde:
   - **Deploy from a branch** seçin
   - **Branch**: `gh-pages` seçin
   - **Folder**: `/ (root)` seçin
   - **Save** butonuna tıklayın

## Adım 3: Deploy Edin

```bash
npm run deploy
```

Bu komut:
1. Projeyi build eder
2. `out` klasörünü `gh-pages` branch'ine yükler
3. GitHub Pages otomatik olarak yayınlar

## Güncelleme

Kod değişikliklerinden sonra tekrar deploy edin:

```bash
npm run deploy
```

## Site Adresiniz

Deploy'dan birkaç dakika sonra siteniz şu adreste olacak:
```
https://KULLANICI_ADI.github.io/REPO_ADI/
```

## Sorun Giderme

### "gh-pages: command not found"
```bash
npm install
```

### Build hatası
```bash
npm run build
# Hataları kontrol edin
```

### Deploy başarısız
- GitHub'da repository'nize yazma izniniz olduğundan emin olun
- GitHub token'ınızın geçerli olduğundan emin olun
