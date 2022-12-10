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
    return button;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;