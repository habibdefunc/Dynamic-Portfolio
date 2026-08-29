# 🎨 Dynamic Portfolio

A modern, responsive personal portfolio website built with **Vite**, **React 18**, and **Tailwind CSS**. Showcase your projects, skills, and connect with potential clients or employers in style!

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant development and optimized production builds
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Clean, professional UI with smooth animations and hover effects
- 🛠️ **Tech Stack Display** - Beautiful skill cards with tech icons and hover effects
- 📦 **Project Showcase** - Interactive project cards with descriptions and live links
- 💬 **Contact Form** - Integrated contact form via Getform
- 🔗 **Social Links** - Easy access to social media and professional profiles
- 🎯 **Smooth Scrolling** - Seamless navigation between sections

## 🛠️ Tech Stack

- **Frontend:** React 18.3.1, Vite 7.x
- **Styling:** Tailwind CSS 4, PostCSS
- **Icons:** React Icons
- **Scrolling:** react-scroll
- **Build Tool:** Vite
- **Package Manager:** npm or yarn

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (LTS version recommended, v18+)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

### Verify Installation

```bash
node --version
npm --version
git --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/habibdefunc/Dynamic-Portfolio.git
cd Dynamic-Portfolio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

or

```bash
yarn build
```

### 5. Preview Production Build

```bash
npm run preview
```

or

```bash
yarn preview
```

## 📁 Project Structure

```
Dynamic-Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── svg/
│   │   │   └── svg.jsx
│   │   └── images/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Main.jsx
│   │   ├── Navbar.jsx
│   │   ├── Project.jsx
│   │   ├── ProjectItem.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## ✏️ Customization

### Update Personal Information

1. **Main section** - Edit `src/components/Main.jsx` to change your intro and "What I do" cards
2. **About section** - Update `src/components/About.jsx` with your bio and journey
3. **Skills section** - Modify `src/components/Skills.jsx` to showcase your tech stack
4. **Projects section** - Add your projects in `src/components/Project.jsx`
5. **Contact section** - Update contact links and form endpoint in `src/components/Contact.jsx`

### Update Social Links

All social media links are in:
- `src/components/Main.jsx` - "Lets Connect" section
- `src/components/Contact.jsx` - "Connect With Me" section

### Customize Colors & Styling

- **Global styles** - Edit `src/index.css`
- **Tailwind config** - Modify `tailwind.config.js`
- **Component styles** - Update Tailwind classes in individual component files

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign up
3. Click "New site from Git"
4. Select your repository
5. Set build command to `npm run build`
6. Set publish directory to `dist`
7. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your project
3. Vercel will auto-detect it's a Vite project
4. Deploy!

### Deploy to GitHub Pages

```bash
npm run build
# Then push the dist folder to your gh-pages branch
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🤝 Contributing

Feel free to fork this project and create your own portfolio! If you have improvements or suggestions, feel free to create a pull request.

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Habib Ritonga**

- GitHub: [@habibdefunc](https://github.com/habibdefunc)
- Instagram: [@mhdnaufalhartg](https://www.instagram.com/mhdnaufalhartg)

---

**Happy Building! 🚀**
