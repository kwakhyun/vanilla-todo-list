const API_KEY = "73ae63d53a61ecde5ff0fdba0e9e4143";

function onGeoSuccess(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도

  /**
   * 위도와 경도를 통해서 날씨 정보를 불러온다.
   * &units=metric : 섭씨 온도를 반환한다. 없으면 화씨 온도를 반환한다.
   */
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const country = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      country.innerText = data.sys.country;
      weather.innerText = `| 날씨 : ${data.weather[0].main} | 현재 : ${data.main.temp} | 체감 : ${data.main.feels_like} | 최소 : ${data.main.temp_min} | 최고 : ${data.main.temp_max}`;
      document.querySelector("#weather").classList.remove("hidden");
    });
}

function onGeoError() {
  alert("위치 조회 권한이 없어, 날씨 정보를 불러올 수 없습니다.");
}

// 위치 정보 요청
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
