# Production-Ready React Portfolio

A modern, fully responsive portfolio website built with React, Vite, and Tailwind CSS featuring smooth animations, unique gradient designs, and optimized performance.

## 🚀 Features

- ⚡ Built with Vite for lightning-fast development
- ⚛️ React 18 with modern hooks
- 🎨 Tailwind CSS with custom design system
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🌈 Unique gradient color scheme
- 💎 Glass morphism effects
- 🚀 Production-ready build configuration

## 🛠️ Tech Stack

- **Frontend**: React 18.3
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: React Icons 5

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ },
  accent: { /* Your accent colors */ }
}
```

### Content
Update the following files to customize content:
- `src/components/Hero.jsx` - Hero section
- `src/components/About.jsx` - About section
- `src/components/Skills.jsx` - Skills section
- `src/components/Projects.jsx` - Projects showcase
- `src/components/Contact.jsx` - Contact information

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using React + Tailwind CSS
