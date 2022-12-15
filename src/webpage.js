import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";



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
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.classList.add("two")
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(menuButton);
    loadMenu();
  });
 

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.classList.add("three")
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activateButton(contactButton);
    loadContact();
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
  loadHome();
}

export default setWebsite;
