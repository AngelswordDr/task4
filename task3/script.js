let greenLight = document.querySelector('.green');
let yellowLight = document.querySelector('.yellow');
let redLight = document.querySelector('.red');

document.addEventListener('click', (event) => {
    if (event.target.id === 'circle') {
        document.addEventListener('click', blockLKM, { capture: true });
        traffic();
    }
});

function traffic () {
    greenLight.style.background = ('green');
    setTimeout(() => {
        yellowLight.style.background = ('yellow');
        greenLight.style.background = ('black');
    }, 1000);
    setTimeout(() => {
        redLight.style.background = ('red');
        yellowLight.style.background = ('black');
    }, 2000);
    setTimeout(() => {
        redLight.style.background = ('black');
        document.removeEventListener('click', blockLKM, { capture: true });
    }, 3000);
};

function blockLKM(e) {
    if (e.which === 1) {
        e.preventDefault();
        e.stopPropagation();
    }
}
