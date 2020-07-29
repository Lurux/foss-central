iframe_blacklist = ["directory.fsf.org", "www.privacytools.io", "alternativeto.net", "duckduckgo.com"];
search_adress = {"DistroWatch": "distrowatch.com/table.php?distribution=", "DistroWatch Articles": "distrowatch.org/dwres.php?resource=article-search&questions=on&tips=on&reviews=on&headlines=on&misc=on&lookfor=", "DistroTest": "distrotest.net/", "FSF Directory": "directory.fsf.org/wiki?search=", "OpenSourceSoftwareDirectory": "opensourcesoftwaredirectory.com/search/", "AlternativeTo": "alternativeto.net/browse/search?q=", "SecureMessagingApps": "www.securemessagingapps.com/?s=", "DuckDuckGo": "duckduckgo.com/?q="}

window.onload = function() {
	if(window.self !== window.top) {
		document.getElementsByTagName('header')[0].remove()
	}
}

function modal(link, title) {
	return openmodal(link.href, title);
}

function openmodal(address, title) {
	closesearch();

	if(iframe_blacklist.includes(address.split('/')[2])) {
		return window.confirm(title + " cannot be shown in the mini-browser, so you will be redirected.");
	} else {
		elm = document.getElementById("modal");
		elm.style.display = "block";

		elm.getElementsByClassName('current')[0].innerHTML = title;

		elm.getElementsByTagName('iframe')[0].title = title;
		elm.getElementsByTagName('iframe')[0].src = address;

		elm.getElementsByTagName('a')[0].href = address;

		document.getElementById("mod-loading").style.display = 'inline';
		document.body.style.overflow = "hidden";

		return false;
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
	document.getElementById("search").style.display = "block";
	document.getElementById("searchbox").select();
}

function dosearch(site) {
	openmodal('https://' + search_adress[site] + document.getElementById("searchbox").value, site);
}

function closesearch() {
	document.getElementById("search").style.display = "none";
}
