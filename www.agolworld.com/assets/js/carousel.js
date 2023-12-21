document.addEventListener("DOMContentLoaded", function () {
    var images = ["../img/banner/banner-bg-2.jpg", "../img/banner/banner-bg-3.jpg", "../img/banner/banner-bg-4.jpg", "../img/banner/banner-bg-5.jpg"];
    var index = 0;
  
    function changeBackground() {
      document.querySelector(".banner-area-three::before").style.backgroundImage = "url(" + images[index] + ")";
      index = (index + 1) % images.length;
    }
  
    setInterval(changeBackground, 5000); // Change background every 10 seconds, adjust as needed
  });
  