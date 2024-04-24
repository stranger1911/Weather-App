const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "8e63a61b06e92b6a9c69ff2edcf31557";
const temperature = document.querySelector(".temperature");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity-percentage");
const wind = document.querySelector(".wind-percentage");
const searchBtn = document.querySelector(".btn");
const searchBox = document.querySelector(".search");
const weatherIcon = document.querySelector(".icon");
const dataBoxValue = document.querySelector(".dataBox");
const weatherCard = document.querySelector(".weather-card");

async function getWeather(city) {
  const data = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  const response = await data.json();
  console.log(response);
  temperature.innerHTML = Math.round(response.main.temp) + " °C";
  cityName.innerHTML = response.name;
  humidity.innerHTML = response.main.humidity + " %";
  wind.innerHTML = response.wind.speed + " km/h";

  if (response.weather[0].main == "Clouds") {
    weatherIcon.src = "asset/cloudy.png";
  } else if (response.weather[0].main == "Clear") {
    weatherIcon.src = "asset/clear.png";
  } else if (response.weather[0].main == "Haze") {
    weatherIcon.src = "asset/haze.png";
  } else if (response.weather[0].main == "Rain") {
    weatherIcon.src = "asset/rain.png";
  } else if (response.weather[0].main == "Drizzle") {
    weatherIcon.src = "asset/drizzle.png";
  } else if (response.weather[0].main == "Snow") {
    weatherIcon.src = "asset/snow.png";
  } else if (response.weather[0].main == "Thunderstorm") {
    weatherIcon.src = "asset/thunderstorm.png";
  } else if (response.weather[0].main == "Sunny") {
    weatherIcon.src = "asset/sunny.png";
  }
}

searchBtn.addEventListener("click", () => {
  const searchValue = searchBox.value;
  dataBoxValue.style.display = "block";
  weatherCard.style.height = "40rem";
  getWeather(searchValue);
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const searchValue = searchBox.value;
    dataBoxValue.style.display = "block";
    weatherCard.style.height = "40rem";
    getWeather(searchValue);
  }
});
