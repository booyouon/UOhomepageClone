// navbar javascript

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

// menu on navbar appears as mouse hovers over the 
function hover(location, menu) {
    location.addEventListener('mouseover', () => {
        menu.setAttribute("style", "display:flex");
    });
    location.addEventListener('mouseout', () => {
        menu.setAttribute("style", "display:none");
    });
};

//login
const exit = document.querySelector(".closeBtn");
const popUp = document.querySelector(".popUp");
const loginHead = document.querySelector("#loginHead");
const signUpBtn = document.querySelector("#signUpBtn");
const signIn = document.querySelector("#signIn");
const loginFooter = document.querySelector("#loginFooter");
const loginP = document.querySelector("#loginP");
const forgot = document.querySelector("#forgot");
const createInfo = document.querySelector("#createInfo");
const stylePref = document.querySelector("#styleContainer");
const signInBtn = document.querySelector("#signInBtn");

exit.addEventListener('click', () => {
    popUp.setAttribute("style", "display: none");
})

signInBtn.addEventListener('click', () => {
    popUp.setAttribute("style", "display: block");
})

signUpBtn.addEventListener('click', () => {
  if (stylePref.style.display === "block") {
    loginHead.textContent = "Sign In";
    signUpBtn.textContent = "Create an Account";
    loginFooter.textContent = "Sign Up";
    signIn.value = "Sign In";
    loginP.setAttribute("style", "display: block");
    forgot.setAttribute("style", "display: block");
    createInfo.setAttribute("style", "display: none");
    stylePref.setAttribute("style", "display: none"); 
  } else {
    loginHead.textContent = "Create an Account";
    signUpBtn.textContent = "Sign In";
    loginFooter.textContent = "Already Have an Account?";
    signIn.value = "Create an Account";
    loginP.setAttribute("style", "display: none");
    forgot.setAttribute("style", "display: none");
    createInfo.setAttribute("style", "display: block");
    stylePref.setAttribute("style", "display: block"); 
  }
})



// men.html, women.html, beauty.html javascript
const menListingRow = document.querySelector("#menListingRow");
const womenListingRow = document.querySelector("#womenListingRow");
const beautyListingRow = document.querySelector("#beautyListingRow");
const saleListingRow = document.querySelector("#saleListingRow");
const sort = document.querySelector("#sort");

// container for sales listing
let menListing = [
    {
        id: "0",
        name: "Man in Black",
        img1: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "49.99",
        sale: "39.99",
        href: "#"
    },
    {
        id: "1",
        name: "Man in Blue",
        img1: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "59.99",
        href: "#"
    },
    {
        id: "2",
        name: "Tan Coat",
        img1: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1553143820-6bb68bc34679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80",
        price: "39.99",
        href: "#"
    },
];

let womenListing = [
    {
        id: "0",
        name: "Black Striped Pants",
        img1: "https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1551048633-8c03f448307f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        price: "49.99",
        sale: "39.99",
        href: "#"
    },
    {
        id: "1",
        name: "Cali Motor Tee",
        img1: "https://images.unsplash.com/photo-1621694691103-e326ece9252b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1621694691240-b63c0deaba70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        price: "29.99",
        href: "#"
    },
    {
        id: "2",
        name: "Black Ring Top",
        img1: "https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1621784563286-84f7646ef221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        price: "39.99",
        href: "#"
    },
];

let beautyListing = [
    {
        id: "0",
        name: "Soap",
        img1: "https://images.unsplash.com/photo-1589060040782-234fa4ee0b61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1589060040843-7a31813e6fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "9.99",
        sale: "6.99",
        href: "#"
    },
    {
        id: "1",
        name: "Make up set",
        img1: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1589825853236-7a9e04b56687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "39.99",
        href: "#"
    },
    {
        id: "2",
        name: "Tote Bag",
        img1: "https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "19.99",
        href: "#"
    },
];

let saleListing = [
    {
        id: "0",
        name: "Man in Black",
        img1: "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "49.99",
        sale: "39.99",
        href: "#"
    },
    {
        id: "1",
        name: "Black Striped Pants",
        img1: "https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1551048633-8c03f448307f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        price: "49.99",
        sale: "39.99",
        href: "#"
    },
    {
        id: "2",
        name: "Soap",
        img1: "https://images.unsplash.com/photo-1589060040782-234fa4ee0b61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        img2: "https://images.unsplash.com/photo-1589060040843-7a31813e6fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price: "9.99",
        sale: "6.99",
        href: "#"
    },
];

//generates the listing for men.html
generateListing(menListing, menListingRow);

//generates the listing for women.html
generateListing(womenListing, womenListingRow);

//generates the listing for beauty.html
generateListing(beautyListing, beautyListingRow);

//generates the listing for sale.html
generateListing(saleListing, saleListingRow);

//function to generate each listing page
function generateListing(listing, location) {
    if (location) {
        makeListing(listing, location);
        hoverImg(listing);
        sortListing(listing, location);
    }
}

// appends the listings onto the designated page
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
        itemPrice.textContent = `$${content.price}`;

        //checks if the listing has a sale property and if so then updates the page to have the sale price
        if(content.sale) {
            let itemSale = document.createElement("p");
            newListing.append(itemSale);
            itemSale.textContent = `$${content.sale}`;
            itemPrice.setAttribute("style", "text-decoration: line-through;");
            itemSale.setAttribute("style", "color: red;");
        }
    
        location.append(newListing);
    };
};

// changes listing img src on hover
function hoverImg(listing) {
    let x = [];
    for (let i = 0; i < listing.length; i++) {
        x.push(document.getElementById(listing[i].id));
        x[i].addEventListener('mouseover', () => {
            x[i].src = listing[i].img2;
        });
        x[i].addEventListener('mouseout', () => {
            x[i].src = listing[i].img1;
        });
    };
};

//sorts the page listing by the selected sort option
function sortListing(listing, location) {
    sort.addEventListener('change', function() {
        console.log('You selected: ', this.value);
        if(sort.value === "low") {
            listing = listing.sort((a, b) => {
                return a.price - b.price;
            });
        } else if (sort.value === "high") {
            listing = listing.sort((a, b) => {
                return b.price - a.price;
            });
        } else {
            listing = listing.sort((a, b) => {
                return a.id - b.id;
            });
        }
        location.innerHTML = "";
        makeListing(listing, location);
        hoverImg(listing);
      });
}


/*
shipping.html, cart.html js
*/

const collapseBtn = document.querySelectorAll(".collapseBtn");
const shipCollapse = document.querySelectorAll(".shipCollapse");
const fas = document.querySelectorAll(".fa-plus");

//toggle for the collapsibles on the bottom of shipping.html
if (collapseBtn) {
    for (let i = 0; i < collapseBtn.length; i++) {
        collapseBtn[i].addEventListener('click', () => {
            if (shipCollapse[i].style.display === "block") {
                shipCollapse[i].setAttribute("style", "display: none");
                fas[i].classList.remove("fa-minus");
                fas[i].classList.add("fa-plus");
            } else {
                shipCollapse[i].setAttribute("style", "display: block");
                fas[i].classList.remove("fa-plus");
                fas[i].classList.add("fa-minus");
            }
        });
    }
}

