# 🚀 GEN-AI RESUME

**GEN-AI RESUME** is a high-performance MERN stack application designed to elevate your interview game. It leverages cutting-edge Generative AI to analyze job descriptions and resumes, providing personalized interview strategies, mock questions, and preparation roadmaps.



---

## ✨ Features

- **🎯 AI-Powered Strategy**: Get tailored interview plans based on specific job descriptions.
- **💎 Premium Landing Page**: Stunning Awwwards-style UI with smooth GSAP animations and immersive scrolling.
- **🔐 Secure Access**: Strictly enforced authentication guards for all generation services.
- **📄 Resume Analysis**: Upload your resume (PDF/DOCX) for deep AI-driven profile matching.
- **💬 Mock Interview Questions**: AI-generated technical and behavioral questions with model answers.
- **📈 Success Roadmap**: Daily preparation plans to ensure you're ready for the big day.
- **📥 PDF Export**: Download your AI-enhanced resume directly from the platform.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** & **Vite** (Next-gen frontend tooling)
- **GSAP & ScrollTrigger** (Award-winning animations)
- **SCSS (BEM)** (Modular and maintainable styling)
- **React Router 7** (Advanced client-side routing)
- **Axios** (Robust API communication)

### Backend
- **Node.js** & **Express 5**
- **MongoDB** & **Mongoose** (Database & Modeling)
- **Google Generative AI** (Gemini API integration)
- **Redis** & **ioredis** (High-speed caching & rate limiting)
- **JWT & Bcrypt** (Secure authentication)
- **Puppeteer** (Modern PDF generation)
- **Zod** (Type-safe schema validation)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or MongoDB Atlas)
- Redis Server
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ritam-g/GEN-AI-RESUME.git
   cd GEN-AI-RESUME
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create a .env file based on .env.example
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 📁 Project Structure

```text
GEN-AI-RESUME/
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Hero, Features, etc.)
│   │   ├── features/      # Feature-based modular logic (Auth, Interview)
│   │   ├── pages/         # Full-page components
│   │   ├── lib/           # Third-party configurations (GSAP)
│   │   └── style/         # Global SCSS and variables
├── backend/                # Node + Express API
│   ├── src/
│   │   ├── controller/    # Request handlers
│   │   ├── middleware/    # Auth and validation guards
│   │   ├── model/         # Mongoose schemas
│   │   └── routes/        # API endpoints
└── DOCUMENTATION.md        # Technical update logs
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.
