'use strict';

function firstTest() {

    var today = new Date();
    var hourNow = today.getHours();
    var userName = prompt('What is your name?');
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

var getMusic = function() {
    var music = prompt('What is your favorite music genre?').toLowerCase().trim();
    var item;
    while (music !== 'rock' && music !== 'rap' && music !== 'country' && music !== 'classical' && music !== 'pop') {
      music = prompt('Please enter "rock," "rap," "country" or "pop"...').toLowerCase().trim();
    }
    if (music === 'rock') {
      item = '<img src="images/rock.jpg">';
    } else if (music === 'rap') {
      item = '<img src="images/rap.jpg">';
    } else if (music === 'country') {
      item = '<img src="country.jpg">';
    } else if (music === 'pop') {
      item = '<img src="images/pop.png">';
    }
    
    return item; 
};

var howMany = function() {
    var age = prompt('How many years has this been your favorite?').trim();
    while( age === '' || isNaN(age) ) {
      age = prompt('Please enter a number. How many years has this been your favorite?').trim();
    }
    return Number(age);
};

var showMusic = function() {
    var item = getMusic();
    var total = howMany();
    var result = '';
    //use this to make the number of house images display on the screen. 
    for(var i = 1; i <= total; i++) {
      result = result + '<p>' + item + '</p>';
    }
    return result;
};

  document.getElementById('showMusic').innerHTML = showMusic();
