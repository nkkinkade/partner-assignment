'use strict';
console.log('This file connected!');

function firstTest() {

    var today = new Date();
    var hourNow = today.getHours();
    var userName = prompt('What is your name?');
    // var quest = prompt('What is your quest?');
    // var swallow = prompt('What is the air-speed velocity of an unladen swallow?');
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening, ' + userName + '!' + ' What is for dinner?';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon, ' + userName + '!' + ' Have you eaten lunch yet?';
    } else if (hourNow > 8) {
        greeting = 'Good morning, ' + userName + '!' + ' It is a lovely day today!';
    } else if (hourNow > 0) {
        greeting = 'You are up kind of early, ' + userName + '!';
    } else {
        greeting = 'Welcome, ' + userName + '!'
    }
    document.getElementById('greeting').innerHTML = greeting;
}

 firstTest();

