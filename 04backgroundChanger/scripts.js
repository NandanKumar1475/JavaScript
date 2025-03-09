const box = document.querySelectorAll('.box');

const body = document.querySelector("body");

box.forEach((button)=>{
   button.addEventListener("click",(event)=>{
    if(event.target.id=='aqua'){
        body.style.backgroundColor = 'aqua'
    }
    else if(event.target.id=='blanchedalmond'){
      body.style.backgroundColor = 'blanchedalmond'
    }
    else if(event.target.id=='blue'){
        body.style.backgroundColor = 'blue'
    }else if(event.target.id=='red'){
        body.style.backgroundColor = 'red';

    }
   })
})

