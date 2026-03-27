from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import aiohttp
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# ✅ CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("API_KEY")
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"


# 🌦️ Fetch Weather
async def fetch_weather(session, city):
    try:
        url = f"{BASE_URL}?q={city}&appid={API_KEY}"
        async with session.get(url) as response:
            data = await response.json()

            if response.status != 200:
                return None

            return data["weather"][0]["main"]

    except:
        return None


# 🤖 AI Message (Delay)
def generate_apology(customer, city, weather):
    return f"Hi {customer}, your order to {city} is delayed due to {weather.lower()}. We appreciate your patience and are working hard to get your delivery to you as soon as conditions improve!"


# ❌ Error Message
def generate_error(customer, city):
    return f"Error for {customer}: Weather data not found for '{city}'."


# 🔗 API
@app.get("/process-orders")
async def process_orders():
    try:
        with open("orders.json", "r") as f:
            orders = json.load(f)
    except:
        return {"success": False, "orders": []}

    async with aiohttp.ClientSession() as session:
        tasks = [fetch_weather(session, o["city"]) for o in orders]
        results = await asyncio.gather(*tasks)

    updated_orders = []

    for order, weather in zip(orders, results):

        # ✅ RESET FIELDS (important)
        order["error"] = None
        order["message"] = None

        # ❌ INVALID CITY
        if weather is None:
            order["status"] = "Error"
            order["error"] = "City not found"
            order["message"] = generate_error(
                order["customer"], order["city"]
            )

        # 🌧️ DELAY CASE
        elif weather in ["Rain", "Snow", "Extreme"]:
            order["status"] = "Delayed"
            order["message"] = generate_apology(
                order["customer"], order["city"], weather
            )

        # ✅ ON TIME
        else:
            order["status"] = "On Time"

        updated_orders.append(order)

    return {
        "success": True,
        "orders": updated_orders
    }