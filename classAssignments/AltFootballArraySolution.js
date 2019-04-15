var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

let mike = players.filter( (player) => {
    return player.firstName === "Mike";
});
console.log(mike);

let rb = players.filter( (player) => {
    return player.position === "RB";
});
console.log(rb);

let lastNames = players.map( (player) => {
    return player.lastName;
});
console.log(lastNames);

let rbsWith6PlusTDs = rb.filter( (player) => {
    return player.touchdowns > 5;
}).map((player) => {
    return `${player.firstName} ${player.lastName}`;
});
console.log(rbsWith6PlusTDs);

let totalTDsByRbs = rb.reduce((accumulator,player) => {
    return accumulator + player.touchdowns;
},0);
console.log(totalTDsByRbs);

let a = [1,2,3,4];
console.log(a.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
}));