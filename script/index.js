var headers = document.querySelectorAll('.header'); // Select all headers
var scrollButton = document.querySelector('.scroll-icon');
var currentIndex = 0;

function showNextHeader() {
    headers[currentIndex].classList.add('hidden-header'); // Hide the current header

    currentIndex = (currentIndex + 1) % headers.length; // Update the index

    headers[currentIndex].classList.remove('hidden-header'); // Show the next header
}

scrollButton.addEventListener('click', showNextHeader);


