let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let num = document.querySelector(".num");

increase.addEventListener("click", function(e){
   let a = num.textContent++;
    console.log(a); 
});

decrease.addEventListener("click", function(e){
    let a = num.textContent--;
     console.log(a); 
 });

 reset.addEventListener("click", function(e){
    let a = num.textContent = 0;
     console.log(a); 
 });

 
