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
  form: document.querySelector('.bread-select'),
  list: document.querySelector('.bread-list'),
};
refs.form.addEventListener('submit', handleSearch);
function handleSearch(event) {
  event.preventDefault();
  const { value } = refs.form; // Виправлено доступ до властивості
  fetchBreeds(value)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      // Обробте дані
      console.log(data);
      // Викличте функцію для створення розмітки із отриманих даних
      refs.list.innerHTML = createMarkup(data);
    })
    .catch(error => {
      // Обробка помилок
      console.error(error);
    });
}
