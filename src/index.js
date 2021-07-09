const women = document.querySelector("#women");
const womenMenu = document.querySelector('#womenMenu');
const men = document.querySelector("#men");
const menMenu = document.querySelector("#menMenu");
const beauty = document.querySelector("#beauty");
const beautyMenu = document.querySelector("#beautyMenu");
const sale = document.querySelector("#sale");
const saleMenu = document.querySelector("#saleMenu");

hover(beauty,beautyMenu);
hover(men,menMenu);
hover(women,womenMenu);
hover(sale,saleMenu);

function hover(location, menu) {
    location.addEventListener('mouseover', () => {
        menu.setAttribute("style", "display:flex");
    });
    location.addEventListener('mouseout', () => {
        menu.setAttribute("style", "display:none");
    });
}