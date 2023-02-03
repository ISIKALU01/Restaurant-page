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
  const homeContentCon = document.createElement("div")
  home.classList.add("home");
  homeContentCon.classList.add("homeContentCon")
  homeContentCon.appendChild(createParagraph("Spaghetti Continental"));
  homeContentCon.appendChild(createParagraph("Here at spaghetti continental, we give you delicious spaghetti and more...."));
  homeContentCon.appendChild(createButton("Our Menu"))
  home.appendChild(homeContentCon)
  return home;
}

function createHomeAbout() {
  const homeAbout = document.createElement("div")
  homeAbout.classList.add('homeAbout')
  homeAbout.appendChild(createAbout("Fettuccine Alfredo"))
  return homeAbout;
}
  
function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function createAbout(img) {
  const aboutHeader = document.createElement('h1');
  const aboutImgTextCon = document.createElement('div');
  const aboutContent = document.createElement('div');
  const aboutImgCon = document.createElement('div');
  const aboutImg = document.createElement('img');
  const aboutText = document.createElement('p');

  aboutImgTextCon.classList.add('about-img-text')
  aboutContent.classList.add('about-us');

  aboutHeader.textContent = "About us"

  aboutImgCon.classList.add('about-img');
  aboutImgCon.appendChild(aboutImg);

  aboutImg.src = `assets/${img}.jpg`;
  aboutImg.alt = `${img}`;
  
  
  aboutText.classList.add('about-text')
  aboutText.textContent = "Since our modest beginnings in 2022, with a little space in Lagos's stylish locale, Spaghetti continental's development has been enlivened with the energy to cook and serve solid and deliciously made spaghetti."

  //aboutContent.appendChild(aboutImgCon)
  //aboutContent.appendChild(aboutText)

  aboutImgTextCon.appendChild(aboutImgCon)
  aboutImgTextCon.appendChild(aboutText)

  aboutContent.appendChild(aboutHeader)
  aboutContent.appendChild(aboutImgTextCon)

  return aboutContent
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
  main.appendChild(createHomeAbout());
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
          "Tomato sauce, Olive oil, squid, hardshell clams, blue mussels, clam meat, mussel meat, and shrimp.",
          "$15"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Spaghetti alle Vongole",
          "A simple combination of pasta, clams, white wine, garlic, tomatoes, Olive oil",
          "$65"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Pasta alla Norma",
          "Aubergine, olive oil, garlic, San Marzano tomatoes, boccole pasta, basil, ricotta salata",
          "$51"
        )
      );
    menu.appendChild(
        createMenuInfo(
          "Pasta Carbonara",
          "Pasta, bacon, onion, garlic, eggs, Parmesan, black pepper, peas",
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
 
  mobileButton.addEventListener("click", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxvREFBVztBQUNmLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLDBCQUEwQjs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVE7QUFDVjs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNuSjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLG9EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY29udGFjdENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcbiAgICBjb250YWN0Q29uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb24nKVxuICAgIFxuXG4gICAgY29udGFjdENvbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SW5mbyhcbiAgICAgIFwiTG9jYXRpb25cIixcbiAgICAgIFwiTm8gMTIsIEFkZW9sYSBPZGVrdSBTdHJlZXRcIixcbiAgICAgIFwiVmljdG9yaWEgSXNsYW5kLCBMYWdvcyBOaWdlcmlhXCJcbiAgICApKVxuXG4gICAgY29udGFjdENvbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SW5mbyhcbiAgICAgIFwiSG91cnNcIixcbiAgICAgIFwiTW9uIC0gVGh1ciwgOCBhbSAtIDEwIHBtXCIsXG4gICAgICBcIkZyaSAtIFN1biwgIDggYW0gLSAxMSBwbVwiXG4gICAgKSlcbiAgXG4gICAgIGNvbnRhY3RDb24uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEluZm8oXG4gICAgICBcIkNvbnRhY3RcIixcbiAgICAgIFwiMDgxLTI2NjctMTU2NFwiLFxuICAgICAgXCJzcGFnY29udGluZW50YWxAZ21haWwuY29tXCJcbiAgICApKVxuXG4gIFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdENvbilcblxuICAgIHJldHVybiBjb250YWN0XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb250YWN0SW5mbyhoZWFkZXIsIGxpbmVPbmUsIGxpbmVUd28pIHtcbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBjb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIilcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaGVhZGVyXG4gICAgY29udGVudDEudGV4dENvbnRlbnQgPSBsaW5lT25lXG4gICAgY29udGVudDIudGV4dENvbnRlbnQgPSBsaW5lVHdvXG5cbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250ZW50MSlcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250ZW50MilcblxuICAgIHJldHVybiBjb250YWN0SW5mb1xuXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0IiwiaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lQ29udGVudENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgaG9tZUNvbnRlbnRDb24uY2xhc3NMaXN0LmFkZChcImhvbWVDb250ZW50Q29uXCIpXG4gIGhvbWVDb250ZW50Q29uLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIlNwYWdoZXR0aSBDb250aW5lbnRhbFwiKSk7XG4gIGhvbWVDb250ZW50Q29uLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIkhlcmUgYXQgc3BhZ2hldHRpIGNvbnRpbmVudGFsLCB3ZSBnaXZlIHlvdSBkZWxpY2lvdXMgc3BhZ2hldHRpIGFuZCBtb3JlLi4uLlwiKSk7XG4gIGhvbWVDb250ZW50Q29uLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihcIk91ciBNZW51XCIpKVxuICBob21lLmFwcGVuZENoaWxkKGhvbWVDb250ZW50Q29uKVxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZUFib3V0KCkge1xuICBjb25zdCBob21lQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGhvbWVBYm91dC5jbGFzc0xpc3QuYWRkKCdob21lQWJvdXQnKVxuICBob21lQWJvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoXCJGZXR0dWNjaW5lIEFsZnJlZG9cIikpXG4gIHJldHVybiBob21lQWJvdXQ7XG59XG4gIFxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KGltZykge1xuICBjb25zdCBhYm91dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IGFib3V0SW1nVGV4dENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWJvdXRJbWdDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWJvdXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGFib3V0SW1nVGV4dENvbi5jbGFzc0xpc3QuYWRkKCdhYm91dC1pbWctdGV4dCcpXG4gIGFib3V0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC11cycpO1xuXG4gIGFib3V0SGVhZGVyLnRleHRDb250ZW50ID0gXCJBYm91dCB1c1wiXG5cbiAgYWJvdXRJbWdDb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtaW1nJyk7XG4gIGFib3V0SW1nQ29uLmFwcGVuZENoaWxkKGFib3V0SW1nKTtcblxuICBhYm91dEltZy5zcmMgPSBgYXNzZXRzLyR7aW1nfS5qcGdgO1xuICBhYm91dEltZy5hbHQgPSBgJHtpbWd9YDtcbiAgXG4gIFxuICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGV4dCcpXG4gIGFib3V0VGV4dC50ZXh0Q29udGVudCA9IFwiU2luY2Ugb3VyIG1vZGVzdCBiZWdpbm5pbmdzIGluIDIwMjIsIHdpdGggYSBsaXR0bGUgc3BhY2UgaW4gTGFnb3MncyBzdHlsaXNoIGxvY2FsZSwgU3BhZ2hldHRpIGNvbnRpbmVudGFsJ3MgZGV2ZWxvcG1lbnQgaGFzIGJlZW4gZW5saXZlbmVkIHdpdGggdGhlIGVuZXJneSB0byBjb29rIGFuZCBzZXJ2ZSBzb2xpZCBhbmQgZGVsaWNpb3VzbHkgbWFkZSBzcGFnaGV0dGkuXCJcblxuICAvL2Fib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEltZ0NvbilcbiAgLy9hYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KVxuXG4gIGFib3V0SW1nVGV4dENvbi5hcHBlbmRDaGlsZChhYm91dEltZ0NvbilcbiAgYWJvdXRJbWdUZXh0Q29uLmFwcGVuZENoaWxkKGFib3V0VGV4dClcblxuICBhYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpXG4gIGFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEltZ1RleHRDb24pXG5cbiAgcmV0dXJuIGFib3V0Q29udGVudFxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0KXtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLW5hdlwiKVxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+e1xuICAgICAgaWYoYnV0dG9uICE9PSB0aGlzKXtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBidG50d28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3b1wiKVxuICAgIGJ0bnR3by5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgbG9hZE1lbnUoKVxuICB9KVxuICByZXR1cm4gYnV0dG9uO1xufVxuICBcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVBYm91dCgpKTtcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJpbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpXG4gICBcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SW5mbyhcbiAgICAgICAgICBcIlNwYWdoZXR0aSBCb2xvZ25haXNlXCIsXG4gICAgICAgICAgXCJPbGl2ZSBvaWwsIFBhbmNldHRhLCBUb21hdG8sIEdyb3VuZCBCZWVmLCBHYXJsaWMsIEdyb3VuZCBQb3JrLCBCdXR0ZXIsIFBlcHBlclwiLFxuICAgICAgICAgIFwiJDIwXCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SW5mbyhcbiAgICAgICAgICBcIlJhdmlvbGlcIixcbiAgICAgICAgICBcIlRvbWF0byBzYXVjZSwgT2xpdmUgb2lsLCBHcm91bmQgQmVlZiwgR2FybGljLCBQYXJtZXNhbiwgUmljb3R0YSwgTW96emFyZWxsYSwgSXRhbGlhbiBwYXJzZWx5XCIsXG4gICAgICAgICAgXCIkMzVcIlxuICAgICAgICApXG4gICAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJbmZvKFxuICAgICAgICAgIFwiU2VhZm9vZCBQYXN0YVwiLFxuICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBPbGl2ZSBvaWwsIHNxdWlkLCBoYXJkc2hlbGwgY2xhbXMsIGJsdWUgbXVzc2VscywgY2xhbSBtZWF0LCBtdXNzZWwgbWVhdCwgYW5kIHNocmltcC5cIixcbiAgICAgICAgICBcIiQxNVwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUluZm8oXG4gICAgICAgICAgXCJTcGFnaGV0dGkgYWxsZSBWb25nb2xlXCIsXG4gICAgICAgICAgXCJBIHNpbXBsZSBjb21iaW5hdGlvbiBvZiBwYXN0YSwgY2xhbXMsIHdoaXRlIHdpbmUsIGdhcmxpYywgdG9tYXRvZXMsIE9saXZlIG9pbFwiLFxuICAgICAgICAgIFwiJDY1XCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SW5mbyhcbiAgICAgICAgICBcIlBhc3RhIGFsbGEgTm9ybWFcIixcbiAgICAgICAgICBcIkF1YmVyZ2luZSwgb2xpdmUgb2lsLCBnYXJsaWMsIFNhbiBNYXJ6YW5vIHRvbWF0b2VzLCBib2Njb2xlIHBhc3RhLCBiYXNpbCwgcmljb3R0YSBzYWxhdGFcIixcbiAgICAgICAgICBcIiQ1MVwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUluZm8oXG4gICAgICAgICAgXCJQYXN0YSBDYXJib25hcmFcIixcbiAgICAgICAgICBcIlBhc3RhLCBiYWNvbiwgb25pb24sIGdhcmxpYywgZWdncywgUGFybWVzYW4sIGJsYWNrIHBlcHBlciwgcGVhc1wiLFxuICAgICAgICAgIFwiJDUyXCJcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgIHJldHVybiBtZW51XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudUluZm8odHlwZSwgYWJvdXRUeXBlLCBwcmljZSl7XG4gICAgY29uc3QgbWVudUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgaW1nQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGltZ0Nvbi5jbGFzc0xpc3QuYWRkKFwiaW1nLWNvblwiKVxuICAgIG1lbnVJbmZvLmNsYXNzTGlzdC5hZGQoXCJtZW51LWluZm9cIilcblxuICAgIGNvbnN0IHNwYWdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHNwYWdOYW1lLnRleHRDb250ZW50ID0gdHlwZTtcbiAgXG4gICAgY29uc3Qgc3BhZ0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzcGFnSW5mby50ZXh0Q29udGVudCA9IGFib3V0VHlwZTtcbiAgXG4gICAgY29uc3Qgc3BhZ0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzcGFnSW1hZ2Uuc3JjID0gYGFzc2V0cy8ke3R5cGV9LmpwZ2A7XG4gICAgc3BhZ0ltYWdlLmFsdCA9IGAke3R5cGV9YDtcblxuICAgIGNvbnN0IHNwYWdQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYWdQcmljZS50ZXh0Q29udGVudCA9IHByaWNlXG5cbiAgICBcbiAgICBpbWdDb24uYXBwZW5kQ2hpbGQoc3BhZ0ltYWdlKTtcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChpbWdDb24pXG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQoc3BhZ05hbWUpO1xuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHNwYWdJbmZvKTtcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChzcGFnUHJpY2UpXG4gIFxuICAgIHJldHVybiBtZW51SW5mbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpe1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tbmF2XCIpXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT57XG4gICAgICBpZihidXR0b24gIT09IHRoaXMpe1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRocmVlXCIpXG4gICAgYnRuMy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgbG9hZENvbnRhY3QoKVxuICB9KVxuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SGVhZGVyKHRleHQpe1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51dGl0bGVcIik7XG4gIHJldHVybiBtZW51VGl0bGU7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SGVhZGVyKFwibGEgbm9zdHJhIGRpdmVyc2l0YVwiKSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJPcmRlciB5b3Vyc1wiKSlcbiAgfVxuICBcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgcmVzbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcmVzbmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzbmFtZVwiKTtcbiAgcmVzbmFtZS50ZXh0Q29udGVudCA9IFwiU3BhZ0NvbnRpbmVudGFsXCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc25hbWUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICBcblxuXG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBtb2JpbGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IG1vYmlsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29uc3QgZHJvcERvd25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuXG4gIG1vYmlsZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLWhlYWRlclwiKVxuICBtb2JpbGVIZWFkZXIuYXBwZW5kQ2hpbGQobW9iaWxlQnV0dG9uKVxuXG4gIG1vYmlsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZHJvcERvd25cIilcbiAgbW9iaWxlQnV0dG9uLmFwcGVuZENoaWxkKGRyb3BEb3duSWNvbilcbiAgZHJvcERvd25JY29uLnNyYyA9IFwiYXNzZXRzL2Ryb3Bkb3duLnBuZ1wiXG4gIGRyb3BEb3duSWNvbi5hbHQgPSBcImRyb3Bkb3duXCJcbiBcbiAgbW9iaWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYodWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIG1vYmlsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfWVsc2V7XG4gICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICBtb2JpbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuXG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ21lbnViYXInKVxuICB1bC5jbGFzc0xpc3QuYWRkKCdsaXN0JylcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgYWN0aXZhdGVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcInR3b1wiKVxuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIGFjdGl2YXRlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuIFxuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZVwiKVxuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIGFjdGl2YXRlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pXG4gIFxuXG4gXG4gIHVsLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICB1bC5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gIFxuICBuYXYuYXBwZW5kQ2hpbGQobW9iaWxlSGVhZGVyKVxuICBuYXYuYXBwZW5kQ2hpbGQodWwpXG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlQnV0dG9uKGJ1dHRvbikge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tbmF2XCIpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IElTSUtBTFUwMWA7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9JU0lLQUxVMDFcIjtcblxuICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gc2V0V2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgYWN0aXZhdGVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpKVxuICBsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRXZWJzaXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2V0V2Vic2l0ZSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5cbnNldFdlYnNpdGUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9