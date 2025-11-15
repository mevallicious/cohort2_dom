let box = document.querySelector(".box")
let btn= document.querySelector("button")
let naam =document.querySelector(".box h1")
let cap =document.querySelector(".box h2")
let trop =document.querySelector(".baby")
let main =document.querySelector("main")
let arr =[
   
  {
    team: "Chennai Super Kings",
    captain: "MS Dhoni",
    trophies: "5 Trophies",
    primary: "yellow",
    image: "https://imgs.search.brave.com/b6Gj_UWw7kN63qT1kA0Q99KAu8BQJtDvU2WIoR32TGo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzNzE3/MDc0LmpwZw"
  },
  {
    team: "Mumbai Indians",
    captain: "Hardik Pandya",
    trophies: "5 Trophies",
    primary: "blue",
    image: "https://imgs.search.brave.com/aTtbB1MJG_O3LVhjSaeW4p3OVIxP7BURXJdSFSTL1f4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbXVt/YmFpLWluZGlhbnMt/dGVhbS1jZWxlYnJh/dGlvbi1waG90b2dy/YXBoLTBkNDlrcTVv/NTdpNW1kbTUuanBn"
  },
  {
    team: "Kolkata Knight Riders",
    captain: "Ajinkya Rahane",
    trophies: "3 Trophies",
    primary: "purple",
    image: "https://imgs.search.brave.com/eh0HPVDPob_RHphMaCQgpggabcA6XVKPYIQ6FlmQr3k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmVlZC1hLWhkLXBp/Yy1vZi1ra3ItdGVh/bS13aXRoLXRyb3Bo/eS1mb3ItbGFwdG9w/cy13YWxscGFwZXIt/djAtbTdieG8wZ3hk/eDJkMS5qcGVnP3dp/ZHRoPTEwODAmZm9y/bWF0PXBqcGcmYXV0/bz13ZWJwJnM9ZTgw/ODIyOTdkNTdhZWRm/Mjk5MjVmNTAyMzBk/YjMyYTg1OGE0ZTM4/OA"
  },
  {
    team: "RCB",
    captain: "Virat Kohli",
    trophies: "1 Trophy",
    primary: "red",
    image: "https://i.pinimg.com/736x/47/ec/e3/47ece31b54690337fdaf3231f2b01b0f.jpg"
  },
  {
    team: "Gujarat Titans",
    captain: "Shubman Gill",
    trophies: "1 Trophy",
    primary: "darkblue",
    image: "https://i.pinimg.com/736x/d0/60/cb/d060cbeaa9dbb77ff1a627dca4078364.jpg"
  },
  {
    team: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
    trophies: "1 Trophy",
    primary: "orange",
    image: "https://imgs.search.brave.com/GnNp-JxfWsyIfKGk_bGpRgz5X-ChFx15sa_NlbRGeMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzExL2Vm/LzgzLzExZWY4MzNi/YWEyNTE1MjcyOWMx/ZjU5NGEzYWYwMzc1/LmpwZw"
  },
  {
    team: "Rajasthan Royals",
    captain: "Sanju Samsom",
    trophies: "1 Trophy",
    primary: "pink",
    image: "https://imgs.search.brave.com/14mGAzx1OmQWCqAniqVcY-q_nHPa8e90b1VWkQzVQfE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDE1MjA5/NDkwLndlYnA"
  },
  {
    team: "Punjab Kings",
    captain: "Shreyas Iyer",
    trophies: "0 Trophies",
    primary: "red",
    image: "https://imgs.search.brave.com/xyymuEWO7cnRWLH_c5R5DVJFRKoKkoO-BPjaKaDGKN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JiLzVj/L2RiL2JiNWNkYmFk/ZjcwMzgwNjhiYTE0/NzY5MDZhNDhkMWEx/LmpwZw"
  },
  {
    team: "Delhi Capitals",
    captain: "Axar Patel",
    trophies: "0 Trophies",
    primary: "blue",
    image: "https://i.pinimg.com/564x/7d/41/8b/7d418b39ccce21e8d2cb575a4816777c.jpg"
  },
  {
    team: "Lucknow Super Giants",
    captain: "Rishabh Pant",
    trophies: "0 Trophies",
    primary: "lightblue",
    image: "https://i.pinimg.com/236x/27/23/da/2723da19d923ba1fe4cc2dd17a1548d0.jpg"
  }

]

btn.addEventListener("click",function(){
    let winner = arr[Math.floor(Math.random()*arr.length)]

    box.style.backgroundColor=winner.primary
    main.style.backgroundImage="url("+winner.image+")"
    naam.innerHTML =winner.team
    cap.innerHTML =winner.captain
    trop.innerHTML =winner.trophies
    console.log(winner)
})