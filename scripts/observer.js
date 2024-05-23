// НЕ ЛЕЗЬ, УБЬЕТ
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;

        elements.forEach(el => {
            if (el.classList.contains('visible')) {
                const currentTransform = getComputedStyle(el).transform;
                const matrixValues = currentTransform !== 'none' ? currentTransform.match(/matrix.*\((.+)\)/)[1].split(', ') : [1, 0, 0, 1, 0, 0];
                const translateY = parseFloat(matrixValues[5]) || 0;

                if (delta > 0) {
                    el.style.transform = `translateY(${translateY - 4}px)`;
                } else {
                    el.style.transform = `translateY(${translateY + 4}px)`;
                }
            }
        });

        lastScrollY = currentScrollY;
    });
});