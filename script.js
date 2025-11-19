let main = document.querySelector("main");
let btn = document.querySelector("button");
let inner = document.querySelector(".inner")
let h1 = document.querySelector(".percent")
let change = document.querySelector(".change h1")


let grow =0

btn.addEventListener("click",function(){
  btn.style.pointerEvents='none'
  let num = 20 + Math.floor(Math.random()*50)
  console.log(`your dowload will complete in `+ num +` seconds`)

  let time = setInterval(function(){
    grow++
    h1.innerHTML=grow+"%"
    inner.style.width=grow + "%"
  },num)

  setTimeout(function(){
    clearInterval(time)
    btn.style.backgroundColor="#8b8b8b"
    change.innerHTML="Downloaded"
    change.style.color="#d1d0d0"
  },num*100)
})




