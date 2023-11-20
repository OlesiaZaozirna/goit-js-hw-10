function selectCreateMarkUp(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createMarkUp(arr) {
  const { url, width, height } = arr[0];
  const { name, description, temperament } = arr[0].breeds[0];

  return `
        <img class="cat-info-img" src="${url}" alt="${name}" width="${width}", height="${height}">
      <div><h2>${name}</h2>
      <p>${description}</p>
      <p><span class="temperament">Temperament:</span> ${temperament}</p>
           <a href="https://happypaw.ua/ua?gclid=Cj0KCQiApOyqBhDlARIsAGfnyMrkZE2jD8bOzU3k2SL9cQ9NYgTjv_LJhVY-C6bwBjk5C_pXDBTMPwUaAj-ZEALw_wcB">
      <button class="adopt_btn" type="submit">Adopt a friend</button>
      </a>
           </div>`;
}

export { selectCreateMarkUp, createMarkUp };
