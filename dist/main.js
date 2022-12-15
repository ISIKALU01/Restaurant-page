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
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 081 2667 1564'
  
    const address = document.createElement('p')
    address.textContent = '🏠 No 12, Adeola Odeku street, Victoria Island, Lagos, Nigeria'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/restaurant-location.png'
    restaurantLocation.alt = 'Mozzafiato restaurant location'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
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
  const button = document.createElement("button")
  button.textContent = text;
  button.classList.add('btn')
  button.addEventListener("click", ()=>{
    loadMenu()
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
  const button = document.createElement("button")
  button.textContent = text;
  button.classList.add('menu-btn')
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
  const mobileButton = document.createElement("button")
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
    }else{
      ul.classList.add("active")
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
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(menuButton);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
 

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsb0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxuICBcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJ/Cfk54gMDgxIDI2NjcgMTU2NCdcbiAgXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAn8J+PoCBObyAxMiwgQWRlb2xhIE9kZWt1IHN0cmVldCwgVmljdG9yaWEgSXNsYW5kLCBMYWdvcywgTmlnZXJpYSdcbiAgXG4gICAgY29uc3QgcmVzdGF1cmFudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICByZXN0YXVyYW50TG9jYXRpb24uc3JjID0gJ2ltYWdlcy9yZXN0YXVyYW50LWxvY2F0aW9uLnBuZydcbiAgICByZXN0YXVyYW50TG9jYXRpb24uYWx0ID0gJ01venphZmlhdG8gcmVzdGF1cmFudCBsb2NhdGlvbidcbiAgXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZU51bWJlcilcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TG9jYXRpb24pXG4gIFxuICAgIHJldHVybiBjb250YWN0XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0IiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiU3BhZ2hldHRpIENvbnRpbmVudGFsXCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCJIZXJlIGF0IHNwYWdoZXR0aSBjb250aW5lbnRhbCwgd2UgZ2l2ZSB5b3UgZGVsaWNpb3VzIHNwYWdoZXR0aSBhbmQgbW9yZS4uLi5cIikpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihcIk91ciBNZW51XCIpKVxuICByZXR1cm4gaG9tZTtcbn1cbiAgXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpe1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgbG9hZE1lbnUoKVxuICB9KVxuICByZXR1cm4gYnV0dG9uO1xufVxuICBcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuICBcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIilcbiAgIFxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJbmZvKFxuICAgICAgICAgIFwiU3BhZ2hldHRpIEJvbG9nbmFpc2VcIixcbiAgICAgICAgICBcIk9saXZlIG9pbCwgUGFuY2V0dGEsIFRvbWF0bywgR3JvdW5kIEJlZWYsIEdhcmxpYywgR3JvdW5kIFBvcmssIEJ1dHRlciwgUGVwcGVyXCIsXG4gICAgICAgICAgXCIkMjBcIlxuICAgICAgICApXG4gICAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJbmZvKFxuICAgICAgICAgIFwiUmF2aW9saVwiLFxuICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBPbGl2ZSBvaWwsIEdyb3VuZCBCZWVmLCBHYXJsaWMsIFBhcm1lc2FuLCBSaWNvdHRhLCBNb3p6YXJlbGxhLCBJdGFsaWFuIHBhcnNlbHlcIixcbiAgICAgICAgICBcIiQzNVwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUluZm8oXG4gICAgICAgICAgXCJTZWFmb29kIFBhc3RhXCIsXG4gICAgICAgICAgXCJUb21hdG8gc2F1Y2UsIE9saXZlIG9pbCwgR3JvdW5kIEJlZWYsIEdhcmxpYywgUGFybWVzYW4sIFJpY290dGEsIE1venphcmVsbGEsIEl0YWxpYW4gcGFyc2VseVwiLFxuICAgICAgICAgIFwiJDE1XCJcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SW5mbyhcbiAgICAgICAgICBcIlNwYWdoZXR0aSBhbGxlIFZvbmdvbGVcIixcbiAgICAgICAgICBcIlRvbWF0byBzYXVjZSwgT2xpdmUgb2lsLCBHcm91bmQgQmVlZiwgR2FybGljLCBQYXJtZXNhbiwgUmljb3R0YSwgTW96emFyZWxsYSwgSXRhbGlhbiBwYXJzZWx5XCIsXG4gICAgICAgICAgXCIkNjVcIlxuICAgICAgICApXG4gICAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJbmZvKFxuICAgICAgICAgIFwiUGFzdGEgYWxsYSBOb3JtYVwiLFxuICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBPbGl2ZSBvaWwsIEdyb3VuZCBCZWVmLCBHYXJsaWMsIFBhcm1lc2FuLCBSaWNvdHRhLCBNb3p6YXJlbGxhLCBJdGFsaWFuIHBhcnNlbHlcIixcbiAgICAgICAgICBcIiQ1MVwiXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUluZm8oXG4gICAgICAgICAgXCJQYXN0YSBDYXJib25hcmFcIixcbiAgICAgICAgICBcIlRvbWF0byBzYXVjZSwgT2xpdmUgb2lsLCBHcm91bmQgQmVlZiwgR2FybGljLCBQYXJtZXNhbiwgUmljb3R0YSwgTW96emFyZWxsYSwgSXRhbGlhbiBwYXJzZWx5XCIsXG4gICAgICAgICAgXCIkNTJcIlxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SW5mbyh0eXBlLCBhYm91dFR5cGUsIHByaWNlKXtcbiAgICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBpbWdDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW1nQ29uLmNsYXNzTGlzdC5hZGQoXCJpbWctY29uXCIpXG4gICAgbWVudUluZm8uY2xhc3NMaXN0LmFkZChcIm1lbnUtaW5mb1wiKVxuXG4gICAgY29uc3Qgc3BhZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3BhZ05hbWUudGV4dENvbnRlbnQgPSB0eXBlO1xuICBcbiAgICBjb25zdCBzcGFnSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNwYWdJbmZvLnRleHRDb250ZW50ID0gYWJvdXRUeXBlO1xuICBcbiAgICBjb25zdCBzcGFnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHNwYWdJbWFnZS5zcmMgPSBgYXNzZXRzLyR7dHlwZX0uanBnYDtcbiAgICBzcGFnSW1hZ2UuYWx0ID0gYCR7dHlwZX1gO1xuXG4gICAgY29uc3Qgc3BhZ1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3BhZ1ByaWNlLnRleHRDb250ZW50ID0gcHJpY2VcblxuICAgIFxuICAgIGltZ0Nvbi5hcHBlbmRDaGlsZChzcGFnSW1hZ2UpO1xuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKGltZ0NvbilcbiAgICBtZW51SW5mby5hcHBlbmRDaGlsZChzcGFnTmFtZSk7XG4gICAgbWVudUluZm8uYXBwZW5kQ2hpbGQoc3BhZ0luZm8pO1xuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKHNwYWdQcmljZSlcbiAgXG4gICAgcmV0dXJuIG1lbnVJbmZvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCl7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuJylcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUhlYWRlcih0ZXh0KXtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudXRpdGxlXCIpO1xuICByZXR1cm4gbWVudVRpdGxlO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUhlYWRlcihcImxhIG5vc3RyYSBkaXZlcnNpdGFcIikpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwiT3JkZXIgeW91cnNcIikpXG4gIH1cbiAgXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCByZXNuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICByZXNuYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXNuYW1lXCIpO1xuICByZXNuYW1lLnRleHRDb250ZW50ID0gXCJTcGFnQ29udGluZW50YWxcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzbmFtZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBtb2JpbGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IG1vYmlsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgY29uc3QgZHJvcERvd25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuXG4gIG1vYmlsZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLWhlYWRlclwiKVxuICBtb2JpbGVIZWFkZXIuYXBwZW5kQ2hpbGQobW9iaWxlQnV0dG9uKVxuXG4gIG1vYmlsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZHJvcERvd25cIilcbiAgbW9iaWxlQnV0dG9uLmFwcGVuZENoaWxkKGRyb3BEb3duSWNvbilcbiAgZHJvcERvd25JY29uLnNyYyA9IFwiYXNzZXRzL2Ryb3Bkb3duLnBuZ1wiXG4gIGRyb3BEb3duSWNvbi5hbHQgPSBcImRyb3Bkb3duXCJcbiBcbiAgbW9iaWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIGlmKHVsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7XG4gICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfWVsc2V7XG4gICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gIG5hdi5jbGFzc0xpc3QuYWRkKCdtZW51YmFyJylcbiAgdWwuY2xhc3NMaXN0LmFkZCgnbGlzdCcpXG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIGFjdGl2YXRlQnV0dG9uKGhvbWVCdXR0b24pO1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIGFjdGl2YXRlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuIFxuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIGFjdGl2YXRlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pXG4gIFxuXG4gXG4gIHVsLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICB1bC5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gIFxuICBuYXYuYXBwZW5kQ2hpbGQobW9iaWxlSGVhZGVyKVxuICBuYXYuYXBwZW5kQ2hpbGQodWwpXG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuXG5cbmZ1bmN0aW9uIGFjdGl2YXRlQnV0dG9uKGJ1dHRvbikge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tbmF2XCIpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IElTSUtBTFUwMWA7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9JU0lLQUxVMDFcIjtcblxuICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiKTtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gc2V0V2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgYWN0aXZhdGVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpKVxuICBsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRXZWJzaXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2V0V2Vic2l0ZSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5cbnNldFdlYnNpdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==