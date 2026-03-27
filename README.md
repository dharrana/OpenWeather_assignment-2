# OpenWeather Delay Predictor

A full-stack web application that predicts delivery delays based on real-time weather conditions using a FastAPI backend and a React frontend.

---

## Project Overview

The OpenWeather Delay Predictor processes delivery orders and determines whether they will be On Time, Delayed, or result in an Error based on live weather data.

The system consists of:
- A FastAPI backend for processing orders and fetching weather data
- A React frontend for visualization and interaction
- OpenWeather API for real-time weather information

---

## Features

### Backend (FastAPI)

- Asynchronous weather fetching using aiohttp and asyncio
- Parallel API execution using asyncio.gather
- Handles multiple cities efficiently
- Order classification:
  - On Time
  - Delayed (Rain, Snow, Extreme)
  - Error (Invalid city)
- Error handling using try/except
- Message generation for delayed orders
- Environment-based API key management
- REST API endpoint: `/process-orders`

---

### Frontend (React + Vite)

- Single Page Application (SPA)
- Dashboard with delivery analytics
- Orders page with detailed logs
- AI Development Log page documenting system design and logic
- Filtering by order status
- Loading states for API calls
- Modern UI using Tailwind CSS

---

## Tech Stack

### Backend
- FastAPI
- Python
- aiohttp
- asyncio
- python-dotenv

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### External API
- OpenWeather API

---

## Project Structure

```
project-root/
│
├── backend/
│   ├── main.py
│   ├── orders.json
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── AIDevelopmentLog.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## Installation and Setup

### 1. Clone Repository

```
git clone https://github.com/your-username/openweather-delay-predictor.git
cd openweather-delay-predictor
```

---

## Backend Setup

### Install Dependencies

```
cd backend
pip install -r requirements.txt
```

### Create Environment File

```
API_KEY=your_openweather_api_key
```

### Run Backend Server

```
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

### Install Dependencies

```
cd frontend
npm install
```

### Run Frontend

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoint

### GET /process-orders

Returns processed orders with weather-based status.

### Sample Response

```
{
  "success": true,
  "orders": [
    {
      "order_id": "1002",
      "customer": "Bob Jones",
      "city": "Mumbai",
      "status": "Delayed",
      "message": "Hi Bob Jones, your order to Mumbai is delayed due to rain."
    }
  ]
}
```

---

## Workflow

1. User clicks "Run Weather Check"
2. Frontend sends request to backend
3. Backend:
   - Fetches weather data asynchronously
   - Processes all orders
4. Response is returned
5. Frontend updates dashboard and orders view

---

## AI Development Log

The AI Development Log page explains how the system was built and includes:

- Parallel API calls using asyncio.gather
- Error handling using Python try/except
- Delay condition logic based on weather
- Secure API key handling using environment variables
- Message generation strategy for delayed deliveries

---

## Known Limitations

- API URL is configured for local development
- No retry mechanism for failed API calls
- Limited weather condition coverage
- No authentication system
- AI Development Log content is static

---

## Future Improvements

- Deploy backend and frontend
- Add authentication and user roles
- Improve UI responsiveness
- Add real-time logs from backend
- Advanced analytics and charts

---

## Author

Ranajoy Dhar

---
