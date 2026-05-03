let nom 
nom = "Luc"

let title = document.querySelector("p").textContent ="LucBusiness";

let header = document.querySelector("header");
header.style.backgroundColor = "coral"

let boutoncontact = document.querySelector(".talk-btn");

boutoncontact.addEventListener("click", function() {
    alert("Merci de nous avoir contacter")
})

