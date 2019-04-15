var grocery = ['pop tarts', 'ramen noodles', 'chips', 'coffee'];
grocery[4] = 'fair trade coffee';
grocery.push('fruit loops');
grocery.splice(2,2, 'rice', 'beans');

var cart = [];
cart.push(grocery.pop());
cart.push(grocery.shift());

while(grocery.length > 0)
cart.push(grocery.pop());

cart.sort().reverse();
console.log("My cart contains: ", cart.join(','));

document.write(cart);