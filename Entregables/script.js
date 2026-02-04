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

document.getElementById("PDF-button").addEventListener("click", () => { html2pdf()
    .from(document.body)
    .save("AlvaroLeon-CV.pdf");
});

