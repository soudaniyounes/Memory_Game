document.querySelector(".start-buton .button").onclick=()=>{

    let userName=prompt("Enter your name please");

    if(userName ==null || userName=="" ){

   document.querySelector(".info-memory .user span").innerHTML="Unknow";

    }else{
        document.querySelector(".info-memory .user span").innerHTML=userName;
    }

    document.querySelector(".start-buton ").remove();
}

let BlockContinair=document.querySelector(".game-bloks");

let ArrayBlock=Array.from(BlockContinair.children);

let orderRange=[...Array(ArrayBlock.length).keys()];
//let orderRange=Array.from((ArrayBlock.length).keys());

Shuflle(orderRange);

let duration=1000;

ArrayBlock.forEach((block,index)=>{

    block.style.order=orderRange[index];

    block.addEventListener("click",()=>{

        filepedBlock(block);

    })
});

function Shuflle(array){

    let curent=array.length,
    temp,
    random;
    
    while(curent > 0){
    random= Math.floor(Math.random() * curent);

    curent--;

    temp=array[curent];

    array[curent]=array[random];

    array[random]=temp;


    }

return array;

}

function filepedBlock(fliped){

    fliped.classList.add("flip");

let AllFlipedBocks = ArrayBlock.filter(blocks => blocks.classList.contains("flip"));

if(AllFlipedBocks.length == 2){

    clickFun();
    checkFun(AllFlipedBocks[0],AllFlipedBocks[1])
}
}
function clickFun(){

    BlockContinair.classList.add("eventClick");

   setTimeout(()=>{
    BlockContinair.classList.remove("eventClick");
   },duration)

}
function checkFun(firstBlock,secondBlock){

let Tries=document.querySelector(".info-memory .nbr-error span")

if(firstBlock.dataset.tec === secondBlock.dataset.tec){

    firstBlock.classList.remove("flip");
    secondBlock.classList.remove("flip");

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");

    document.getElementById("succes").play();
}else{
    Tries.innerHTML=parseInt(Tries.innerHTML) + 1;
    document.getElementById("fail").play();
   setTimeout(()=>{
    firstBlock.classList.remove("flip");
    secondBlock.classList.remove("flip");
   },duration)
}
if(BlockContinair.lastElementChild.classList.contains("has-match")){
    document.getElementById("win").play();
   let Div= document.querySelector(".theEnd");
   Div.classList.add("you-win");
   let Span=document.createElement("span");
    Span.innerHTML="You Win";
    Span.classList.add("spanWin");
    Div.appendChild(Span);
}
}