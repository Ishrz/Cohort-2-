let count=0;
let seconds=30;
let h1=document.querySelector("h1");
let bar=document.querySelector(".progress-bar");
let per=document.querySelector("#percentageText");
let tmout=setInterval(()=>{
if(count<=99){
count++;
bar.style.width=count+"%";
per.textContent=count+"%";
}
else{
    h1.textContent="Download Compeleted.";
    clearInterval(tmout);
}

console.log("hello");
},seconds*1000/100)