// create variable holds ul that will contain the tabs
let menu = document.getElementById('navbar__list');


// create variable holds all current section
let allSections = document.querySelectorAll('section');

let TAB_ACTIVE_CLASS = "your-active-tab";
let SECTION_ACTIVE_CLASS = "your-active-class";


// add tabs of current sections

/**
 * returns anchor element with href and text content
 * to append inside the new tab
 */
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


/**
 * returns li element and append the anchor inside it
 * to append it inside the menu(ul)

 */
function createTab(i) {
    // create new tab (li)
    let newTab = document.createElement("li");
    // set new tab class
    newTab.className = "menu__link";
    // newTab.id = `section${i}`;

    //append link to new tab
    newTab.appendChild(createAnchor(i));

    return newTab;
}

// get number of current sections
let sectionNumbers = allSections.length;


/**
 * loop in range of sections number
 *  append created tabs to the ul
 *  every current section have corresponding tab
 */
for (let i = 1; i <= sectionNumbers; i++) {
    // append new tab to ul
    menu.appendChild(createTab(i));
}

let menuTabs = Array.from(document.getElementsByClassName("menu__link"));


/**
 * delete your-active-tab class from all tabs
 * then set the class for the tab (e)
 */
function toggleActiveTab(e) {

    menuTabs.forEach((ele) => {
        ele.classList.remove(TAB_ACTIVE_CLASS);
    });
    e.currentTarget.classList.add(TAB_ACTIVE_CLASS);
    e.scrollIntoView();
}

/**
 * pass the clicked tab (e) to toggleActiveTab
 */
function adjustActiveTabByClick(ele) {
    ele.addEventListener("click", toggleActiveTab);
}


menuTabs.forEach(adjustActiveTabByClick);


// set active theme to the visible section when scrolling

function adjustActiveClass() {
    for (let section of allSections) {
        let top = section.getBoundingClientRect().top;
        if (top >= 0) {
            section.classList.add(SECTION_ACTIVE_CLASS);
        } else {
            section.classList.remove(SECTION_ACTIVE_CLASS);
        }
    }
}


window.addEventListener("scroll", adjustActiveClass);

/*what next:
* add some comments
* check scroll other method (s3at bdos wmyt7rksh) Talbha fel rubricK
* check viewPort other method
* complete readme file
* reorganize code if possible
* */
