//saree navbar
var saree = document.querySelector('#saree');
var sareeNav = document.querySelector('.saree-nav');
sareeNav.style.visibility = 'hidden';
saree.addEventListener('mouseover', () => {
    sareeNav.style.visibility = 'visible';
    sareeNav.style.marginTop = '30px';
    sareeNav.style.transition = 'all 0.5s ease-in-out';
})
saree.addEventListener('mouseleave', () => {
    sareeNav.style.visibility = 'hidden';
    sareeNav.style.marginTop = '50px';
})
sareeNav.addEventListener('mouseover', () => {
    sareeNav.style.visibility = 'visible';
})
sareeNav.addEventListener('mouseleave', () => {
    sareeNav.style.visibility = 'hidden';
})
