// create variable holds ul that will contain the tabs
let menu = document.getElementById('navbar__list');

// create variable holds all current section
let allSections = Array.from(document.querySelectorAll('section'));


let TAB_ACTIVE_CLASS = 'your-active-tab';
let SECTION_ACTIVE_CLASS = 'your-active-class';
let DATA_ATTRIBUTE = 'data-link';


// add tabs of current sections
//------------------------------


/**
 * returns anchor element with href and text content
 * to append inside the new tab
 */
function createAnchor(i) {
    // create anchor as child to li (a)
    let link = document.createElement('a');
    // momkn a8erha w3ml elly felvideo
    // set a href to it's section id
    link.setAttribute(DATA_ATTRIBUTE, `section${i}`);
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
    let newTab = document.createElement('li');
    // set new tab class
    newTab.className = 'menu__link';

    //append link to new tab
    newTab.appendChild(createAnchor(i));

    return newTab;
}

/**
 * loop in range of sections number
 *  append created tabs to the ul
 *  every current section have corresponding tab
 */
for (let i = 1; i <= allSections.length; i++) {
    // append new tab to ul
    menu.appendChild(createTab(i));
}
//===================================================================================

//declare variables
let menuTabs = Array.from(document.querySelectorAll('.menu__link'));

// let menuTabLinks = Array.from(document.querySelectorAll('.menu__link a'));
//=================================================

/*
* Now we need to click one of the menu tabs and it takes me to its corresponding section
* and change clicked tab style to active mode
* */


/*
*this function will take the clicked tab as an argument
* then scroll to this tab corresponding section
**/
function scrollToSection(clickedTab) {
    let TAB_DATA_ATTRIBUTE = clickedTab.firstChild.getAttribute(DATA_ATTRIBUTE);
    let destinationSection = document.getElementById(TAB_DATA_ATTRIBUTE);
    destinationSection.scrollIntoView({behavior: 'smooth', block: 'start'});

}

/*
*this function will take the clicked tab as an argument
* then adds TAB_ACTIVE_CLASS to its class list to have active style 
**/

function toggleActiveTabByClick(clickedTab) {
    menuTabs.forEach((menuTab) => {
        menuTab.classList.remove(TAB_ACTIVE_CLASS);
    });
    console.log(clickedTab);

    clickedTab.classList.add(TAB_ACTIVE_CLASS);

}


/*
* here we loop through all menu tabs to detect when one of them is clicked
* when there is a tab clicked it just pass this tab to toggleActiveTab and scrollToSection functions
* */
menuTabs.forEach(tab => {
    tab.addEventListener('click', (clickedTab) => {
        clickedTab.preventDefault();
        scrollToSection(clickedTab.currentTarget);
        toggleActiveTabByClick(clickedTab.currentTarget);
    });
});


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


// set active theme to the visible section when scrolling
// and when one of the sections is visible on screen it should change its style to active mode
function adjustActiveClass(elementsList) {
    const options = {
        threshold: .5
    };
    const observer = new
    IntersectionObserver(
        function (entries
            , observer) {

            entries.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add(SECTION_ACTIVE_CLASS);
                    toggleActiveTabByScroll(item.target);
                } else {
                    item.target.classList.remove(SECTION_ACTIVE_CLASS);
                }
            })
        }, options);

    elementsList.forEach((item) => {
        observer.observe(item)
    });
}

adjustActiveClass(allSections);

//=================================================

//functions calling


