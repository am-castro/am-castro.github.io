function menu() {
    const menu = document.getElementById("menuMobile");
    menu.classList.toggle('show');
    menu.classList.toggle('showRightToLeft');
    menu.classList.toggle('hideRightToLeft');
}

function translate(lang) {
    console.log("lang")
    window.location.href = window.origin + langPath(lang);
}

function langPath(lang) {
    return lang === "pt" ? "../index.html" : `/${lang}/index.html`;
}
function showText(textToShow) {
    console.log('miau')
    const text = document.getElementById(textToShow);
    // text.classList.toggle('show');
    text.classList.toggle('hide');
}
// $(document).ready(function () {
//     const toolbar = document.getElementById("toolbar");
//     window.onscroll = function () {
//         if (window.scrollY > 48) {
//             toolbar.style.position = "fixed";
//             toolbar.style.backgroundColor = "white";
//         } else {
//             toolbar.style.position = "relative";
//             toolbar.style.backgroundColor = "transparent";
//         }
//     }
// });