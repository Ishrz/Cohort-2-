const board=document.querySelector('.board');

const widhtBlock=35;
const heightBlock=35;

const cols= Math.floor(board.clientWidth /widhtBlock)
const rows= Math.floor(board.clientHeight / heightBlock)


//similar done with below loops
// for(i=0; i< rows*cols;i++){
//     let blockdiv=document.createElement('div')
// blockdiv.classList.add('block')
//     board.appendChild(blockdiv)
// }

const blocksDiv=[];
const snake=[
    {x:5, y:7},

];
let direction='right'

for (let row=0; row<rows; row++){
    for( let col=0; col<cols; col++){
        let blockdiv=document.createElement('div')
        blockdiv.classList.add('block')
        board.appendChild(blockdiv)
        blockdiv.innerText=`${row}-${col}`
        blocksDiv[`${row}-${col}`] = blockdiv;
    }

}

const render=()=>{
     snake.forEach((segment)=>{
        blocksDiv[`${segment.x}-${segment.y}`].classList.add('fill')
    })
}

let clrIntv=setInterval(()=>{
    let head=null;
    
    if(direction==='left'){
        head={ x:snake[0].x ,y:snake[0].y-1}
    }else if(direction==='right'){
        head={x:snake[0].x, y:snake[0].y+1}
    }else if(direction==='down'){
        head={x:snake[0].x+1, y:snake[0].y}
    }else if(direction==='up'){
        head={x:snake[0].x-1, y:snake[0].y}
    }
    
    if(head.x<0|| head.x>=rows || head.y<0 || head.y>=cols){
        alert("Game over")
        return clearInterval(clrIntv);
    }
    
    
    snake.forEach(segment=>{
        blocksDiv[`${segment.x}-${segment.y}`].classList.remove('fill')
    })
    
    
    snake.unshift(head)
    snake.pop()
    render()

},300)



addEventListener('keydown',(evt)=>{
    if(evt.key=== 'ArrowUp')  direction='up'
    if(evt.key=== 'ArrowDown')  direction='down'
    if(evt.key=== 'ArrowRight')  direction='right'
    if(evt.key=== 'ArrowLeft')  direction='left'
})