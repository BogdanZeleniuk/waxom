function Search(options) {
	var elem = options.elem;

	elem.onmousedown = function() {
		return false;
	}

	elem.onclick = function(event) {
	var target = event.target;
	alert(target);
	alert(target.parentElement.closest('search_form'));

		if (target.closest('search_form')) {
		elem.classList.toggle('open');
		}
	}
}