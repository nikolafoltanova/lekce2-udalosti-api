// tady je místo pro náš program
function ztucni() {
    let odstavec = document.querySelector('.lev')
    odstavec.style.fontWeight = 'bold';
}

function odtucni() {
    let odstavec = document.querySelector('.lev')
    odstavec.style.fontWeight = 'normal';
}

function obarvi() {
    let odstavec = document.querySelector('.lev');
    odstavec.classList.toggle('barva');   
}


// zde nevim jak bych to udelala jednoduse (pomohl google)
function zvetsi(id, font) {
    let odstavec = document.querySelector('.lev')
    style = window.getComputedStyle(odstavec, null).getPropertyValue('font-size');
    velikost = parseFloat(style);
    odstavec.style.fontSize = (velikost + 1) + 'px';
}


let hudba = document.querySelector('audio');
hudba.volume = 0.2;
hudba.play();


function prehrej() {
    let zvuk
    zvuk = document.querySelector('audio');
    zvuk.play();
}

function stopni() {
    let zvuk
    zvuk = document.querySelector('audio');
    zvuk.pause();
}

function resetni() {
    let zvuk
    zvuk = document.querySelector('.zvuk');
    zvuk.currentTime = 0;
}

function ticho() {
    let zvuk
    zvuk = document.querySelector('.zvuk');
    zvuk.volume = 0;
}

function nahlas() {
    let zvuk
    zvuk = document.querySelector('.zvuk');
    zvuk.volume = 0.5;
}

function nahlasVice() {
    let zvuk
    zvuk = document.querySelector('.zvuk');
    zvuk.volume = 1;
}