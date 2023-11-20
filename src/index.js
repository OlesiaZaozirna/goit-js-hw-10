import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import { selectCreateMarkUp, createMarkUp } from './markup';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  select: document.querySelector('.breed-select'),
  Loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  div: document.querySelector('.cat-info'),
};

Loading.init({
  svgColor: '#5897fb',
  svgSize: '230px',
  messageFontSize: '30px',
});

// Ініціалізуємо SlimSelect до завантаження даних
const slimSelect = new SlimSelect({
  select: '#selectElement',
  settings: {
    allowDeselect: true,
  },
});

// Функція для відображення лоадера
function showLoader() {
  refs.Loader.hidden = false;
  refs.div.innerHTML = '';
  Loading.dots();
}

// Функція для приховування лоадера
function hideLoader() {
  refs.Loader.hidden = true;
  Loading.remove();
}
showLoader();

fetchBreeds()
  .then(({ data }) => {
    refs.select.innerHTML = selectCreateMarkUp(data);
    refs.select.hidden = false;
    refs.error.hidden = true;
  })
  .catch(err => {
    console.log(err.message);
    Notify.failure(`Oops! Something went wrong! Try reloading the page!`, {
      position: 'center-center',
    });
  })
  .finally(() => {
    hideLoader();
  });

refs.select.addEventListener('change', onSelect);

function onSelect(evt) {
  const breedId = evt.currentTarget.value;
  showLoader();

  fetchCatByBreed(breedId)
    .then(({ data }) => {
      refs.div.innerHTML = createMarkUp(data);
      refs.div.style.boxShadow =
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
      refs.div.style.borderRadius = '5px';
    })
    .catch(err => {
      console.log(err.message);
      Notify.failure(`Oops! Something went wrong! Try reloading the page!`, {
        position: 'center-center',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
