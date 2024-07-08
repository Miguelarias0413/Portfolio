
function main(){
    observeSkills()
    observeSectionsToHeaderElements()


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

addEventListener('DOMContentLoaded',main)