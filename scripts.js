iframe_blacklist = ["directory.fsf.org", "www.privacytools.io", "alternativeto.net", "duckduckgo.com"];
search_adress = {"distrowatch-distro": "distrowatch.com/table.php?distribution=", "distrowatch-article": "distrowatch.org/dwres.php?resource=article-search&questions=on&tips=on&reviews=on&headlines=on&lookfor=", distrotest: "distrotest.net/", "fsf-directory": "directory.fsf.org/wiki?search=", ossdirectory: "opensourcesoftwaredirectory.com/search/", alternativeto: "alternativeto.net/browse/search?q=", securemessagingapps: "www.securemessagingapps.com/?s=", duckduckgo: "duckduckgo.com/?q="}

window.onload = function() {
	if(window.self !== window.top) {
		document.getElementsByTagName('header')[0].remove()
	}
}

function modal(adress, prefix = "https://") {
	domain = adress.split('/')[0];
	closesearch();

	if(iframe_blacklist.includes(domain)) {
		window.alert("You will be redirected because this website can't be shown in an iframe.");
		window.open(prefix + adress, '_blank');
	} else {
		elm = document.getElementById("modal");
		elm.style.display = "block";

		elm.getElementsByClassName('current')[0].innerHTML = domain;

		elm.getElementsByTagName('iframe')[0].title = adress;
		elm.getElementsByTagName('iframe')[0].src = prefix + adress;

		elm.getElementsByTagName('a')[0].href = prefix + adress;

		document.getElementById("mod-loading").style.display = 'inline';
		document.body.style.overflow = "hidden";
	}
}

function closemodal() {
	closesearch();

	elm = document.getElementById("modal");
	elm.style.display = "none";
	elm.getElementsByTagName('iframe')[0].src = "";
	document.body.style.overflow = "";
}

function opensearch() {
	elm = document.getElementById("search-main");
	elm.children[1].className = "fas fa-caret-up";
	elm.onclick = closesearch;

	elm = document.getElementById("search-modal"); // dirty
	elm.children[0].children[1].className = "fas fa-caret-up";
	elm.onclick = closesearch;

	document.getElementById("search").style.display = "block";
	document.getElementById("searchbox").select();
}

function validatesearch(site) {
	modal(search_adress[site] + document.getElementById("searchbox").value);
}

function closesearch() {
	elm = document.getElementById("search-main");
	elm.children[1].className = "fas fa-caret-down";
	elm.onclick = opensearch;

	elm = document.getElementById("search-modal");
	elm.children[0].children[1].className = "fas fa-caret-down";
	elm.onclick = opensearch;

	document.getElementById("search").style.display = "none";
}

// elm.setAttribute("onclick", "closesearch(arg)");
