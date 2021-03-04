function toggleExpand(event) {
	var button = event.target;
	var snippet = button.parentElement.parentElement.children[2];
	var premise = button.parentElement.parentElement.children[3];
	var conclusion = button.parentElement.parentElement.children[5];

	if (premise.classList.contains('hide')) {
		premise.classList.remove('hide');
		conclusion.children[0].classList.remove('hide');
		conclusion.classList.remove('hide');
		snippet.classList.add('hide');
	}
	else {
		snippet.classList.remove('hide');
		premise.classList.add('hide');
		conclusion.classList.add('hide');
	}
	
}