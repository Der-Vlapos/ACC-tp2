// НЕ ЛЕЗЬ, УБЬЕТ
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');

    langBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (langMenu.classList.contains('visible')) {
            langMenu.classList.remove('visible');
        } else {
            langMenu.classList.add('visible');
        }
    });

    document.addEventListener('click', function(event) {
        const isClickInside = langBtn.contains(event.target) || langMenu.contains(event.target);
        if (!isClickInside) {
            langMenu.classList.remove('visible');
        }
    });

    const langButtons = document.querySelectorAll('.hero__lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            if (!this.classList.contains('active')) {
                changeLanguage(this.getAttribute('data-lang'));
            }
        });
    });

    const currentLang = getCurrentLanguage();
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === currentLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
});

function changeLanguage(lang) {
    let currentPath = window.location.pathname;
    let newPath = "";

    const langFolders = ['eng', 'rus', 'kaz'];
    const pathSegments = currentPath.split('/');

    if (langFolders.includes(pathSegments[1])) {
        pathSegments.splice(1, 1);
    }

    pathSegments.splice(1, 0, lang);

    newPath = pathSegments.join('/');

    window.location.pathname = newPath;
}

function getCurrentLanguage() {
    const langFolders = ['eng', 'rus', 'kaz'];
    const pathSegments = window.location.pathname.split('/');
    return langFolders.includes(pathSegments[1]) ? pathSegments[1] : 'eng';
}