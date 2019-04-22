'use strict';

const inputSearch = document.querySelector('.input__search');
const searchButton = document.querySelector('.search__button');

// El usuario mete el nombre de la serie en el input
// Se recoje el texto que ha introducido el usuario en el input
// Al hacer click en buscar la aplicación se conecta a la API
// Se muestra en el resultado el título y la imagen
// Si la serie no tiene imagen se mostrará 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
// El usuario puede indicar series favoritas
// Al hacer click para hacer fav el color de fondo y la fuente cambian
// Si se hace una nueva búsqueda los resultados de fav se acumulan a la izquierda
// El linastado de favoritos se almacena en LocalStorage

function printTest() {
  let urlAPI = `http://api.tvmaze.com/singlesearch/shows?q=${inputSearch.value}`;
  fetch(urlAPI) 
    .then(function(response) { console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      let tvShowsContainer = document.querySelector('.tv__shows-container');
      tvShowsContainer.innerHTML = '';
      
      const newLi = document.createElement('li');
      newLi.classList.add('show__item');
      tvShowsContainer.appendChild(newLi);

      const newH2 = document.createElement('h2');
      newH2.classList.add('show__title');
      newLi.appendChild(newH2);
      const newTitle = document.createTextNode(data.name);
      newH2.appendChild(newTitle);

      const newImg = document.createElement('img');
      newImg.classList.add('show__image');
      newLi.appendChild(newImg);
      if(data.image === null) {
        newImg.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
      } else {
        newImg.src = data.image.medium;
        newImg.alt = data.title;
      }
    });
};
searchButton.addEventListener('click', printTest);


// LLAMADA AL SERVIDOR
// const promise = fetch(urlAPI)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
// console.log(promise);
//# sourceMappingURL=main.js.map
