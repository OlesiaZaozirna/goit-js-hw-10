//Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=live_LPnXlQ229NmBimU9x6qQKGhqCLatSsiVqev4wkM3mmEE6D3E7eX9tRUv62ittXkN'

import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_LPnXlQ229NmBimU9x6qQKGhqCLatSsiVqev4wkM3mmEE6D3E7eX9tRUv62ittXkN';

  /*
  1)отримуємо рефси
  2)вішаємо слухач подій на форму типу сабміт 
  1. превент дефолт (аби заборонити перезавантаження сторінки)
  2. збираємо дані з полів (місто/дні)
  3. робимо запит на сервер(в окремій функції)
  4. малюємо карточки погоди в окремій функції (для створення розмітки)
  3)напишемо функцію для запиту на сервер (вона буде приймати місто/дні)
  1.створюємо константу для посилання і формуємо параметри запиту
  2. посилаємо запит і отримаємо дані (оброблюємо помилки)
  4)напишемо функцію для створення розмітки карточок
*/

const refs = {
    form: document.querySelector(".js-search-form"),
    list:  document.querySelector(".js-list"),
}
refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { city, days } = form.elements;
serviceWeather(city.value, days.value).then(({forecast: forecastday})=>{})    
}

function serviceWeather(city, days) {
    const Base_URL = "htth/:";
    const ENDPOINT = "forecast.json";
    const API_KEY = "3254676464897";
    const params = new URLSearchParams({
        key: API_KEY,
        q: city, days,
        lang: "uk"
    })

    return fetch(`${BAse_Url}/${Enpoint}, ${params}`).then((response) => { })
        