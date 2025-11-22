let cursor =document.querySelector("#cursor")
let body =document.querySelector("body")
let audio = new Audio()


let keypiano = {
  "1":"audio/1.mp3",
  "2":"audio/2.mp3",
  "3":"audio/3.mp3",
  "4":"audio/4.mp3",
  "5":"audio/5.mp3",
  "6":"audio/6.mp3",
  "7":"audio/7.mp3",
  "8":"audio/8.mp3",
  "9":"audio/9.mp3",
  "0":"audio/10.mp3",
  "a":"audio/a.mp3",
  "b":"audio/b.mp3",
  "c":"audio/c.mp3",
  "d":"audio/d.mp3",
  "e":"audio/e.mp3",
  "f":"audio/f.mp3",
  "g":"audio/g.mp3",
}

body.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x + 'px'
  cursor.style.top = dets.y + 'px'
})

function playSound(key){
  let sound = keypiano[key]
  if (!sound) return

  audio.src=sound 
  audio.currentTime = 0
  audio.play()
  
  console.log(keypiano[key])
}


body.addEventListener("keydown",(val)=>{
  let pressedKey = val.key.toLowerCase();
let press = document.getElementById(pressedKey);

  press.style.transform=`scale(0.9)`
  setTimeout(() => {
     press.style.transform=`scale(1)`
  }, 100);
  playSound(pressedKey)

})