// var light = 'red';

// // if light is red than print 'stop'

// if(light === 'red')
// {
//     console.log('stop');
// }
// else if(light === 'yellow');
// {
//     console.log('slow');

// }
// else if(light === 'green');
// {
//     console.log('go');
// }

// switch(light)
// {
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow':
//         console.log('slow');
//     case 'green';
//         console.log('go');

// }


// // Print if postitive
// // If the number is greater than zero, check if your number is even or odd.

// var x = 5;
// if(x > 0)
// {
// else if(x < 0);
// }

// // Print day of the week

// var day = 'Teusday';

// switch(day) 
// {
//     case 'Monday':
//         console.log('Today is the start of the week');
//         break;
//     case 'Teusday':
//         console.log('Today is the second day of the week');
//     case 'Wednesday':
//         console.log('Today is the middle of the week');
// }

// // for Loop Example
// for(let x = 0 ; x < 5; x++)


// while(x < 5)
// {
//     console.log(x);
//     x++;
// }




// Guessing Game
// ask user to guess a number 1 - 10

{
    var userGuess = prompt ('Guess a number 1 - 10');

// computer to get a random value 1 - 10

    let MAX = 10;
    let MIN = 1;
    var computerValue = Math.floor(Math.random() * MAX + 1) + MIN;
console.log(computerValue);

// check if the number guess is correct then print correct
    console.log(typeof(userGuess))
    console.log(typeof(computerValue))

if(userGuess == computerValue) {
    console.log('correct!');
    alert('correct!');
} else {
    console.log('incorrect');
    alert('incorrect');
}

    var playAgain = prompt('do you want to play again? y/n'); 
} while(playAgain === 'y');




