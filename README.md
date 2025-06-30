# PathAI: AI-Powered Career Coach 🚀

[![Live Site](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://path-ai-31u1.vercel.app/)


PathAI is an intelligent career guidance platform built with Next.js 14 and integrated with Google Gemini AI. It helps users boost their career potential through real-time resume building, cover letter generation, job matching, and interview preparation tools — all powered by modern AI.

---

## ✨ Features

- 🌟 **AI Resume Builder**: Fill out a form and auto-generate a polished markdown resume with PDF export.
- 📄 **AI Cover Letter Generator**: Generates personalized cover letters using Gemini based on user profile and job description.
- 🎯 **Job Match Insights**: Coming soon.
- 🎤 **Interview Preparation**: AI-generated technical and behavioral questions with assessments and performance charts.
- 📊 **Industry Insights**: Weekly Gemini-generated market trends, salaries, and top skills per industry.
- ☁️ **Persistent User Data**: Auth via Clerk, data storage with Prisma & PostgreSQL.

---

## 🛠️ Tech Stack

| Layer              | Tech Used                                           |
|--------------------|-----------------------------------------------------|
| **Frontend**       | Next.js 14 (App Router), React, Tailwind CSS        |
| **Authentication** | Clerk.dev                                           |
| **AI Services**    | Google Generative AI (Gemini 1.5 Flash)             |
|    |                                           |
| **Database**       | PostgreSQL (Neon.tech) via Prisma ORM               |
| **Background Jobs**| Inngest (cron + Gemini insights)                    |
| **UI Components**  | shadcn/ui, lucide-react                             |
| **PDF Export**     | html2pdf.js                                         |
| **Charts**         | Recharts                                            |

---


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Deepanshi-05/PathAI.git
cd PathAI

## 🚀 Getting Started

### 2. Install Dependencies

```bash
npm install

### Create a .env.local file and add the following:

``` bash
DATABASE_URL=your_postgresql_database_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend
GEMINI_API_KEY=your_google_gemini_api_key


### ⚠️ Never commit your .env.local. It's already ignored in .gitignore.

```bash

npx prisma generate
npx prisma migrate dev --name init

```bash
npm run dev

```bash
npx inngest-cli@latest dev

