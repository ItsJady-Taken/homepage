
  document.addEventListener("DOMContentLoaded", function() {
    var content = document.querySelector(".projects");
    var footer = document.querySelector(".footer");
    window.addEventListener("scroll", function() {
    
      var rect = content.getBoundingClientRect();
      var rect2 = footer.getBoundingClientRect();
      var windowHeight = window.innerHeight;

      if (windowHeight + window.scrollY >= rect.top + rect.height) {
          content.classList.add("loaded");
          content.style.display = "flex";
      } 
      if (windowHeight + window.scrollY >= rect2.top + rect2.height) {
        requestAnimationFrame(() => {
          footer.classList.add("loaded");
        }); 
        setTimeout(() => {
          footer.style.display = "flex";
        }, 100); 
          
      }
    })
    window.onload = function() {
        var content = document.querySelector(".projects");
        content.classList.remove("loaded");
        content.style.display = "none";

        var footer = document.querySelector(".footer");
        footer.classList.remove("loaded");
        footer.style.display = "none";
      }

  });