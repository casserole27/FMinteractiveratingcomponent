/*
Frontend Mentor
Interactive Rating Component
C Lewis
clewisdev.com
October 2022
*/

// Store 1 - 5 numbers in variables
let selectionColor1 = document.getElementById('1');
let selectionColor2 = document.getElementById('2');
let selectionColor3 = document.getElementById('3');
let selectionColor4 = document.getElementById('4');
let selectionColor5 = document.getElementById('5');

// Store 1 - 5 numbers in a variable
// let number = document.getElementById('number')
//! Can I do this with a .forEach()?

// Rating state button
let button = document.getElementById('rating-button');

// Thank you card user number selection
let rating = document.getElementById('user-rating');

// Rating and Thank you states
let ratingPage = document.getElementById('rating-state');
let thankPage = document.getElementById('thank-state');

// function to display thank you state instead of rating state
const showState =  () => {
    ratingPage.style.display = 'none';
    thankPage.style.display = 'block';
} 

// Based on the "selection color" variables,
// each function changes the style of the each number's border, color of the font,
// and the HTML of the rating to the selected number

//! I am certain there is an easier way to do this that isn't as long and clunky.
//! But it works! I wrote JS in combo with HTML and CSS that works!!!!!!!
//! .forEach()?

const changeSelectionColor1 = () => {
    
    selectionColor1.style.backgroundColor = '#959eac';
    selectionColor1.style.border = 'solid 1rem #959eac';
    selectionColor1.style.color = '#ffffff';
    rating.innerHTML = '1';
}

const changeSelectionColor2 = () => {
    
    selectionColor2.style.backgroundColor = '#959eac';
    selectionColor2.style.border = 'solid 1rem #959eac';
    selectionColor2.style.color = '#ffffff';
    rating.innerHTML = '2';

}

const changeSelectionColor3 = () => {
    
    selectionColor3.style.backgroundColor = '#959eac';
    selectionColor3.style.border = 'solid 1rem #959eac';
    selectionColor3.style.color = '#ffffff';
    rating.innerHTML = '3';

}

const changeSelectionColor4 = () => {
    
    selectionColor4.style.backgroundColor = '#959eac';
    selectionColor4.style.border = 'solid 1rem #959eac';
    selectionColor4.style.color = '#ffffff';
    rating.innerHTML = '4';

}

const changeSelectionColor5 = () => {
    
    selectionColor5.style.backgroundColor = '#959eac';
    selectionColor5.style.border = 'solid 1rem #959eac';
    selectionColor5.style.color = '#ffffff';
    rating.innerHTML = '5';

}


// Clicking the button on the rating state
// Results in hiding the rating state and showing the thank you state
button.addEventListener('click', showState)

// These will run the appropriate function based on which number 
// is selected and clicked
selectionColor1.addEventListener('click', changeSelectionColor1);
selectionColor2.addEventListener('click', changeSelectionColor2);
selectionColor3.addEventListener('click', changeSelectionColor3);
selectionColor4.addEventListener('click', changeSelectionColor4);
selectionColor5.addEventListener('click', changeSelectionColor5);






