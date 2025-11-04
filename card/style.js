let users=[
    {
        name: "alex",
        pic: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        bio: "Array object 1"
    },
    {
        name: "sam",
        pic: "https://plus.unsplash.com/premium_photo-1689533448099-2dc408030f0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        bio: "Array object 2"
    },
    {
        name: "John",
        pic:"https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        bio: "Array object 3"
    },
    {
        name: "Max",
        pic:"https://plus.unsplash.com/premium_photo-1757459446789-e4c51c7282bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        bio: "Array object 4"
    },
     {
        name: "soniya",
        pic: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        bio: "Array object 5"
    },
     {
        name: "sony",
        pic: "https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        bio: "Array object 6"
    },
    {
        name: "Alexa",
        pic: "https://plus.unsplash.com/premium_photo-1708110769900-b126e1a3d008?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        bio: "Array object 7"
    },
    {
        name: "johny",
        pic: "https://plus.unsplash.com/premium_photo-1732086293220-7ef5613ef2e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
        bio: "Array object 8"
    },
    {
        name: "sammy",
        pic: "https://plus.unsplash.com/premium_photo-1731378711219-705ef39bf800?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715",
        bio: "Array object 9"
    },
];

// console.log(users);
let cards=document.querySelector(".cards");


function userFunction(arr){
    arr.forEach(function(user) {

        // console.log(arr);

        let card=document.createElement("div");
        card.classList.add("card");

        let img=document.createElement("img");
        img.src=user.pic
        img.classList.add("bg-img");

        let bluredlayer=document.createElement("div");
        bluredlayer.classList.add("blurred-layer");
        bluredlayer.style.backgroundImage= `url(${user.pic})`;

        let content=document.createElement("div");
        content.classList.add("content");

        let h3=document.createElement("h3");
        h3.textContent=user.name;

        let p=document.createElement("p");
        p.textContent=user.bio;

        card.append(img);
        card.append(bluredlayer);
        card.append(content);

        content.append(h3);
        content.append(p);

        cards.append(card);
    });
}


userFunction(users);

let inp= document.querySelector(".inp");
inp.addEventListener("input",()=>{
    let newusers=users.filter((user)=>{

        return user.name.startsWith(inp.value);
    });

    cards.innerHTML="";
    userFunction(newusers);
})
