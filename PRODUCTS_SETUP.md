# Products & Categories Pages - Setup Guide

## Overview
Complete products page system with 4 oil categories, dynamic category pages, product cards, and FAQ sections. All pages are fully SEO-optimized with schema markup.

## Directory Structure

```
/app
├── /products
│   ├── page.js                    # Main products page
│   └── /[slug]
│       └── page.js                # Dynamic category pages
├── /layout.js                     # Root layout

/components
├── CategoryCard.js                # Category card component
├── ProductCard.js                 # Product card component
├── FAQSection.js                  # FAQ accordion component
├── Header.js                      # (existing)
└── Footer.js                      # (existing)

/data
├── categories.json                # Category and product data
└── products.json                  # (existing - can be removed)
```

## Pages Created

### 1. **Main Products Page** (`/products`)
- Hero section with CTA buttons
- 4x4 category grid
- "Why Choose Us" section
- Bulk orders CTA
- Full schema markup for CollectionPage
- SEO metadata

**URL**: `/products`
**Features**:
- Category discovery
- Easy navigation
- Mobile responsive
- SEO optimized

### 2. **Category Pages** (`/products/[slug]`)
- Dynamic route for each category
- Breadcrumb navigation
- Hero section with category icon
- Full category description
- Product grid (2 columns on desktop)
- 5 FAQ items with accordion functionality
- Related categories section
- CTA for bulk orders
- Multiple schema markups (Product, BreadcrumbList)

**URLs**:
- `/products/floral-oils`
- `/products/citrus-oils`
- `/products/herbal-oils`
- `/products/spice-wood-oils`

**Features**:
- Expandable FAQ items
- Related category links
- Product details display
- Full product information

## Components

### CategoryCard.js
```javascript
Props: { category }
- Displays category icon
- Clickable link to category page
- Hover effects
- Product count
```

### ProductCard.js
```javascript
Props: { product }
- Product name and botanical name
- Origin information
- Aroma profile
- Common uses badges
- Available pack sizes
- Inquire button
```

### FAQSection.js
```javascript
Props: { faqs, categoryName }
- Expandable accordion
- Smooth animations
- State management for open items
- Professional styling
```

## Data Structure

### Categories Data (`data/categories.json`)
Each category includes:
```json
{
  "id": "unique-id",
  "slug": "url-friendly-slug",
  "name": "Display Name",
  "description": "Short description",
  "longDescription": "Detailed description",
  "image": "/path/to/image",
  "icon": "emoji",
  "primaryColor": "#HexColor",
  "products": [
    {
      "id": "product-id",
      "name": "Product Name",
      "botanicalName": "Scientific name",
      "origin": "Location",
      "notes": "Aroma profile",
      "uses": ["Use 1", "Use 2"],
      "packSizes": ["10ml", "50ml"]
    }
  ],
  "faq": [
    {
      "question": "FAQ Question?",
      "answer": "Detailed answer..."
    }
  ]
}
```

## Color Scheme
Using website's existing colors:
- Primary Dark: `#164b35`
- Primary Darker: `#10281e`
- Text: `#263b2f`
- Light Text: `#58705f`
- Border: `#dfe8de`
- Background Light: `#eef7ee`
- Background: `#f8faf5`

## SEO Features

### Meta Tags
- Dynamic titles for each category
- Comprehensive descriptions
- Keywords optimization
- OpenGraph tags

### Schema Markup
1. **CollectionPage** - Main products page
2. **BreadcrumbList** - Navigation hierarchy
3. **Product** - Category aggregates

### Features
- Static parameter generation for categories
- Canonical URLs
- Mobile-friendly design
- Fast loading times

## Categories Included

1. **Floral Essential Oils** 🌸
   - Lavender Essential Oil
   - Rose Geranium Oil

2. **Citrus Essential Oils** 🍋
   - Sweet Orange Oil
   - Lemon Essential Oil

3. **Herbal Essential Oils** 🌿
   - Peppermint Oil
   - Eucalyptus Oil

4. **Spice & Wood Oils** 🌲
   - Cedarwood Oil
   - Clove Bud Oil

## Usage

### Navigation
- Click on category cards to view category details
- Each product displays full specifications
- FAQ items expand on click
- Related categories link at bottom of category pages

### For Strapi CMS Integration (Future)
Replace `categories.json` with API calls:
```javascript
// Example future integration
const categories = await fetch('${STRAPI_URL}/api/categories');
```

## Mobile Responsive
- Hero sections adapt to screen size
- Grid layouts are responsive (1 col mobile, 2 col tablet, 4 col desktop)
- Touch-friendly interactive elements
- Optimized typography for all devices

## Performance
- Server-side rendering (Next.js)
- Static generation for categories
- Optimized component rendering
- Minimal bundle size

## Future Enhancements
1. Image optimization and lazy loading
2. Strapi CMS integration
3. Add to cart functionality
4. Product filtering
5. Search functionality
6. Customer reviews
7. Related products recommendations
8. Stock status indicators
9. Pricing display
10. Bulk order calculator

---

**Status**: Production Ready ✅
**Last Updated**: 2026-07-07
