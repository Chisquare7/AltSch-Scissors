// Few lines of js code for accordions

let faqContainer = document.getElementById("faq__container");
let accordions = faqContainer.getElementsByClassName("accordion");

faqContainer.addEventListener("click", function (event) {
	if (event.target.classList.contains("accordion")) {
		var accordion = event.target;
		var panel = accordion.nextElementSibling;

		//Close all accordions

		for (var i = 0; i < accordions.length; i++) {
			var currentAccordion = accordions[i];
			var currentPanel = currentAccordion.nextElementSibling;
			if (currentAccordion !== accordion) {
				currentAccordion.classList.remove("active");
				currentPanel.style.display = "none";
			}
		}

		// Toggle the clicked accordion
		accordion.classList.toggle("active");
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	}
});

// Few lines of code for hamburger functionalities

function toggleMobileMenu(menu) {
	menu.classList.toggle("open");
}
