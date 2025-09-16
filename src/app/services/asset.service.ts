import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private readonly assetsBasePath = 'assets';

  /**
   * Get the full path for an image asset
   * @param category - The category of the image (svg, png, icons, illustrations)
   * @param filename - The filename of the image
   * @returns The full path to the asset
   */
  getImagePath(category: 'svg' | 'png' | 'icons' | 'illustrations', filename: string): string {
    const categoryPath = category === 'svg' || category === 'png' ? `images/${category}` : category;
    return `${this.assetsBasePath}/${categoryPath}/${filename}`;
  }

  /**
   * Get the full path for an SVG image
   * @param filename - The filename of the SVG
   * @returns The full path to the SVG asset
   */
  getSvgPath(filename: string): string {
    return this.getImagePath('svg', filename);
  }

  /**
   * Get the full path for a PNG image
   * @param filename - The filename of the PNG
   * @returns The full path to the PNG asset
   */
  getPngPath(filename: string): string {
    return this.getImagePath('png', filename);
  }

  /**
   * Get the full path for an icon
   * @param filename - The filename of the icon
   * @returns The full path to the icon asset
   */
  getIconPath(filename: string): string {
    return this.getImagePath('icons', filename);
  }

  /**
   * Get the full path for an illustration
   * @param filename - The filename of the illustration
   * @returns The full path to the illustration asset
   */
  getIllustrationPath(filename: string): string {
    return this.getImagePath('illustrations', filename);
  }

  /**
   * Check if an asset exists (basic validation)
   * @param path - The path to check
   * @returns True if the path looks valid
   */
  isValidAssetPath(path: string): boolean {
    return path.startsWith(this.assetsBasePath) && 
           (path.endsWith('.svg') || path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg'));
  }
}
