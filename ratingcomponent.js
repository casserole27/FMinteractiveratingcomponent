
let button = document.getElementById('rating-button');

let selectionColor1 = document.getElementById('1');
let selectionColor2 = document.getElementById('2');
let selectionColor3 = document.getElementById('3');
let selectionColor4 = document.getElementById('4');
let selectionColor5 = document.getElementById('5');



const changeSelectionColor1 = () => {
    
    selectionColor1.style.backgroundColor = '#959eac';
    selectionColor1.style.border = 'solid 1rem #959eac';
    selectionColor1.style.color = '#ffffff';
}

const changeSelectionColor2 = () => {
    
    selectionColor2.style.backgroundColor = '#959eac';
    selectionColor2.style.border = 'solid 1rem #959eac';
    selectionColor2.style.color = '#ffffff';
}

const changeSelectionColor3 = () => {
    
    selectionColor3.style.backgroundColor = '#959eac';
    selectionColor3.style.border = 'solid 1rem #959eac';
    selectionColor3.style.color = '#ffffff';
}

const changeSelectionColor4 = () => {
    
    selectionColor4.style.backgroundColor = '#959eac';
    selectionColor4.style.border = 'solid 1rem #959eac';
    selectionColor4.style.color = '#ffffff';
}

const changeSelectionColor5 = () => {
    
    selectionColor5.style.backgroundColor = '#959eac';
    selectionColor5.style.border = 'solid 1rem #959eac';
    selectionColor5.style.color = '#ffffff';
}



selectionColor1.addEventListener('click', changeSelectionColor1);
selectionColor2.addEventListener('click', changeSelectionColor2);
selectionColor3.addEventListener('click', changeSelectionColor3);
selectionColor4.addEventListener('click', changeSelectionColor4);
selectionColor5.addEventListener('click', changeSelectionColor5);



let ratings = document.getElementById('selection');

const ratingSelection = () => {
    
    if (selectionColor1) {
    ratings.innerHTML = '1';
    }

}

