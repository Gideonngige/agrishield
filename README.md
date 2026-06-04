# 🌾 AgriShield AI

AgriShield AI combines real-time weather intelligence and computer vision to help farmers make informed, data-driven decisions, improve crop yields, and drastically reduce losses.

## 🔗 Live Demo
[Explore the Live Application](https://agrishield-kappa.vercel.app/)

---

## 🧠 Problem Solved
Smallholder and commercial farmers heavily suffer from unpredictable weather patterns and late disease detection. **AgriShield AI** bridges this gap by acting as an intelligent field companion. It leverages real-time micro-climate metrics, predictive analytics, and drone visual pipelines to translate raw field data into actionable farming advice before risks damage the harvest.

## 🔑 Features
*   **Real-Time Weather Monitoring:** Instant telemetry track-ins for hyper-local agricultural planning.
*   **AI Farming Recommendations:** Generative, domain-specific insights tailoring irrigation and fertilizer applications.
*   **Crop Risk Analysis:** Proactive risk scoring to evaluate environmental stress thresholds.
*   **Tree Canopy Analysis:** High-resolution computer vision pipelines to count trees and audit health patterns from uploaded drone or satellite imagery.
*   **County-Based Weather Filters:** Granular, region-specific tracking toggles.


## ⚙️ Tech Stack
*   **Backend:** Django REST Framework (Python)
*   **Frontend:** React.js (Vite), Tailwind CSS
*   **API Client:** Axios
*   **Third-Party Services:** WeatherAI Core API

### 🌍 API Base URL
```text
[https://api.weather-ai.co/v1/weather](https://api.weather-ai.co/v1/weather)


Setup Instructions
Follow these steps to set up and run AgriShield AI on your local development machine.

1. Clone the Repository
Bash
git clone [https://github.com/Gideonngige/agrishield.git](https://github.com/Gideonngige/agrishield.git)
cd agrishield
2. Backend Setup (Django)
Navigate to the backend partition, isolate your environment, and trigger dependencies:

Bash
cd backend
python -m venv venv

# Activate Environment
source venv/bin/activate   # Linux/Mac
# For Windows use: venv\Scripts\activate

# Install Core dependencies
pip install -r requirements.txt
3. Create Environment Variables
Create a file named .env inside the backend/ directory:

Code snippet
WEATHER_AI_KEY=wai_your_api_key_here
SECRET_KEY=your_django_key
4. Database Migrations
Initialize your database schemas:

Bash
python manage.py makemigrations
python manage.py migrate
5. Start the Django Server
Bash
python manage.py runserver
The backend instance will initialize at: http://localhost:8000

6. Frontend Setup (React)
Open a new terminal node, return to root, and initialize the frontend space:

Bash
cd frontend
npm install
7. Run Local Development Server
Bash
npm run dev
The frontend instance will initialize at: http://localhost:5173
