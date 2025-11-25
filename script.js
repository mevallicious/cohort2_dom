let arr=[
  {name:"dark horse",img:"https://images.unsplash.com/photo-1536356953159-9043c2260bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGhvcnNlfGVufDB8fDB8fHww"},
  {name:"gold fish",img:"https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvbGQlMjBmaXNofGVufDB8fDB8fHww"},
  {name:"sea turtle",img:"https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwdHVydGxlfGVufDB8fDB8fHww "},
  {name:"african lion",img:"https://plus.unsplash.com/premium_photo-1661962845905-879dbe49c086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMGxpb258ZW58MHx8MHx8fDA%3D"},
  {name:"giraffe",img:"https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lyYWZmZXxlbnwwfHwwfHx8MA%3D%3D"}
]

function showthecards(){
  let sum=''
  arr.forEach(function(val){
    sum+=`<div class="box">
        <img class="cursor-pointer" src="${val.img}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`
  })

  let container = document.querySelector(".container")
  container.innerHTML=sum
}

function search(){
  input=document.querySelector("#searchinput")
  input.addEventListener("focus",()=>{
        document.querySelector(".overlay").style.display = "block"
  })
  input.addEventListener("blur",()=>{
        document.querySelector(".overlay").style.display = "none"
  })

  input.addEventListener("input",()=>{
    let filteredarray = arr.filter(val=>val.name.toLowerCase().startsWith(input.value))
    let sum=''
    filteredarray.forEach(function(val){
      sum+= `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${val.name}</h3>
        </div>`
    })
     document.querySelector(".searchdata").style.display = "block"
    document.querySelector(".searchdata").innerHTML=sum
  })
}
search()
showthecards()

