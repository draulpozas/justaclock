var nodeHs;
var nodeMins;
var nodeSecs;

var iid;

window.onload = function() {
    nodeHs = document.getElementById('hs');
    nodeMins = document.getElementById('mins');
    nodeSecs = document.getElementById('secs');
    iid = this.setInterval(updateClock, 1000);
}

function updateClock() {
    let time = new Date();

    let degSecs = 360 * (time.getSeconds()/60);
    let degMins = 360 * ((time.getMinutes() + time.getSeconds()/60)/60)
    let degHs = 360 * ((time.getHours() + time.getMinutes()/60)/12) // I *could* divide hours/12 since it's a 12 hour clock, but the end result would be the same and it would only complicate the code

    nodeSecs.style.transform = `rotate(${degSecs}deg)`;
    nodeMins.style.transform = `rotate(${degMins}deg)`;
    nodeHs.style.transform = `rotate(${degHs}deg)`;
}