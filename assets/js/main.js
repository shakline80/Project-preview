	// Copy To clipboard for token
	function copyToken() {
		const input = document.getElementById('tokenInput');
		navigator.clipboard.writeText(input.placeholder)
		.then(() => alert('Copied to clipboard!'))
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