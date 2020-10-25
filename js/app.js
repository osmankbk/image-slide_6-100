//IIFE
(() => {
//DOM elements in variables
const imageDiv = document.querySelector('.img-container');
const buttons = document.querySelectorAll('.btn');
let counter = 0;
//stored the images in an array for easy access
const images = ["contBcg-0", "contBcg-1", "contBcg-2", "contBcg-3", "contBcg-4", ]
//Looped the buttons & give each a click event listener.
buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		if (button.classList.contains('btn-right')) {
            counter++;
            //when the last image is reached, loop to the 1st one in the array
			if (counter > images.length - 1) {
				counter = 0;
			}
			imageDiv.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
		} else if (button.classList.contains('btn-left')) {
            counter--;
            //when the 1st image is reached, loop to the last one in the array
			if (counter < 0) {
				counter = images.length - 1;
			}
			imageDiv.style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
		}
	})
})
})();
