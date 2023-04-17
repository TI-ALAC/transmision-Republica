var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
async function init() {
  content.style.display = "block";
  setTimeout(() => {
    content2.style.display = "none";
    content3.style.display = "none";
  }, 0);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
  }, 1000);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
  }, 5000);
}

init();
