function observeMouseHover(){
    const cartasDeProjectos = document.querySelectorAll('.projects__card');


    const callback = function(entries,observer){
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('animationEaseIn');
                
            }
        })
        
    }

    const observador = new IntersectionObserver(callback)

    cartasDeProjectos.forEach((el)=>{
        observador.observe(el);
    })
    
    
}


export default observeMouseHover