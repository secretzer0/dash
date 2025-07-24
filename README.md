# Dashboard App

A modern, responsive dashboard application built with React and Vite, featuring a sleek dark theme design with glassmorphism effects.

## Features

- **Modern Dashboard Interface**: Clean, professional layout with card-based design
- **Glassmorphism Effects**: Beautiful backdrop blur and gradient overlays
- **Interactive Components**: Toggle switches, tabs, and hover effects
- **Responsive Design**: Scales appropriately for different screen sizes
- **Car Information**: Battery status with circular progress indicator
- **Project Cards**: Showcase projects with images and descriptions
- **Profile Management**: User profile information and settings
- **Platform Settings**: Customizable notification and application preferences

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with gradients, blur effects, and animations
- **Plus Jakarta Sans**: Google Fonts integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.jsx    # Main dashboard layout
│   ├── Background.jsx   # Background with gradients
│   ├── Breadcrumb.jsx   # Navigation breadcrumb
│   ├── ProfileElements.jsx # User profile and tabs
│   ├── ContentCards.jsx # Main content area
│   ├── WelcomeCard.jsx  # Welcome message card
│   ├── CarInformation.jsx # Car battery and metrics
│   ├── ProfileInformation.jsx # User details
│   ├── PlatformSettings.jsx # Settings with toggles
│   ├── ProjectCard.jsx  # Project showcase
│   └── FooterMenu.jsx   # Footer navigation
├── styles/             # CSS stylesheets
│   ├── index.css       # Global styles
│   ├── App.css         # App component styles
│   └── [Component].css # Individual component styles
├── App.jsx             # Main App component
└── main.jsx            # React entry point
```

## Components Overview

### Dashboard
The main container component that orchestrates all other components with proper positioning and layout.

### Background
Creates the beautiful gradient background with blur effects and overlay images.

### ProfileElements
Contains user avatar, name, email, and navigation tabs (Overview, Teams, Projects).

### CarInformation
Displays car battery status with:
- Circular progress indicator (68% charge)
- Battery health metrics
- Efficiency charts
- Consumption data
- Charging time information

### PlatformSettings
Interactive settings panel with toggle switches for:
- Email notifications
- Application preferences
- Newsletter subscriptions

### ProjectCard
Showcases projects with:
- Project images
- Titles and descriptions
- Team member avatars
- "View All" buttons

## Styling Features

- **CSS Custom Properties**: Consistent color scheme
- **Glassmorphism**: Backdrop blur effects with transparency
- **Gradients**: Complex multi-stop gradients for depth
- **Hover Effects**: Interactive feedback on buttons and links
- **Typography**: Plus Jakarta Sans font family
- **Responsive**: Scales for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes. Please check individual component licenses for production use.
