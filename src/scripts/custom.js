/* eslint-disable no-restricted-syntax */
class KatfilmNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg mx-5 my-4">
                          <div class="container-fluid">
                              <a class="navbar-brand" href="#">KatFilm</a>
                              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                  aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                      <li class="nav-item">
                                          <a class="nav-link active genre-list" aria-current="page" href="#" aria-details="now_playing">Now Playing</a>
                                      </li>
                                      <li class="nav-item">
                                          <a class="nav-link genre-list" href="#" aria-details="popular">Popular</a>
                                      </li>
                                      <li class="nav-item dropdown">
                                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                              aria-expanded="false">
                                              More
                                          </a>
                                          <ul class="dropdown-menu">
                                              <li><a class="dropdown-item genre-list" href="#" aria-details="top_rated">Top Rated</a></li>
                                              <li><a class="dropdown-item genre-list" href="#" aria-details="upcoming">Upcoming</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </nav>`;
  }
}

export default KatfilmNavbar;
