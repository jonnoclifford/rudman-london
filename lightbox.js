// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Fetch the image paths from the JSON file
  fetch('images.json')
  .then(response => response.json())
  .then(data => {
      const imageSrcArray = data.images;

      // Shuffle the array of image sources
      const shuffledImages = shuffleArray(imageSrcArray);

      const worldDiv = document.querySelector('.world');

      // Create and append <img> elements for each image path
      shuffledImages.forEach(imageSrc => {
          const img = document.createElement('img');
          img.src = imageSrc;
          img.onclick = openLightbox;
          worldDiv.appendChild(img);
      });
  })
  .catch(error => console.error('Error fetching images:', error));

  // Hide the lightbox initially
  document.querySelector('.lightbox').style.display = 'none';
});

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Open lightbox with clicked image
function openLightbox(event) {
  const imageSrc = event.target.src;
  document.getElementById('lightboxImg').src = imageSrc;
  document.querySelector('.lightbox').style.display = 'block'; // Show the lightbox
}

// Close lightbox when clicked outside the image
function closeLightbox() {
  document.querySelector('.lightbox').style.display = 'none'; // Hide the lightbox
}
