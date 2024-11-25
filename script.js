
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.dot');
    let currentSlide = 0;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-slide'));
            updateSlides();
        });
    });

    updateSlides();
});
