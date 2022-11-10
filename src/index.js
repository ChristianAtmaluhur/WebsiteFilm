/* eslint-disable import/extensions */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/main.css';
import main from './scripts/main.js';
import KatfilmNavbar from './scripts/custom.js';

window.addEventListener('DOMContentLoaded', () => {
  main();
});

customElements.define('katfilm-navbar', KatfilmNavbar);
