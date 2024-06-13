const container = document.querySelector(".imageContainer");
var cardTag;
function getPhotos(images) {
   images.map(image => {
     cardTag = `
              <img src=${image.src.tiny} style="width:100%; height:100%;">`;
     container.innerHTML += cardTag;
   })
}
fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: "563492ad6f917000010000012e96f823ac4743be936ac3a8f77b49e4"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     getPhotos(data.photos);
   })