import Parallax from "parallax-js";
import observerProjects from "./js/intersectionerMouserHover";
import parallaxBalls from "./js/parallax";
import Lenguage from "./js/lenguaje";

function  main(e) {
  const div = document.q
  parallaxBalls()
  observerProjects();
  observeSkills();
  observeSectionsToHeaderElements();
  mouseHoverHandler();
  parallaxController(e.target.body.clientHeight, e.target.body.clientWidth);
  initializeLanguage();

  
  



}

async function initializeLanguage(){
  const mainLanguageSVG = document.getElementById('main__language--image')
  const svgLanguageImages = document.querySelectorAll('dropped__language--image')
  // Selectores individuales
  
  // Cuando carga la pagina 
  await Lenguage.initialize();
  await Lenguage.changePage();
  changeLanguageMainFlag(mainLanguageSVG)
  
  
  const englishSelector = document.getElementById('selector--english');
  const spanishSelector = document.getElementById('selector--spanish');

  //logica para cambiar idioma solo con el main Language
  mainLanguageSVG.addEventListener('click',()=>{
    Lenguage.setLanguage(Lenguage.getLanguage() == 'spanish' ? 'english' : 'spanish');
    changeLanguageMainFlag(mainLanguageSVG)
  })


  englishSelector.addEventListener('click',()=>{
    Lenguage.setLanguage('english')
    changeLanguageMainFlag(mainLanguageSVG)

  })
  spanishSelector.addEventListener('click',()=>{
    Lenguage.setLanguage('spanish')
    changeLanguageMainFlag(mainLanguageSVG)
  })
} 
function changeLanguageMainFlag(mainFlag){
  if(Lenguage.getLanguage() == 'english'){
    mainFlag.src = '/images/united-states-svgrepo-com.svg'
  } 
  else if (Lenguage.getLanguage() == 'spanish'){
    mainFlag.src = '/images/flag-for-flag-spain-svgrepo-com.svg'
  }
}
function observeSectionsToHeaderElements() {
  const headerListItems = document.querySelectorAll(".header ul li a");
  const pageSections = document.querySelectorAll(".container__section");
  const headerListItemsArray = Array.apply(null, headerListItems);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) {
      } else {
        whichSectionIsVisible(entry.target);
      }
    });
  });

  pageSections.forEach((section) => {
    observer.observe(section);
  });

  function whichSectionIsVisible(element) {
    pageSections.forEach((section, index) => {
      if (pageSections[index] == element) {
        headerListItemsArray[index].classList.add("a-hover");
      } else {
        headerListItemsArray[index].classList.remove("a-hover");
      }
    });
  }
}
function observeSkills() {
  // const skillItems = document.querySelectorAll('.skill__item');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillsWithDelay(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.querySelector(".skills__items__container"));

  async function animateSkillsWithDelay(contenedorPadre) {
    const habilidadesHijos = contenedorPadre.children;
    Array.from(habilidadesHijos).forEach((el, index) => {
        let miliseconds = 100;
        setTimeout(() => {
          el.classList.add("animationEaseIn");
        }, miliseconds * index);
    });
  }
}
function mouseHoverHandler() {
  const divHover = document.querySelector(".mousehover__element");
  const projectsCards = document.querySelectorAll(".projects__card");

  document.addEventListener("mousemove", getMouseMovement);

  function getMouseMovement(e) {
    let mouseXPosition = e.clientX;
    let mouseYPosition = e.clientY;
    setMousePositionToDivHover(mouseXPosition, mouseYPosition);
  }
  function setMousePositionToDivHover(X, Y) {
    divHover.style.left = `${X - divHover.offsetWidth / 2}px`;
    divHover.style.top = `${Y - divHover.offsetHeight / 2}px`;
  }

  projectsCardDivHoverController();
  function projectsCardDivHoverController() {
    const divHoverContainer = document.querySelector(".mousehover__container");
    function mouseGettingIntoProjectCard(e) {
      document.removeEventListener("mousemove", getMouseMovement);

      //Establecer Posicion
      e.target.appendChild(divHover);

      setTimeout(() => {
        divHover.style.top = e.offsetY - divHover.offsetHeight / 2;
        divHover.style.left = e.offsetX - divHover.offsetWidth / 2;
      }, 10);

      //Establecer ESTILOS
      setTimeout(() => {
        divHover.classList.add("mousehover__element--inside");
      }, 10);
    }
    function mouseGettingOutFromProjectCard(e) {
      divHoverContainer.appendChild(divHover);

      setTimeout(() => {});
      divHover.classList.remove("mousehover__element--inside");
      document.addEventListener("mousemove", getMouseMovement);
    }

    projectsCards.forEach((projectCard) => {
      projectCard.addEventListener("mouseenter", mouseGettingIntoProjectCard);
      projectCard.addEventListener(
        "mouseleave",
        mouseGettingOutFromProjectCard
      );
    });
  }
}
async function parallaxController(h, w) {
  // const scene = document.querySelector('.parallax__container');
  // const quantityParallaxItems = 10

  // for(let i =1; i<=quantityParallaxItems; i++ ){
  //     let randomXPosition = Math.floor( Math.random() * w);
  //     let randomYPosition = Math.floor( Math.random() * h);
  //     const parallaxItem = document.createElement('div');
  //     parallaxItem.classList.add('parallax__item');
  //     parallaxItem.dataset.depth = 1;
  //     parallaxItem.style.top = `${randomYPosition}px`
  //     parallaxItem.style.left = `${randomXPosition}px`

  //     console.log('lol');
  //     console.log(randomXPosition,randomYPosition);
  //     scene.appendChild(parallaxItem)

  // }

  // setTimeout(()=>{
  //     let parallaxInstance = new Parallax(scene);
  // },2000)

  const scene = document.querySelector(".photo");

  const parallaxImageInstance = new Parallax(scene);
}

addEventListener("DOMContentLoaded", main);
