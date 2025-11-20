let main = document.querySelector("main");


let box = document.querySelector(".box .love img")
let love = document.querySelector('.box i')
let like = document.querySelector(".com .like .liking")

box.addEventListener("dblclick",function(){
    love.style.opacity="1"
    love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"
    like.style.transform="scale(1.4)"
    like.style.color="red"

    setTimeout(function(){
      love.style.transform = "translate(-50%,-300%) scale(1) rotate(60deg)"
      like.style.transform="scale(1)"
    },700)

    setTimeout(function(){
        love.style.opacity="0"
    },1000)

    setTimeout(function(){
      love.style. transform = "translate(-50%,-50%) scale(0) rotate(-60deg)"
    },1200)


})

