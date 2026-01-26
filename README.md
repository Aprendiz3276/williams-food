# Williams Food - Link Bio & Digital Menu

Modern Link Bio and Digital Menu platform for Williams Food. Built with React, TypeScript, Tailwind CSS, and Vite.

![Williams Food](https://img.shields.io/badge/status-active-success)
![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- Modern Link Bio design
- Digital menu management
- Responsive design
- TypeScript support
- Tailwind CSS styling
- Component library (Radix UI)

## 📋 Prerequisites

- Node.js 16+ 
- npm or pnpm

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── app/                 # Main application components
│   ├── components/      # React components
│   └── App.tsx         # Root component
├── styles/             # CSS stylesheets
├── assets/             # Images and media
├── config.ts           # Application configuration
└── main.tsx           # Entry point
```

## 🔧 Configuration

Environment variables are configured in `.env` files:

```bash
# .env.example
VITE_API_URL=https://api.williamsfood.com
VITE_APP_NAME=Williams Food
VITE_ENVIRONMENT=production
VITE_DOMAIN=williamsfood.com
```

For local development, create a `.env.local` file.

## 🚀 Deployment

### Vercel

1. Push to GitHub repository
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### DNS Configuration (GoDaddy)

Update your domain's nameservers:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Or use CNAME records if preferred.

## 📦 Dependencies

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Headless component library
- **React Hook Form** - Form handling
- **Recharts** - Data visualization

## 📄 License

MIT License - See [LICENSE](./LICENSE) file for details

## 🔗 References

- [Figma Design](https://www.figma.com/design/VD4MmibiZVzNdQLql1zaFX/Link-Bio-Design-for-Williams-Food)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 📝 Notes

This project was generated from a Figma design. For detailed guidelines, see [Guidelines](./guidelines/Guidelines.md).

---

**Last Updated:** January 12, 2026