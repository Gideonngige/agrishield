import requests
from django.conf import settings


class WeatherAIService:

    BASE_URL = "https://api.weather-ai.co"

    @staticmethod
    def get_weather(lat, lon):

        headers = {
            "Authorization": f"Bearer {settings.WEATHER_AI_KEY}"
        }

        params = {
            "lat": lat,
            "lon": lon,
            "days": 7,
            "ai": True,
        }

        response = requests.get(
            f"{WeatherAIService.BASE_URL}/v1/weather",
            headers=headers,
            params=params,
        )

        return response.json()