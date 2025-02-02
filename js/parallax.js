const rightBall = document.querySelector('#svg__ball--right');
const leftBall = document.querySelector('#svg__ball--left');

export default function startParallaxForSVGBalls() {
    addEventListener('scroll', handler);
}

function handler(e) {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        // Ajusta las transformaciones para pantallas pequeñas
        leftBall.style.transform = `translate(-${window.scrollY * 2}px, -${window.scrollY * 1}px)`;
        rightBall.style.transform = `translate(${window.scrollY * 2}px, -${window.scrollY * 1}px)`;
    } else {
        // Usa las transformaciones normales para pantallas grandes
        leftBall.style.transform = `translate(-${window.scrollY * 0.4}px, -${window.scrollY * 0.4}px)`;
        rightBall.style.transform = `translate(${window.scrollY * 0.4}px, -${window.scrollY * 0.4}px)`;
    }
}