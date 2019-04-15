 var candace = {
    name: 'Candace',
    address: '5432 Lane',
    city: 'Ambition',
    state: 'NC',
    zipcode: 28264
}

function getProfileUpdate(address,city){
return {
    address: '2222 Road',
    city: 'Progress'
}
}

function updateProfile(){
return Object.assign( candace,getProfileUpdate())
}

console.log(candace);

updateProfile();
console.log(candace);