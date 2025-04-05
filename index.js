let scoreEl = document.getElementById("score");
console.log(scoreEl)
let scoreEl2 = document.getElementById("score2");
console.log(scoreEl2)
let homePoints = 0;
let guestPoints = 0;


function homePoint1() {
    homePoints += 1
    scoreEl.textContent = homePoints    
};

function homePoint2() {
    homePoints += 2
    scoreEl.textContent = homePoints
};

function homePoint3() {
    homePoints += 3
    scoreEl.textContent = homePoints
};

function guestPoint1() {
    guestPoints += 1
    scoreEl2.textContent = guestPoints
};

function guestPoint2() {
    guestPoints += 2
    scoreEl2.textContent = guestPoints
};

function guestPoint3() {
    guestPoints += 3
    scoreEl2.textContent = guestPoints
};

