# Design Guidelines: Lost Car Keys Stockport

## Design Approach

**Selected Approach:** Service Business Reference + Trust-Focused Design
Drawing inspiration from successful emergency service websites (locksmith, roadside assistance) with emphasis on immediate action, trust-building, and mobile accessibility. The design prioritizes conversions (phone calls) while maintaining professional credibility.

**Core Design Principles:**
- Urgency without alarm: Convey quick response capability professionally
- Mobile-first: Users often stranded, calling from phones
- Clear hierarchy: Phone number and CTAs dominate
- Trust indicators: Professional presentation, service areas, credentials
- User-specified: Blue and white color palette throughout

---

## Typography

**Font Selection:**
- **Primary (Headings):** Poppins (600, 700) - Modern, professional, highly legible
- **Secondary (Body):** Inter (400, 500) - Clean, readable at all sizes
- Load via Google Fonts CDN

**Type Scale:**
- Hero headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section headings: text-3xl md:text-4xl, font-semibold
- Subsection headings: text-xl md:text-2xl, font-semibold
- Body text: text-base md:text-lg
- Small text (hours, fine print): text-sm

---

## Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 6, 8, 12, 16, 20** consistently
- Component padding: p-4, p-6, p-8
- Section vertical spacing: py-12 md:py-16 lg:py-20
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Full-width sections with inner `max-w-7xl mx-auto px-4 md:px-6`
- Content sections: `max-w-6xl` for better readability
- Form/contact elements: `max-w-2xl` for focused interaction

**Grid System:**
- Services: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Service Areas: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Two-column layouts: `grid-cols-1 lg:grid-cols-2`

---

## Component Library

### Navigation
- **Sticky header** with transparent-to-solid transition on scroll
- Logo left, navigation center, phone CTA button right
- Mobile: Hamburger menu with slide-in drawer
- Include: Home, Services, Areas, Contact links
- Prominent phone number button (always visible)

### Hero Section
- **Height:** 85vh minimum, allows room for content below fold
- **Layout:** Centered content with large, compelling headline
- **CTA Strategy:** Primary button (Call Now) + Secondary button (Our Services)
- **Trust Elements:** Subtitle mentioning "24/7 Emergency Service" and "5-Star Rated"
- **Background:** Use professional image of locksmith working on car key/car door
  - Image treatment: Subtle overlay (20-30% opacity dark blue) for text readability
  - Buttons on image: Add backdrop-blur-sm and bg-white/90 (or bg-blue/90) for clarity

### About Us Section
- **Layout:** Two-column (text left, image/trust badges right on desktop)
- **Content:** Brief company story, years of experience, certifications
- **Trust Signals:** Include small badges/icons for: 24/7 Service, Certified Technicians, Insurance Approved, No Call-Out Fee
- **Typography:** Larger opening paragraph (text-lg) for emphasis

### Services Section
- **Card Grid:** 3 columns on desktop, 2 on tablet, 1 on mobile
- **Card Design:**
  - Icon top (use Font Awesome: fa-key, fa-car, fa-lock, etc.)
  - Service title (text-xl font-semibold)
  - Brief description (3-4 lines)
  - Subtle border or light shadow, hover lift effect
  - Padding: p-6 md:p-8
- **Services to include:**
  - Lost Car Key Replacement
  - Key Programming & Coding
  - Emergency Lockout Service
  - Spare Key Duplication
  - Transponder Key Services
  - Remote Key Fob Replacement

### Service Areas Section
- **Layout:** Location chips/badges in multi-column grid
- **Areas:** Stockport (emphasized) + 12-16 nearby areas (Cheadle, Bramhall, Hazel Grove, etc.)
- **Visual:** Each area as rounded badge with subtle hover effect
- **Highlight:** Stockport in bolder treatment or slight size increase

### Contact Section
- **Layout:** Split design - Contact info left, simple form right (lg:grid-cols-2)
- **Contact Information Block:**
  - Large phone number display (text-3xl or text-4xl)
  - Email address with icon
  - Business hours clearly listed
  - Link to main website: "Visit our main website for full services"
- **Form Fields:** Name, Phone, Service Needed (dropdown), Message
- **Form styling:** Clean inputs with focus states, prominent submit button

### Footer
- **Multi-column layout:** Company info | Quick Links | Contact | Social
- **Include:** Copyright, brief company description, navigation links, contact details
- **Link to parent site** can appear here as well as in Contact section
- Padding: py-12, subtle top border

---

## Images

**Required Images:**

1. **Hero Background Image:**
   - Professional photo of locksmith technician working on car key or car door
   - High-quality, well-lit, modern vehicle preferred
   - Orientation: Landscape, 1920x1080 minimum
   - Placement: Full-width background with overlay

2. **About Section Image:**
   - Technician with tools/van OR happy customer receiving keys
   - Optional but recommended for trust-building
   - Size: Square or 4:3 ratio, 800x800px minimum

3. **Service Icons:**
   - Use Font Awesome icon library (CDN)
   - Icons: fa-key, fa-car, fa-lock, fa-mobile-alt, fa-shield-alt

---

## Interactions & Animations

**Scroll Animations:** (minimal, professional)
- Fade-in on scroll for section headings and cards
- Use Intersection Observer API
- Stagger service cards by 100ms delay each
- Smooth scroll behavior for anchor navigation

**Micro-interactions:**
- Button hover: subtle scale (1.02) and shadow increase
- Service cards: slight lift on hover (translateY -4px)
- Header background solidifies on scroll (transition from transparent)
- Phone number button pulse animation (subtle, 3s interval) to draw attention

**No excessive animations** - keep it professional and trust-focused

---

## Accessibility & Mobile Considerations

- **Touch targets:** Minimum 44x44px for all clickable elements
- **Phone number:** Large, thumb-friendly buttons on mobile
- **Form labels:** Always visible, not just placeholders
- **Color contrast:** Ensure text meets WCAG AA standards on blue backgrounds
- **Focus states:** Clear keyboard navigation indicators
- **Mobile menu:** Full-screen overlay with large touch targets

---

## Special Considerations

**Emergency Service UX:**
- Phone number must be clickable `tel:` link on mobile
- Consider floating "Call Now" button on mobile (bottom-right corner)
- Emphasize 24/7 availability prominently in hero and header

**Local SEO Elements:**
- Schema markup for LocalBusiness implemented
- Service area keywords naturally integrated
- NAP (Name, Address, Phone) consistency
- Link to main site with appropriate anchor text

**Trust & Credibility:**
- Professional imagery throughout
- Clear service descriptions without jargon
- Visible business hours and response times
- Parent company branding subtly integrated