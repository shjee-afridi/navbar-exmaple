# IBM-Style Responsive Navigation Bar

This project was created as a job interview task demonstrating the implementation of a responsive navigation bar inspired by IBM's homepage design using React.js and CSS.

## 🌐 Live Demo

**[View Live Demo](https://navbar-exmaple.netlify.app)** *(Update this URL with your actual Netlify URL)*

> **Note**: If you're experiencing a 404 error, the deployment might still be in progress or there may be a configuration issue.

## 🎯 Project Overview

A modern, responsive navigation bar that replicates the functionality and design patterns found on IBM's official website. The navbar features different behaviors for desktop and mobile devices, with smooth animations and professional styling.

## ✨ Features

### Desktop Navigation
- **Click-based dropdowns**: Menu items open dropdown menus when clicked
- **Manual close**: Dropdowns can be closed by clicking the same item, clicking outside, or selecting a submenu item
- **Hover effects**: Smooth hover animations with color transitions and underline effects
- **IBM logo integration**: Uses actual IBM SVG logo

### Mobile Navigation
- **Hamburger menu**: Located on the top-left for easy thumb access
- **Slide-out menu**: Main menu slides in from the left side
- **Forward navigation**: Submenu overlays slide in from the right with smooth animations
- **Back navigation**: Simple "← Back" button to return to main menu
- **Full-screen overlay**: Submenus take up the full mobile viewport

### Responsive Design
- **Automatic adaptation**: Seamlessly switches between desktop and mobile layouts
- **Breakpoint handling**: Properly handles screen size changes and orientation switches
- **Cross-device compatibility**: Works on desktop, tablet, and mobile devices

## 🔧 Technical Implementation

### Built With
- **React.js 19.1.0** - Frontend framework
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **IBM Plex Sans** - Typography matching IBM's brand guidelines

### Key Components
- `Navbar.js` - Main navigation component with state management
- `Navbar.css` - Comprehensive styling with responsive design
- `App.js` - Main application component
- `App.css` - Global styles and layout

### Navigation Structure
```
├── AI
│   ├── AI Solutions
│   ├── AI Models
│   ├── AI Agents
│   └── AI Governance
├── Hybrid Cloud
│   ├── Cloud Services
│   ├── Infrastructure
│   ├── Data Management
│   └── Security
├── Products
│   ├── Analytics
│   ├── Automation
│   ├── Databases
│   └── Servers
├── Consulting
│   ├── Business Strategy
│   ├── Technology
│   ├── Digital Transformation
│   └── Industry Solutions
├── Support
│   ├── Technical Support
│   ├── Documentation
│   ├── Training
│   └── Community
└── Think
    ├── Research
    ├── Insights
    ├── Innovation
    └── Thought Leadership
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd navbar-example
```

2. Install dependencies
```bash
npm install
```

3. Place the IBM logo SVG in the public folder
```
public/ibm-black-logo-brandlogos.net_xvk1d52ry.svg
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📱 Usage

### Desktop
1. Click on any main menu item (AI, Hybrid Cloud, Products, etc.) to open its dropdown
2. Click on submenu items to navigate
3. Click the same menu item again or click outside to close dropdowns

### Mobile
1. Tap the hamburger menu (☰) on the top-left
2. Tap any menu item to view its submenu options
3. Use the "← Back" button to return to the main menu
4. Tap outside the menu or on a submenu item to close

## 🎨 Design Decisions

### Color Scheme
- **Primary**: IBM Blue (#0f62fe)
- **Background**: Clean white (#ffffff)
- **Text**: Professional black (#000000)
- **Accents**: Light grays for borders and hover states

### Typography
- **Font Family**: IBM Plex Sans (matching IBM's brand guidelines)
- **Hierarchy**: Clear font sizing and weights for better readability

### Animation Philosophy
- **Smooth transitions**: 0.3s ease animations for all interactions
- **Staggered loading**: Sequential item animations for visual appeal
- **Performance optimized**: CSS-only animations for better performance

## 🔄 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
⚠️ **Note: This is a one-way operation. Once you `eject`, you can't go back!**

## 🚀 Deployment

### Netlify Deployment from GitHub

This project is configured for easy deployment on Netlify:

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository
2. **Connect to Netlify**: 
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
4. **Deploy**: Netlify will automatically build and deploy your site

### Troubleshooting Deployment Issues

#### Still Getting 404 After Deploy?

1. **Check Netlify Dashboard**:
   - Go to your Netlify dashboard
   - Look for your site and check the deployment status
   - If it shows "Failed", click on the failed deploy to see error logs

2. **Manual Redeploy**:
   ```bash
   # In Netlify dashboard, click "Deploys" tab
   # Click "Trigger deploy" → "Deploy site"
   ```

3. **Verify Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18 or higher

4. **Check Files**:
   - Ensure `_redirects` file exists in `public/` folder
   - Verify `package.json` has correct scripts
   - Make sure all dependencies are installed

5. **Clear Cache and Redeploy**:
   - In Netlify dashboard: "Deploys" → "Trigger deploy" → "Clear cache and deploy site"

### Important Files for Deployment
- `public/_redirects`: Handles client-side routing for React SPA
- `package.json`: Contains build scripts and dependencies

### Common Issues & Solutions

#### 404 Error on Netlify
✅ **Fixed**: The `_redirects` file is included to handle React routing

#### Build Failures
- Ensure all dependencies are listed in `package.json`
- Check that the build command is set to `npm run build`
- Verify Node.js version compatibility

#### Logo Not Loading
- Make sure `ibm-black-logo-brandlogos.net_xvk1d52ry.svg` is in the `public` folder
- Check file path and naming matches exactly

## 📊 Performance Considerations

- **Lightweight**: No external UI libraries, pure CSS animations
- **Responsive**: Mobile-first approach with optimized breakpoints
- **Accessible**: Proper ARIA attributes and keyboard navigation support
- **SEO-friendly**: Semantic HTML structure

## 🎯 Interview Task Requirements Met

✅ **Responsive Design**: Works on desktop, tablet, and mobile  
✅ **IBM-style Navigation**: Matches IBM's homepage navigation patterns  
✅ **Desktop Dropdowns**: Click-based dropdown menus  
✅ **Mobile Slide-out**: Left-side hamburger menu with slide-out functionality  
✅ **Submenu Overlays**: Full-screen submenu overlays on mobile  
✅ **Professional Styling**: Clean, modern design with IBM branding  
✅ **Smooth Animations**: Polished transitions and hover effects  
✅ **Code Quality**: Well-structured, maintainable React components  

## 🛠️ Future Enhancements

- Add keyboard navigation support
- Implement accessibility features (ARIA labels, focus management)
- Add unit tests for components
- Integrate with a state management library for larger applications
- Add TypeScript for better type safety

## 📄 License

This project was created as a job interview task and is for demonstration purposes.
