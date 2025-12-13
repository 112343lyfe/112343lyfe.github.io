/// picture model testing /////////


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


////////////////////
// Form changing //
//////////////////
// let choice = document.getElementById("selectChoice").value;

function formChoice() {
    // let x = 1
    let x = document.getElementById("selectChoice").value;
    var m = document.getElementById("messageDiv");
    var r = document.getElementById("rideDiv");
    var e = document.getElementById("emailDiv");
    var b = document.getElementById("buttonDiv");

    switch (x) {
        case "1":
            m.style.display = "block";
            r.style.display = "none";
break;
        case "2":
            m.style.display = "none";
            r.style.display = "block";
break;
    }
    e.style.display = "block";
    b.style.display = "block";
    // m.style.display = "none";
    // r.style.display = "none";

    // if (m.style.display === "none") {
    //     m.style.display = "block";
    // } else {
    //     m.style.display = "none";
    // }

    // document.getElementById('test').innerHTML = x;
    // console.log(x);
}








/////////////////////////////////////////////////////////
// delete when done referencing
// function formChoice() {
//     let choice = document.getElementById("selectChoice").value;
//     let message = document.getElementById("uMessage").value;
//     let colorNumber = document.getElementById("uBgColor").value;
//     if (name) {
//         sayHello.innerHTML = "Hello " + name + "!";
//     }
//     if (message) {
//         briefMessage.innerHTML = message;
//     }
//     if (colorNumber) {
//         var r = document.querySelector(':root');
//         switch (colorNumber) {
//             case "1":
//                 r.style.setProperty('--bgColor1', 'var(--option1)');
//                 r.style.setProperty('--bgColor2', 'var(--option1b)');
//                 r.style.setProperty('--defaultH1', 'var(--option1T)');
//                 break;
//             case "2":
//                 r.style.setProperty('--bgColor1', 'var(--option2)');
//                 r.style.setProperty('--bgColor2', 'var(--option2b)');
//                 r.style.setProperty('--defaultH1', 'var(--option2T)');
//                 break;
//             case "3":
//                 r.style.setProperty('--bgColor1', 'var(--option3)');
//                 r.style.setProperty('--bgColor2', 'var(--option3b)');
//                 r.style.setProperty('--defaultH1', 'var(--option3T)');
//                 break;
//         }
//     }
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// console.log(colorNumber);
// }

