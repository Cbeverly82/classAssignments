const selectedItem = document.querySelector('#list')
console.log(selectedItem);
//created list

var coffee = selectedItem.children[1].textContent= "Fair Trade Coffee";   
//Updated from 'Coffee' to Fair Trade Coffee'

selectedItem.children[3].remove();  
//removed 'Twinkies'

const snack = document.createElement('li');   
snack.innerHTML = 'Cheese Whiz';
const list = document.querySelector('ul');
list.appendChild(snack);
//added item 'Cheese Whiz

//selectedItem.remove();   
//removes list of items from webpage

selectedItem.innerHTML = '';
['protein powder', 'muscle milk', 'power bars'].forEach(function(itemText){
    var li = document.createElement('li');
    li.innerHTML = itemText;
    selectedItem.appendChild(li);
});
//cleared list and programmatically added replacement items

selectedItem.children[1].className= "Important";
//added class name 'important' to Muscle Milk



