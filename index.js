//crousel 
var crousel = document.querySelector('.crousel');
var frontItems = document.querySelector('.front-items');
var saree = document.querySelector('#saree');
var sareeNav = document.querySelector('.saree-nav');
var right = document.querySelector('.right');
var left = document.querySelector('.left');
var listing = document.querySelector('.listing');
console.log(sareeNav);

var slides = [
    '<img src="./images/slider1.webp">',
    '<img src="./images/slider2.webp">'
]
var i = 1;
crousel.innerHTML = `<div class="front-items">
    <img src="./images/slider1.webp">
</div>`;
setInterval(() => {
    if (i > 3) {
        i = 1;
    }
    crousel.innerHTML = `<div class="front-items">
    <img src="./images/slider${i}.webp">
</div>`;
    i++;
}, 5000)

// frontItems.classList.add('crousel-transformation');
function next() {
    if (i > 3) {
        i = 1;
    }
    crousel.innerHTML = `<div class="front-items">
                            <img src="./images/slider${i}.webp">
                        </div>`;
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
var length = secondList.clientWidth;
var listingItem ='';
for(var i=1;i<=images.length;i++){
    listingItem+=`<div class="item">
                <img src="./images/listing-first/${i}a.webp" alt="${i}">
                <div class="description">
                    <p>Turquoise Blue Gold with Copper silver zari Kanjeevaram Silk Saree</p>
                    <div class="price">
                        <p>Rs. 6,799.00</p>
                        <p>Rs. 3,399.00</p>
                    </div>
                </div>
            </div>`
}
listing.innerHTML=listingItem;
listing.style.width=`${((images.length)/4)*100}%`;
right.addEventListener('click', () => {
    console.log(length);
    listing.style.transform = `translateX(-${length+2}px)`;
    listing.style.transition = 'all 1s ease-in-out';
    console.log(listing.clientWidth);
})
left.addEventListener('click', () => {
    console.log(length);
    listing.style.transform = `translateX(${0}px)`;
    listing.style.transition = 'all 1s ease-in-out';
})

//listing item hover 
var SecItem=document.querySelectorAll('.item');
console.log(SecItem);
SecItem.forEach((element)=>{
    element.addEventListener('mouseover',()=>{
        var x=(element.childNodes[1].src);
        var index=x.indexOf('a.web');
        var y=x.substring(0,index)+'b'+x.substring(index+1,);
        element.childNodes[1].src=y;
    })
    element.addEventListener('mouseleave',()=>{
        var x=(element.childNodes[1].src);
        var y=x.substring(0,44)+'a'+x.substring(45,);
        element.childNodes[1].src=y;
    })
})


//third list styling
var thirdList=document.querySelector('.third-list');
var items='';
for(var i=1;i<=4;i++){
    items+= `<div class="third-list-item">
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
thirdList.innerHTML=items;


//fourth listing styling
var fourthList=document.querySelector('.fourth-list');
var fourthListing=document.querySelector('.fourth-listing');
var fourthLeft=document.querySelector('.fourth-left');
var fourthRight=document.querySelector('.fourth-right');
var fourthLength = fourthList.clientWidth;
var images=[1,2,3,4,5,6,7,8];
var fourthListingItem='';
for(var i=1;i<=images.length;i++)
{
    fourthListingItem+=`
            <div class="fourth-item">
                <img src="./images/fourth-listing/${i}.webp" alt="${i}">
                <p>Katan Silk Saree</p>
            </div>
        `
}
fourthListing.innerHTML=fourthListingItem;
fourthListing.style.width=`${((images.length)/4)*100}%`;
fourthRight.addEventListener('click',()=>{
    fourthListing.style.transform = `translateX(-${fourthLength}px)`;
    fourthListing.style.transition = 'all 1s ease-in-out';
})
fourthLeft.addEventListener('click',()=>{
    fourthListing.style.transform = `translateX(${0}px)`;
    fourthListing.style.transition = 'all 1s ease-in-out';
})


//Testimonial crousel 
var testimonial=document.querySelector('.testimonial');
var testListing=document.querySelector('.testListing');
var testItem=document.querySelector('.testItem');
var testNavItem=document.querySelectorAll('.testNavItem');
var test=[1,2,3,4,5,6,7,8,9,10,11,12]
var testingItem='';
for(var i=1;i<=test.length;i++){
    testingItem+=`<div class="testItem">
                    <div class="upper">
                        <div class="upperImg">
                            <img src="./images/testimonial/${1}.jpg" alt="i">
                        </div>
                        <div class="UpperRight">
                            <div class="stars">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <p>Hibbanur Rahman</p>
                            <p>2023-06-22</p>
                            <p>Fuschia Pink Silver Zari Kanjeevaram Silk Saree - House of Vardha</p>
                        </div>
                    </div>
                    <div class="lower">
                        <div class="spacing">
                            <p>Feeling like a Gentle Man</p>
                        </div>
                        <div class="quotes">
                            <p>The beauty of the saree is beyond my expectations... the texture is so smooth that my skin loves it.. definitely worth the price ... vardha proves the scincerity they claim... Thank you Vardha...</p>
                        </div>
                    </div>
                </div>`;
}
testListing.innerHTML=testingItem;
testListing.style.width=`${((test.length)/3)*100}%`;
var length=testimonial.clientWidth;
var j=1;
testNavItem.forEach((element)=>{
    element.addEventListener('click',()=>{
       testListing.style.transform=`translateX(-${length*j}px)`
       testListing.style.transition='all 0.5s ease-in-out';
       element.style.backgroundColor='black';
       j++;
       if(j>=(test.length)/3){
        j=1;
       }
    })
})
