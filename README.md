# Interactive Phishing Simulator

An educational tool designed to teach users about phishing attacks through safe, interactive simulations.

## ⚠️ Important Notice

This is a **harmless educational demo** designed ONLY for awareness and training purposes. The application:
- Does NOT store any data
- Does NOT send network requests
- Does NOT log, persist, or track user input
- All inputs exist only in React state and are discarded immediately after each scenario

## Features

Three interactive phishing scenarios:

1. **Fake Login Attack** - Experience how attackers steal credentials through fake login pages
2. **Urgent Message Attack** - Learn how psychological pressure is used to manipulate victims
3. **Account Verification Scam** - Discover how personal information is harvested through fake verification forms

Each scenario includes:
- Realistic phishing simulation
- Educational result screen explaining the attack
- Prevention tips and detection methods
- Clear disclaimer that no data is saved

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically build and deploy on every push to `main` branch

3. **Your site will be available at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
# The 'out' directory contains the static files
# Upload the contents of 'out' to your GitHub Pages branch
```

## Project Structure

```
├── app/
│   ├── page.tsx                    # Home page with scenario cards
│   ├── fake-login/
│   │   └── page.tsx                # Fake login attack scenario
│   ├── urgent-message/
│   │   └── page.tsx                # Urgent message attack scenario
│   ├── account-verification/
│   │   └── page.tsx                # Account verification scam scenario
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   └── Disclaimer.tsx              # Educational disclaimer component
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Usage

1. Start on the home page to see all three scenarios
2. Click on any scenario card to begin
3. Interact with the simulated phishing attempt
4. Review the educational content explaining the attack
5. Learn how to detect and prevent similar attacks

## Educational Purpose

This simulator is designed for:
- Security awareness training
- Educational presentations
- Understanding phishing techniques
- Learning detection and prevention methods

## License

This project is for educational purposes only.
