let imageUrls = [];
for (let i = 1; i < 36; i++) imageUrls.push(`./images/img${i}.jpg`);
let imageNumber = 0;
let totalImages = 35;
let imageContainer = document.querySelector("img");

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next")

let interval = setInterval(changeImage, 10000);

function changeImage() {
  imageNumber = (imageNumber + 1) % totalImages;
  imageContainer.setAttribute("src", `${imageUrls[imageNumber]}`);
}

function nextImage() {
  imageNumber = (imageNumber + 1) % totalImages;
  imageContainer.setAttribute("src", `${imageUrls[imageNumber]}`);
}

function prevImage() {
  imageNumber--;
  if(imageNumber<0)imageNumber=34;
  imageContainer.setAttribute("src", `${imageUrls[imageNumber]}`);
}

prevButton.onclick = prevImage;
nextButton.onclick = nextImage;
