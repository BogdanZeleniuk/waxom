function Calendar(options) {
	var elem = options.elem;
	var isOpen = false;

	function createInput() {
			var input_date = document.createElement('input');
			elem.appendChild(input_date);
			input_date.setAttribute('type', 'datetime-local');
			input_date.className = 'datetime';

			var currentDate = new Date();
			var day = currentDate.getDate();
			var month = (currentDate.getMonth()+1) < 10 ? 
								('0' + (currentDate.getMonth()+1)) : (currentDate.getMonth()+1);
			var year = currentDate.getFullYear();
			var hours = currentDate.getHours();
			var min = currentDate.getMinutes();
			var sec = currentDate.getSeconds();

			input_date.value =  year + '-' + month + '-' + day + 'T' + hours + ':' + min + ':' + sec;

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
		elem.firstChild.style.marginRight = elem.firstChild.offsetWidth / 2 + 'px';
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
			input_search.setAttribute('type', 'search');
			input_search.className = 'search_inner_elem';

			var btn_search = document.createElement('a');
			btn_search.innerHTML = 'Search';
			btn_search.className = 'btn_search_elem';
			elem.appendChild(btn_search);
	}
	function removeInput() {
			elem.firstChild.remove();
			elem.firstChild.remove();
	}

	function close() {
		elem.firstChild.classList.remove('search_inner_elem_open');
		document.removeEventListener('click', outsideInputClick);

		elem.firstChild.classList.remove('btn_search_elem_open');
		document.removeEventListener('click', outsideInputClick);

		isOpen = false;
		removeInput();
	}

	function open() {
		elem.firstChild.classList.add('search_inner_elem_open');
		elem.children[1].classList.add('btn_search_elem_open');
		
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
function Lupa(options){
	var elem = options.elem;

	for (var i = 0; i < elem.length; i++) {
		elem[i].onclick = function(event){
			var target = event.target;
			if (target.classList.contains('lupa_active')) {
				target.parentNode.children[0].classList.toggle('big_img');
			}
		}		
	}
}
function Link(options){
	var elem = options.elem;

	function livingPage(href){
		var confirmPage = confirm('You realy wanna link to ' + href + ' ?');
		if (!confirmPage) {
			return false;
		}
		document.location.href = href;
	}

	for (var i = 0; i < elem.length; i++) {
		elem[i].onclick = function(event){
			var target = event.target;
			if (target.classList.contains('link_active')) {
				livingPage('https://learn.javascript.ru');
			}
		}		
	}
}
function Picture(options){
	var elem = options.elem;
	for (var i = 0; i < elem.length; i++) {
		elem[i].onmouseover = function(event){
			var target = event.target;
				if (target.className == 'lupa') {
					target = target.previousSibling.previousSibling.previousSibling.previousSibling;
					target.style.filter = 'brightness(40%)';
				}
				if (target.className == 'link') {
					target = target.previousSibling.previousSibling;
					target.style.filter = 'brightness(40%)';
				}
				if (target.tagName == 'IMG') {
					if (target.classList.contains('big_img')) {
						target.style.filter = 'brightness(100%)';
					}
					else{
						target.style.filter = 'brightness(40%)';
					}
				}
				target.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('lupa_active');	
				target.nextSibling.nextSibling.classList.add('link_active');	
		}

		elem[i].onmouseout = function(event){
			var target = event.target;
			if (target.tagName == 'IMG') {
				target.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove('lupa_active');	
				target.nextSibling.nextSibling.classList.remove('link_active');
				target.style.filter = 'brightness(100%)';
			}
		}
	}		
}
