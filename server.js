let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("QRImg");
let qrText = document.getElementById("QRText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

qrText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQR();
  }
});
