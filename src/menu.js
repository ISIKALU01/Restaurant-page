import loadContact from "./contact";

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
    loadContact()
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
  
export default loadMenu;