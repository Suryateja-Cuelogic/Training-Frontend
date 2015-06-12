var email = document.querySelector('input[type="email"]');
var password = document.querySelector('input[type="password"]');

email.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
			e.target.setCustomValidity("Please enter your email address");
		} else {
			e.target.setCustomValidity("Please enter a valid eMail address"); 
		}
	}
};

password.oninvalid = function(p) {
	p.target.setCustomValidity("");
	if (!p.target.validity.valid && p.target.value.length == 0) {
			p.target.setCustomValidity("Please enter your password");
	}
};
