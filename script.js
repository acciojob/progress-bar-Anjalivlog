//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentCircle = 0;

updateButtons();

prevButton.addEventListener('click', () => {
    if (currentCircle > 0) {
        circles[currentCircle].classList.remove('active');
        currentCircle--;
        updateButtons();
    }
});

nextButton.addEventListener('click', () => {
    if (currentCircle < circles.length - 1) {
		currentCircle++;
        circles[currentCircle].classList.add('active');
        updateButtons();
    }
});

function updateButtons() {
    if (currentCircle === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentCircle === circles.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}
