document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".world .image-container img");
  const overlay = document.getElementById("overlay");

  images.forEach(img => {
      img.addEventListener("click", function() {
          // Generate random pastel color
          const colors = ["#FEC8D8", "#FFD3A6", "#B5EAD7", "#D0E6A5", "#C5E3F6", "#C9CAD9", "#FFDDD2", "#FCEBB6"];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          // Set background color
          this.parentElement.style.backgroundColor = randomColor;

          // Get caption data
          const artist = this.getAttribute("data-artist");
          const location = this.getAttribute("data-location");
          const camera = this.getAttribute("data-camera");

          // Update caption
          const caption = this.nextElementSibling;
          caption.textContent = `Artist: ${artist}, Location: ${location}, Camera: ${camera}`;

          // Show overlay
          overlay.classList.add("active");
      });
  });

  overlay.addEventListener("click", function() {
      // Hide overlay
      overlay.classList.remove("active");
  });
});
