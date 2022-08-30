const API_KEY = "73ae63d53a61ecde5ff0fdba0e9e4143";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const country = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      country.innerText = data.sys.country;
      weather.innerText = `| 날씨 : ${data.weather[0].main} | 현재 : ${data.main.temp} | 체감 : ${data.main.feels_like} | 최소 : ${data.main.temp_min} | 최고 : ${data.main.temp_max}`;
    });
}
function onGeoError() {
  alert("Geolocation Error!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
