"use strict"

const rightDownBAll = document.querySelector('.svg__ball--container:nth-child(3)');
const leftDownBall = document.querySelector('.svg__ball--container:nth-child(4)');

function main(){

    const optionsObserver = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    }

    const observer = new IntersectionObserver((entries,observer)=>{
        entries.forEach( entry =>{
            if (entry.isIntersecting){
                entry.target.classList.add('noTranslate');
                observer.unobserve(entry.target);
            }
        })
    })

    observer.observe(leftDownBall);
    observer.observe(rightDownBAll);


    
}


export default main;