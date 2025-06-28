// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Ensure the error modal is hidden when the page loads
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Select all heart elements
const heartIcons = document.querySelectorAll('.like-glyph');

// Loop through each heart icon and add a click event listener
heartIcons.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Toggle heart appearance on successful "server" call
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        // On server error, display modal with error message
        const modalMessage = document.getElementById('modal-message');
        modalMessage.textContent = error;
        errorModal.classList.remove('hidden');

        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});
