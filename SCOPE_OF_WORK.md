# Memorial Ready Website — Complete Scope of Work

## 1. Project Summary

Build and launch a company website for **Memorial Ready**, a memorial lots and funeral services business located at Bayani Road, Fort Bonifacio, Taguig City, Philippines. The website is a single-page brochure site where families can view memorial plans and pricing, browse the park gallery, read FAQs, schedule visits, and contact the company.

**Technology Stack:**
- Framework: Next.js 14
- UI: React 18
- Styling: Tailwind CSS 3
- Email: NodeMailer with Gmail SMTP
- Hosting: Vercel
- Domain: TBD (e.g., memorialready.com)
- Fonts: Playfair Display (headings), Inter (body)

---

## 2. Website Sections — Detailed Breakdown

### 2.1 Navigation Bar (`src/components/Navbar.jsx`)
- Fixed at the top of the page, stays visible while scrolling
- Transparent background when at top of page, switches to white with blur when scrolled past 50px
- Links: Home, Plans, Pricing, Gallery, FAQ, Contact
- "Get In Touch" button (gold, rounded full)
- On mobile: hamburger menu that opens a full-width dropdown

### 2.2 Hero Banner (`src/components/Hero.jsx`)
- Full-screen section with 3 background images that crossfade every 5 seconds (15-second cycle)
- Dark gradient overlay for readability
- Text: "Honoring Lives, Preserving Memories"
- Subtitle: "Premium memorial lands and compassionate service plans designed with dignity, respect, and timeless elegance."
- Two buttons: "View Packages & Pricing" (links to #pricing) and "Schedule a Visit" (links to #contact)
- Rating bar: 4.8/5 from 250+ families, Perpetual Care Guaranteed, Flexible Payment Terms

### 2.3 About (`src/components/About.jsx`)
- Simple centered text section
- Title: "Where Every Memory Finds Its Peaceful Rest"
- Short paragraph about the company's mission

### 2.4 Service Plans (`src/components/Services.jsx`)
- Three pricing cards side by side:
  - **Basic Tribute** — Standard lot, basic headstone, perpetual care, memorial service setup, digital memory page
  - **Premium Honor** (Most Popular, highlighted gold) — Premium lot, granite headstone, perpetual care, full memorial service, digital memory page, flower arrangement, guest book
  - **Eternal Legacy** — Prime lot, custom marble monument, perpetual care, premium funeral service, digital tribute video, monthly flower decoration, private mausoleum option, 24/7 chapel access
- Each card has a "Select Plan" button linking to #contact

### 2.5 Pricing Section (`src/components/PricingSection.jsx`)
- Three interactive tabs: Memorial Lots, Memorial Plans, Cremation Plans

**Memorial Lots (one-time prices):**
| Lot Type | Price | Key Features |
|----------|-------|-------------|
| Lawn Lot | ₱180,000 | Standard lot 1m x 2.4m, basic granite marker, perpetual care, park access, transferable certificate |
| Garden Lot | ₱350,000 (Most Popular) | Garden lot 2m x 3m, premium granite headstone, perpetual care, garden view, up to 2 interments, transferable certificate |
| Estate Lot | ₱800,000 | Private lot 4m x 5m, custom marble monument, perpetual care, prime location, mausoleum option, up to 4 interments, transferable certificate |

**Memorial Plans (with monthly installment options):**
| Plan | Price | Or Monthly | Key Features |
|------|-------|-----------|-------------|
| Basic Tribute | ₱250,000 | ₱2,500/mo for 10 yrs | Standard lot, basic headstone, body retrieval, embalming, metal casket, 3-night wake (regular chapel), hearse, permits |
| Premium Honor | ₱400,000 (Most Popular) | ₱4,000/mo for 10 yrs | Premium lot, granite headstone, retrieval, embalming, premium casket, 3-night wake (premier chapel), hearse, permits, digital memory page |
| Eternal Legacy | ₱600,000 | ₱6,000/mo for 10 yrs | Prime lot, marble monument, full funeral, premium embalming, luxury casket, 4-night wake, hearse + fleet, tribute video, monthly flowers, guest book |

**Cremation Plans:**
| Plan | Price | Or Monthly | Key Features |
|------|-------|-----------|-------------|
| Cremation Only | ₱140,000 | ₱1,500/mo for 10 yrs | Cremation, standard urn, 2-hr chapel, permits, certificate |
| Cremation with Viewing | ₱350,000 (Most Popular) | ₱3,500/mo for 10 yrs | Cremation, premium urn, 4-day wake, regular chapel, retrieval, embalming, viewing casket, hearse, permits |
| Premium Cremation | ₱400,000 | ₱4,000/mo for 10 yrs | Cremation, luxury urn, 4-day wake, premier chapel, premium embalming, premium casket, hearse + fleet, tribute page, permits |

**Columbary Niches:**
- Aeternum Columbary Niche — Starts at ₱80,000
- Pavilion Columbary Niche — Starts at ₱120,000

Each package card has an "Inquire Now" button linking to #contact.

### 2.6 Gallery (`src/components/Gallery.jsx`)
- Category filter buttons: All, Memorial Lots, Columbary, Chapels, Park Amenities
- Grid of 8 images, 4 columns on desktop
- Hover shows overlay with title and description
- Category badge on each image
- Click to open lightbox (full-screen view) — click anywhere to close

### 2.7 More Services (`src/components/MoreServices.jsx`)
- 5 image cards: Memorial Lots, Memorial Plans, Cremation Plans, Interment Plans, Columbary
- Each has a title, description, and hover zoom effect

### 2.8 Why Choose Us (`src/components/WhyChooseUs.jsx`)
- 6 reasons in a grid:
  1. Serene & Peaceful Environments
  2. Compassionate Guidance
  3. Perpetual Care Guarantee
  4. Flexible Payment Plans
  5. Beautiful Architecture
  6. Digital Memorial Services
- Each has an icon, title, and description

### 2.9 Reviews (`src/components/Reviews.jsx`)
- 4 customer testimonials with star ratings, names, locations, and dates
- Rating badge at bottom: 4.8 (250+ reviews)

### 2.10 FAQ (`src/components/FAQSection.jsx`)
- 8 expandable/collapsible questions:
  1. What types of memorial lots are available?
  2. Can I pay in installment terms?
  3. What is included in a pre-need memorial plan?
  4. Do you offer cremation services?
  5. What is perpetual care?
  6. Can I visit the memorial park before purchasing?
  7. Is the certificate of ownership transferable?
  8. What documents are required to purchase?

### 2.11 Contact (`src/components/Contact.jsx`)
- Left column: Address, phone, email, office hours with icons + Google Map embed
- Right column: Contact form with Name, Email, Message fields
- Form sends email via API endpoint at `/api/contact`
- Shows success/error message after submission

### 2.12 Footer (`src/components/Footer.jsx`)
- Company logo and description
- Social media icons (Facebook, Twitter, Instagram, YouTube) — link placeholders
- Contact details: address, phone, email
- Link columns: Services, Company, Support
- Copyright line: "Est. Still updating · Made with care"

---

## 3. Functional Features — Detailed

### 3.1 WhatsApp Chat Button (`src/components/WhatsAppButton.jsx`)
- Floating button fixed at bottom-right of screen
- Gold circle with chat icon
- Clicking opens a tooltip with two options:
  1. **WhatsApp Chat** — opens `https://wa.me/639175315501` in a new tab
  2. **Schedule Visit** — opens the appointment modal
- Hover scale animation, shadow effects

### 3.2 Appointment Booking (`src/components/AppointmentModal.jsx`)
- Modal popup with form fields: Full Name, Email, Phone, Preferred Date, Preferred Time, Message (optional)
- On submit: builds a message string and opens WhatsApp with the appointment details pre-filled
- Shows success checkmark before closing

### 3.3 Contact Form Email (`src/app/api/contact/route.js`)
- POST endpoint receiving JSON: `{ name, email, message }`
- Validates all three fields are present
- Uses NodeMailer with Gmail SMTP (credentials from environment variables `SMTP_EMAIL` and `SMTP_PASSWORD`)
- Sends styled HTML email to `earljohngomez66@gmail.com`
- Returns JSON success/error response

### 3.4 Animated Counters (`src/components/StatsCounter.jsx`)
- 4 counters in a gold section: 10+ Years of Service, 50% Service Rate, 100,000+ Happy Families, 10,000+ Plots Booked
- Uses IntersectionObserver — counters start animating when scrolled into view
- Counts up from 0 to target value over 2 seconds

### 3.5 Scroll Animations (`src/components/Reveal.jsx`)
- Wraps each section; triggers fade-in + slide-up when scrolled into view
- Uses IntersectionObserver with 10% threshold
- Supports configurable delay (100ms staggered for most sections)

### 3.6 Mobile Navigation (`src/components/Navbar.jsx`)
- Below 768px: hamburger menu icon replaces the link bar
- Click toggles a dropdown with all links + "Get In Touch" button
- Smooth scroll on link click closes the menu

### 3.7 SEO (`src/app/layout.jsx`)
- Title: "Memorial Ready - Premier Memorial Plans & Lots in Taguig"
- Description: "Premium memorial lots, pre-need plans, cremation & interment services in Taguig."
- Keywords targeting memorial, cremation, columbary, Taguig, heritage park
- Open Graph tags for social media sharing
- JSON-LD Schema.org LocalBusiness markup with: name, description, URL, phone, address, geo coordinates, hours, price range, social media links

### 3.8 Custom Scrollbar (`src/app/globals.css`)
- 8px wide scrollbar
- Gold thumb with rounded corners
- Cream track background

---

## 4. Development Phases — Detailed

### Phase 1: Foundation — COMPLETE

- [x] Next.js project initialized with Tailwind CSS
- [x] All 12 page sections built as React components
- [x] Navigation bar with scroll detection and mobile hamburger menu
- [x] Hero banner with 3-image crossfade animation
- [x] Service plans (3 tiers) and pricing section (3 categories with tabs)
- [x] Gallery with category filtering and lightbox
- [x] FAQ accordion with expand/collapse
- [x] Contact form UI with validation
- [x] WhatsApp floating button with tooltip
- [x] Appointment booking modal
- [x] Scroll reveal animations on all sections
- [x] Animated number counters
- [x] Google Maps embed
- [x] SEO tags, Open Graph, Schema.org markup
- [x] Custom gold/cream color theme and typography
- [x] Mobile responsive layout
- [x] Vercel deployment config

### Phase 2: Replace Placeholder Content — NEXT

**Images to replace (currently Pinterest URLs):**
| File | Image Count | Current Source | Needs |
|------|-------------|---------------|-------|
| `Hero.jsx` | 3 hero slides | i.pinimg.com | Real park photos (landscape, wide shots) |
| `Gallery.jsx` | 8 gallery items | i.pinimg.com | Real photos of each lot type, columbary, chapel, amenities |
| `MoreServices.jsx` | 5 service cards | i.pinimg.com | Real photos for each service category |

**Steps:**
- Take or source high-resolution photos (minimum 1920x1080 for hero, 1200x900 for gallery)
- Update `next.config.mjs` — remove `i.pinimg.com` from `remotePatterns`, add the real image host
- Replace each `src` URL in components with the real image URLs

**Text/content to update:**
| File | Current | Needs |
|------|---------|-------|
| `Hero.jsx` | "Est. Still updating" | Actual year established (e.g., "Est. 2020") |
| `Footer.jsx` | "Est. Still updating" | Same as above |
| `layout.jsx` | Phone: +63-2-1234-5678 | Real phone number |
| `layout.jsx` | Address: Bayani Road, Fort Bonifacio | Confirm/set real address |
| `layout.jsx` | Geo: 14.5321, 121.0456 | Confirm exact GPS coordinates |
| `layout.jsx` | sameAs Facebook/Instagram | Real social media page URLs |
| `Contact.jsx` | Phone: +63 (2) 1234 5678 | Real phone number |
| `Contact.jsx` | Viber/WhatsApp: +63 917 531 5501 | Confirm number |
| `Contact.jsx` | Email: hello@memorialready.com | Real email address |
| `Contact.jsx` | Office hours: Mon-Sat 8AM-6PM | Confirm actual hours |
| `Contact.jsx` | Google Maps iframe src | Real map embed URL for the actual location |
| `PricingSection.jsx` | All prices (₱180K–₱800K) | Confirm with actual price list |
| `PricingSection.jsx` | Monthly installment amounts | Confirm financing terms |
| `Services.jsx` | All plan names and features | Confirm against actual offerings |
| `Reviews.jsx` | All 4 reviews (names, text, dates) | Replace with real customer testimonials |
| `FAQSection.jsx` | All 8 Q&As | Confirm answers match actual company policy |

**Social media links to update:**
- `Footer.jsx`: Facebook, Twitter, Instagram, YouTube hrefs
- `layout.jsx`: sameAs array

### Phase 3: Configure Email System — NEXT

**`src/app/api/contact/route.js`:**
- Recipient email `to:` — currently `earljohngomez66@gmail.com` — change to real company email
- Create a Gmail App Password (steps in `.env.local.example`)
- Create `.env.local` file with:
  ```
  SMTP_EMAIL=company-email@gmail.com
  SMTP_PASSWORD=generated-app-password
  ```
- In Vercel dashboard, add `SMTP_EMAIL` and `SMTP_PASSWORD` as Environment Variables for production

### Phase 4: Testing — NEXT

**Functional testing checklist:**
- [ ] All navigation links scroll to correct sections
- [ ] Mobile hamburger menu opens and closes, links work
- [ ] Hero images load and crossfade animation runs
- [ ] Pricing tabs switch between Lots / Plans / Cremation correctly
- [ ] "Most Popular" cards are visually highlighted (gold background, scaled up)
- [ ] Gallery filter buttons show/hide correct images
- [ ] Gallery lightbox opens on click, closes on click outside or X button
- [ ] FAQ items expand and collapse, only one at a time
- [ ] Contact form: empty fields show validation, valid submission sends email
- [ ] Contact form: success message displays after send
- [ ] Contact form: error message displays if send fails
- [ ] WhatsApp button tooltip opens on click, two options work
- [ ] Appointment form: all fields required, submission opens WhatsApp with correct pre-filled message
- [ ] Counter numbers animate when scrolled into view
- [ ] Scroll reveal animations trigger for each section
- [ ] Google Map iframe loads and shows correct location
- [ ] All links open in correct tab (internal = same tab, external = new tab)
- [ ] No broken images (check all image URLs)

**Cross-browser testing:**
- [ ] Google Chrome
- [ ] Mozilla Firefox
- [ ] Microsoft Edge
- [ ] Safari
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

**Device testing:**
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

**Performance:**
- [ ] Lighthouse score: 90+ Performance
- [ ] Lighthouse score: 90+ Accessibility
- [ ] Lighthouse score: 90+ Best Practices
- [ ] Lighthouse score: 90+ SEO
- [ ] Images properly sized (not loading huge files on mobile)
- [ ] No render-blocking resources

### Phase 5: Launch — NEXT

**Domain & DNS:**
- [ ] Register domain (e.g., memorialready.com) or use existing
- [ ] In Vercel dashboard → Domains → add the domain
- [ ] Update DNS records: add CNAME or A record pointing to Vercel
- [ ] Verify domain ownership in Vercel
- [ ] Wait for SSL certificate provisioning (automatic)

**Vercel deployment:**
- [ ] Push code to GitHub repository
- [ ] Connect Vercel project to the GitHub repo
- [ ] Configure Environment Variables in Vercel (`SMTP_EMAIL`, `SMTP_PASSWORD`)
- [ ] Deploy production branch
- [ ] Verify site is live on custom domain with HTTPS
- [ ] Set up Vercel Analytics or Google Analytics

**Google setup:**
- [ ] Create/update Google My Business profile
  - Name: Memorial Ready
  - Address: Bayani Road, Fort Bonifacio, Taguig City
  - Phone: as confirmed
  - Website: the live URL
  - Hours: as confirmed
- [ ] Submit site to Google Search Console
- [ ] Upload sitemap.xml (or Next.js auto-generates)

### Phase 6: Post-Launch — FUTURE

- [ ] Monitor contact form — verify emails arrive
- [ ] Check analytics weekly for visitor numbers and popular pages
- [ ] Address any bug reports or user feedback
- [ ] Add Google Analytics tracking code to `layout.jsx`

### Phase 7: Future Enhancements — OPTIONAL

1. **Admin Dashboard** — Password-protected page to edit pricing, plans, FAQs without touching code
2. **Blog Section** — `/blog` route with articles about memorial planning, grief support, company news
3. **Online Payments** — Integration with GCash, PayMaya, or bank payment for reservations
4. **Virtual Tour** — 360° photo viewer or video tour of the memorial park
5. **Obituary / Memorial Pages** — Individual pages for each interred loved one with photos, biography, and online tribute book
6. **Multi-language** — English and Filipino language toggle
7. **Live Chat** — Real-time chat support (instead of just WhatsApp redirect)
8. **Appointment Calendar** — Interactive calendar showing available slots, auto-confirmation via email/SMS

---

## 5. File Reference — Complete Inventory

### Config & Root Files
| File | Purpose |
|------|---------|
| `package.json` | Dependencies: next, react, react-dom, nodemailer, tailwindcss, etc. |
| `next.config.mjs` | Next.js config — allows external image URLs from specified hosts |
| `tailwind.config.mjs` | Custom gold color palette, Playfair Display + Inter fonts |
| `postcss.config.mjs` | PostCSS with Tailwind and Autoprefixer plugins |
| `jsconfig.json` | `@/` path alias pointing to `src/` |
| `vercel.json` | Vercel deployment config (Next.js framework) |
| `.gitignore` | Ignores `node_modules/`, `.next/`, `.env.local` |
| `.env.local.example` | Template for Gmail SMTP credentials |

### Application Files (`src/`)
| File | Lines | Purpose |
|------|-------|---------|
| `src/app/layout.jsx` | 55 | Root layout, SEO meta tags, Schema.org JSON-LD, font imports |
| `src/app/page.jsx` | 38 | Main page — imports and renders all components in order |
| `src/app/globals.css` | 90 | Global styles, scrollbar, animations (crossfade, fadeIn), custom classes |
| `src/app/api/contact/route.js` | 60 | POST endpoint — validates form, sends email via NodeMailer |

### Component Files (`src/components/`)
| File | Lines | Purpose |
|------|-------|---------|
| `Navbar.jsx` | 94 | Fixed top nav, scroll detection, mobile hamburger menu |
| `Hero.jsx` | 77 | Full-screen hero with 3-image slideshow, tagline, CTA buttons |
| `About.jsx` | 24 | Centered about text |
| `Services.jsx` | 115 | 3-tier plan cards with features list |
| `PricingSection.jsx` | 272 | 3-tab pricing with packages, monthly options, columbary section |
| `Gallery.jsx` | 153 | Photo grid with category filters, lightbox modal |
| `MoreServices.jsx` | 71 | 5 service image cards |
| `WhyChooseUs.jsx` | 91 | 6 reasons with icons |
| `Reviews.jsx` | 113 | Testimonials grid with star ratings |
| `FAQSection.jsx` | 97 | Accordion FAQ with 8 Q&As |
| `StatsCounter.jsx` | 66 | Animated number counters on scroll |
| `Contact.jsx` | 203 | Contact info, map, message form with validation and API call |
| `WhatsAppButton.jsx` | 63 | Floating WhatsApp button with tooltip and appointment link |
| `AppointmentModal.jsx` | 92 | Appointment booking form modal |
| `Footer.jsx` | 86 | Footer with logo, social icons, links, contact, copyright |
| `Reveal.jsx` | 34 | IntersectionObserver scroll animation wrapper |

---

## 6. Design Specifications

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| gold-50 | #FFF9E6 | Light backgrounds |
| gold-100 | #FFF0C2 | Hover states |
| gold-400 | #FFD147 | Accent elements |
| gold-500 | #D4A853 | Secondary gold |
| gold-600 | #C9A13B | Primary gold — buttons, highlights |
| gold-700 | #A8852E | Dark gold — hover, text |
| gold-800 | #876A22 | Deep gold |
| cream | #FFF8F0 | Section background |
| white | #FFFFFF | Card backgrounds |
| gray-900 | #1a1a1a | Body text |

### Typography
| Element | Font | Weight |
|---------|------|--------|
| Headings (h1-h4) | Playfair Display | 400-700 (serif) |
| Body text | Inter | 300-700 (sans-serif) |

### Spacing
- Section padding: 5rem top/bottom, 1rem sides (`section-padding`)
- Container max-width: 1200px (`container-custom`)
- Card gap: 2rem (grid), 1.5rem (mobile)

### Effects
- Buttons: rounded-full, hover lift, shadow on hover
- Cards: rounded-2xl, hover:-translate-y-2, shadow transition
- Images: rounded-2xl, hover:scale-110 zoom, lazy loading
- Animations: 700ms fade-in + slide-up on scroll, 300ms hover transitions

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|---------------|
| Mobile | < 640px | Single column, hamburger menu, stacked cards |
| Tablet | 640px - 1024px | 2-column grids |
| Desktop | > 1024px | 3-4 column grids, full horizontal nav |
| Large | > 1280px | 5 columns for More Services |

---

## 8. Roles & Responsibilities

### Business Owner
- Provide all real content: pricing, plans, features (verified against actual offerings)
- Provide or arrange photography of the memorial park (high-resolution)
- Confirm contact details: phone number, email, address, office hours
- Provide real customer testimonials for the Reviews section
- Review FAQ answers and ensure they match actual company policies
- Create Gmail App Password for the contact form email
- Register and pay for the domain name
- Set up Google My Business profile
- Final approval before launch

### Developer
- Replace all placeholder images with provided real photos
- Update all text content as instructed
- Configure NodeMailer with real email credentials
- Test all functionality across browsers and devices
- Deploy to Vercel and connect the domain
- Set up SSL/HTTPS
- Add analytics tracking
- Fix any bugs found during testing
- Post-launch support for any issues

---

## 9. Timeline Estimate

| Phase | Estimated Effort | Dependencies |
|-------|-----------------|-------------|
| Phase 1: Foundation | Already complete | None |
| Phase 2: Content | 2-3 days | Owner provides photos and content |
| Phase 3: Email Setup | 1 day | Owner provides Gmail credentials |
| Phase 4: Testing | 2-3 days | Phases 2-3 complete |
| Phase 5: Launch | 1-2 days | Domain registered, testing passed |
| Phase 6: Post-Launch | Ongoing | Site live |

---

## 10. Acceptance Criteria

The site is considered complete when:

1. All placeholder images are replaced with real photos
2. All pricing and plan information is accurate and matches the business offerings
3. Contact form sends emails reliably to the company inbox
4. WhatsApp button opens correct chat number
5. Appointment booking correctly sends details via WhatsApp
6. Site loads on all major browsers (Chrome, Firefox, Edge, Safari)
7. Site is fully functional on mobile, tablet, and desktop
8. Custom domain resolves with HTTPS
9. SEO meta tags and Schema markup are correctly implemented
10. Analytics is tracking visitor data
