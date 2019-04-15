const selectedItem = document.querySelector('li')
//starting point

const header = selectedItem.parentElement.parentElement;
//getting the header element

const section = document.querySelectorAll('section');
//getting the array of all section elements

const current =document.querySelector('section.current');
//getting section element with class 'current'

const next = current.nextElementSibling;
//getting section that comes after 'current' section

const h2 = current.previousElementSibling;
//getting h2 node from section before 'current'

const div = document.querySelector('h2.highlight').parentElement.parentElement;
//getting the div that contains section that has h2 w/class 'highlight'

var section2 = Array.from(document.querySelectorAll('section')).filter(function(header){
    return header.querySelector('h2') != null;
})
//getting all sections that contain and h2, using a single statement

console.log(header);
console.log(section);
console.log(current);
console.log(next);
console.log(h2);
console.log(div);
console.log(section2);
//displays the information for JS within the HTML