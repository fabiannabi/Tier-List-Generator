let imageItem = document.querySelectorAll(".character-select");
let boxes = document.querySelectorAll(".tier-list-open-space");

let currentDraggedItem = null;

//recorrer para cada item en la NodeList que se crea con el query

for (let i = 0; i < imageItem.length; i++) {
  let item = imageItem[i];
  item.addEventListener("dragstart", function() {
    currentDraggedItem = item;
    //para que cuando lo empecemos a arrastrar desaparezca de el div
    setTimeout(function() {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", function() {
    //el timeout lo pones para que tenga una oportunidad de correr la funcion
    //porque si no en cuanto detecte que es null el programa cerrara
    setTimeout(function() {
      //cuando lo dejas de arrastrar le regresas el estilo para que sea visible
      item.style.display = "block";
      currentDraggedItem = null;
    }, 0);
  });

  //recorrer para las casillas
  for (let j = 0; j < boxes.length; j++) {
    let currentbox = boxes[j];

    currentbox.addEventListener("dragover", function(e) {
      e.preventDefault();
      currentbox.style.backgroundColor = "#3b3131";
    });

    currentbox.addEventListener("dragenter", function(e) {
      e.preventDefault();
      currentbox.style.backgroundColor = "#3b3131";
    });
    currentbox.addEventListener("dragleave", function(e) {
      e.preventDefault();
      currentbox.style.backgroundColor = "#1a1a1a";
    });

    currentbox.addEventListener("drop", function() {
      currentbox.append(currentDraggedItem);
      currentbox.style.backgroundColor = "#1a1a1a";
    });
  }
}

let originalbox = document.querySelector(".pool");
originalbox.addEventListener("dragover", function(e) {
  e.preventDefault();
});

originalbox.addEventListener("dragenter", function(e) {
  e.preventDefault();
});

originalbox.addEventListener("drop", function() {
  originalbox.append(currentDraggedItem);
});
