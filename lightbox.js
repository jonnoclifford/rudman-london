// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Fetch the image data from the JSON file
  fetch('images.json') // Assuming images.json contains the array of image objects
  .then(response => response.json())
  .then(data => {
      const imagesArray = data.images; // Assuming data directly contains an array of image objects

      // Shuffle the array of image data
      const shuffledImages = shuffleArray(imagesArray);

      const worldDiv = document.querySelector('.world');

      // Create and append <img> elements for each image data
      shuffledImages.forEach(imageData => {
          const img = document.createElement('img');
          img.src = imageData.src;
          img.setAttribute('data-photographer', imageData.photographer); // Adding data attribute for photographer
          img.setAttribute('data-camera', imageData.camera); // Adding data attribute for camera
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
  const photographer = event.target.dataset.photographer; // Getting photographer from data attribute
  const camera = event.target.dataset.camera; // Getting camera from data attribute

  document.getElementById('lightboxImg').src = imageSrc;
  document.getElementById('lightboxCaption').textContent = `Photographer: ${photographer}, Camera: ${camera}`; // Setting photographer and camera in the lightbox
  document.querySelector('.lightbox').style.display = 'block'; // Show the lightbox
}

// Close lightbox when clicked outside the image
function closeLightbox() {
  document.querySelector('.lightbox').style.display = 'none'; // Hide the lightbox
}
