import Parallax from "parallax-js";

function main(e){
    console.log(e);
    observeSkills()
    observeSectionsToHeaderElements()
    mouseHoverHandler();
    parallaxController(e.target.body.clientHeight,e.target.body.clientWidth)

}
function observeSectionsToHeaderElements(){
    const headerListItems = document.querySelectorAll('.header ul li a');
    const pageSections = document.querySelectorAll('.container__section');
    const headerListItemsArray = Array.apply(null,headerListItems)
    
    const observer = new IntersectionObserver((entries,observer)=>{
        entries.forEach((entry,index)=>{
            if (!entry.isIntersecting){
            
            }
            else{
                whichSectionIsVisible(entry.target)
               
            }
        })
    })

    pageSections.forEach(section=>{
        observer.observe(section)
    })

    function whichSectionIsVisible(element){
        pageSections.forEach((section,index)=>{
            if(pageSections[index] == element){
                headerListItemsArray[index].classList.add('a-hover')
            }else{
                headerListItemsArray[index].classList.remove('a-hover')
            }
        
        }
        )
    }
    
}
function observeSkills(){
    const skillItems = document.querySelectorAll('.skill__item');
    const observer = new IntersectionObserver(
        (entries,observer)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    
                    entry.target.classList.add('animationEaseIn');
                }
            })
        }
    )

    skillItems.forEach(item=>{
        observer.observe(item)
    })
}
function mouseHoverHandler(){
    const divHover = document.querySelector('.mousehover__element');
    const projectsCards = document.querySelectorAll('.projects__card')
    const items = document.querySelectorAll('.skill__item')

    document.addEventListener('mousemove',getMouseMovement)

    function getMouseMovement(e){
        let mouseXPosition = e.clientX;
        let mouseYPosition = e.clientY;
        setMousePositionToDivHover(mouseXPosition,mouseYPosition);
    }
    function setMousePositionToDivHover(X,Y){
        divHover.style.left = `${X - divHover.offsetWidth / 2}px`;
        divHover.style.top = `${Y - divHover.offsetHeight / 2}px`;
    }

    projectsCardDivHoverController()
    function projectsCardDivHoverController(){
        const divHoverContainer = document.querySelector('.mousehover__container');
        function mouseGettingIntoProjectCard(e){
            
            document.removeEventListener('mousemove',getMouseMovement)
            
            //Establecer Posicion
            e.target.appendChild(divHover);
            
                
                setTimeout(()=>{
                    divHover.style.top = e.offsetY - divHover.offsetHeight/2;
                    divHover.style.left = e.offsetX- divHover.offsetWidth/2;

                },10)
                
            
            //Establecer ESTILOS
            setTimeout(()=>{
                divHover.classList.add('mousehover__element--inside')

            },10)
            
        }
        function mouseGettingOutFromProjectCard(e){
            divHoverContainer.appendChild(divHover);

            setTimeout(()=>{
            })
            divHover.classList.remove('mousehover__element--inside');
            document.addEventListener('mousemove',getMouseMovement)
            console.log(e.target);
          

            
        }


        projectsCards.forEach(projectCard=>{
            projectCard.addEventListener('mouseenter',mouseGettingIntoProjectCard);
            projectCard.addEventListener('mouseleave',mouseGettingOutFromProjectCard);
        })
       
    }
 
}
async function parallaxController(h,w){
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

    const scene = document.querySelector('.photo')

    const parallaxImageInstance = new Parallax(scene)

}

addEventListener('DOMContentLoaded',main)