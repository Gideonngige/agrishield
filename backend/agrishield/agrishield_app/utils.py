def calculate_risk(weather):

    risk = 0

    temperature = weather.get("temperature", 0)
    humidity = weather.get("humidity", 0)
    wind = weather.get("wind_speed", 0)

    if temperature > 30:
        risk += 25

    if humidity > 85:
        risk += 25

    if wind > 20:
        risk += 25

    if risk >= 70:
        level = "HIGH"

    elif risk >= 40:
        level = "MEDIUM"

    else:
        level = "LOW"

    return {
        "score": risk,
        "level": level,
    }