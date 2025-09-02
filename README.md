# Nova Bistro Website

A modern, responsive restaurant website built with vanilla HTML, CSS, and JavaScript. Features a dark theme with light blue accents, mobile-first design, and comprehensive accessibility features.

## 🍽️ About

Nova Bistro is a fictional modern restaurant located in Pottstown, PA. This website showcases the restaurant's menu, provides contact information, and includes a functional contact form.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom properties, Grid, Flexbox, modern selectors
- **Vanilla JavaScript** - ES6+ features, async/await, form handling
- **No frameworks or build tools** - Pure web standards

## 🚀 Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

```bash
# Optional: Serve with a local server for better development experience
python -m http.server 8000
# or
npx serve .
```

### File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # Interactive features and form handling
├── netlify.toml        # Netlify deployment configuration
├── vercel.json         # Vercel deployment configuration
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure for search engines
└── README.md           # This file
```

## 🌐 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Deploy with one click!

**Manual deployment:**
1. Drag and drop the project folder to Netlify's deploy area
2. Your site will be live instantly

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

**GitHub integration:**
1. Connect your repository to Vercel
2. Automatic deployments on every push

## ♿ Accessibility Features

- **WCAG AA compliant** - Meets accessibility standards
- **Keyboard navigation** - Full keyboard support
- **Screen reader friendly** - Proper ARIA labels and semantic HTML
- **Skip links** - Quick navigation for assistive technology
- **Focus management** - Visible focus indicators
- **Color contrast** - High contrast ratios for readability

## 📱 Performance Goals

Target Lighthouse scores:
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

### Performance Optimizations

- Minimal CSS and JavaScript
- Efficient selectors and animations
- Optimized images with proper dimensions
- Lazy loading for non-critical content
- Efficient font loading with preconnect

## 🎨 Design Features

- **Dark theme** with light blue accent colors
- **Mobile-first responsive design**
- **Fluid typography** with clamp() functions
- **CSS Grid utility** for flexible layouts
- **Smooth animations** and hover effects
- **Modern glassmorphism** effects

## 📋 Testing

### Mobile Testing
- Test on devices with widths 360px-400px
- Ensure no horizontal scrolling
- Verify touch targets are at least 44px

### Keyboard Navigation
- Tab through all interactive elements
- Verify focus indicators are visible
- Test form submission with keyboard only

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔧 Customization

### Colors
Update CSS custom properties in `:root`:
```css
:root {
    --bg-primary: #0b0f14;
    --text-primary: #e6f0ff;
    --accent: #7cc3ff;
    /* ... */
}
```

### Content
- Update restaurant information in `index.html`
- Modify menu items in the menu section
- Change contact details and hours

### Form Integration
- Replace `YOUR_FORM_ID` in the form's `data-formspree` attribute
- Or implement your own form handler in `script.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please open a GitHub issue or contact the development team.


## Polish notes
- Added mobile hamburger navigation with accessible toggle.
- Strengthened hero CTAs and added a secondary button.
- Expanded menu items to make the demo more realistic.
- Implemented IntersectionObserver to highlight active nav section.
- Enhanced contact form UX with success/error feedback.
- Generated and compressed a new Open Graph image (`og-image.jpg`).
