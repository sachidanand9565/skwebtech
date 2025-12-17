# SK WebTech - IT Services Agency Website

A modern, professional, SEO-friendly IT services agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimal, corporate tech look with smooth hover effects
- **Fully Responsive**: Mobile-first approach with excellent UX on all devices
- **SEO Optimized**: Proper meta tags, Open Graph, semantic HTML, and sitemap
- **Performance Focused**: Optimized images, lazy loading, and fast page loads
- **Type-Safe**: Built with TypeScript for reliability and developer experience
- **Reusable Components**: Modular component architecture for easy maintenance

## 📁 Project Structure

```
sk-webtech/
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots file
│   └── icons/              # App icons (add your own)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with header/footer
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   ├── sitemap.ts      # Dynamic sitemap
│   │   ├── loading.tsx     # Loading state
│   │   ├── error.tsx       # Error boundary
│   │   ├── not-found.tsx   # 404 page
│   │   ├── services/       # Services page
│   │   ├── portfolio/      # Portfolio page
│   │   ├── about/          # About page
│   │   └── contact/        # Contact page
│   ├── components/
│   │   ├── common/         # Reusable components
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── PortfolioCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── CallButton.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── WhyChooseUsSection.tsx
│   │       ├── PortfolioPreviewSection.tsx
│   │       └── TestimonialsSection.tsx
│   ├── config/
│   │   └── site.ts         # Site configuration
│   └── lib/
│       └── utils.ts        # Utility functions
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (Blue) - `#6366f1` to `#4f46e5`
- **Accent**: Orange - `#f97316` (CTAs)
- **Neutral**: Gray scale
- **Background**: White with subtle gray/primary gradients

### Typography
- **Headings**: Poppins
- **Body**: Inter

### Components
- Soft shadows and rounded corners
- Smooth hover transitions
- Card-based layouts
- Gradient accents

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sk-webtech.git
   cd sk-webtech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Home Page
- Hero section with stats
- Services overview
- Why Choose Us section
- Portfolio preview
- Testimonials
- Strong CTA

### Services Page
- Detailed service cards
- Process timeline
- Technology stack display

### Portfolio Page
- Project grid with filters
- Responsive image gallery
- Stats section

### About Page
- Company story
- Mission & Vision
- Core values
- Timeline milestones

### Contact Page
- Contact form with validation
- Contact information cards
- WhatsApp integration
- FAQ section
- Map placeholder

## 🔧 Customization

### Update Site Configuration
Edit `src/config/site.ts` to update:
- Company name and tagline
- Contact information
- Social media links
- Business hours
- SEO defaults

### Update Colors
Edit `tailwind.config.ts` to modify:
- Primary color palette
- Accent colors
- Custom shadows
- Animation timings

### Add/Remove Pages
Create new folders in `src/app/` for new pages following Next.js App Router conventions.

## 🌐 SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Dynamic sitemap generation
- ✅ robots.txt configuration
- ✅ Clean URL structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Structured data ready

## 📞 Contact Features

- WhatsApp floating button
- Call Now button (mobile)
- Contact form with validation
- Multiple contact methods
- Business hours display

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
Build and deploy the `.next` folder to any Node.js hosting platform.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**SK WebTech**
- Website: [skwebtech.in](https://skwebtech.in)
- Email: hello@skwebtech.in

---

Made with ❤️ by SK WebTech
