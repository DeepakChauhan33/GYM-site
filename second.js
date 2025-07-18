document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('#registerBtn');
  const modal = document.getElementById('registerModal');
  const closeBtn = modal.querySelector('.close-btn');

  btn.addEventListener('click', () => {
    modal.style.display = 'block';
    console.log("545");
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission here...
    alert('Form submitted!');
    modal.style.display = 'none';
  });
});
