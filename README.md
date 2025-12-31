# 🚀 Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://alnemerabdulwahab.github.io/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> A modern, interactive portfolio showcasing my software engineering journey, projects, and certifications.

## 🌐 Live Demo

Visit the live site: [alnemerabdulwahab.github.io](https://alnemerabdulwahab.github.io/)

---

## ✨ Features

- **Responsive Design** - Seamless experience across all devices
- **Interactive UI** - Smooth animations and hover effects
- **GitHub Integration** - Dynamically fetches and displays repositories
- **Credly Badges** - Live certification badges embedded from Credly
- **Smooth Navigation** - Scroll spy with active section highlighting
- **Modern Tech Stack** - Built with React and Tailwind CSS
- **Fast Performance** - Optimized build and deployment

---

## 🛠️ Tech Stack

- **Framework:** React 19.2.3
- **Styling:** Tailwind CSS 3.4.19
- **Icons:** Lucide React
- **Deployment:** GitHub Pages
- **Build Tool:** React Scripts
- **Version Control:** Git & GitHub

---

## 📂 Project Structure
```
alnemerabdulwahab.github.io/
├── public/
│   ├── certifications/           # PDF certificates
│   │   ├── comptia-ccAP.pdf
│   │   ├── comptia-cloud-plus.pdf
│   │   ├── comptia-cnip.pdf
│   │   ├── comptia-csCP.pdf
│   │   ├── comptia-network-plus.pdf
│   │   ├── comptia-security-plus.pdf
│   │   └── comptia-server-plus.pdf
│   └── index.html
├── src/
│   ├── components/              # React components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── GitHub.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   └── Projects.jsx
│   ├── data/                    # Data files
│   │   ├── certifications.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.js                   # Main app component
│   ├── App.css                  # App styles
│   └── index.css                # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/AlnemerAbdulwahab/alnemerabdulwahab.github.io.git
   cd alnemerabdulwahab.github.io
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run the development server**
```bash
   npm start
```
   
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Build for production**
```bash
   npm run build
```

---

## 📦 Deployment

This portfolio is automatically deployed to GitHub Pages using the `gh-pages` package.

### Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build the production version
2. Push to the `gh-pages` branch
3. Update the live site automatically

---

## 📄 Sections

- **🏠 Hero** - Introduction and quick links
- **👨‍💻 About** - Education and skills overview
- **💼 Experience** - Current bootcamp and professional development
- **🚀 Projects** - Featured projects with live demos
- **📂 GitHub** - Dynamic repository showcase
- **🏆 Certifications** - Professional certifications with Credly badges
- **📧 Contact** - Get in touch

---

## 🎨 Customization

### Update Personal Information

1. **Contact Info** - Edit `src/components/Contact.jsx`
2. **Projects** - Edit `src/data/projects.js`
3. **Skills** - Edit `src/data/skills.js`
4. **Certifications** - Edit `src/data/certifications.js`

### Add New Certifications

1. Add PDF to `public/certifications/`
2. Update `src/data/certifications.js` with badge ID from Credly
3. Get badge ID from your Credly badge URL: `credly.com/badges/[BADGE_ID]/public_url`

---

## 🤝 Connect With Me

- **GitHub:** [@AlnemerAbdulwahab](https://github.com/AlnemerAbdulwahab)
- **LinkedIn:** [abdulwahab-alnemer](https://www.linkedin.com/in/abdulwahab-alnemer)
- **Email:** alnemerabdulwahab@gmail.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Badges by [Credly](https://www.credly.com/)
- Built with [Create React App](https://create-react-app.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  <p>Made with ❤️ by Abdulwahab Alnemer</p>
  <p>© 2025 All rights reserved</p>
</div>