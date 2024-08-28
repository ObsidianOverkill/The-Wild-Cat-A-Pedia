document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.hero-item');
    let currentIndex = 0;

    function showNextSlide() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});