const board=document.querySelector('.board');

const widhtBlock=30;
const heightBlock=30;

const cols= Math.floor(board.clientWidth /widhtBlock)
const rows= Math.floor(board.clientHeight / heightBlock)



for(i=0; i< rows*cols;i++){
    let blockdiv=document.createElement('div')
blockdiv.classList.add('block')
    board.appendChild(blockdiv)
}
