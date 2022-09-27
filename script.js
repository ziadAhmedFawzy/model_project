// get btn

let openn = document.getElementById("open");

let closee = document.getElementById("close");

let box_model = document.getElementById("box_model");


openn.addEventListener("click" , function() {
    box_model.classList.add("show");
});

closee.addEventListener("click" , function() {
    box_model.classList.remove("show");
});