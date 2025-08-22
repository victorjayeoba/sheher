# Beauty Online - Natural Beauty Landing Page

A modern, responsive beauty landing page built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Interactive carousels and animations
- Modern UI components
- Static export ready for deployment

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to Bolt

This project is configured for static deployment on Bolt.

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Static Export**: Enabled

### Files for Deployment

- `bolt.json` - Bolt deployment configuration
- `out/` - Static build output (generated after build)

### Deployment Steps

1. Build the project: `npm run build`
2. Deploy the `out/` directory to Bolt
3. The site will be available as a static website

## Project Structure

```
├── app/
│   ├── page.tsx              # Main page (server component)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── beauty-landing-page-client.tsx  # Client component with interactivity
│   └── ui/                   # UI components
├── next.config.mjs           # Next.js configuration
├── bolt.json                 # Bolt deployment config
└── package.json              # Dependencies and scripts
```

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS
- TypeScript
- Lucide React Icons 