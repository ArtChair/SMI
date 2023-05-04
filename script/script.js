point = 0

const resultActive = document.querySelector('.result-active');



const ans1 = document.getElementById('ans1');
const button1 = document.getElementById('btn1');

const ans2 = document.getElementById('ans2');
const button2 = document.getElementById('btn2');

const ans3 = document.getElementById('ans3');
const button3 = document.getElementById('btn3');

const ans4 = document.getElementById('ans4');
const button4 = document.getElementById('btn4');

const ans5 = document.getElementById('ans5');
const button5 = document.getElementById('btn5');

// const ans = document.getElementById('ans');
// const button = document.getElementById('btn');

// const ans = document.getElementById('ans');
// const button = document.getElementById('btn');

// const ans = document.getElementById('ans');
// const button = document.getElementById('btn');

button1.onclick = function() {
    if (ans1.value == 2) {
        ans1.setAttribute('disabled', true);
        button1.setAttribute('disabled', true);
    }
    if (ans1.value == 2) {
        point+=2
    }
    else {
        ans1.setAttribute('disabled', true);
        button1.setAttribute('disabled', true);
    }
    console.log(point)
    resultActive.innerHTML = point
}


button2.onclick = function() {
    if (ans2.value == 3) {
        ans2.setAttribute('disabled', true);
        button2.setAttribute('disabled', true);
    }

    if (ans2.value == 3) {
        point+=2
    }
    else {
        ans2.setAttribute('disabled', true);
        button2.setAttribute('disabled', true);
    }
    console.log(point)
    resultActive.innerHTML = point
}

button3.onclick = function() {
    if (ans3.value == 1) {
        ans3.setAttribute('disabled', true);
        button3.setAttribute('disabled', true);
    }
    if (ans3.value == 1) {
        point+=2
    }
    else {
        ans3.setAttribute('disabled', true);
        button3.setAttribute('disabled', true);
    }
    console.log(point)
    resultActive.innerHTML = point
}

button4.onclick = function() {
    if (ans4.value == 3) {
        ans4.setAttribute('disabled', true);
        button4.setAttribute('disabled', true);
    }
    if (ans4.value == 3) {
        point+=3
    }
    else {
        ans4.setAttribute('disabled', true);
        button4.setAttribute('disabled', true);
    }
    console.log(point)
    resultActive.innerHTML = point
}

button5.onclick = function() {
    if (ans5.value == 1) {
        ans5.setAttribute('disabled', true);
        button5.setAttribute('disabled', true);
        
    }
    if (ans5.value == 1) {
        point+=2
    }
    else {
        ans5.setAttribute('disabled', true);
        button5.setAttribute('disabled', true);
    }
    console.log(point)
    resultActive.innerHTML = point
}

resultActive.innerHTML = point
