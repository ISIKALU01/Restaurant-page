/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const contact = document.createElement('div')
    const contactCon = document.createElement('div')
    contact.classList.add('contact')
    contactCon.classList.add('contactCon')
    

    contactCon.appendChild(createContactInfo(
      "Location",
      "No 12, Adeola Odeku Street",
      "Victoria Island, Lagos Nigeria"
    ))

    contactCon.appendChild(createContactInfo(
      "Hours",
      "Mon - Thur, 8 am - 10 pm",
      "Fri - Sun,  8 am - 11 pm"
    ))
  
     contactCon.appendChild(createContactInfo(
      "Contact",
      "081-2667-1564",
      "spagcontinental@gmail.com"
    ))

  
    contact.appendChild(contactCon)

    return contact
  }

  function createContactInfo(header, lineOne, lineTwo) {
    const contactInfo = document.createElement('div')
    const title = document.createElement("h1")
    const content1 = document.createElement("p")
    const content2 = document.createElement("p")

    contactInfo.classList.add("content")

    title.textContent = header
    content1.textContent = lineOne
    content2.textContent = lineTwo

    contactInfo.appendChild(title)
    contactInfo.appendChild(content1)
    contactInfo.appendChild(content2)

    return contactInfo

  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(createParagraph("Spaghetti Continental"));
  home.appendChild(createParagraph("Here at spaghetti continental, we give you delicious spaghetti and more...."));
  home.appendChild(createButton("Our Menu"))
  return home;
}
  
function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}


function createButton(text){
  const buttons = document.querySelectorAll(".button-nav")
  const button = document.createElement("button")
  button.textContent = text;
  button.classList.add('btn')
  button.addEventListener("click", ()=>{
    buttons.forEach((button) =>{
      if(button !== this){
        button.classList.remove("active");
      }
    })
    const btntwo = document.querySelector(".two")
    btntwo.classList.add("active")
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])()
  })
  return button;
}
  
function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");


function createMenu(){
    const menu = document.createElement("div")
    menu.classList.add("menu")
   
    menu.appendChild(
        createMenuInfo(
          "Spaghetti Bolognaise",
          "Olive oil, Pancetta, Tomato, Ground Beef, Garlic, Ground Pork, Butter, Pepper",
          "$20"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Ravioli",
          "Tomato sauce, Olive oil, Ground Beef, Garlic, Parmesan, Ricotta, Mozzarella, Italian parsely",
          "$35"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Seafood Pasta",
          "Tomato sauce, Olive oil, Ground Beef, Garlic, Parmesan, Ricotta, Mozzarella, Italian parsely",
          "$15"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Spaghetti alle Vongole",
          "Tomato sauce, Olive oil, Ground Beef, Garlic, Parmesan, Ricotta, Mozzarella, Italian parsely",
          "$65"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Pasta alla Norma",
          "Tomato sauce, Olive oil, Ground Beef, Garlic, Parmesan, Ricotta, Mozzarella, Italian parsely",
          "$51"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Pasta Carbonara",
          "Tomato sauce, Olive oil, Ground Beef, Garlic, Parmesan, Ricotta, Mozzarella, Italian parsely",
          "$52"
        )
      );

    return menu
}


function createMenuInfo(type, aboutType, price){
    const menuInfo = document.createElement("div")
    const imgCon = document.createElement("div")
    imgCon.classList.add("img-con")
    menuInfo.classList.add("menu-info")

    const spagName = document.createElement("h2");
    spagName.textContent = type;
  
    const spagInfo = document.createElement("p");
    spagInfo.textContent = aboutType;
  
    const spagImage = document.createElement("img");
    spagImage.src = `assets/${type}.jpg`;
    spagImage.alt = `${type}`;

    const spagPrice = document.createElement("span");
    spagPrice.textContent = price

    
    imgCon.appendChild(spagImage);
    menuInfo.appendChild(imgCon)
    menuInfo.appendChild(spagName);
    menuInfo.appendChild(spagInfo);
    menuInfo.appendChild(spagPrice)
  
    return menuInfo;
}

function createButton(text){
  const buttons = document.querySelectorAll(".button-nav")
  const button = document.createElement("button")
  button.textContent = text;
  button.classList.add('btn')
  button.addEventListener("click", ()=>{
    buttons.forEach((button) =>{
      if(button !== this){
        button.classList.remove("active");
      }
    })
    const btn3 = document.querySelector(".three")
    btn3.classList.add("active")
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_0__["default"])()
  })
  return button;
}

function createMenuHeader(text){
  const menuTitle = document.createElement("p");
  menuTitle.textContent = text;
  menuTitle.classList.add("menutitle");
  return menuTitle;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuHeader("la nostra diversita"))
    main.appendChild(createMenu());
    main.appendChild(createButton("Order yours"))
  }
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const resname = document.createElement("h1");
  resname.classList.add("resname");
  resname.textContent = "SpagContinental";

  header.appendChild(resname);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const mobileHeader = document.createElement("div")
  const mobileButton = document.createElement("div")
  const dropDownIcon = document.createElement("img")

  mobileHeader.classList.add("mobile-header")
  mobileHeader.appendChild(mobileButton)

  mobileButton.classList.add("dropDown")
  mobileButton.appendChild(dropDownIcon)
  dropDownIcon.src = "assets/dropdown.png"
  dropDownIcon.alt = "dropdown"
 
  mobileButton.addEventListener("click", ()=>{
    if(ul.classList.contains("active")){
      ul.classList.remove("active")
      mobileButton.classList.remove("active")
    }else{
      ul.classList.add("active")
      mobileButton.classList.add("active")
    }
  })

  const nav = document.createElement("nav");
  const ul = document.createElement("ul")
  nav.classList.add('menubar')
  ul.classList.add('list')

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
    activateButton(homeButton);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.classList.add("two")
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(menuButton);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
 

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.classList.add("three")
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(contactButton);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  })
  

 
  ul.appendChild(homeButton);
  ul.appendChild(menuButton);
  ul.appendChild(contactButton);
  
  nav.appendChild(mobileHeader)
  nav.appendChild(ul)

  return nav;
}



function activateButton(button) {
  const buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}



function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} ISIKALU01`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ISIKALU01";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function setWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  activateButton(document.querySelector(".button-nav"))
  ;(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setWebsite);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


(0,_webpage__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDekRhOzs7O0FBSTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQzVDYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLHVCQUF1QixLQUFLOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSE87QUFDQTtBQUNNOzs7O0FBSXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLDBCQUEwQjs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVjs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUM5STFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLG9EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY29udGFjdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcbiAgICBjb250YWN0Q29uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb24nKVxuICAgIFxuXG4gICAgY29udGFjdENvbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SW5mbyhcbiAgICAgIFwiTG9jYXRpb25cIixcbiAgICAgIFwiTm8gMTIsIEFkZW9sYSBPZGVrdSBTdHJlZXRcIixcbiAgICAgIFwiVmljdG9yaWEgSXNsYW5kLCBMYWdvcyBOaWdlcmlhXCJcbiAgICApKVxuXG4gICAgY29udGFjdENvbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SW5mbyhcbiAgICAgIFwiSG91cnNcIixcbiAgICAgIFwiTW9uIC0gVGh1ciwgOCBhbSAtIDEwIHBtXCIsXG4gICAgICBcIkZyaSAtIFN1biwgIDggYW0gLSAxMSBwbVwiXG4gICAgKSlcbiAgXG4gICAgIGNvbnRhY3RDb24uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEluZm8oXG4gICAgICBcIkNvbnRhY3RcIixcbiAgICAgIFwiMDgxLTI2NjctMTU2NFwiLFxuICAgICAgXCJzcGFnY29udGluZW50YWxAZ21haWwuY29tXCJcbiAgICApKVxuXG4gIFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdENvbilcblxuICAgIHJldHVybiBjb250YWN0XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb250YWN0SW5mbyhoZWFkZXIsIGxpbmVPbmUsIGxpbmVUd28pIHtcbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBjb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIilcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaGVhZGVyXG4gICAgY29udGVudDEudGV4dENvbnRlbnQgPSBsaW5lT25lXG4gICAgY29udGVudDIudGV4dENvbnRlbnQgPSBsaW5lVHdvXG5cbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250ZW50MSlcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250ZW50MilcblxuICAgIHJldHVybiBjb250YWN0SW5mb1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0IiwiaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIlNwYWdoZXR0aSBDb250aW5lbnRhbFwiKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiSGVyZSBhdCBzcGFnaGV0dGkgY29udGluZW50YWwsIHdlIGdpdmUgeW91IGRlbGljaW91cyBzcGFnaGV0dGkgYW5kIG1vcmUuLi4uXCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJPdXIgTWVudVwiKSlcbiAgcmV0dXJuIGhvbWU7XG59XG4gIFxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpe1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tbmF2XCIpXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT57XG4gICAgICBpZihidXR0b24gIT09IHRoaXMpe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGJ0bnR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdvXCIpXG4gICAgYnRudHdvLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBsb2FkTWVudSgpXG4gIH0pXG4gIHJldHVybiBidXR0b247XG59XG4gIFxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxuICAgXG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUluZm8oXG4gICAgICAgICAgXCJTcGFnaGV0dGkgQm9sb2duYWlzZVwiLFxuICAgICAgICAgIFwiT2xpdmUgb2lsLCBQYW5jZXR0YSwgVG9tYXRvLCBHcm91bmQgQmVlZiwgR2FybGljLCBHcm91bmQgUG9yaywgQnV0dGVyLCBQZXBwZXJcIixcbiAgICAgICAgICBcIiQyMFwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUluZm8oXG4gICAgICAgICAgXCJSYXZpb2xpXCIsXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsIE9saXZlIG9pbCwgR3JvdW5kIEJlZWYsIEdhcmxpYywgUGFybWVzYW4sIFJpY290dGEsIE1venphcmVsbGEsIEl0YWxpYW4gcGFyc2VseVwiLFxuICAgICAgICAgIFwiJDM1XCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SW5mbyhcbiAgICAgICAgICBcIlNlYWZvb2QgUGFzdGFcIixcbiAgICAgICAgICBcIlRvbWF0byBzYXVjZSwgT2xpdmUgb2lsLCBHcm91bmQgQmVlZiwgR2FybGljLCBQYXJtZXNhbiwgUmljb3R0YSwgTW96emFyZWxsYSwgSXRhbGlhbiBwYXJzZWx5XCIsXG4gICAgICAgICAgXCIkMTVcIlxuICAgICAgICApXG4gICAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJbmZvKFxuICAgICAgICAgIFwiU3BhZ2hldHRpIGFsbGUgVm9uZ29sZVwiLFxuICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBPbGl2ZSBvaWwsIEdyb3VuZCBCZWVmLCBHYXJsaWMsIFBhcm1lc2FuLCBSaWNvdHRhLCBNb3p6YXJlbGxhLCBJdGFsaWFuIHBhcnNlbHlcIixcbiAgICAgICAgICBcIiQ2NVwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUluZm8oXG4gICAgICAgICAgXCJQYXN0YSBhbGxhIE5vcm1hXCIsXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsIE9saXZlIG9pbCwgR3JvdW5kIEJlZWYsIEdhcmxpYywgUGFybWVzYW4sIFJpY290dGEsIE1venphcmVsbGEsIEl0YWxpYW4gcGFyc2VseVwiLFxuICAgICAgICAgIFwiJDUxXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SW5mbyhcbiAgICAgICAgICBcIlBhc3RhIENhcmJvbmFyYVwiLFxuICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBPbGl2ZSBvaWwsIEdyb3VuZCBCZWVmLCBHYXJsaWMsIFBhcm1lc2FuLCBSaWNvdHRhLCBNb3p6YXJlbGxhLCBJdGFsaWFuIHBhcnNlbHlcIixcbiAgICAgICAgICBcIiQ1MlwiXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICByZXR1cm4gbWVudVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJbmZvKHR5cGUsIGFib3V0VHlwZSwgcHJpY2Upe1xuICAgIGNvbnN0IG1lbnVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGltZ0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbWdDb24uY2xhc3NMaXN0LmFkZChcImltZy1jb25cIilcbiAgICBtZW51SW5mby5jbGFzc0xpc3QuYWRkKFwibWVudS1pbmZvXCIpXG5cbiAgICBjb25zdCBzcGFnTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBzcGFnTmFtZS50ZXh0Q29udGVudCA9IHR5cGU7XG4gIFxuICAgIGNvbnN0IHNwYWdJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc3BhZ0luZm8udGV4dENvbnRlbnQgPSBhYm91dFR5cGU7XG4gIFxuICAgIGNvbnN0IHNwYWdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc3BhZ0ltYWdlLnNyYyA9IGBhc3NldHMvJHt0eXBlfS5qcGdgO1xuICAgIHNwYWdJbWFnZS5hbHQgPSBgJHt0eXBlfWA7XG5cbiAgICBjb25zdCBzcGFnUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFnUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZVxuXG4gICAgXG4gICAgaW1nQ29uLmFwcGVuZENoaWxkKHNwYWdJbWFnZSk7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQoaW1nQ29uKVxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHNwYWdOYW1lKTtcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChzcGFnSW5mbyk7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQoc3BhZ1ByaWNlKVxuICBcbiAgICByZXR1cm4gbWVudUluZm87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0KXtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLW5hdlwiKVxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+e1xuICAgICAgaWYoYnV0dG9uICE9PSB0aGlzKXtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBidG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aHJlZVwiKVxuICAgIGJ0bjMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGxvYWRDb250YWN0KClcbiAgfSlcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUhlYWRlcih0ZXh0KXtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudXRpdGxlXCIpO1xuICByZXR1cm4gbWVudVRpdGxlO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUhlYWRlcihcImxhIG5vc3RyYSBkaXZlcnNpdGFcIikpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwiT3JkZXIgeW91cnNcIikpXG4gIH1cbiAgXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHJlc25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHJlc25hbWUuY2xhc3NMaXN0LmFkZChcInJlc25hbWVcIik7XG4gIHJlc25hbWUudGV4dENvbnRlbnQgPSBcIlNwYWdDb250aW5lbnRhbFwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChyZXNuYW1lKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG1vYmlsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3QgbW9iaWxlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBkcm9wRG93bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG5cbiAgbW9iaWxlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtaGVhZGVyXCIpXG4gIG1vYmlsZUhlYWRlci5hcHBlbmRDaGlsZChtb2JpbGVCdXR0b24pXG5cbiAgbW9iaWxlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkcm9wRG93blwiKVxuICBtb2JpbGVCdXR0b24uYXBwZW5kQ2hpbGQoZHJvcERvd25JY29uKVxuICBkcm9wRG93bkljb24uc3JjID0gXCJhc3NldHMvZHJvcGRvd24ucG5nXCJcbiAgZHJvcERvd25JY29uLmFsdCA9IFwiZHJvcGRvd25cIlxuIFxuICBtb2JpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgaWYodWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIG1vYmlsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfWVsc2V7XG4gICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICBtb2JpbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICBuYXYuY2xhc3NMaXN0LmFkZCgnbWVudWJhcicpXG4gIHVsLmNsYXNzTGlzdC5hZGQoJ2xpc3QnKVxuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBhY3RpdmF0ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidHdvXCIpXG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgYWN0aXZhdGVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG4gXG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInRocmVlXCIpXG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgYWN0aXZhdGVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSlcbiAgXG5cbiBcbiAgdWwuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIHVsLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICB1bC5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgXG4gIG5hdi5hcHBlbmRDaGlsZChtb2JpbGVIZWFkZXIpXG4gIG5hdi5hcHBlbmRDaGlsZCh1bClcblxuICByZXR1cm4gbmF2O1xufVxuXG5cblxuZnVuY3Rpb24gYWN0aXZhdGVCdXR0b24oYnV0dG9uKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi1uYXZcIik7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gSVNJS0FMVTAxYDtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0lTSUtBTFUwMVwiO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBzZXRXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBhY3RpdmF0ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uYXZcIikpXG4gIGxvYWRIb21lKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFdlYnNpdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzZXRXZWJzaXRlIGZyb20gXCIuL3dlYnBhZ2VcIjtcblxuc2V0V2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9