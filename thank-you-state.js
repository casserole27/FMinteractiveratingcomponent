
let rating1 = document.getElementById('1');

let ratings = document.getElementById('selection');

const ratingSelection = () => {
    
    if (rating === 1) {
    ratings.innerHTML = '1';
    }

}

rating1.addEventListener('click', ratingSelection);

