let box = document.querySelector(".box")
let btn= document.querySelector("button")

btn.addEventListener("click",function(){
    var a = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    var c = Math.floor(Math.random()*256)

    console.log(a,b,c)
    box.style.backgroundColor = `rgb(${a},${b},${c})`

})