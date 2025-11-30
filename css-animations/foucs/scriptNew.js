

addEventListener('mousemove',(evt)=>{
    console.log(evt.clientX, evt.clientY)

    document.body.style.setProperty('--x', evt.clientX + 'px')
    document.body.style.setProperty('--y', evt.clientY +'px')
})