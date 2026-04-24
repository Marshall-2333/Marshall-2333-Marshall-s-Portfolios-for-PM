document.getElementById('year').textContent = new Date().getFullYear();

const resumeTrigger = document.getElementById('resume-trigger');
const resumeModal = document.getElementById('resume-modal');
const closeBtn = document.getElementById('modal-close-btn');
const closeBackdrop = document.getElementById('modal-close-backdrop');

resumeTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  resumeModal.classList.remove('hidden');
});

const closeModal = () => {
  resumeModal.classList.add('hidden');
};

closeBtn.addEventListener('click', closeModal);
closeBackdrop.addEventListener('click', closeModal);
