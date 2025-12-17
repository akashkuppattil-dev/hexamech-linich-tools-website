# Product Images Setup Guide

## How to Add Product Images

Your website is configured to display 41 product images. Here's how to add them:

### Image File Structure
```
public/images/products/
├── 1-linich-auto-puller.jpg
├── 2-spot-welder-lcr-70.jpg
├── 3-automig-mw-250-xl-welder.jpg
├── 4-hydraulic-two-post-lift.jpg
├── 5-air-compressor-30l.jpg
├── ... (up to 41 files)
└── 41-tool-box-storage.jpg
```

### Product Numbering Map
The products are organized in the following order in `lib/products.ts`:

1. Linich 3100 Auto Puller
2. Linich Spot Welder LCR 70
3. AutoMig MW 250 XL MIG Welder
4. 4-Ton Hydraulic Two-Post Lift
5. Air Compressor 30L
6. Air Compressor 80L
7. Transmission Jack 1 Ton
8. Transmission Jack 2 Ton
9. Engine Crane 500KG
10. Hydraulic Press 20 Ton
... (continuing through 41)

### How to Upload Images

**Option 1: Direct File Upload**
1. Save your images with the naming format: `[NUMBER]-[product-name].jpg`
2. Place them in the `public/images/products/` directory
3. The images will automatically display on the website

**Option 2: Using External URLs**
1. If images are hosted online, update `lib/products.ts`
2. Replace the image path with your external URL
3. Example: `image: "https://your-cdn.com/product-1.jpg"`

### Image Requirements

**Recommended Specifications:**
- Format: JPG or PNG
- Dimensions: 500x500px (square images work best for product cards)
- File Size: 200-500KB per image
- Quality: High-resolution for professional appearance
- Background: Transparent or white background preferred

### Example Product Entry

```typescript
{
  id: "1",
  name: "Linich 3100 Auto Puller",
  sku: "LIN-3100",
  price: 85000,
  category: "special-tools",
  brand: "Generic Pro",
  image: "/images/products/1-linich-auto-puller.jpg", // <-- Image path here
  description: "...",
  specs: { ... },
  hsn: "8508",
  minOrderQty: 1,
  inStock: true,
}
```

### Where Images Display

The images appear in:
1. **Homepage** - Top Products Carousel
2. **Shop Page** - Product grid with multiple columns
3. **Product Detail Pages** - Large product image with zoom capability
4. **Product Cards** - Thumbnail previews

### Troubleshooting

**Images not showing?**
- Check file path spelling matches exactly
- Verify image file exists in `public/images/products/`
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for 404 errors

**Image quality issues?**
- Ensure image dimensions are at least 500x500px
- Check file size is optimized (not too large)
- Verify file format is JPG or PNG

### Next Steps

1. Prepare your 41 product images
2. Name them: `1-product-name.jpg` through `41-product-name.jpg`
3. Upload to `public/images/products/` directory
4. Images will automatically display across the website
5. Test on mobile and desktop to verify layout

All product data, categories, brands, and specifications are already configured and ready to display with your images!
