let button = document.querySelector(".btn");

if(button){
    button.addEventListener("click", function(){
        alert("You are being redirected to the Alerts page.");
    });
}

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function(){
        this.style.transform = "translateY(0)";
    });

});

window.addEventListener("load", function(){
    document.body.style.opacity = "1";
});