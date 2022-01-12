
let allSections = document.querySelectorAll('section');


window.addEventListener("scroll", function () {
    for (let section of allSections) {
        let top = section.getBoundingClientRect().top;
        if (top >= 0) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }

});
