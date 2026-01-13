# Project File Tree

```
PresentationInteraktif/
├── .gitignore
├── FILE_TREE.md
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
│
├── app/
│   ├── globals.css              # Global Tailwind styles
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page with 3 scenario cards
│   │
│   ├── fake-login/
│   │   └── page.tsx             # Fake Login Attack scenario
│   │
│   ├── urgent-message/
│   │   └── page.tsx             # Urgent Message Attack scenario
│   │
│   └── account-verification/
│       └── page.tsx             # Account Verification Scam scenario
│
└── components/
    └── Disclaimer.tsx           # Reusable disclaimer component
```

## File Descriptions

### Configuration Files
- **package.json** - Project dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration for Tailwind
- **next.config.js** - Next.js configuration
- **.gitignore** - Git ignore patterns

### App Directory (Next.js App Router)
- **app/layout.tsx** - Root layout component with HTML structure
- **app/globals.css** - Global CSS with Tailwind directives
- **app/page.tsx** - Home page displaying three scenario cards

### Scenario Pages
- **app/fake-login/page.tsx** - Fake login form with credential harvesting simulation
- **app/urgent-message/page.tsx** - Urgent message with countdown timer and psychological pressure
- **app/account-verification/page.tsx** - Personal information verification form

### Components
- **components/Disclaimer.tsx** - Educational disclaimer shown on every page

## Key Features

Each scenario page includes:
1. **Attack Phase** - Realistic phishing simulation
2. **Result Screen** - Educational content explaining:
   - What information was targeted
   - Why the attack works
   - Real-world consequences
   - Detection and prevention methods
3. **Data Safety** - Clear messaging that no data is saved
