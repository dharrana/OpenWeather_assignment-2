# Frontend - OpenWeather Delay Predictor

This is the frontend of the OpenWeather Delay Predictor application, built using React and Vite. It provides a modern user interface to visualize delivery statuses based on weather conditions and includes an AI Development Log to document engineering decisions.

---

## Overview

The frontend communicates with the FastAPI backend to fetch processed order data and displays it through an interactive dashboard, orders view, and AI development logs.

---

## Features

- Single Page Application (SPA)
- Dashboard with delivery statistics
- Orders page with detailed logs
- AI Development Log page documenting backend logic and design decisions
- Filtering by status (All, On Time, Delayed, Error)
- Loading states during API calls
- Responsive and modern UI using Tailwind CSS

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- Axios

---

## Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Orders.jsx
│   └── AIDevelopmentLog.jsx
│
├── App.jsx
└── main.jsx
```

---

## Setup Instructions

### 1. Install Dependencies

```
npm install
```

---

### 2. Run Development Server

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Backend Connection

Ensure the FastAPI backend server is running at:

```
http://127.0.0.1:8000
```

The frontend calls:

```
GET /process-orders
```

---

## Usage

1. Open the application in the browser
2. Click "Run Weather Check"
3. View results in:
   - Dashboard (analytics)
   - Orders (detailed delivery logs)
   - AI Development Log (engineering decisions and system design insights)

---

## AI Development Log Details

The AI Development Log page documents key backend implementations and decisions, including:

- Parallel API calls using asyncio.gather
- Error handling using try/except for invalid cities
- Weather-based delay logic
- Secure API key management using environment variables
- Message generation strategy for delayed deliveries

---

## Notes

- Backend must be running before using the frontend
- API URL is currently configured for local development
- No authentication is implemented
- AI Development Log content is currently static

---
