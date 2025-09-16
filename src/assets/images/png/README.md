# PNG Images

This folder contains PNG (Portable Network Graphics) files for your Angular application.

## Usage in Angular

### In Component Templates:
```html
<img src="assets/images/png/your-image.png" alt="Description" />
```

### In Component Styles:
```css
.background {
  background-image: url('assets/images/png/your-image.png');
}
```

### In Component TypeScript:
```typescript
export class YourComponent {
  imagePath = 'assets/images/png/your-image.png';
}
```

## Best Practices

- Use descriptive filenames (e.g., `hero-banner.png`)
- Optimize images for web (consider using tools like TinyPNG)
- Use appropriate image dimensions for your use case
- Consider using WebP format for better compression when possible
