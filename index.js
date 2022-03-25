let imgs=document.querySelector(".img-container")
let leftBtn=document.querySelector("#left")
let rightBtn=document.querySelector("#right")
let img=document.querySelectorAll(".img-container img")

let index=0

function changeImg(){
    if(index>img.length-1){
        index=0
    }else if(index<0){
        index=img.length-1
    }
    imgs.style.transform=`translateX(${-index*500}px)`
}

rightBtn.addEventListener("click", change=()=>{
    index++;
    changeImg()
})
leftBtn.addEventListener("click", change=()=>{
    index--;
    changeImg()
})

setInterval(()=>{
    index++;
    changeImg()
},1000)

setTimeout(()=>{
    document.querySelector(".container").style.opacity="1"
},1000)