
  document.addEventListener("DOMContentLoaded", function() {
    var content = document.querySelector(".projects");

    window.addEventListener("scroll", function() {
    
        var rect = content.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (windowHeight + window.scrollY >= rect.top + rect.height) {
            content.classList.add("loaded");
            content.style.display = "flex";
        }
    })
    window.onload = function() {
        var content = document.querySelector(".projects");
        content.classList.remove("loaded");
        content.style.display = "none";
      }
    

  });