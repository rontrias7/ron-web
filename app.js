

const strToSlice = document.querySelectorAll('.sliceMe');
const title = document.querySelector('.title');
const main = document.querySelector('#main-container');


// Take an element and converts each word (spaces included) in a Span tag.
function strSlicing(element){

// setting up the variables. "chain" will be the textContent becoming array.
let chain = element[0].textContent.toUpperCase().split('');
let newInner = '';


// I choose to edit the innerHTML instead of create new elements because
// I want to preserve the parent element too. So it's the faster way I've found.

for(let word in chain){
   
    // Spaces need special treatement to display it in the span tag.
    if(chain[word] === ' '){
        newInner += `<span>&nbsp</span>`;

    }
    
    // else do
    newInner += `<span>${chain[word]}</span>`;
   
    element[0].innerHTML = newInner;
}

}


// this function do 'the magic',  adding requeried classes or stylet to the spans.
// I prefered to create another function for this task to be able to expand the 
// customnization of the element if needed.


function letMeAppear(elemento){

    for(let i = 0; i < elemento.length; i++){


        console.log(elemento[i].innerHTML)
        elemento[i].className += 'appearup';
        elemento[i].style.animationDelay = `${i/15}s`;




    }
}


strSlicing(strToSlice)

const elemAppe = document.querySelectorAll('.sliceMe span');

addEventListener('DOMContentLoaded', letMeAppear(elemAppe));



const arrowButtonOne = document.querySelector('.arrow-button');



arrowButtonOne.addEventListener('mouseover', () => {
    arrowButtonOne.style.transform = 'rotate(90deg)';

}
);

arrowButtonOne.addEventListener('mouseout', () => {
    arrowButtonOne.style.transform = 'rotate(0deg)';
    title.style.opacity = '1';

}
);







