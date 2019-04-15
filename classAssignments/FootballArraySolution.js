//Players named 'Mike'
players.find(function(p){
return p.firstName === 'Mike'
})

//Running backs
players.filter(function(p){
return p.position === 'RB';
})

//LastNames
players.map(function(p){
return p.lastName;
})

//Full names of all running backs with more than 5 touchdowns.
players
.filter(function(player){
return player.touchdowns > 5 && player.position === 'RB';
})
.map(function(player){
return player.firstName + ' ' + player.lastName;
});

//Number of touchdowns by runningbacks
players.filter(function(player){
    return player.position === 'RB';
}).reduce(function(sum, current){
    return sum + current.touchdowns;
},0)