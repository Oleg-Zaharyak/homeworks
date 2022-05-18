let i = 1;
const funBlockCreate = ()=>{
  let blockDivCreate = document.createElement("div");
  blockDivCreate.style.top = contextMenu.style.top;
  blockDivCreate.style.left = contextMenu.style.left;
  blockDivCreate.classList.add("block_create");
  blockDivCreate.setAttribute("id",i)
  container.appendChild(blockDivCreate);
  i++
};

let body = document.querySelector("body");
let changeColor = document.getElementById("change_color");
let contextMenu = document.getElementById("context_menu");
let container = document.getElementById("container");



window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  if (event.target.id === "container") {
    changeColor.addEventListener("click", ()=>{
      let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
      body.style.backgroundColor = "#" + randomColor1;
    });
  }
  else if(event.target.id > 0){    
    let deleteBlock = document.getElementById("delete_block");
    deleteBlock.addEventListener("click", () => {
      event.target.remove();

    });
    changeColor.addEventListener("click", function() {
      let blockColor = document.getElementById(event.target.id);
      randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
      blockColor.style.backgroundColor = "#" + randomColor2; 
  });
  }
  contextMenu.style.top = event.pageY + "px";
  contextMenu.style.left = event.pageX + "px";
  contextMenu.classList.add("active");
});



window.addEventListener("click", (event) => {
  if (event.button == 0) {
    contextMenu.classList.remove("active");
  }
});





let reloadPage = document.getElementById("reload");
reloadPage.addEventListener("click", () => location.reload());


let createBlock = document.getElementById("create_block");
createBlock.addEventListener("click", funBlockCreate);


