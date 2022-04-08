const body = document.querySelector('body');
const slideshow = document.querySelector('#slideshow');
const dots = document.querySelectorAll('.dots');
let interval;
let cursor = 0;

function slider() {    
    interval = setInterval(() => {
        if (cursor > 3) {
            cursor = 0;
        } else {
            cursor += 1;
        }
        slideshow.setAttribute('style', `transform: translateX(-${cursor}00%)`);
        console.log(`#dot${cursor}`);
        const dot = document.querySelector(`#dot${cursor}`);
    
        dots.forEach(item => item.classList.remove('active'));
        dot.classList.add('active');
    }, 5000);
}

function navigateNext() {
    // I had to remove this function from body onload otherwise it would duplicate sliding causing bad behavior
    body.removeAttribute('onload', 'slider()');    
    clearInterval(interval);
    if (cursor > 3) {
        cursor = 0;
    } else {
        cursor += 1;
    }
    
    slideshow.setAttribute('style', `transform: translateX(-${cursor}00%)`);
    
    const dot = document.querySelector(`#dot${cursor}`);
    dots.forEach(item => item.classList.remove('active'));
    dot.classList.add('active');
    
    setTimeout(slider(), 5000);
}

function navigatePrevious() {
    body.removeAttribute('onload', 'slider()');
    
    clearInterval(interval);
    if (cursor < 1) {
        cursor = 4;
    } else {
        cursor -= 1;
    }
    slideshow.setAttribute('style', `transform: translateX(-${cursor}00%)`);
    const dot = document.querySelector(`#dot${cursor}`);
    dots.forEach(item => item.classList.remove('active'));
    dot.classList.add('active');

    setTimeout(slider(), 5000);
}

function navigateTo(number) {
    body.removeAttribute('onload', 'slider()');

    clearInterval(interval);

    cursor = number;

    slideshow.setAttribute('style', `transform: translateX(-${cursor}00%)`);
    const dot = document.querySelector(`#dot${cursor}`);
    dots.forEach(item => item.classList.remove('active'));
    dot.classList.add('active');

    setTimeout(slider(), 5000);
}