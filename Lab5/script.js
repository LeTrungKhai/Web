document.addEventListener('DOMContentLoaded', function() {
  // Hàm mở modal
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Hàm đóng modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Hàm chuyển đổi giữa login và signup modal
  function switchModal(currentModalId, targetModalId) {
    closeModal(currentModalId);
    openModal(targetModalId);
  }

  // Gán các hàm ra global để gọi được từ HTML
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.switchModal = switchModal;

  // Thêm sự kiện click cho nút login nếu có trong HTML
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      openModal('loginModal');
    });
  }

  // Thêm sự kiện click bên ngoài modal để đóng modal
  window.addEventListener('click', function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    if (event.target === loginModal) {
      closeModal('loginModal');
    }
    if (event.target === signupModal) {
      closeModal('signupModal');
    }
  });
});
