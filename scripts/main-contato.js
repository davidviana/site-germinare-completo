const iframes = document.querySelectorAll('iframe');

function themeDark() {
    for (i = 0; i < iframes.length; i++) {
    iframes[i].classList.add('is-dark');
    }
}