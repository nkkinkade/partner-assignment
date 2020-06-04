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
        greeting = 'Good evening, ' + userName + '!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon, ' + userName + '!';
    } else if (hourNow > 0) {
        greeting = 'Good morning, ' + userName + '!';
    } else {
        greeting = 'Welcome, ' + userName + '!'
    }

    document.write('<h3>' + greeting + '</h3>');   
}

 firstTest();
    
