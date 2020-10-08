function showall() {
	contents = document.querySelectorAll("[data-filter]");

	for(i = 0; i < contents.length; i++) {
		contents[i].classList.remove("hidden");
	}

	tabset(0);
}

function showtype(type) {
	contents = document.querySelectorAll("[data-filter]");

	for(i = 0; i < contents.length; i++) {
		if(contents[i].dataset.filter.charAt(type) == 0) {
			contents[i].classList.add("hidden");
		} else {
			contents[i].classList.remove("hidden");
		}
	}

	tabset(type + 1);
}

function tabset(n) {
	contents = document.querySelectorAll("#tabs > span");

	for(i = 0; i < contents.length; i++) {
		contents[i].classList.remove("bold");
	}

	contents[n].classList.add("bold");
}
