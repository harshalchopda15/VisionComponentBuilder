# Vision Component Builder

Vision Component Builder is an AI-powered full-stack application that transforms natural language UI descriptions into production-ready React components using React, ASP.NET Core, and Groq LLM APIs.

## Overview

The platform enables developers to generate React and Tailwind CSS components by describing them in plain English. The application combines a modern React frontend with an ASP.NET Core backend and Groq-powered Large Language Models to create a seamless prompt-to-code workflow.

### Example

**Prompt**

```
Create a modern pricing card with Free, Pro, and Enterprise plans using React and Tailwind CSS.
```

**Output**

```tsx
export default function PricingCard() {
  return (
    <div className="rounded-xl bg-slate-900 p-6">
      ...
    </div>
  );
}
```

---

## Features

### AI Component Generation

Generate React + Tailwind CSS components from natural language prompts.

### Real-Time Code Output

Receive production-ready component code instantly through a responsive interface.

### Copy to Clipboard

Quickly copy generated code for use in projects.

### Developer-Focused Interface

Clean dark-themed interface optimized for rapid UI generation workflows.

### RESTful API Architecture

Backend services exposed through ASP.NET Core Web APIs.

### Cloud Deployment

* Frontend deployed on Vercel
* Backend deployed on Render

---

## Architecture

```text
React + TypeScript Frontend
            |
            v
      ASP.NET Core API
            |
            v
      Groq LLM Service
            |
            v
      Generated React Code
```

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React

### Backend

* ASP.NET Core 8
* C#
* MVC Architecture
* Dependency Injection
* REST APIs

### AI

* Groq API
* Llama 3.1 8B Instant

### Deployment

* Vercel
* Render
* Docker

---

## Project Structure

```text
vision-component-builder/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── hooks/
│   └── types/
│
└── ComponentManagerApi/
    ├── Controllers/
    ├── Services/
    ├── Models/
    ├── Properties/
    └── Program.cs
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/harshalchopda15/vision-component-builder.git
cd vision-component-builder
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd ComponentManagerApi

dotnet restore

dotnet run
```

Backend runs on:

```text
http://localhost:5018
```

### Environment Variables

Frontend:

```env
VITE_API_URL=http://localhost:5018
```

Backend:

```env
Groq__ApiKey=YOUR_GROQ_API_KEY
```

---

## API Endpoint

### Generate Component

```http
POST /api/Components/generate
```

Request:

```json
{
  "prompt": "Create a modern dashboard card"
}
```

Response:

```json
{
  "code": "export default function DashboardCard() { ... }"
}
```

---

## Engineering Highlights

* Designed and implemented a full-stack AI-powered component generation platform.
* Built a modular React architecture with reusable UI components and state management.
* Developed RESTful ASP.NET Core APIs with dependency injection and service abstraction.
* Integrated Groq LLM APIs to generate production-ready React and Tailwind CSS components.
* Implemented cross-origin communication between cloud-hosted frontend and backend services.
* Configured Docker-based deployment workflows for ASP.NET Core applications.
* Deployed and maintained production services using Vercel and Render.

---

## Future Enhancements

* Live Component Preview Rendering
* Prompt History
* PostgreSQL Integration
* User Authentication
* Saved Components
* Export to Next.js Projects
* Component Versioning

---

## Author

Harshal Chopda

Software Engineering Student | Full-Stack Developer | Machine Learning Enthusiast

Portfolio: https://harshal-chopda-portfolio.vercel.app

GitHub: https://github.com/harshalchopda15
