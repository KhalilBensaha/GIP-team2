# GDG Portfolio Generator

A simple and modern portfolio generator for GDG community members.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📖 About

This is a portfolio generator that helps GDG members create professional portfolios quickly. Built with Next.js 16 and modern web technologies.

## ✨ Features

- 4-step portfolio builder
- Google sign-in integration
- Guest access (no login required)
- Mobile responsive design
- Modern UI with shadcn/ui components

## 🎨 Pages

- **Home** (`/`) - Landing page
- **Login** (`/login`) - Sign in with Google or continue as guest
- **Signup** (`/signup`) - Create account with Google
- **Builder** (`/builder`) - Multi-step portfolio creation
  - Step 1: Personal Information
  - Step 2: Skills & Experience
  - Step 3: Projects
  - Step 4: Review
  - Preview: See your portfolio

## 🛠️ Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod validation

## 📁 Project Structure

```
├── app/                  # Pages & routes
│   ├── builder/         # Portfolio builder steps
│   ├── login/           # Login page
│   ├── signup/          # Signup page
│   └── page.tsx         # Homepage
├── components/
│   ├── ui/              # UI components
│   ├── auth-card.tsx    # Login/Signup card
│   ├── header.tsx       # Navigation
│   └── footer.tsx       # Footer
├── hooks/               # Custom hooks
├── lib/                 # Utilities
└── public/              # Images & assets
```

## 🎯 How to Use

1. Visit the homepage
2. Click "Get Started" or "Login"
3. Sign in with Google or continue as guest
4. Follow the 4-step builder:
   - Add your info
   - List your skills
   - Showcase projects
   - Review & export
5. Download or share your portfolio

## 🔧 Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check code quality
```


## 🤝 Contributing

1. Fork the repo
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

MIT License

## 👥 Team

GIP Team 2 - GDG Community

---

Made with ❤️ by GDG
