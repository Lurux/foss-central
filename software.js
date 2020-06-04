function showall() {
	contents = document.querySelectorAll(".software-grid > a");

	for(i = 0; i < contents.length; i++) {
		contents[i].classList.remove("hidden");
	}
}

function showtype(type) {
	contents = document.querySelectorAll(".software-grid > a");

	for(i = 0; i < contents.length; i++) {
		if(contents[i].dataset.fields.charAt(type) == 0) {
			contents[i].classList.add("hidden");
		} else {
			contents[i].classList.remove("hidden");
		}
	}
}

i = 0;
