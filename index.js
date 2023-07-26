//crousel 
var crousel = document.querySelector('.crousel');
var frontItems = document.querySelector('.front-items');
var saree = document.querySelector('#saree');
var sareeNav = document.querySelector('.saree-nav');
var right = document.querySelector('.right');
var left = document.querySelector('.left');
var listing = document.querySelector('.listing');
var open = document.querySelector(".open");
const close = document.querySelector(".close");

var navbar = document.querySelector(".navbar");
var navList = document.querySelector(".nav-list");
var navItemMob = document.getElementsByClassName("navItemMob");


console.log(typeof window.innerWidth);


open.addEventListener("click", function () {
    close.style.display = 'block';
    navbar.style.display = 'block';
    navList.style.display = 'block';
    navItemMob.style.display = 'block';

});
close.addEventListener("click", function () {
    close.style.display = 'none';
    navbar.style.display = 'none';
    navList.style.display = 'none';
    navItemMob.style.display = 'none';

});
var slides = [
    '<img src="./images/mobile slider-1.webp">',
    '<img src="./images/mobile slider-2.webp">',
    '<img src="./images/mobile slider-3.jpg">',
]
var i = 1;
if(window.innerWidth<='480'){
    crousel.innerHTML = `<div class="front-items">
                            ${slides[0]}
                        </div>`;
}
else{
    crousel.innerHTML = `<div class="front-items">
                            <img src="./images/slider1.webp">
                        </div>`;
}
setInterval(() => {
    if (i > 3) {
        i = 1;
    }
    if(window.innerWidth<='480'){
        crousel.innerHTML = `<div class="front-items">
                                ${slides[i-1]}
                            </div>`;
    }
    else{
        crousel.innerHTML = `<div class="front-items">
                                <img src="./images/slider${i}.webp">
                            </div>`;
    }
    i++;
}, 5000)

// frontItems.classList.add('crousel-transformation');
function next() {
    if (i > 3) {
        i = 1;
    }
    //responsive design for home page
    if(window.innerWidth<='480'){
        crousel.innerHTML = `<div class="front-items">
                                <img src="./images/slider${i}.webp">
                            </div>`;
    }
    else{
        crousel.innerHTML = `<div class="front-items">
                                <img src="./images/slider${i}.webp">
                            </div>`;
    }
    i++;
}


//saree navbar

sareeNav.style.visibility = 'hidden';
saree.addEventListener('mouseover', () => {
    sareeNav.style.visibility = 'visible';
    sareeNav.style.marginTop = '80px';
    sareeNav.style.transition = 'all 0.5s ease-in-out';
})
saree.addEventListener('mouseleave', () => {
    sareeNav.style.visibility = 'hidden';
    sareeNav.style.marginTop = '100px';
})
sareeNav.addEventListener('mouseover', () => {
    sareeNav.style.visibility = 'visible';
})
sareeNav.addEventListener('mouseleave', () => {
    sareeNav.style.visibility = 'hidden';
})


//right and left event listner for second listing crousel
var images = [1, 2, 3, 4, 5, 6, 7, 8];
var secondList = document.querySelector('.second-list');
var length = secondList.clientWidth-20;
var listingItem = '';
for (var i = 1; i <= images.length; i++) {
    listingItem += `<div class="item">
                <img src="./images/listing-first/${i}a.webp" alt="${i}">
                
            </div>`
}
/* <div class="description">
                    <p>Turquoise Blue Gold with Copper silver zari Kanjeevaram Silk Saree</p>
                    <div class="price">
                        <p>Rs. 6,799.00</p>
                        <p>Rs. 3,399.00</p>
                    </div>
                </div> */
listing.innerHTML = listingItem;
listing.style.width = `${((images.length) / 4) * 100}%`;
if(window.innerWidth<=430){
    listing.style.width = `${((images.length) / 2) * 100}%`;
}
var click=1;
right.addEventListener('click', () => {
   
    listing.style.transition = 'all 1s ease-in-out';
    if(window.innerWidth<=430){
        listing.style.transform = `translateX(-${(length)*click}px)`;
        click+=1;
        if(click>=(images.length) / 2) {
            click=1;
        }
    }
    else{
        listing.style.transform = `translateX(-${length + 2}px)`;
    }
   
})

left.addEventListener('click', () => {
    console.log(length);
        listing.style.transform = `translateX(${0}px)`;
        listing.style.transition = 'all 1s ease-in-out';
        click-=1;

})

//listing item hover 
var SecItem = document.querySelectorAll('.item');
console.log(SecItem);
SecItem.forEach((element) => {
    element.addEventListener('mouseover', () => {
        var x = (element.childNodes[1].src);
        var index=x.indexOf('.webp');
        var y = x.substring(0, index-1) + 'b' + x.substring(index,);
        element.childNodes[1].src = y;
    })
    element.addEventListener('mouseleave', () => {
        var x = (element.childNodes[1].src);
         var index=x.indexOf('.webp');
        var y = x.substring(0, index-1) + 'a' + x.substring(index,);
        element.childNodes[1].src = y;
    })
})


//third list styling
var thirdList = document.querySelector('.third-list');
var items = '';
for (var i = 1; i <= 4; i++) {
    items += `<div class="third-list-item">
                <img src="./images/second-big/${i}.webp" alt="${1}">
                <div class="discriptShop">
                    <h4>Intricately, Yours</h4>
                    <p>The beautiful brocade Banarasi</p>
                    <div class="shopNow">
                        <p>Shop now</p>
                        <img src="./images/download.png" >
                    </div>
                </div>
            </div>`
}
thirdList.innerHTML = items;


//fourth listing styling
var fourthList = document.querySelector('.fourth-list');
var fourthListing = document.querySelector('.fourth-listing');
var fourthLeft = document.querySelector('.fourth-left');
var fourthRight = document.querySelector('.fourth-right');
var fourthLength = fourthList.clientWidth;
var images = [1, 2, 3, 4, 5, 6, 7, 8];
var fourthListingItem = '';
for (var i = 1; i <= images.length; i++) {
    fourthListingItem += `
            <div class="fourth-item">
                <img src="./images/fourth-listing/${i}.webp" alt="${i}">
                <p>Katan Silk Saree</p>
            </div>
        `
}
fourthListing.innerHTML = fourthListingItem;
fourthListing.style.width = `${((images.length) / 4) * 100}%`;
if(window.innerWidth<=430){
    listing.style.width = `${((images.length) / 2) * 100}%`;
}
var click4=1;
if(window.innerWidth<=430){
    fourthListing.style.width = `${((images.length) / 2) * 100}%`;
}
fourthRight.addEventListener('click', () => {
    fourthListing.style.transform = `translateX(-${fourthLength}px)`;
    fourthListing.style.transition = 'all 1s ease-in-out';
    if(window.innerWidth<=430){
        fourthListing.style.transform = `translateX(-${(fourthLength)*click4}px)`;
        click4+=1;
        if(click4>=(images.length) / 2) {
            click4=1;
        }
    }
})
fourthLeft.addEventListener('click', () => {
    fourthListing.style.transform = `translateX(${0}px)`;
    fourthListing.style.transition = 'all 1s ease-in-out';
    
})


//Testimonial crousel 
// var testimonial = document.querySelector('.testimonial');
// var testListing = document.querySelector('.testListing');
// var testItem = document.querySelector('.testItem');
// var testNavItem = document.querySelectorAll('.testNavItem');
// var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// var testingItem = '';
// for (var i = 1; i <= test.length; i++) {
//     testingItem += `<div class="testItem">
//                     <div class="upper">
//                         <div class="upperImg">
//                             <img src="./images/testimonial/${1}.jpg" alt="i">
//                         </div>
//                         <div class="UpperRight">
//                             <div class="stars">
//                                 <i class="fa fa-star"></i>
//                                 <i class="fa fa-star"></i>
//                                 <i class="fa fa-star"></i>
//                                 <i class="fa fa-star"></i>
//                                 <i class="fa fa-star"></i>
//                             </div>
//                             <p>Hibbanur Rahman</p>
//                             <p>2023-06-22</p>
//                             <p>Fuschia Pink Silver Zari Kanjeevaram Silk Saree - House of Vardha</p>
//                         </div>
//                     </div>
//                     <div class="lower">
//                         <div class="spacing">
//                             <p>Feeling like a Gentle Man</p>
//                         </div>
//                         <div class="quotes">
//                             <p>The beauty of the saree is beyond my expectations... the texture is so smooth that my skin loves it.. definitely worth the price ... vardha proves the scincerity they claim... Thank you Vardha...</p>
//                         </div>
//                     </div>
//                 </div>`;
// }
// testListing.innerHTML = testingItem;
// testListing.style.width = `${((test.length) / 3) * 100}%`;
// var length = testimonial.clientWidth;
// var j = 1;
// testNavItem.forEach((element) => {
//     element.addEventListener('click', () => {
//         testListing.style.transform = `translateX(-${length * j}px)`
//         testListing.style.transition = 'all 0.5s ease-in-out';
//         element.style.backgroundColor = 'black';
//         j++;
//         if (j >= (test.length) / 3) {
//             j = 1;
//         }
//     })
// })



