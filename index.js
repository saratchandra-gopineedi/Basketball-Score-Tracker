let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function add1pthome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2pthome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add3pthome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1ptguest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2ptguest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function add3ptguest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}