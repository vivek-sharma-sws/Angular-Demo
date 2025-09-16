# SVG Images

This folder contains SVG (Scalable Vector Graphics) files for your Angular application.

## Usage in Angular

### In Component Templates:
```html
<img src="assets/images/svg/your-image.svg" alt="Description" />
```

### In Component Styles:
```css
.background {
  background-image: url('assets/images/svg/your-image.svg');
}
```

### In Component TypeScript:
```typescript
export class YourComponent {
  imagePath = 'assets/images/svg/your-image.svg';
}
```

## Best Practices

- Use descriptive filenames (e.g., `user-profile-icon.svg`)
- Keep file sizes optimized
- Use consistent naming conventions
- Consider using Angular's `DomSanitizer` for dynamic SVG content
