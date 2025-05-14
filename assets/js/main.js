	// Copy To clipboard for token
	function copyToken() {
		const input = document.getElementById('tokenInput');
		navigator.clipboard.writeText(input.placeholder)
		.then(() => alert('Token Copied!'))
		.catch(err => console.error('Failed to copy:', err));
	}

	// View Password Option
	function togglePassword() {
		const passwordField = document.getElementById('password-field');
		const passwordIcon = document.querySelector('.view-password img');

		if (passwordField.type === 'password') {
			passwordField.type = 'text';
			passwordIcon.src = 'assets/img/eye.svg'; // change to hide icon if you have one
		} else {
			passwordField.type = 'password';
			passwordIcon.src = 'assets/img/blind-eye.svg'; // back to view icon
		}
	}





	const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll); // For initial view