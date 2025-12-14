// function thanks() {
//   alert("testing testing");
// }


/// picture model testing /////////

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



// Form changing //

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

    // document.getElementById('test').innerHTML = x;
    // console.log(x);
}
