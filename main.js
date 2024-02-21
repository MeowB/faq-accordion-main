accordion()



function accordion() {

	const acc = document.getElementsByClassName("accordion");
	let i;
	
	// accordion
	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			const panel = this.nextElementSibling;
			const panels = document.querySelectorAll(".panel")
			const img = this.querySelector("img");
			const imgs = document.querySelectorAll("button > img")
			
	
			// check if the panel clicked is already open to close it 
			if (panel.style.display === "block") {
				panel.style.display = "none";
				img.src = "assets/images/icon-plus.svg"
	
			} else { // if it's not already open, then open it
				panel.style.display = "block";
				img.src = "assets/images/icon-minus.svg"
			}
	
			// for each other panels, hide the content
			for (let i = 0; i < panels.length; i++) {
				const currentPanel = panels[i];
				if (currentPanel !== panel) {
					currentPanel.style.display = "none";
				}
			}
	
			// check if the image match the one clicked on or else return to the plus image
			for (let i = 0; i < imgs.length; i++) {
				const temp = imgs[i];
				if (temp != img) {
					temp.src = "assets/images/icon-plus.svg"
				}
				
			}
	
		});
	}
}