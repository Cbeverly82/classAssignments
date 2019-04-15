function Particle (startx, starty){
this.x = startx;
this.y = starty;
velocity = {x:0, y:0};
}
const particles = [];
for (let i = 0; i <100; i++){
    particles.push(new Particle (i, Math.random()*500));
}
console.log(particles)
