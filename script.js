let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = ["https://plus.unsplash.com/premium_photo-1760468898862-ab3172853206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxQMmI0V2c3eldxc3x8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1760466136484-f95907bdfdfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxQMmI0V2c3eldxc3x8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1760466051119-f47dd9edaafa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxQMmI0V2c3eldxc3x8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1760466136683-5ab1a7a1c7bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8UDJiNFdnN3pXcXN8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1762966160841-37423cb6c242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1762325658409-5d8aa0e43261?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1688610683988-f71245b518bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"]



btn.addEventListener("click",function(){
  let div= document.createElement("div")
   let x = Math.random()*95
  let y = Math.random()*80
  // let c1 = Math.floor(Math.random()*256)
  // let c2 = Math.floor(Math.random()*256)
  // let c3 = Math.floor(Math.random()*256)
  let r= Math.floor(Math.random()*360)
  let bgimg = arr[Math.floor(Math.random()*arr.length)]
  // let scale= Math.floor(Math.random()*3)

 

  div.style.width="200px"
  div.style.height="300px"
  console.log(bgimg)
  div.style.backgroundImage= "url("+ bgimg + ")"
  div.style.backgroundSize= "contain"
  div.style.backgroundRepeat= "no-repeat"

  div.style.position="absolute"
  div.style.left= x +"%"
  div.style.top= y +"%"
  div.style.rotate= r+"deg"

 

  main.appendChild(div)
})


