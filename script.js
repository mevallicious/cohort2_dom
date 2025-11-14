let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let reset = document.querySelector('#reset')
let count= document.querySelector('.count h1')

let a =0

inc.addEventListener("click",function(){
    a++
    count.innerHTML = a
})
dec.addEventListener("click",function(){
    a--
    count.innerHTML = a
})

reset.addEventListener("click",function(){
    a=0
    count.innerHTML = a
})

