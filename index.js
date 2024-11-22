let heads = 0;
let tails = 0;
const coin =document.querySelector(".coin");
const flipbutton =  document.querySelector("#flip-button");
const resetbutton = document.querySelector("#reset-button")

flipbutton.addEventListener("click",()=>{
    let i = Math.floor(Math.random()*2 );
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation="spin-heads 3s forwards";
        }, 100);
            heads++;
        }else{
            setTimeout(function(){
                coin.style.animation="spin-tails 3s forwards";
            }, 100);
            tails++; 
        }
        setTimeout(updatestats,3000);
        disablebutton();
}
);


function updatestats(){
    document.querySelector("#heads-counts").textContent =`Heads: ${heads}`;
    document.querySelector("#tails-counts").textContent =`Tails: ${tails}`;
}

function disablebutton(){
    flipbutton.disabled = true;
    setTimeout(function(){
        flipbutton.disabled = false;
    }, 3000);
}

function reset(){
    coin.style.animation = "block";
    heads = 0;
    tails = 0;
    updatestats();
}
