//SELECT DOM ITEMS
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); //adding dom items to nodelist

//SET INITIAL STATE
let showMenu = false;

//ADDING EVENT LISTENER
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close'); //close as a class will be added to this element;
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		// Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove('close'); //close as a class will be added to this element;
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		// Set Menu State
		showMenu = false;
	}
}

// MY PORTFOLIO WEBSITE LINK BUTTON
const linkBtn = document.querySelector('.my-portfolio-link-btn');

linkBtn.addEventListener('click', linkBtnFunction);

function linkBtnFunction() {
	alert(`You're already into my Portfolio website!`);
}

// COPYRIGHT SPAN YEAR
const spanYear = document.querySelector('.span-year');

const currentYear = new Date().getFullYear();

spanYear.textContent = currentYear;
