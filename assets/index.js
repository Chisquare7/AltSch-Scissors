// Few lines of js code for accordions

let faqContainer = document.getElementById("faq__container");

faqContainer.addEventListener("click", function (event) {
	let clickedElement = event.target;
	if (clickedElement.classList.contains("accordion")) {
		clickedElement.classList.toggle("active");
		var panel = clickedElement.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	}
});


// Few lines of code for hamburger functionalities

function toggleMobileMenu(menu) {
    menu.classList.toggle("open")
}