# Quality Assurance Checklist

## 📱 Mobile Responsiveness

### Viewport Testing
- [ ] **360px width**: No horizontal scroll, all content visible
- [ ] **400px width**: Layout adapts properly
- [ ] **768px width**: Tablet layout works correctly
- [ ] **1024px+ width**: Desktop layout displays properly

### Touch Interactions
- [ ] **Navigation menu**: Mobile hamburger menu opens/closes
- [ ] **Touch targets**: All buttons and links are at least 44px
- [ ] **Form inputs**: Easy to tap and interact with
- [ ] **Smooth scrolling**: Anchor links work on mobile

## ⌨️ Keyboard Navigation

### Tab Order
- [ ] **Skip link**: Appears on first tab, focuses main content
- [ ] **Navigation**: All nav links reachable with Tab
- [ ] **Menu cards**: Focusable and have visible focus indicators
- [ ] **Form fields**: Proper tab order through all inputs
- [ ] **Buttons**: All buttons reachable and focusable

### Focus Management
- [ ] **Visible focus**: All interactive elements show focus outline
- [ ] **Mobile nav**: Focus trapped when menu is open
- [ ] **Escape key**: Closes mobile navigation
- [ ] **Form submission**: Focus returns to submit button after validation

## 📝 Form Functionality

### Validation
- [ ] **Required fields**: Name, email, message show errors when empty
- [ ] **Email format**: Invalid email addresses show error message
- [ ] **Real-time validation**: Errors clear when field becomes valid
- [ ] **Submit state**: Button shows "Sending..." during submission
- [ ] **Success message**: "Thanks!" appears after successful submission
- [ ] **Error handling**: Network errors show appropriate message

### Accessibility
- [ ] **Labels**: All form fields have associated labels
- [ ] **Error announcements**: Screen readers announce validation errors
- [ ] **Required indicators**: Asterisks (*) indicate required fields
- [ ] **Form status**: Success/error messages are announced

## 🖼️ Images and Media

### Image Optimization
- [ ] **Alt text**: All images have descriptive alt attributes
- [ ] **Decorative images**: Use empty alt="" for decorative elements
- [ ] **Dimensions**: Images have width/height attributes
- [ ] **Loading**: Non-critical images use loading="lazy"
- [ ] **Decoding**: Images use decoding="async"

### Performance
- [ ] **File sizes**: Images are optimized for web
- [ ] **Format**: Using appropriate formats (WebP, AVIF when supported)
- [ ] **Responsive**: Images scale properly on all devices

## 🏷️ SEO and Metadata

### Head Tags
- [ ] **Title**: Unique, descriptive title under 60 characters
- [ ] **Description**: Meta description 150-160 characters
- [ ] **Viewport**: Proper viewport meta tag
- [ ] **Favicon**: Favicon link present and working
- [ ] **Open Graph**: og:title, og:description, og:image present
- [ ] **Twitter Cards**: Twitter meta tags present

### Content Structure
- [ ] **H1**: Exactly one H1 per page
- [ ] **Heading hierarchy**: Proper H1 > H2 > H3 structure
- [ ] **Semantic HTML**: Using header, nav, main, section, footer
- [ ] **Landmarks**: Proper ARIA landmarks for screen readers

## 🎨 Visual Design

### Theme Consistency
- [ ] **Colors**: Dark theme with light blue accents throughout
- [ ] **Typography**: Consistent font sizes and line heights
- [ ] **Spacing**: Consistent padding and margins
- [ ] **Borders**: 1px borders using theme border color
- [ ] **Shadows**: Consistent shadow styles

### Interactive States
- [ ] **Hover effects**: Buttons and links have hover states
- [ ] **Focus states**: Visible focus indicators on all interactive elements
- [ ] **Active states**: Buttons show pressed state
- [ ] **Loading states**: Form shows loading during submission

## ⚡ Performance

### Lighthouse Scores
- [ ] **Performance**: ≥ 90
- [ ] **Accessibility**: ≥ 95
- [ ] **Best Practices**: ≥ 90
- [ ] **SEO**: ≥ 90

### Core Web Vitals
- [ ] **LCP**: Largest Contentful Paint < 2.5s
- [ ] **FID**: First Input Delay < 100ms
- [ ] **CLS**: Cumulative Layout Shift < 0.1

### Optimization
- [ ] **CSS**: Minified or optimized
- [ ] **JavaScript**: Deferred loading
- [ ] **Fonts**: Preconnected and optimized loading
- [ ] **Images**: Properly sized and compressed

## 🔍 Browser Testing

### Desktop Browsers
- [ ] **Chrome**: Latest version
- [ ] **Firefox**: Latest version
- [ ] **Safari**: Latest version
- [ ] **Edge**: Latest version

### Mobile Browsers
- [ ] **Chrome Mobile**: iOS and Android
- [ ] **Safari Mobile**: iOS
- [ ] **Samsung Internet**: Android
- [ ] **Firefox Mobile**: iOS and Android

## 🧪 Functionality Testing

### Navigation
- [ ] **Smooth scrolling**: Anchor links scroll smoothly
- [ ] **Mobile menu**: Opens, closes, and navigates properly
- [ ] **Brand link**: Returns to top of page
- [ ] **External links**: Open in new tab (if any)

### Content
- [ ] **Menu items**: All 6 menu items display correctly
- [ ] **Contact info**: Address, phone, email, hours are accurate
- [ ] **About section**: Content is readable and well-formatted
- [ ] **Footer**: Copyright year updates automatically

## 📊 Current Lighthouse Results

*Run Lighthouse audit and record results here:*

- **Performance**: ___/100
- **Accessibility**: ___/100
- **Best Practices**: ___/100
- **SEO**: ___/100

### Issues Found
*List any issues discovered during testing:*

1. 
2. 
3. 

### Recommendations
*List any improvements to consider:*

1. 
2. 
3. 

---

**Last Updated**: [Date]
**Tested By**: [Name]
**Browser/Device**: [Details]
