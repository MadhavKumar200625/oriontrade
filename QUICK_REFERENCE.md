# Quick Reference Guide

## 🚀 What's New

### Pages Available
| URL | Page | Features |
|-----|------|----------|
| `/products` | Products Main | 4 categories, hero, why choose us |
| `/products/floral-oils` | Floral Category | 2 products, 5 FAQs, icon hero |
| `/products/citrus-oils` | Citrus Category | 2 products, 5 FAQs, icon hero |
| `/products/herbal-oils` | Herbal Category | 2 products, 5 FAQs, icon hero |
| `/products/spice-wood-oils` | Spice/Wood Category | 2 products, 5 FAQs, icon hero |

---

## 📂 File Organization

```
Created Files:
├── app/products/page.js                    (Main products)
├── app/products/[slug]/page.js             (Category pages)
├── components/CategoryCard.js              (NEW)
├── components/ProductCard.js               (NEW)
├── components/FAQSection.js                (NEW)
└── data/categories.json                    (NEW)

Documentation:
├── PRODUCTS_SETUP.md                       (Setup guide)
├── PAGES_STRUCTURE.md                      (Visual layout)
├── IMPLEMENTATION_SUMMARY.md               (Full details)
└── QUICK_REFERENCE.md                      (This file)
```

---

## 🎨 Colors Used

```css
Primary:    #164b35  (Dark green - buttons, text)
Dark:       #10281e  (Darker shade - hover states)
Text:       #263b2f  (Dark text)
Light:      #58705f  (Secondary text)
Border:     #dfe8de  (Borders)
BG Light:   #eef7ee  (Light sections)
BG Main:    #f8faf5  (Main background)
```

---

## 🔧 Key Components

### CategoryCard
```javascript
<CategoryCard category={category} />
// Shows: icon, name, product count
// Link to: /products/[slug]
```

### ProductCard
```javascript
<ProductCard product={product} />
// Shows: name, origin, uses, pack sizes
// Button: Inquire Now
```

### FAQSection
```javascript
<FAQSection faqs={faqs} categoryName="Floral Oils" />
// Shows: 5 expandable questions
// First item open by default
```

---

## 📊 Data Example

```json
{
  "id": "floral-oils",
  "slug": "floral-oils",
  "name": "Floral Essential Oils",
  "description": "Short desc",
  "longDescription": "Detailed desc",
  "icon": "🌸",
  "products": [
    {
      "id": "lavender-oil",
      "name": "Lavender Essential Oil",
      "botanicalName": "Lavandula angustifolia",
      "origin": "Himachal Pradesh, India",
      "notes": "Fresh floral aroma...",
      "uses": ["Aromatherapy", "Skincare"],
      "packSizes": ["10ml", "30ml", "100ml"]
    }
  ],
  "faq": [
    {
      "question": "What are the benefits?",
      "answer": "Full answer..."
    }
  ]
}
```

---

## 🎯 Routes & Navigation

```
/products
├── [Category] /floral-oils
│   ├── [Product Details]
│   ├── [FAQ] (5 items)
│   └── [Related Categories]
├── [Category] /citrus-oils
├── [Category] /herbal-oils
└── [Category] /spice-wood-oils
```

---

## ✨ Features Implemented

### Main Products Page
- ✅ Hero section
- ✅ Category grid (4 items)
- ✅ Why choose us section
- ✅ Bulk orders CTA
- ✅ Schema markup

### Category Pages
- ✅ Breadcrumb navigation
- ✅ Hero with icon
- ✅ Full description
- ✅ Product grid (2 products)
- ✅ FAQ accordion (5 items)
- ✅ Related categories
- ✅ Bulk orders CTA
- ✅ Multiple schema markups

### SEO
- ✅ Dynamic titles/descriptions
- ✅ Keywords optimization
- ✅ OpenGraph tags
- ✅ BreadcrumbList schema
- ✅ Product schema
- ✅ Static generation

---

## 🎬 How to Use

### View Products
1. Go to `/products`
2. See all 4 category cards
3. Click any category
4. View products & FAQs

### Expand FAQ
1. Click question box
2. Answer expands with animation
3. Click again to collapse
4. First item starts open

### Navigate
- Use breadcrumbs to go back
- Use related categories to jump
- Use header navigation

---

## 🔄 For Strapi Integration

When connecting to Strapi:

1. **Replace import:**
   ```javascript
   // Remove:
   import categories from '@/data/categories.json';
   
   // Add:
   const categories = await fetch('api/categories');
   ```

2. **Update paths:**
   - `/data/categories.json` → Strapi API
   - Image URLs → Strapi media URLs

3. **Keep components:**
   - CategoryCard (no changes)
   - ProductCard (no changes)
   - FAQSection (no changes)

---

## 📱 Responsive Breakpoints

| Size | Categories | Products |
|------|-----------|----------|
| Mobile | 1 col | 1 col |
| Tablet | 2 col | 2 col |
| Desktop | 4 col | 2 col |

---

## 🛠 Customization Quick Tips

### Change Colors
Edit component files:
```javascript
// Change from #164b35 to your color
className="bg-[#164b35]"  // Main color
className="bg-[#10281e]"  // Dark color
```

### Add More Products
Edit `data/categories.json`:
```json
"products": [
  { /* existing */ },
  { "id": "new", "name": "New Product", ... }
]
```

### Add FAQ Items
Edit `data/categories.json`:
```json
"faq": [
  { /* existing 5 */ },
  { "question": "New Q?", "answer": "Answer..." }
]
```

### Change Descriptions
Edit `data/categories.json`:
```json
"description": "New short desc",
"longDescription": "New long desc..."
```

---

## 🐛 Troubleshooting

### Page not loading
- Check file paths in imports
- Verify categories.json exists
- Check `[slug]` folder naming

### FAQ not expanding
- Ensure `'use client'` in FAQSection.js
- Check useState is imported
- Verify onClick handler

### Styles not applying
- Check Tailwind classes
- Verify color hex codes
- Check responsive classes (md:, lg:)

### Images not showing
- Add to `/public` folder
- Update paths in categories.json
- Use Next.js Image component for optimization

---

## ✅ Testing Checklist

- [ ] Visit `/products` - see 4 categories
- [ ] Click category - navigate to category page
- [ ] See product cards with details
- [ ] Click FAQ - expands/collapses
- [ ] Click related category - navigates
- [ ] Use breadcrumbs - goes back
- [ ] Mobile view - responsive layout
- [ ] Check SEO - meta tags present

---

## 📞 Quick Links

- Main: `/products`
- Floral: `/products/floral-oils`
- Citrus: `/products/citrus-oils`
- Herbal: `/products/herbal-oils`
- Spice: `/products/spice-wood-oils`

---

## 💡 Pro Tips

1. **Categories.json** is the single source of truth
2. **Components are reusable** - use in other sections
3. **Static generation** = fast loading
4. **Schema markup** = better SEO
5. **Mobile first** - test on phone first
6. **Breadcrumbs** - great for navigation
7. **Related items** - improves engagement

---

## 🎉 You're All Set!

All pages are ready to use. Just:
1. Open in browser
2. Navigate between pages
3. Test on mobile
4. Later: Connect to Strapi

**Status: Production Ready ✅**
