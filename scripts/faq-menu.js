// НЕ ЛЕЗЬ, УБЬЕТ

document.querySelectorAll('.faq__question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq__answer');
        const allFaqItems = document.querySelectorAll('.faq__item');

        allFaqItems.forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq__answer').style.maxHeight = '0';
            }
        });

        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active');
            answer.style.maxHeight = '0';
        } else {
            faqItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});