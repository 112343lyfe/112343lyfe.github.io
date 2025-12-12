function makeChanges() {
    let name = document.getElementById("uName").value;
    let message = document.getElementById("uMessage").value;
    let colorNumber = document.getElementById("uBgColor").value;
    if (name) {
        sayHello.innerHTML = "Hello " + name + "!";
    }
    if (message) {
        briefMessage.innerHTML = message;
    }
    if (colorNumber) {
        var r = document.querySelector(':root');
        switch (colorNumber) {
            case "1":
                r.style.setProperty('--bgColor1', 'var(--option1)');
                r.style.setProperty('--bgColor2', 'var(--option1b)');
                r.style.setProperty('--defaultH1', 'var(--option1T)');
                break;
            case "2":
                r.style.setProperty('--bgColor1', 'var(--option2)');
                r.style.setProperty('--bgColor2', 'var(--option2b)');
                r.style.setProperty('--defaultH1', 'var(--option2T)');
                break;
            case "3":
                r.style.setProperty('--bgColor1', 'var(--option3)');
                r.style.setProperty('--bgColor2', 'var(--option3b)');
                r.style.setProperty('--defaultH1', 'var(--option3T)');
                break;
        }
    }
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    // console.log(colorNumber);
}

let itemList = [];
function todoAdd() {
    let item = document.getElementById("addTask").value;
    addTask.value = "";
    switch (itemList.length) { // switch to keep the 3 li presentation on page load.
        case 0: // adds 3
            console.log("0")
            itemList = ["<li>" + "&nbsp;&nbsp;" + item + "&nbsp;&nbsp;" + "<input type='checkbox'/>" + "</li>", "<li></li>", "<li></li>"];
            break;
        case 3: // -1 blank li + item + empty string = 4
            itemList.splice(1, 2, "<li>" + "&nbsp;&nbsp;" + item + "&nbsp;&nbsp;" + "<input type='checkbox'/>" + "</li>", "<li></li>", '');
            break;
        case 4: // -1 blank li + item + empty string = 5
            itemList.splice(2, 1, "<li>" + "&nbsp;&nbsp;" + item + "&nbsp;&nbsp;" + "<input type='checkbox'/>" + "</li>", '');
            break;
        default: // array will always have 2 empty strings at end
            itemList.splice(-2, 0, "<li>" + "&nbsp;&nbsp;" + item + "&nbsp;&nbsp;" + "<input type='checkbox'/>" + "</li>");
    }
    todoList.innerHTML = itemList.join(""); // join to remove commas
    // console.log(itemList.length);
    // console.log(item);
    // console.table(itemList);
}

/////////////////////////////// model testing ///////////////////////////////////////


// Source - https://stackoverflow.com/a
// Posted by David Kerr, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-12, License - CC BY-SA 4.0

const images = document.querySelectorAll(".galleryImg");
const closeButtons = document.querySelectorAll(".close");

const toggleModal = (image) => {
  const modal = document.querySelector(`#modal`);
  modal.classList.toggle("hidden");

  if (image) {
    const modalImage = modal.querySelector("img");
    modalImage.src = image.src;
    const modalCaption = modal.querySelector("#caption");
    modalCaption.innerHTML = image.alt;
  }
};

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    toggleModal(image);
  });
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", (event) => {
    toggleModal();
  });
});