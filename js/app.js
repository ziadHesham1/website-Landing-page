// create variable holds ul that will contain the tabs
let menu = document.getElementById('navbar__list');


// create variable holds all current section
let allSections = document.querySelectorAll('section');

let TAB_ACTIVE_CLASS = "your-active-tab";
let SECTION_ACTIVE_CLASS = "your-active-class";


// add tabs of current sections
//------------------------------


/**
 * returns anchor element with href and text content
 * to append inside the new tab
 */
function createAnchor(i) {
    // create anchor as child to li (a)
    let link = document.createElement("a");
    // momkn a8erha w3ml elly felvideo
    // set a href to it's section id
    link.setAttribute("data-link", `section${i}`);
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
//===================================================================================

//declare variables
let menuTabs = Array.from(document.getElementsByClassName("menu__link"));

let menuTabLinks = Array.from(document.querySelectorAll(".menu__link a"));
//=================================================

//functions definition

/**
 * this function takes list of links as an argument
 *scrolls to the element with id equal value of data-link attribute
 * @param links
 */
function scrollToElement(links) {
    links.forEach((link) => {
        link.addEventListener("click", function () {
            let middleText = document.getElementById(link.getAttribute("data-link"));
            middleText.scrollIntoView({behavior: "smooth", block: "start"});
        });
    });
}

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

// set active theme to the visible section when scrolling

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

                    // console.log(`${item.target.textContent} is Intersecting now`);
                    item.target.classList.add(SECTION_ACTIVE_CLASS);
                    getSectionTab(item.target.id);
                    // console.log(itsTab);

                } else {
                    // console.log(`${item.target.textContent} is not Intersecting now`);
                    item.target.classList.remove(SECTION_ACTIVE_CLASS);
                }

            })
        }, options);


    elementsList.forEach((item) => {
        observer.observe(item)
    });
}
//=================================================

//functions calling
scrollToElement(menuTabLinks);

menuTabs.forEach(adjustActiveTabByClick);

adjustActiveClass(allSections);

/*what next:
* add some comments
* complete readme file
* reorganize code if possible
* check viewPort other method(done)
* check scroll other method (s3at bdos wmyt7rksh) Talbha fel rubricK (done)
* */
