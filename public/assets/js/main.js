'use strict';

const inputSearch = document.querySelector('.input__search');
const searchButton = document.querySelector('.search__button');

function printShows() {
  let urlAPI = `http://api.tvmaze.com/search/shows?q=${inputSearch.value}`;
  fetch(urlAPI) 
    .then(function(response) { 
      return response.json();
    })
    .then(function(data) {
      console.log(data)
      let tvShowsContainer = document.querySelector('.tv__shows-container');
      tvShowsContainer.innerHTML = '';

      for(let i = 0; i < data.length; i++) {
        
        const newLi = document.createElement('li');
        newLi.classList.add('show__item');
        tvShowsContainer.appendChild(newLi);

        const newH2 = document.createElement('h2');
        newH2.classList.add('show__title');
        newLi.appendChild(newH2);
        const newTitle = document.createTextNode(data[i].show.name);
        newH2.appendChild(newTitle);

        const newImg = document.createElement('img');
        newImg.classList.add('show__image');
        newLi.appendChild(newImg);
        if(data[i].show.image === null) {
          newImg.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        } else {
          newImg.src = data[i].show.image.medium;
          newImg.alt = data[i].show.name;
        }

        const schedule = document.createElement('h3');
        const scheduleContent = document.createTextNode(data[i].show.schedule.days);
        schedule.appendChild(scheduleContent);
        newLi.appendChild(schedule);

        
      newLi.addEventListener('click', favoriteSelect);
      };
    });
  };

searchButton.addEventListener('click', printShows);

function printConsole(event) {
  console.log(event.currentTarget.querySelector('.show__title').innerHTML);
}

function favoriteSelect(event) {
  console.log(event)
  let favList = document.querySelector('.fav__list');
  let favItem = event.path[1].cloneNode(true);
  favItem.classList.add('select__favorite');
  favList.appendChild(favItem);
  console.log(favItem);

  favItem.addEventListener('click', printConsole)
};

function unFavorite(event) {
  let favList = document.querySelector('.fav__list');
  let favItem = document.querySelector('.select__favorite');
  favList.removeChild(favItem);

  console.log(event)
};


//# sourceMappingURL=main.js.map
