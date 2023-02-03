import loadMenu from "./menu";



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
    loadMenu()
  })
  return button;
}
  
function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
  main.appendChild(createHomeAbout());
}
  
export default loadHome;