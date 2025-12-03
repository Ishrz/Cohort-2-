const board=document.querySelector('.board');
const startButton=document.querySelector('.btn-start')
const modal=document.querySelector('.modal')
const restartButton=document.querySelector('.btn-restart');
const gameOverModal=document.querySelector('.game-over')
const gameStartModal=document.querySelector('.start-game')

const widhtBlock=35;
const heightBlock=35;

const cols= Math.floor(board.clientWidth /widhtBlock)
const rows= Math.floor(board.clientHeight / heightBlock)

let intervalId=null;

//similar done with below loops
// for(i=0; i< rows*cols;i++){
//     let blockdiv=document.createElement('div')
// blockdiv.classList.add('block')
//     board.appendChild(blockdiv)
// }

const blocksDiv=[];
let snake=[{x:5, y:7}];
let direction='right'

let food={x:Math.floor(Math.random() * rows), y:Math.floor(Math.random()*cols)}

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
     
    let head=null;

    blocksDiv[`${food.x}-${food.y}`].classList.add('food')
    
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
        modal.style.display='flex'
        gameStartModal.style.display='none'
        gameOverModal.style.display='flex'
        
        return clearInterval(intervalId);
            
    }

    if(head.x===food.x && head.y===food.y){
         blocksDiv[`${food.x}-${food.y}`].classList.remove('food');
         food={x:Math.floor(Math.random() * rows), y:Math.floor(Math.random()*cols)}

         snake.unshift(head);
    }


    snake.forEach(segment=>{
        blocksDiv[`${segment.x}-${segment.y}`].classList.remove('fill')
    })

    snake.unshift(head)
    snake.pop()

    snake.forEach((segment)=>{
        blocksDiv[`${segment.x}-${segment.y}`].classList.add('fill')  
    })
}

// let clrIntv=setInterval(()=>{
    
//     render()

// },300)



addEventListener('keydown',(evt)=>{
    if(evt.key=== 'ArrowUp')  direction='up'
    if(evt.key=== 'ArrowDown')  direction='down'
    if(evt.key=== 'ArrowRight')  direction='right'
    if(evt.key=== 'ArrowLeft')  direction='left'
})

startButton.addEventListener('click',()=>{
    modal.style.display='none'
    intervalId=setInterval(()=>{ render()},300)
    // render()
})

let restartGame=()=>{

    blocksDiv[`${food.x}-${food.y}`].classList.remove('food')
    snake.forEach(segment=>{
        blocksDiv[`${segment.x}-${segment.y}`].classList.remove('fill')
    })
    modal.style.display='none'
    snake=[{x:5, y:7}];
    food={x:Math.floor(Math.random() * rows), y:Math.floor(Math.random()*cols)}
    intervalId=setInterval(()=>{ render()},300)
}
restartButton.addEventListener('click', restartGame)
