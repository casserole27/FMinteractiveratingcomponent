/*
Frontend Mentor
Interactive Rating Component
C Lewis
clewisdev.com
October 2022
*/

//****** 17 LINES OF CODE */

// Rating state button
let button = document.getElementById('submit-btn');
// Rating and Thank you states
let ratingPage = document.getElementById('rating-state');
let thankPage = document.getElementById('thank-state');

//Function that hides rating-state and shows thank-you state
//Stores all HTML elements with an input tag into variable input
//Iterate over the inputs
//IF a radio input is checked, display that input's value as an 
//innerHTML inside a span 
// This reiterates the user's selection as: "You selected VALUE our of 5"
const inputValue = () => {
    ratingPage.style.display = 'none';
    thankPage.style.display = 'block';
    let input = document.querySelectorAll('input');

    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            document.getElementById('user-rating').innerHTML = 
            input[i].value;
        }
    }};

//When the submit button is clicked, run the inputValue function
button.addEventListener('click', inputValue);


//! Grace's notes
//! https://developer.mozilla.org/en-US/docs/Web/API/FormData