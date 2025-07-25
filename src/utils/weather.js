export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음 ☀️",
    1: "대체로 맑음 🌤️",
    2: "부분적으로 흐림 ⛅",
    3: "흐림 ☁️",
    45: "안개 🌫️",
    48: "짙은 안개 🌫️",
    51: "약한 이슬비 🌦️",
    53: "보통 이슬비 🌦️",
    55: "강한 이슬비 🌦️",
    61: "약한 비 🌧️",
    63: "보통 비 🌧️",
    65: "강한 비 🌧️",
    71: "약한 눈 🌨️",
    73: "보통 눈 🌨️",
    75: "강한 눈 🌨️",
    77: "싸락눈 🌨️",
    80: "약한 소나기 🌦️",
    81: "보통 소나기 🌦️",
    82: "강한 소나기 🌦️",
    85: "약한 눈 소나기 🌨️",
    86: "강한 눈 소나기 🌨️",
    95: "천둥번개 ⛈️",
    96: "우박 동반 천둥번개 ⛈️",
    99: "강한 우박 천둥번개 ⛈️",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];

  const time = weatherData.hourly.time;
  const temperature = weatherData.hourly.temperature_2m;
  const weatherCode = weatherData.hourly.weather_code;

  const hourlyData = [];

  for (let i = 0; i < 12; i++) {
    const hour = new Date(time[i]).getHours() + "시";

    hourlyData.push({
      time: hour,
      temperature: temperature[i],
      weatherCode: weatherCode[i],
    });
  }

  return hourlyData;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];

  const time = weatherData.daily.time;
  const temperature = weatherData.daily.temperature_2m_max;
  const weatherCode = weatherData.daily.weather_code;

  const dailyData = [];

  for (let i = 0; i < 7; i++) {
    dailyData.push({
      time: time[i],
      temperature: temperature[i],
      weatherCode: weatherCode[i],
    });
  }

  return dailyData;
};