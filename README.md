# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/ratingcomponent1.png)
![](./images/ratingcomponent2.png)
![](./images/ratingcomponent3.png)


### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/interactive-rating-component-using-vanilla-javascript-jFheMewTA1)
- Live Site URL: [live site URL](https://www.clewisdev.com/FMinteractiveratingcomponent/)

## My process

Setup basic HTML file 
- insert my personal comment credit
- <head> tag includes stylesheet/link and fonts, double check for meta viewport tag
- initial semantic, accessible markup: placing main, heading and paragraph tags
 - commit and push
Setup basic CSS file
- insert my personal comment credit
- copy style guide into file as comments
- decide on mobile or desktop-first design based on design file examples
- create *, root, and body selectors: margin/padding to 0, setup for variables, add font-family
- decide on which variables to use
- commit and push
Consult Figma design files
 - adjust text properties: size, line height, color
 - insert images and color properties
 - decide on layout tools and markup accordingly
 - add effects: borders, box shadows, etc
 - commit and push after each major change
Add JavaScript file
 - add a script file for site interactivity
 - define variables of elements to pull from the DOM
 - create functions for specified interactivity
Check markup and accessibility
(https://validator.w3.org/)
(https://wave.webaim.org/)
 - make adjustments as necessary
 - commit and push
 - live URL


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- vanilla JavaScript

### What I learned

This is my second project using the Figma files. Still focusing on precision and responsiveness using the least amount of code.

I learned about: 
```css
* {
  box-sizing: border-box;
}
```
so that the padding styling does not interfere with the sizing I am trying to achieve.

Pseudo-classes specify special states of selected elements and are designated with one colon.
Pseudo-elements allow you to style part of the element and are designated with two colons.

In this case ::before creates a pseudo-element that is the first child of the selected element, and is used to make the custom radio button.
:hover changes the color of the element when the mouse hovers over it
:checked changes the color of the selected radio input

```css
[type="radio"]:hover + label::before {
    background-color: var(--primary-orange);
}

[type="radio"]:checked + label::before {
    background: var(--neutral-light-grey);
    
}
```

Code that I'm proud of:
Using iteration/loops in a for real document to iterate over the radio inputs.

```js
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
```

Finally, after running markup and accessibility checkups, I made my own tweaks to the design. The provided colors did not give a proper contrast ratio for accessibility, so I changed the primary orange color to a slightly darker orange.

### Continued development

For CSS I'm still very stuck on min(), max(), min-width, and max-width. I feel like if I could solidify this knowledge, I would achieve the responsiveness I am looking for. However, it doesn't seem to achieve what I am expecting it to do.

### SEE UPDATE BELOW ON JS / PROJECT UPDATE
I'm leaving this info here for learning purposes.

MY JAVASCRIPT IS SO VERY CLUNKY, but it works. I am absolutely certain there is an easier way to achieve the interactivity of this component. I would like to continue to go through the JS with some of the ideas I have notated in the file, and I would like to ask some other more skilled developers what they would do.

I have a variable and a function for the 1-5 numbers, what is the easier way?

```js
// Store 1 - 5 numbers in variables
let selectionColor1 = document.getElementById('1');
let selectionColor2 = document.getElementById('2');
let selectionColor3 = document.getElementById('3');
let selectionColor4 = document.getElementById('4');
let selectionColor5 = document.getElementById('5');

// Store 1 - 5 numbers in a variable
// let number = document.getElementById('number')
//! Can I do this with a .forEach()?
```

### JAVASCRIPT AND OVERALL PROJECT UPDATE

HTML - changed to a form
Interactive pages must be codes with interactive elements, not divs or spans.

CSS - button colors and styles change here with pseudo-classes/elements instead of JS.

JAVASCRIPT - I learned how to iterate over the inputs in order select the value of a checked radio box. I went from 60 lines of code to 17.

I put my incorrect HTML and clunky JS in "spaghetti" files for later learning reference.


### Useful resources

 - CSS padding affecting width: [Stack Overflow](https://stackoverflow.com/questions/779434/how-do-i-prevent-the-padding-property-from-changing-width-or-height-in-css)

 - CSS box-sizing: [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

 - Pure CSS Custom Radio Buttons Tutorial: [YouTube](https://www.youtube.com/watch?v=BT7FZooiqWw)

- Styling forms just got easier with accent-color: [YouTube](https://www.youtube.com/watch?v=MRahw3qnRBQ)

- Before and After pseudo elements explained - part one: how they work: [YouTube](https://www.youtube.com/watch?v=zGiirUiWslI)

- CSS Before and After pseudo elements explained - part two: the content property: [YouTube](https://www.youtube.com/watch?v=xoRbkm8XgfQ)

- Pseudo-elements [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

- Pseudo-classes [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

- Position [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- Document.querySelectorAll() [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

- How to get value of selected radio button using JavaScript? [Geeksforgeeks](https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/)


 For later reference:
 
 - [MDN web docs min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
 - [MDN web docs max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
 - [MDN web docs min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)
 - [MDN web docs max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max)

For review:
 - CSS box model: [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) 

## Author

- Website - [C Lewis](https://www.clewisdev.com)
- Frontend Mentor - [@casserole27](https://www.frontendmentor.io/profile/casserole27)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)

## Acknowledgments
Frontend Mentor @grace-snow: she told me about the HTML form and the CSS styling. "Keep the concerns separate" 

