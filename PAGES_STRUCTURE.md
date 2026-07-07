# Complete Products Pages Structure

## 🎯 Pages Overview

### Page 1: Main Products Page
**URL:** `/products`

**Layout:**
```
┌─────────────────────────────────────────────┐
│         HERO SECTION                        │
│   "Premium Essential Oils"                  │
│   [Explore Categories] [Get in Touch]      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│     OUR OIL CATEGORIES                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ 🌸   │ │ 🍋   │ │ 🌿   │ │ 🌲   │       │
│  │Flora │ │Citrus│ │Herbal│ │Spice │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   WHY CHOOSE US                             │
│  ┌────────┐ ┌────────┐ ┌────────┐          │
│  │Premium │ │Tradit. │ │Versatile          │
│  │Quality │ │Methods │ │Apps               │
│  └────────┘ └────────┘ └────────┘          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   BULK ORDERS CTA                           │
│   "Looking for Bulk Orders?"                │
│      [Request a Quote]                      │
└─────────────────────────────────────────────┘
```

---

### Page 2-5: Category Pages
**URLs:** 
- `/products/floral-oils`
- `/products/citrus-oils`
- `/products/herbal-oils`
- `/products/spice-wood-oils`

**Layout:**
```
┌─────────────────────────────────────────────┐
│ Products / Floral Essential Oils (Breadcrumb)
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│         HERO WITH ICON                      │
│              🌸                              │
│   "Floral Essential Oils"                   │
│   "Soft, calming oils distilled..."         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   CATEGORY DESCRIPTION                      │
│   Full detailed description of the category │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   OUR FLORAL ESSENTIAL OILS                 │
│  ┌─────────────────────┐ ┌──────────────┐   │
│  │ Lavender Essential  │ │ Rose Geranium   │
│  │ Oil                 │ │ Oil             │
│  │ ────────────────    │ │ ────────────    │
│  │ Lavandula angust.   │ │ Pelargonium... │
│  │ Himachal Pradesh    │ │ South India     │
│  │ Fresh floral aroma  │ │ Rosy, green     │
│  │ Uses: Aromatherapy  │ │ Uses: Perfume   │
│  │ Sizes: 10,30ml...   │ │ Sizes: 10ml..   │
│  │ [Inquire Now]       │ │ [Inquire Now]   │
│  └─────────────────────┘ └──────────────┘   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   FREQUENTLY ASKED QUESTIONS                │
│   ┌─────────────────────────────────────┐   │
│   │ Q: What are the benefits? ▼         │   │
│   │ A: Floral oils are known for...     │   │
│   └─────────────────────────────────────┘   │
│   ┌─────────────────────────────────────┐   │
│   │ Q: How do I use them? ▼             │   │
│   │ A: You can diffuse, add to...       │   │
│   └─────────────────────────────────────┘   │
│   ┌─────────────────────────────────────┐   │
│   │ Q: Are they organic? ▼              │   │
│   │ A: Sourced from premium suppliers...│   │
│   └─────────────────────────────────────┘   │
│   ┌─────────────────────────────────────┐   │
│   │ Q: How to store? ▼                  │   │
│   │ A: Store in dark glass bottles...   │   │
│   └─────────────────────────────────────┘   │
│   ┌─────────────────────────────────────┐   │
│   │ Q: What is shelf life? ▼            │   │
│   │ A: 2-3 years when stored properly...│   │
│   └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   EXPLORE OTHER CATEGORIES                  │
│   ┌────────┐ ┌────────┐ ┌────────┐          │
│   │ 🍋     │ │ 🌿     │ │ 🌲     │          │
│   │ Citrus │ │ Herbal │ │ Spice  │          │
│   └────────┘ └────────┘ └────────┘          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│   BULK ORDERS CTA                           │
│   "Interested in Bulk Orders?"              │
│      [Contact Sales]                        │
└─────────────────────────────────────────────┘
```

---

## 📁 File Structure

```
app/
├── products/
│   ├── page.js                    # Main products page
│   └── [slug]/
│       └── page.js                # Dynamic category pages
│
components/
├── CategoryCard.js                # Category card (clickable)
├── ProductCard.js                 # Product details card
├── FAQSection.js                  # Expandable FAQ
├── Header.js                      # (existing)
└── Footer.js                      # (existing)

data/
├── categories.json                # All categories & products
└── products.json                  # (legacy - can be deprecated)
```

---

## 🎨 Color Scheme Used

```css
Primary Dark:    #164b35  /* Main brand color */
Primary Darker:  #10281e  /* Dark text & hover */
Text Dark:       #263b2f  /* Body text */
Text Light:      #58705f  /* Secondary text */
Border:          #dfe8de  /* Borders & dividers */
Background A:    #eef7ee  /* Light section bg */
Background B:    #f8faf5  /* Main section bg */
White:           #ffffff  /* Card backgrounds */
```

---

## 🚀 Routes & Navigation

```
/products                          → Main products page
/products/floral-oils             → Floral oils category
/products/citrus-oils             → Citrus oils category
/products/herbal-oils             → Herbal oils category
/products/spice-wood-oils         → Spice & wood oils category
```

---

## 📊 Components Used

### CategoryCard
- **Props:** `{ category }`
- **Features:**
  - Icon display
  - Hover animation
  - Product count
  - Link to category page

### ProductCard
- **Props:** `{ product }`
- **Features:**
  - Product name & botanical name
  - Origin information
  - Aroma profile description
  - Common uses (with badges)
  - Available pack sizes
  - Inquire button

### FAQSection
- **Props:** `{ faqs, categoryName }`
- **Features:**
  - Expandable accordion
  - Smooth animations
  - First item open by default
  - Professional styling

---

## 🔍 SEO Features Implemented

### Meta Tags
✅ Dynamic titles per category
✅ Comprehensive descriptions
✅ Keywords optimization
✅ OpenGraph protocol
✅ Robots indexing

### Schema Markup
✅ CollectionPage (main products)
✅ BreadcrumbList (navigation)
✅ Product aggregates (categories)

### Performance
✅ Static generation
✅ Server-side rendering
✅ Optimized images
✅ Mobile responsive

---

## 📱 Responsive Design

**Desktop (lg)**
- 4 categories per row
- 2 products per row

**Tablet (md)**
- 2 categories per row
- 2 products per row

**Mobile (sm)**
- 1 category per row
- 1 product per row

---

## ✨ Interactive Features

1. **Category Cards** - Hover animation with scale effect
2. **FAQ Accordion** - Click to expand/collapse with smooth animation
3. **Related Categories** - Quick navigation to other categories
4. **Breadcrumb Navigation** - Easy path tracking
5. **Hover Effects** - Subtle shadows and color changes

---

## 🔗 Internal Links

- Products page → Category pages
- Category pages → Other categories
- Breadcrumbs → Back to products/home
- All pages → Contact page (CTAs)
- Footer → All pages (existing)

---

## 📦 Data Structure

Each category contains:
- **id** - Unique identifier
- **slug** - URL-friendly name
- **name** - Display name
- **description** - Short description
- **longDescription** - Full description
- **icon** - Emoji icon
- **products[]** - Array of products
  - id, name, botanical name
  - origin, aroma notes
  - uses, pack sizes
- **faq[]** - 5 FAQ items
  - question, answer

---

## 🎯 Currently Included

**4 Categories:**
1. Floral Essential Oils (2 products)
2. Citrus Essential Oils (2 products)
3. Herbal Essential Oils (2 products)
4. Spice & Wood Oils (2 products)

**Total: 8 products with full details**

**5 FAQ per category = 20 total FAQs**

---

## 🔄 Future Strapi Integration

Replace static JSON with API:
```javascript
// Remove static import
// import categories from '@/data/categories.json';

// Add API fetch
const response = await fetch(`${STRAPI_URL}/api/categories`);
const categories = await response.json();
```

---

## ✅ Production Ready

All pages are:
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Accessibility compliant
- ✅ Performance optimized
- ✅ Mobile-friendly
- ✅ Schema markup included
- ✅ Breadcrumb navigation
- ✅ Dynamic routes
- ✅ Static generation

**Status:** Ready for deployment! 🚀
