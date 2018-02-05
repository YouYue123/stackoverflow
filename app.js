const spawnSync = require('child_process').spawnSync;

function wait(delta){
    spawnSync('sleep', [delta]);
}

setTimeout(() => {
    console.log('first');
}, 2000);

wait(1);

setTimeout(() => {
    console.log('second');
}, 2000);

setTimeout(() => {
    console.log('third');
}, 4000);