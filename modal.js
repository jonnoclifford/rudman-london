document.addEventListener("DOMContentLoaded", function() {
  // Function to open the modal
  function openModal() {
    // Fetch the modal content from about-modal.html
    fetch('about-modal.html')
      .then(response => response.text())
      .then(html => {
        // Create a temporary div to hold the modal content
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Get the modal content from the temporary div
        var modalContent = tempDiv.querySelector('.modal-content');

        // Create the modal element
        var modal = document.createElement("div");
        modal.id = "about-modal";
        modal.className = "modal";
        modal.appendChild(modalContent);

        // Append the modal to the modal container
        var modalContainer = document.getElementById("modal-container");
        modalContainer.appendChild(modal);

        // Show the modal by setting its display property to "block"
        modal.style.display = "block";

        // Add an event listener to the close button
        var closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', closeModal);

        // Add an event listener to the window to close the modal when clicking outside
        window.addEventListener('click', function(event) {
          if (event.target === modal) {
            closeModal();
          }
        });
      })
      .catch(error => console.error('Error fetching modal content:', error));
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("about-modal");
    if (modal) {
      modal.style.display = "none";
      // Remove the modal from the DOM
      modal.parentNode.removeChild(modal);
    }
  }

  // Get the link that opens the modal
  var aboutLink = document.getElementById("about-link");

  // When the user clicks on the link, open the modal
  aboutLink.addEventListener('click', openModal);
});
