let main = document.querySelector("main");
let h1 = document.querySelector("h1");
let crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  
});

h1.addEventListener("mousemove",function(dets) {
  crsr.style.height = "130px";
  crsr.style.width = "130px";
});
