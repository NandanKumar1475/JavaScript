//selecting the Element from html tag 
const heading = document.getElementById("heading");
const headingg = document.getElementsByClassName("headingg")
console.log(heading);
console.log(headingg)
// set the attribute
heading.setAttribute("class","heading,test")
heading.style.backgroundColor = "red"

// QuerySelector and QuerySelectorAll

const myul = document.querySelector('ul')
console.log(myul);
const myli = document.querySelector('li')
console.log(myli);
myli.style.backgroundColor ="green"
myli.innerText = "five"



//QuerySelectorAll
const myull = document.querySelectorAll('ul')
console.log(myull);
//ul ke andar sara ka color change hoga ul k andar jo v hoga
myull[0].style.color = "blue"




