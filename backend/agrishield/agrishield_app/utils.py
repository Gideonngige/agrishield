def calculate_risk(weather):

    score = 0

    if weather["temperature"] > 30:
        score += 30

    if weather["humidity"] > 85:
        score += 25

    if weather["rain_probability"] > 60:
        score += 25

    if weather["wind_speed"] > 15:
        score += 20

    if score >= 70:
        level = "HIGH"

        recommendation = (
            "High weather risk detected. Monitor crops closely."
        )

    elif score >= 40:
        level = "MEDIUM"

        recommendation = (
            "Moderate risk. Consider preventive measures."
        )

    else:
        level = "LOW"

        recommendation = (
            "Conditions look favorable for farming activities."
        )

    return {
        "score": score,
        "level": level,
        "recommendation": recommendation,
    }