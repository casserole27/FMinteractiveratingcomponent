let rating = document.getElementById('subtitle-selection');

let submit = document.getElementById('rating-button');

const showRating = () => {
    rating.innerHTML = 'You selected 1 out of 5';
}


submit.addEventListener('click', showRating);