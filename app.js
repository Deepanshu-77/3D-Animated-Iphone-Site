const card = document.querySelector(".card");
const container = document.querySelector(".container");
const info = document.querySelector(".info");
const sneakerimg = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");

container.addEventListener("mousemove" , (e) =>{
  
  let xaxis = (window.innerWidth/2 -e.pageX)/25;
  let yaxis = (window.innerHeight/2 -e.pageY)/25;
  card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;


})

container.addEventListener("mouseenter" , (e)=>{
    card.style.transition = "none";
    info.style.transform = "translateZ(100px)";
    sneakerimg.style.transform = "translateX(-100px) translateY(-10px) ";
    purchase.style.transform = "translateZ(50px)";
})

container.addEventListener("mouseleave" , function (e) {
    info.style.transform = "translateZ(0px)";
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        sneakerimg.style.transform = "translateZ(0px) rotateZ(0deg)";
        purchase.style.transform = "translateZ(0px)";

    })