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

// LARGE HEADING TEXT ANIMATON HOME PAGE
let myText = document.querySelector('.devz');

let strText = myText.textContent;
// console.log(strText);

let splitText = strText.split('');
// console.log(splitText);

//Set text content to "" to avoid repetation of word text
myText.textContent = '';

for (let i = 0; i < splitText.length; i++) {
	myText.innerHTML += `<span>${splitText[i]}</span>`;
}

let char = 0;
let timer = setInterval(onTick, 150);

function onTick() {
	const span = myText.querySelectorAll('span')[char];
	span.classList.add('fade');
	char++;

	if (char === splitText.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}

// TYPEWRITER EFFECT
//ES6 Class instead of ES5 class

class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10); // base of 10
		this.typer();
		this.isDeleting = false;
	}

	typer() {
		//CURRENT index of current word
		const current = this.wordIndex % this.words.length;
		// console.log(current);

		//Get full text of current word
		const fullText = this.words[current];
		// console.log(fullText);

		//CHECK if DELETING
		if (this.isDeleting) {
			//REMOVE CHAR
			this.txt = fullText.substring(0, this.txt.length - 1);
		} else {
			//ADD CHAR
			this.txt = fullText.substring(0, this.txt.length + 1);
		}

		//INSERT txt INTO ELEMENT
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; //setting another span with class txt. we're using new class to introduce cursor "|" effect in the text

		//Initial TYPE SPEED
		let typeSpeed = 100;

		if (this.isDeleting) {
			typeSpeed /= 1.3;
		}

		//if word is complete
		if (!this.isDeleting && this.txt === fullText) {
			//Make PAUSE at the end
			typeSpeed = this.wait; // wait for defined amount of time.

			//Set Delete to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			//Move to next word
			this.wordIndex++;
			//PAUSE before start typing
			typeSpeed = 500;
		}

		setTimeout(() => this.typer(), typeSpeed);
	}
}

//INIT on DOM LOAD
document.addEventListener('DOMContentLoaded', init);

//INIT APP
function init() {
	const txtElement = document.querySelector('.txt-typer');
	const words = JSON.parse(txtElement.getAttribute('data-words')); // parsing data from data-words atttribute in txt-typer class from html file
	const wait = txtElement.getAttribute('data-wait');
	//INIT TYPEWRITER
	new TypeWriter(txtElement, words, wait);
}
