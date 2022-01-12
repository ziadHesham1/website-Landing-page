// create variable holds ul that will contain the tabs
let menu = document.getElementById('navbar__list');


// create variable holds all current section
let allSections = document.querySelectorAll('section');

// add tabs of current sections

// returns anchor element with href and text content
// to append inside the new tab
function createAnchor(i) {
    // create anchor as child to li (a)
    let link = document.createElement("a");
    // momkn a8erha w3ml elly felvideo
    // set a href to it's section id
    link.href = `#section${i}`;
    // set tab text to section + i
    link.textContent = `Section ${i}`;
    return link;
}

// returns li element and append the anchor inside it
// to append it inside the menu(ul)
function createTab(i) {
    // create new tab (li)
    let newTab = document.createElement("li");
    // set new tab class
    newTab.className = "menu__link";

    //append link to new tab
    newTab.appendChild(createAnchor(i));

    return newTab;
}

// get number of current sections
let sectionNumbers = allSections.length;

// loop in range of sections number
// append created tabs to the ul 
// every current section have corresponding tab
for (let i = 1; i <= sectionNumbers; i++) {
    // append new tab to ul
    menu.appendChild(createTab(i));
}

let menuTabs = Array.from(document.getElementsByClassName("menu__link"));


function adjustActiveTab(ele) {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        menuTabs.forEach((ele) => {
            ele.classList.remove("your-active-tab");
        });
        console.log(e.currentTarget.classList);
        e.currentTarget.classList.add("your-active-tab");
    });
}


menuTabs.forEach(adjustActiveTab);


// set active theme to the visible section when scrolling

function adjustActiveClass() {
    for (let section of allSections) {
        let top = section.getBoundingClientRect().top;
        if (top >= 0) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
}

window.addEventListener("scroll", adjustActiveClass);

/*what next:
* add some comments
* check scroll other method
* complete readme file
* */
