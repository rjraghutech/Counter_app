// let increase = document.querySelector(".increase");
// let decrease = document.querySelector(".decrease");
// let reset = document.querySelector(".reset");
let num = document.querySelector(".num");
let btns = document.querySelectorAll('.btn');

// increase.addEventListener("click", function(e){
//    let a = num.textContent++;
//     console.log(a); 
// });

// decrease.addEventListener("click", function(e){
//     let a = num.textContent--;
//      console.log(a); 
//  });

//  reset.addEventListener("click", function(e){
//     let a = num.textContent = 0;
//      console.log(a); 
//  });

btns.forEach(function (btn) {
    btn.addEventListener('click',function(e) {
        let pressedBtn = e.currentTarget.classList;
        console.log(pressedBtn)
        if(pressedBtn.contains('increase')){
            num.textContent++;
        }
        else if(pressedBtn.contains('decrease')){
            num.textContent--;
        }
        else{
            num.textContent = 0;
        }
        if(num.textContent == 0)
            num.style.color = "black";
        else if(num.textContent >0)
            num.style.color = "green";
        else
            num.style.color = "red";
    });
});
