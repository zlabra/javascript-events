document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is



let images = document.querySelector('#beach');
images.onmouseover = () => {
  images.setAttribute("src", "images/gator.jpg");
  }

  let imagenes = document.querySelector('#photo2');
    imagenes.onmouseover = () => {
      imagenes.setAttribute("src", "images/sunset.jpg");
      }


let p = document.querySelectorAll('.uni')
p.forEach(function(e) {
   e.addEventListener('mouseover', function() {
      this.style.display = 'none';
   });
});

document.querySelector('#question').onclick = () => {
  document.getElementById("question").innerHTML = "The University of Florida was founded in 1855!";
}


// // keep the line below exactly as it is
});
