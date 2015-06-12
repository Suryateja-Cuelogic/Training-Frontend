var text = document.querySelector('input[type="text"]');
var description = document.querySelector('textarea');

text.oninvalid = function(t) {
	t.target.setCustomValidity("");
	if (!t.target.validity.valid &&t.target.value.length == 0) {
		t.target.setCustomValidity("Please enter title of the article");
	}
};

description.oninvalid = function(t) {
	t.target.setCustomValidity("");
	if (!t.target.validity.valid &&t.target.value.length == 0) {
		t.target.setCustomValidity("Please enter description of the article");
	}
};
