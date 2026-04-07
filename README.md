# Koushik Raju S R - Futuristic Vanilla Portfolio

## 🚀 Pure HTML, CSS & JavaScript Portfolio

This is a mind-blowing futuristic portfolio built with **ZERO frameworks** - just pure vanilla HTML, CSS, and JavaScript!

## ✨ Features

- **Loading Screen** with animated progress bar
- **Hero Section** with typewriter effect and floating particles
- **3D Flip Card** in About section
- **Animated Skills** with progress bars
- **Project Cards** with 3D tilt effect and modal
- **Timeline** for experience
- **Contact Form** with validation
- **Fully Responsive** on all devices
- **Smooth Scroll** animations
- **Futuristic Design** with cyberpunk theme

## 🎨 Theme

- **Colors**: Electric Blue (#00D4FF), Neon Purple (#A855F7), Dark Background (#0a0a0f)
- **Fonts**: Orbitron (headings), Inter (body)
- **Style**: Cyberpunk / Glassmorphism / Futuristic

## 📁 File Structure

```
vanilla-portfolio/
├── index.html       # Main HTML structure
├── styles.css       # All styling and animations
├── script.js        # All JavaScript functionality
├── mock-data.js     # Portfolio data
└── README.md        # This file
```

## 🔧 How to Use

1. **Open the portfolio**:
   - Simply open `index.html` in any modern browser
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Then open http://localhost:8000
     ```

2. **Update your information**:
   - Edit `mock-data.js` to update:
     - Personal info (name, email, phone)
     - LinkedIn and GitHub URLs (lines marked with CHANGE THIS)
     - Skills and levels
     - Projects details and links
     - Experience timeline

## 📝 Customization Guide

### Update Contact Information

**File**: `mock-data.js` (Lines 7-8)

```javascript
linkedin: "https://linkedin.com/in/YOUR-USERNAME",  // Update this
github: "https://github.com/YOUR-USERNAME",         // Update this
```

### Update Project Links

**File**: `mock-data.js` (Projects array)

```javascript
demoLink: "https://your-live-demo.com",      // Update
githubLink: "https://github.com/you/repo",   // Update
```

### Change Colors

**File**: `styles.css` (CSS Variables at top)

```css
:root {
    --primary-cyan: #00D4FF;    /* Change primary color */
    --primary-purple: #A855F7;  /* Change secondary color */
    --bg-dark: #0a0a0f;        /* Change background */
}
```

### Add New Skills

**File**: `mock-data.js`

```javascript
const skills = [
  { name: "YourSkill", level: 85, category: "frontend" },
  // Add more skills here
];
```

Categories: `frontend`, `database`, `cloud`, `testing`

## 🌐 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Pure vanilla JS (no frameworks = faster load)
- CSS animations (hardware accelerated)
- Lazy loading for images
- Optimized for 60fps animations

## 🎯 Key Features Explained

### 1. Typewriter Effect
Pure JavaScript implementation with dynamic text rotation

### 2. 3D Card Flip
CSS transforms with `perspective` and `rotateY`

### 3. Scroll Animations
Intersection Observer API for performance

### 4. Floating Particles
Dynamic particle generation with CSS animations

### 5. Smooth Scrolling
Native CSS `scroll-behavior: smooth`

## 🔥 No Dependencies!

- ❌ No React
- ❌ No jQuery
- ❌ No Bootstrap
- ❌ No npm packages
- ✅ Just pure HTML, CSS, JavaScript!

## 📞 Support

All data can be edited in `mock-data.js` - no coding required!

For advanced customization:
- **HTML**: Edit structure in `index.html`
- **Styling**: Modify `styles.css`
- **Behavior**: Update `script.js`

## 🚀 Deployment

Deploy to any static hosting:
- GitHub Pages
- Netlify
- Vercel  
- Any web server

Just upload all files and you're done!

---

**Built with ❤️ using HTML, CSS, and JavaScript**