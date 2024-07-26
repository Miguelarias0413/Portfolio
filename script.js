
function main(){
    observeSkills()
    observeSectionsToHeaderElements()
    mouseHoverHandler();

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
            divHover.classList.remove('mousehover__element--inside')
            divHoverContainer.appendChild(divHover);

            document.addEventListener('mousemove',getMouseMovement)
            console.log(e.target);
          

            
        }


        projectsCards.forEach(projectCard=>{
            projectCard.addEventListener('mouseenter',mouseGettingIntoProjectCard);
            projectCard.addEventListener('mouseleave',mouseGettingOutFromProjectCard);
        })
       
    }
 
}

addEventListener('DOMContentLoaded',main)