from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/weather/', views.weather_dashboard, name='weather_dashboard'),
    path('api/trees/analyze/', views.analyze_trees, name='analyze_trees'),
]