let clock = new Date().getHours()

function checkHour(hour){
    let message = "";
    if (hour < 5) {
        message = "Al que madruga, Dios le ayud, pero tu estas muy temprano"
    } else if ( hour >= 5 && hour < 12) {
        message = "¡Buenos dias! Gracias por comenzar tu día visitando mi CV."
    } else if ( hour >= 12 && hour < 14) {
        message = "Espero que este sea un buen momento para conocer mi perfil."
    } else if ( hour >= 14 && hour < 20) {
        message = "¡Buenas tardes! Gracias por tomarte el tiempo de revisar mi experiencia."
    } else if ( hour >= 20 && hour < 24) {
        message = "¡Buenas Noches! Me alegra que estés explorando mi CV a esta hora."
    }

    return message;
}

document.getElementById("welcome-message").innerHTML = checkHour(clock);

function toggle(){
    if (document.getElementById("experience-container").style.display === "none"){
        document.getElementById("experience-container").style.display = "block";
        document.getElementById("experience-button").innerHTML = "Click here to hide my experience";
    } else {
        document.getElementById("experience-container").style.display = "none";
        document.getElementById("experience-button").innerHTML = "Click here to reveal my experience";
    }
}

function personalInfo(){
    if (document.getElementById("personal-info-container").style.display === "none"){
        document.getElementById("personal-info-container").style.display = "flex";
        document.getElementById("info-button").innerHTML = "Hide Info";
    } else {
        document.getElementById("personal-info-container").style.display = "none";
        document.getElementById("info-button").innerHTML = "Show Info";
    }
}

function darkMode(){
    if (document.getElementById("darkmode-button").innerHTML === "Light Mode"){
        document.body.style.background = "linear-gradient(90deg, #8ca9ee 0%, #cedaf4 100%)";
        document.getElementById("darkmode-button").innerHTML = "Dark Mode"
        document.querySelector("header").classList.remove("darkblue-color");
        document.querySelector("footer").classList.remove("darkblue-color");
        document.getElementById("skills").classList.remove("darkblue-color");
        document.getElementById("education").classList.remove("darkblue-color");
        document.getElementById("experience").classList.remove("darkblue-color");

        document.querySelector("header").classList.add("lightblue-color");
        document.querySelector("footer").classList.add("lightblue-color");
        document.getElementById("skills").classList.add("lightblue-color");
        document.getElementById("education").classList.add("lightblue-color");
        document.getElementById("experience").classList.add("lightblue-color");
    } else {
        document.body.style.background = "radial-gradient(circle, rgba(3, 3, 5, 1) 0%, rgba(45, 53, 79, 1) 100%)";
        document.getElementById("darkmode-button").innerHTML = "Light Mode"
        document.querySelector("header").classList.remove("lightblue-color");
        document.querySelector("footer").classList.remove("lightblue-color");
        document.getElementById("skills").classList.remove("lightblue-color");
        document.getElementById("education").classList.remove("lightblue-color");
        document.getElementById("experience").classList.remove("lightblue-color");

        document.querySelector("header").classList.add("darkblue-color");
        document.querySelector("footer").classList.add("darkblue-color");
        document.getElementById("skills").classList.add("darkblue-color");
        document.getElementById("education").classList.add("darkblue-color");
        document.getElementById("experience").classList.add("darkblue-color");
    }
}

document.getElementById("PDF-button").addEventListener("click", () => { html2pdf()
    .from(document.body)
    .save("AlvaroLeon-CV.pdf");
});

