# ⚡ ARYAL_SYSTEMS

> **Status:** Active  
> **Live:** https://portfolio-site-pi-two.vercel.app/

A personal portfolio system built with **React**, **Vite**, **Tailwind CSS**, and **Supabase**.  
Focused on clean structure, controlled visuals, and functional UI — not gimmicks.

---

## 🧱 Tech Stack

- **Architecture:** Single Page Application (SPA)
- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Backend:** Supabase (PostgreSQL, RLS-enabled)
- **Icons:** Lucide React

## 🧩 Core Sections & Features

### 🧠 Hero / Identity
- Dynamic **typing effect** (regex-driven, not hardcoded text swaps)
- Cyberpunk-inspired UI elements

### 🧪 Skills / Capabilities
- Skill nodes rendered with **controlled randomness**
- No percentage bars or fake proficiency metrics
- Logical separation between:
  - Core logic / fundamentals
  - Tools & stacks

### 🎓 Education
- **Collapsible UI:** Academic details are minimized by default to reduce visual noise.

### 📬 Get In Touch
- Contact form backed by **Supabase**
- Real-time validation
- Database-level protection via Supabase policies (RLS)
- Professional links with visual iconography

### 🧩 Extensions
- **Interests:** Personal hobbies and side quests.

### ❌ Custom Error Page
- Dedicated error / fallback page
- Handles random or unknown routes


## ⚙️ Local Setup

### 1. Clone & Install
```bash
git clone https://github.com/anisharyal09/portfolio-site.git

cd portfolio-site

npm install
```

### 2. Environment Variables

Create a .env file in the project root:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Development Server
```
npm run dev
```


---


© 2025 Anish Aryal