let count = 0;
let btns = document.querySelectorAll(".btn");
let value = document.querySelector("#value");

btns.forEach( function(btn){
 btn.addEventListener('click', (e) => {
    const current = e.currentTarget.classList;
    if(current.contains("decrease")){
        count--;
        value.style.color = "red";
    }
    else if(current.contains("increase")){
        count++
        value.style.color = "rgb(43, 251, 2)";
    }
    else{
        count = 0;
        value.style.color = "black";
    }
    value.textContent = count;
    
 });
});

