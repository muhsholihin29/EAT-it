import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';
import App from './views/app';


const app = new App({
    button: document.querySelector('#nav__burger'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});

const onItemRestaurantClick = (id) => {
    window.location.href = `/#/detail/${id}`;
};