/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */

const main = () => {
  const baseURL = 'https://api.themoviedb.org/3/movie/';
  const APIKey = '374e68a61ddf3586ea4ffed09f873d81';

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  const ratingColor = (rating) => {
    if (rating < 6) {
      return 'text-bg-danger';
    }
    return 'text-bg-success';
  };

  const renderCard = (arr) => {
    const container = document.querySelector('.card-container');
    let listsDOM = '';
    arr.forEach((element) => {
      listsDOM += `<div class="card" aria-details="${element.id}">
                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" class="card-img-top">
                    <span class="position-absolute badge ${ratingColor(element.vote_average)}">${element.vote_average}</span>
                  </div>`;
    });
    container.innerHTML = listsDOM;
  };

  const fetchMovie = (lists = 'now_playing') => {
    fetch(`${baseURL}${lists}?api_key=${APIKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((responseJson) => {
        const { results } = responseJson;
        renderCard(results);
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  fetchMovie();

  const navbarLists = document.querySelectorAll('.genre-list');
  for (const list of navbarLists) {
    list.addEventListener('click', (e) => {
      e.preventDefault();
      for (const list of navbarLists) {
        list.classList.remove('active');
      }
      list.classList.add('active');
      fetchMovie(list.getAttribute('aria-details'));
    });
  }
};

export default main;
