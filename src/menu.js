function createMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
}


function createMenuInfo(type, aboutType){
    const menuInfo = document.createElement("div")
    menuInfo.classList.add('menu-info')

    const spagName = document.createElement("h2");
    spagName.textContent = type;
  
    const spagInfo = document.createElement("p");
    spagInfo.textContent = aboutType;
  
    const spagImage = document.createElement("img");
    spagImage.src = `assets/${type}.jpg`;
    spagImage.alt = `${type}`;
}