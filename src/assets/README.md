# Assets Directory

This directory contains all static assets for your Angular application.

## Directory Structure

```
src/assets/
├── images/
│   ├── svg/          # SVG images and graphics
│   └── png/          # PNG images and photos
├── icons/            # Icon files (SVG, PNG, etc.)
├── illustrations/    # Illustration files
└── README.md         # This file
```

## Usage in Angular Components

### 1. In Component Templates

```html
<!-- SVG Image -->
<img src="assets/images/svg/logo.svg" alt="Logo" />

<!-- PNG Image -->
<img src="assets/images/png/hero-banner.png" alt="Hero Banner" />

<!-- Icon -->
<img src="assets/icons/user-icon.svg" alt="User" class="icon" />
```

### 2. In Component Styles

```css
.hero-section {
  background-image: url('assets/images/png/hero-banner.png');
  background-size: cover;
  background-position: center;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
```

### 3. In Component TypeScript

```typescript
export class YourComponent {
  logoPath = 'assets/images/svg/logo.svg';
  heroImage = 'assets/images/png/hero-banner.png';
  
  getImagePath(imageName: string): string {
    return `assets/images/png/${imageName}.png`;
  }
}
```

## Best Practices

### File Organization
- Use descriptive filenames (e.g., `user-profile-icon.svg` instead of `icon1.svg`)
- Group related assets in appropriate subdirectories
- Use consistent naming conventions (kebab-case recommended)

### SVG Files
- Optimize SVG files for web use
- Use `currentColor` for fill/stroke to inherit text color
- Consider using Angular's `DomSanitizer` for dynamic SVG content

### PNG Files
- Optimize images for web (consider using tools like TinyPNG)
- Use appropriate dimensions for your use case
- Consider using WebP format for better compression

### Performance
- Lazy load images when possible
- Use appropriate image formats for different use cases
- Consider using Angular's built-in image optimization

## Adding New Assets

1. Place your files in the appropriate subdirectory
2. Use the correct path in your components (`assets/folder/file.ext`)
3. Ensure files are optimized for web use
4. Update this README if you add new subdirectories

## Build Configuration

The assets are automatically included in the build process through `angular.json`. All files in the `src/assets` directory will be copied to the `assets` directory in the build output.
