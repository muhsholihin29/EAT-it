import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const navBurger = document.querySelector('#nav__burger');
const drawer = document.querySelector('#drawer');

navBurger.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    navBurger.classList.toggle('rotate');
    event.stopPropagation();
});


const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
let explore = "";
data.restaurants.forEach((data) => {
    explore += `
    <article class="restaurant-item">
        <div class="thumbnail">
            <img class="restaurant-item__thumbnail" src="${data.pictureId}" alt="${data.name}">
            <div class="thumbnail_inner">
                <p>${data.city}</p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <p class="restaurant-rating">✩ ${data.rating}</p>
            <h3 class="restaurant-item__title"><a href="#">${data.name}</a></h3>
            <p class="restaurant-item__description" maxLength="5">${truncate(data.description, 240, '...')}</p>
        </div>
    </article>
    `;
});

document.getElementById("restaurants").innerHTML = explore;