let bars = document.querySelector("#bars");
let dropdown = document.querySelector(".mobile-view");

bars.addEventListener("click", e => {
    bars.classList.toggle('times')
     
if(bars.className === "times"){
    dropdown.style.height = "100vh";
    dropdown.style.transition = "all 1s ease-in-out"
    dropdown.style.opacity = '1'
}else {
    dropdown.style.height = "0";
    dropdown.style.opacity = '0'
    dropdown.style.transition = "all 1s ease-in-out"

}



})