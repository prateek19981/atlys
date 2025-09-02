# 🐭 Forum App

A simple forum-like application built with **React + Vite + TypeScript**, featuring user authentication, post creation, and a clean UI.  

---

## 🚀 Features

- 🔑 **Authentication Modal** (Sign in / Sign up)  
- 📝 **Post Editor** – create and share posts  
- 📄 **Post Feed** – view posts in a card-based layout  
- 🎨 **Tailwind CSS styling** with animations  
- ⚡ **Vite** for fast development and builds  
- 🧩 Modular components (Auth, Header, PostCard, PostEditor)  

---

## 📂 Project Structure

```bash
forum-app/
├── src/
│   ├── assets/            # Images, icons, logos
│   ├── components/        # Reusable components
│   │   ├── Auth/          # Auth modal & helpers
│   │   ├── PostCard/      # Individual post display
│   │   ├── PostEditor/    # Editor for new posts
│   │   └── header/        # Header with auth actions
│   ├── data/              # Mock data (posts, users)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # React root
│   └── index.css          # Global styles
├── public/                # Static files
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
