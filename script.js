// get image src
let getImageSrc = (Attr) => {
  changebgImage(Attr.src);
};

// change background image.
let changebgImage = (src) => {
  document.querySelector("body").style.backgroundImage = `url('${src}')`;
};
