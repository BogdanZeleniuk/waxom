function Calendar(options) {
	var elem = options.elem;
	var isOpen = false;

	function createInput() {
			var input_date = document.createElement('input');
			elem.appendChild(input_date);
			input_date.setAttribute('type', 'datetime-local');
			input_date.className = 'datetime';
	}
	function removeInput() {
			elem.firstChild.remove();
	}

	function close() {
		elem.firstChild.classList.remove('datetime_open');
		document.removeEventListener('click', outsideInputClick);
		isOpen = false;
		removeInput();
	}

	function open() {
		elem.firstChild.classList.add('datetime_open');
		var coords = elem.firstChild.getBoundingClientRect();
		elem.firstChild.style.marginTop = elem.firstChild.offsetHeight + 5 + 'px';		
		elem.firstChild.style.marginRight = elem.firstChild.offsetWidth/2 + 'px';
		elem.firstChild.style.fontSize = 16 + 'px';
		elem.firstChild.style.borderSize = 3 + 'px';
		elem.firstChild.style.borderColor = 'green';
		elem.firstChild.style.borderRadius = 10 + 'px';
		document.addEventListener('click', outsideInputClick);
   		isOpen = true;		
	}

	function outsideInputClick(event) {
		if (!elem.contains(event.target)) {
			close();
		}
	}

	function toggle() {
			if (!elem.firstChild) {
				createInput();
			}
			if (elem.firstChild.classList.contains('datetime_open')) {
				close();
			}
			else open();
		}

	elem.onmousedown = function() {
		return false;
	}

	elem.onclick = function(event) {
		var target = event.target;
			if (!target.classList.contains('calendar')) {
				return;
			}
			toggle();
	}
}

function Search(options) {
	var elem = options.elem;
	var isOpen = false;

	function createInput() {
			var input_search = document.createElement('input');
			elem.appendChild(input_search);
			input_search.setAttribute('type', 'text');
			input_search.className = 'search_inner_elem';
	}
	function removeInput() {
			elem.firstChild.remove();
	}

	function close() {
		elem.firstChild.classList.remove('search_inner_elem_open');
		document.removeEventListener('click', outsideInputClick);
		isOpen = false;
		removeInput();
	}

	function open() {
		elem.firstChild.classList.add('search_inner_elem_open');
		var coords = elem.firstChild.getBoundingClientRect();
		elem.firstChild.style.marginTop = elem.firstChild.offsetHeight + 5 + 'px';		
		elem.firstChild.style.marginRight = elem.firstChild.offsetWidth/2 + 'px';
		elem.firstChild.style.fontSize = 16 + 'px';
		elem.firstChild.style.borderSize = 3 + 'px';
		elem.firstChild.style.borderColor = 'green';
		elem.firstChild.style.borderRadius = 10 + 'px';
		document.addEventListener('click', outsideInputClick);
   		isOpen = true;		
	}

	function outsideInputClick(event) {
		if (!elem.contains(event.target)) {
			close();
		}
	}

	function toggle() {
			if (!elem.firstChild) {
				createInput();
			}
			if (elem.firstChild.classList.contains('search_inner_elem_open')) {
				close();
			}
			else open();
		}

	elem.onmousedown = function() {
		return false;
	}

	elem.onclick = function(event) {
		var target = event.target;
			if (!target.classList.contains('search_icon')) {
				return;
			}
			toggle();
	}
}

function Menu(options){
	var elem = options.elem;
	var menu_elem = options.menu_elem;

	window.onload = function(){
		var number = 0;
		var disp = ["block","none"];
		var time = [5000, 5000];

		function show(){ 
			number ^= 1;
		    elem.style.display = disp[number];
		    setTimeout(show,time[number]);
		}

		show();
	}

	elem.onclick = function(event){
		var target = event.target;
		if (target.classList.contains('fa-toggle-down')) {
			menu_elem.classList.toggle('second_menu_open');
		}
	}
}
function BrowserPictures(options){
	var elem = options.elem;
	var left = options.left;
	var center = options.center;
	var right = options.right;

	elem.onmousemove = function(event){
		var target = event.target;
		if (target.className == 'browser_right') {
			target.style.zIndex = 15;
			left.style.zIndex = 1;
			center.style.zIndex = 10;
		}
		if (target.className == 'browser_center') {
			target.style.zIndex = 15;
			left.style.zIndex = 1;
			right.style.zIndex = 10;
		}
		if (target.className == 'browser_left') {
			target.style.zIndex = 15;
			center.style.zIndex = 10;
			right.style.zIndex = 10;
			target.style.position = 'absolute';
		}
	}
}
