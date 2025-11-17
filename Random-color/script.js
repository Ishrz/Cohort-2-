let btn= document.querySelector(`button`);
let box=document.getElementById(`box`);
let main=document.querySelector("main");

let arr=[
    {
        team:"CSK",
        primary:"yellow",
        secondry:"blue",
        captain:"Dhoni"
    },
    {
        team:"KKR",
        primary:"purple",
        secondry:"yellow",
        captain:"SRk"
    },
    {
        team:"SRH",
        primary:"orange",
        secondry:"crimson",
        captain:"DHWAN"
    },
    {
        team:"MI",
        primary:"blue",
        secondry:"gray",
        captain:"ROHIT SHARMA"
    },
    {
        team:"RCB",
        primary:"crimson",
        secondry:"pink",
        captain:"VIRAT KOHLI"
    },
]


btn.addEventListener("click",function(){
    let winner=arr[Math.floor(Math.random()*arr.length)];
    
    box.innerHTML=`<h1>${winner.team}<h1>`
   let h3=document.createElement("h3");
   h3.style.textAlign="center";
box.append(h3.textContent=`Captain : ${winner.captain}`);

   box.style.backgroundColor=winner.primary;
   main.style.backgroundColor=winner.secondry;

    

})

