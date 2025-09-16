# Icons

This folder contains icon files (SVG, PNG, or other formats) for your Angular application.

## Usage in Angular

### SVG Icons in Templates:
```html
<img src="assets/icons/icon-name.svg" alt="Icon" class="icon" />
```

### Using Icons in Styles:
```css
.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
```

### Dynamic Icon Loading:
```typescript
export class YourComponent {
  getIconPath(iconName: string): string {
    return `assets/icons/${iconName}.svg`;
  }
}
```

## Best Practices

- Use consistent icon sizes (e.g., 16px, 24px, 32px)
- Use SVG format for scalable icons
- Follow a consistent naming convention
- Consider using icon libraries like Angular Material Icons
