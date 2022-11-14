const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let menuToggler = document.getElementById('menuToggle');
let menuCard = document.getElementsByClassName('mobileMenuCard')[0];
let body = document.querySelector('body');
let mobileExit = document.getElementsByClassName('exitBtn')[0];

menuToggler.addEventListener('click', e => {
    e.preventDefault();

    menuCard.classList.toggle('mobileCardActive');
    body.classList.add('hideOverflow');

})

mobileExit.addEventListener('click', e => {
    e.preventDefault();

    menuCard.classList.toggle('mobileCardActive');
    body.classList.remove('hideOverflow');
})

let ascentixCard = document.getElementById('al');
let riskCard = document.getElementById('rr');
let safeplayCard = document.getElementById('sp');

let reviewTitle = document.getElementsByClassName('reviewTitle')[0];
let reviewMain = document.getElementsByClassName('reviewMain')[0];

ascentixCard.addEventListener('click', e => {
    e.preventDefault();
    safeplayCard.classList.remove('cardActive')
    riskCard.classList.remove('cardActive')
    ascentixCard.classList.toggle('cardActive')

    reviewMain.innerText = "We were not wanting to go with a pre-built shopify theme, and Safeplay blew us away with their custom development! We were able to structure our site exactly how we wanted and they did an amazing job of bringing the ideas we gave them to life. Highly recommend!"
    reviewTitle.innerText = "Top level service from top level people!"
});

riskCard.addEventListener('click', e => {
    e.preventDefault();
    safeplayCard.classList.remove('cardActive')
    ascentixCard.classList.remove('cardActive')
    riskCard.classList.toggle('cardActive')

    reviewMain.innerText = "We were very pleased with our website design and speed of service. If you are a non technical person looking to get a website, I highly recommend working with the folks at Safeplay!"
    reviewTitle.innerText = "Couldn't be happier"
});

safeplayCard.addEventListener('click', e => {
    e.preventDefault();
    ascentixCard.classList.remove('cardActive')
    riskCard.classList.remove('cardActive')
    safeplayCard.classList.toggle('cardActive')

    reviewMain.innerText = "The guys at SP development are extremely knowledgable about web development and digital marketing. We were able to build our monthly revenue to 10k+ in our first month of business and grow our social media accounts by over 200%."
    reviewTitle.innerText = "Amazing service!"
});



