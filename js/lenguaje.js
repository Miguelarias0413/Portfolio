export default class Lenguages {
  static actualLenguage = "english";
  static englishObject = null;
  static spanishObject = null;
  static actualLenguage = null;

  static async initialize() {
    const savedLanguage = localStorage.getItem("language");

    //set lenguageObjects
    const englishResponse = await fetch("../lenguages/english.json");
    const spanishResponse = await fetch("../lenguages/spanish.json");

    try {
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
        console.log(Lenguages.actualLenguage);
        console.log(languageObject);

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

        document.querySelector(".skills_title").textContent =
          languageObject.sections.skills.title;

        const contactTitle = languageObject.sections.contact.title;
        const contactEmail = languageObject.sections.contact.email;
        const contactPhone = languageObject.sections.contact.phone;
        document.querySelector(".container__footer h4").textContent =
          contactTitle;
        document.querySelector(
          ".container__footer p:nth-child(2)"
        ).textContent = contactEmail;
        document.querySelector(
          ".container__footer p:nth-child(3)"
        ).textContent = contactPhone;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
