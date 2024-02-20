const acc = document.getElementsByClassName("accordion");
let i;

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		const isActive = this.classList.contains("active");

		hideInactivePanels();
		

    	// Toggle the "active" class to highlight the clicked accordion
	   	this.classList.toggle("active");
		const img = this.querySelector("img");

		const panel = this.nextElementSibling;

        // If the accordion was already active, remove the "active" class and hide the panel
		if (isActive) {
            console.log("been there")
			this.classList.remove("active")
			panel.style.display = "none"
			return
        }

        // Toggle between hiding and showing the active panel
		if (panel.style.display === "block") {
			panel.style.display = "none";
			img.src = "assets/images/icon-plus.svg"

		} else {
			panel.style.display = "block";
			img.src = "assets/images/icon-minus.svg"
		}

	});
}

// Function to hide all inactive panels and reset all plus icons
function hideInactivePanels() {
	const panels = document.querySelectorAll('.panel');
	const imgs = document.querySelectorAll(".accordion > img")

    // Loop through each panel and hide it
    panels.forEach(panel => {
        panel.style.display = "none";
    });
	
    // Loop through each image and reset its source to a plus icon
	imgs.forEach(img => {
		img.src = "assets/images/icon-plus.svg"
	})
}