import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

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
            <h1 class="restaurant-item__title"><a href="#">${data.name}</a></h1>
            <p class="restaurant-item__description" maxLength="5">${truncate(data.description, 240, '...')}</p>
        </div>
    </article>
    `;
});

document.getElementById("restaurants").innerHTML = explore;