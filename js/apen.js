const thumbnail = document.querySelectorAll('.thumbnail');
const mainphoto = document.querySelector('.main-photo');

let i = 0;
let slideShowTimeOut = setTimeout(function slideShow() {
    thumbnail.forEach((thumb, index) => {
        thumb.style.display = 'none';
        thumbnail[i].style.width = '100%';
    });

    if (thumbnail[i]) {
        thumbnail[i].style.display = 'unset';
    }

    const src = thumbnail[i].getAttribute('src');
    thumbnail[i].setAttribute('src', src);
    i = (i + 1) % thumbnail.length;
    slideShowTimeOut = setTimeout(slideShow, 2000);
}, 1000);
