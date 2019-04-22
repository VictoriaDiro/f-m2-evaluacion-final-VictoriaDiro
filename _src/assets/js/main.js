'use strict';

const inputSearch = document.querySelector('.input__search');
const searchButton = document.querySelector('.search__button');

// const urlAPI = ;

// LISTADO DE RESULTADOS

fetch(`http://api.tvmaze.com/search/shows?q=${inputSearch.value}`)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    if(inputSearch.value !== '') {
      // CREAR CONTENIDO EN EL DOM
      function getTvShows() {
        for(let i = 0; i < data.length; i++) {
        // Crear elementos en HTML
        const tvShowsContainer = document.querySelector('.tv__shows-container');
        const newLi = document.createElement('li');
        const newH2 = document.createElement('h2');
        const newImg = document.createElement('img');
        newImg.src = data[i].image;
        newImg.alt = data[i].title;
        // Añadir contenido a elementos de HTML
        tvShowsContainer = document.createTextNode(data[i].title);
        newH2.appendChild(tvShowsContainer);
        newLi.appendChild(newH2);
        news.appendChild(newLi);
        newLi.appendChild(newImg);
        // Añadir clases a elementos de HTML
        newLi.classList.add('show__item');
        newH2.classList.add('show__title');
        newImg.classList.add('show__image');
      }
      searchButton.addEventListener('click', getTvShows);
      newLi.innerHTML = data.result;
    }
  });

// VARIABLE CON ARRAY DE FAVORITOS (A LA IZQ BAJO BUSCADOR)

// FAVS SE ACUMULAN EN ARRAY

// PETICIÓN AL SERVIDOR

// CREAR CONTENIDO EN EL DOM

// // API TVMAZE, SI NO HAY IMAGEN --> PLACEHOLDER
// if(showz.image == '') {
//   newImg.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
// }


// // AL HACER CLICK, FONDO Y FUENTE SE CAMBIAN
// function selectFavorite() {
//   newLi.classList.toggle('select__favorite');
// }
// newLi.addEventListener('click', selectFavorite);

// // FAVS EN LOCALSTORAGE
// localStorage.setItem('name', 'imagen');
// const name = localStorage.getItem('name', 'imagen');
// console.log(name); //Ana
