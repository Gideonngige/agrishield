from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .services import WeatherAIService
from .utils import calculate_risk

import requests
from django.conf import settings

def index(request):
    return HttpResponse("Hello world!")




# API endpoint for weather dashboard
@api_view(["GET"])
def weather_dashboard(request):

    lat = request.GET.get("lat")
    lon = request.GET.get("lon")

    weather = WeatherAIService.get_weather(lat, lon)

    risk = calculate_risk(weather)

    return Response({
        "weather": weather,
        "risk": risk,
    })


# API endpoint for tree analysis
@api_view(["POST"])
def analyze_trees(request):

    image = request.FILES["image"]

    headers = {
        "Authorization": f"Bearer {settings.WEATHER_AI_KEY}"
    }

    files = {
        "image": image
    }

    response = requests.post(
        "https://api.weather-ai.co/v1/trees/analyze",
        headers=headers,
        files=files,
    )

    return Response(response.json())