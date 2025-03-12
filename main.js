const apiKey = 'ff88865208a8a4176673e351613cd67c';
// const apiUrl =
//   'https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=ff88865208a8a4176673e351613cd67c&units=metric';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
async function weatherInfo(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  if (response.status == 404) {
    alert('Invalid city name');
  } else {
    console.log(data);
    weatherTemp.innerHTML = Math.round(data.main.temp) + '°C';
    humidity.innerHTML = data.main.humidity + '%';
    windSpeed.innerHTML = data.wind.speed + 'Km/h';
    if (data.weather[0].main == 'Clouds') {
      console.log('clouds');
      // weatherIcon.src = 'sunnycloud.jpg';
      weatherIcon.style.backgroundImage = 'url(windycloud.png)';
      // weatherIcon.style.height = '20rem';
      // weatherIcon.style.width = '22rem';
    } else if (data.weather[0].main == 'Clear') {
      console.log('Clear');
      weatherIcon.style.backgroundImage = 'url(sunnycloud.jpg)';
      // weatherIcon.style.height = '20rem';
      // weatherIcon.style.width = '22rem';
    } else if (data.weather[0].main == 'Rain') {
      console.log('Rain');
      // weatherIcon.src = 'sunnycloud.jpg';
      weatherIcon.style.backgroundImage = 'url(rainycloud.jfif)';
      // weatherIcon.style.height = '20rem';
      // weatherIcon.style.width = '22rem';
    }
    // weatherCity.innerHTML = data.name;
    // searchBtn.addEventListener('click', () => {
    //   weatherCity.innerHTML = searchValue.value;
    // });
    weatherCity.innerHTML = searchValue.value;
  }
}

const weatherTemp = document.querySelector('.weather-temp');
const humidity = document.querySelector('.humidity-value');
const windSpeed = document.querySelector('.wind-value');
const searchValue = document.querySelector('#search-bar');
const searchBtn = document.querySelector('.search-btn');
const weatherCity = document.querySelector('.weather-city');
const weatherIcon = document.querySelector('.weather-image');
searchBtn.addEventListener('click', () => {
  // weatherCity.innerHTML = searchValue.value;
  console.log(searchValue.value);
  weatherInfo(searchValue.value);
  if (searchValue.value == '') {
    alert('enter a valid city name');
  }
});
