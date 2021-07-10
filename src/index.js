//navbar javascript

const women = document.querySelector("#women");
const womenMenu = document.querySelector('#womenMenu');
const men = document.querySelector("#men");
const menMenu = document.querySelector("#menMenu");
const beauty = document.querySelector("#beauty");
const beautyMenu = document.querySelector("#beautyMenu");
const sale = document.querySelector("#sale");
const saleMenu = document.querySelector("#saleMenu");

if (women) {
    hover(beauty,beautyMenu);
    hover(men,menMenu);
    hover(women,womenMenu);
    hover(sale,saleMenu);    
};

function hover(location, menu) {
    location.addEventListener('mouseover', () => {
        menu.setAttribute("style", "display:flex");
    });
    location.addEventListener('mouseout', () => {
        menu.setAttribute("style", "display:none");
    });
};


// men.html javascript
const menListingRow = document.querySelector("#menListingRow");

//container for sales listing
let menListing = [
    {
        id: "0",
        name: "Man in Black",
        img1: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "$49.99",
        href: "#"
    },
    {
        id: "1",
        name: "Man in Blue",
        img1: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "$59.99",
        href: "#"
    },
    {
        id: "2",
        name: "Tan Coat",
        img1: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1553143820-6bb68bc34679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80",
        price: "$39.99",
        href: "#"
    }
];

if (menListingRow) {
    makeListing(menListing, menListingRow);
    hoverImg(menListing);
};


function makeListing(listing, location) {
    for (content of listing) {
        let newListing = document.createElement("div");
        let imgListing = document.createElement("img");
        let itemName = document.createElement("a");
        let itemPrice = document.createElement("p");
    
        newListing.append(imgListing);
        newListing.append(itemName);
        newListing.append(itemPrice);
    
        newListing.setAttribute("class", "itemListing");
        imgListing.setAttribute("alt", content.name);
        imgListing.setAttribute("id", content.id);
        imgListing.src = content.img1;
        itemName.textContent = content.name;
        itemName.href = content.href;
        itemPrice.textContent = content.price;
    
        location.append(newListing);
    };
};

function hoverImg(listing) {
    let x = [];
    for (let i = 0; i < listing.length; i++) {
        x.push(document.getElementById(i));
        x[i].addEventListener('mouseover', () => {
            x[i].src = listing[i].img2;
        });
        x[i].addEventListener('mouseout', () => {
            x[i].src = listing[i].img1;
        });
    };
};
