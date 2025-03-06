export default class Lenguages {
  static actualLenguage = "spanish";
  static englishObject = null;
  static spanishObject = null;
  static actualLenguage = null;

  static async initialize() {
   
    const savedLanguage = await localStorage.getItem("language");

    try {//set lenguageObjects
      const englishResponse = await fetch("/lenguages/english.json");
      const spanishResponse = await fetch("/lenguages/spanish.json");

      
      if (!englishResponse || !spanishResponse){
        throw new Error("El cargue de un json Falló")
      }
      Lenguages.spanishObject = await spanishResponse.json();
      Lenguages.englishObject = await englishResponse.json();




    } catch (Exception) {
      console.error("Error: " + Exception);
    }



    if (savedLanguage) {
      Lenguages.actualLenguage = savedLanguage;
    } else {
      // If no language is set english by default
      localStorage.setItem("language", "english");
      Lenguages.actualLenguage = "english";
    }
  }

  static setLanguage(language) {
    if (language === "english" || language === "spanish") {
      localStorage.setItem("language", language);
      Lenguages.actualLenguage = language;
    }

    Lenguages.changePage();
  }

  static getLanguage() {
    return Lenguages.actualLenguage;
  }

  static async changePage() {
    try {
      const languageObject = await Lenguages.actualLenguage === "english" ? Lenguages.englishObject : Lenguages.spanishObject;

      if (languageObject) {
    
        document.title = languageObject.title;

        // Update language of the header
        
        
        document.querySelectorAll('header ul li').forEach((item, index) => {
  
          item.children[0].textContent = languageObject.sections.headerItems[index];
        });

        // Update HTML content with language object data
        document.querySelector(".information__title").textContent =
          languageObject.sections.about_me.title;
        const paragraphs = document.querySelectorAll(".information__paragraph");
        paragraphs[0].textContent =
          languageObject.sections.about_me.paragraphs[0];
        paragraphs[1].textContent =
          languageObject.sections.about_me.paragraphs[1];

        document.querySelector(".projects_title").textContent =
          languageObject.sections.projects.title;

        const projectCards = document.querySelectorAll(".projects__card");
        projectCards.forEach((card, index) => {
          const project = languageObject.sections.projects.cards[index];
          card.querySelector(".titulo-experiencia").textContent = project.title;
          card.querySelector(".descripcion-experiencia").textContent =
            project.description;
        });

        document.querySelector(".skills_title").textContent = languageObject.sections.skills.title;


      }

      document.querySelectorAll('.skill__item').forEach((item,index)=>{
        item.children[0].textContent = languageObject.sections.skills.items[index].title // titulo
        item.children[1].textContent = languageObject.sections.skills.items[index].description //description
      })

      // //proyectos personales portfolio_title
        document.querySelector('.portfolio_title').textContent = languageObject.sections.portfolio.title;      
       document.querySelector('#exzaltia__description').textContent = languageObject.sections.portfolio.exzaltia.description;
       document.querySelector('#pokearias__description').textContent = languageObject.sections.portfolio.pokearias.description;
       document.querySelector('#acortarias__description').textContent = languageObject.sections.portfolio.acortarias.description;

       document.querySelector('.technologies_title').textContent = languageObject.sections.technologies.title;

      

    } catch (error) {
      console.error("mine" + error );
    }
  }
}
