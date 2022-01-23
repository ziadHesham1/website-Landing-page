// create variable holds ul that will contain the tabs
let menu = document.getElementById('navbar__list');

// create variable holds all current section
let sectionsArray = Array.from(document.querySelectorAll('section'));


let TAB_ACTIVE_CLASS = "your-active-tab";
let SECTION_ACTIVE_CLASS = "your-active-class";
let DATA_ATTRIBUTE = "data-link";


/**
 * create anchor element with href and text content
 * @param {number} i the number of section currently creating
 * @return {HTMLAnchorElement}link
 */
function createAnchor(i) {
    // create anchor as child to li (a)
    let link = document.createElement("a");
    // momkn a8erha w3ml elly felvideo
    // set a href to it's section id
    link.className = "menu__link";

    link.setAttribute(DATA_ATTRIBUTE, `section${i}`);
    // set tab text to section + i
    link.textContent = `Section ${i}`;
    return link;
}


/**
 * create li element and append the anchor inside it
 * @param {number} i the number of section currently creating
 * @return {HTMLLIElement} newTab
 */
function createTab(i) {
    // create new tab (li)
    let newTab = document.createElement("li");
    // set new tab class

    //append link to new tab
    newTab.appendChild(createAnchor(i));

    return newTab;
}

// append created tabs to the ul for each existing section
sectionsArray.forEach((val, i) => menu.appendChild(createTab(i + 1)));

// create variable holds created li elements
let menuTabs = document.querySelectorAll("#navbar__list li");


/*
*this function will take the clicked tab as an argument
* then scroll to this tab corresponding section
**/


/**
 * scroll to clicked tab corresponding section
 * @param clickedTab
 */
function scrollToSection(clickedTab) {
    let TAB_DATA_ATTRIBUTE = clickedTab.firstChild.getAttribute(DATA_ATTRIBUTE);
    let destinationSection = document.getElementById(TAB_DATA_ATTRIBUTE);
    destinationSection.scrollIntoView({behavior: "smooth", block: "start"});
}


/**
 * add TAB_ACTIVE_CLASS to clicked tab class list to have active state
 * @param clickedTab
 */
function toggleActiveTabByClick(clickedTab) {
    menuTabs.forEach((menuTab) => {
        menuTab.classList.remove(TAB_ACTIVE_CLASS);
    });

    clickedTab.classList.add(TAB_ACTIVE_CLASS);

}


/*
* here we loop through all menu tabs to detect when one of them is clicked
* when there is a tab clicked it just pass this tab to toggleActiveTab and scrollToSection functions
* */
menuTabs.forEach(tab => {
    tab.addEventListener("click", (clickedTab) => {
        clickedTab.preventDefault();
        scrollToSection(clickedTab.currentTarget);
        toggleActiveTabByClick(clickedTab.currentTarget);
    });
});


/**
 * add active state for the tab corresponding to the section in the viewport
 * @param activeSection
 */
function toggleActiveTabByScroll(activeSection) {

    let sectionId = activeSection.id;

    menuTabs.forEach((tab) => {
        let TAB_DATA_LINK = tab.firstChild.getAttribute(DATA_ATTRIBUTE);

        if (sectionId === TAB_DATA_LINK) {
            tab.classList.add(TAB_ACTIVE_CLASS);
        } else {
            tab.classList.remove(TAB_ACTIVE_CLASS);
        }
    })
}


/**
 * set active state to the the section in the viewport
 * pass the section in the viewport to toggleActiveTabByScroll function
 * @param entries
 */

function observerAction(entries) {

    entries.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add(SECTION_ACTIVE_CLASS);
            toggleActiveTabByScroll(item.target);
        } else {
            item.target.classList.remove(SECTION_ACTIVE_CLASS);
        }
    })
}

const observer = new IntersectionObserver(observerAction, {threshold: .5});

sectionsArray.forEach(item => observer.observe(item));


//trying something
let newIcon = document.querySelector('.toggle-menu');
let myass = document.querySelector('.navbar__menu ul');
let myassli = document.querySelectorAll('.navbar__menu ul li');

function toggleVisibility(x) {

    if (x.style.display === "none") {

        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
}

/*body.onclick = function (){
    
    toggleVisibility(menu)
}*/
newIcon.onclick = function () {
    console.log(`yes click me`);
    toggleVisibility(menu)
}


//------------------------------------------------------------


/*what next:
* try using data-nav to add <a> text 
* edit menu style for small screens (check udacity tips)
* try scroll to top button
* add some comments
* complete readme file
* reorganize code if possible
* try active tab when scrolling(done)
* check viewPort other method(done)
* check scroll other method (s3at bdos wmyt7rksh) Talbha fel rubricK (done)
* */

/*
* ERRORS
* there is an error when loading page in the console
* another one appear when tried in edge
* */