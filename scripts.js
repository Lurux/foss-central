var iframe_blacklist = ["directory.fsf.org", "thatoneprivacysite.net", "www.privacytools.io", "alternativeto.net", "duckduckgo.com"];

var search_adress = {"DistroWatch": "distrowatch.com/table.php?distribution=", "DistroWatch Articles": "distrowatch.org/dwres.php?resource=article-search&questions=on&tips=on&reviews=on&headlines=on&misc=on&lookfor=", "DistroTest": "distrotest.net/", "FSF Directory": "directory.fsf.org/wiki?search=", "OpenSourceSoftwareDirectory": "opensourcesoftwaredirectory.com/search/", "AlternativeTo": "alternativeto.net/browse/search?q=", "SecureMessagingApps": "www.securemessagingapps.com/?s=", "DuckDuckGo": "duckduckgo.com/?q="};


var mini_browser = localStorage.getItem("mini_browser");

if(mini_browser) {
	mini_browser = (mini_browser == "true");
} else {
	mini_browser = true;
}


window.onload = function() {
	updatetoggle();
}


function browsertoggle() {
	mini_browser = !mini_browser;

	localStorage.setItem("mini_browser", mini_browser);
	updatetoggle();
}

function updatetoggle() {
	var elm = document.getElementById('external-toggle');

	if(elm) {
		if (mini_browser) {
			elm.classList = "fas fa-toggle-on";
		} else {
			elm.classList = "fas fa-toggle-off";
		}
	}
}


function modal(link, title) {
	return openmodal(link.href, title);
}

function openmodal(address, title) {
	if(!mini_browser) {
		return true;

	} else if(iframe_blacklist.includes(address.split('/')[2])) {
		return window.confirm(title + " cannot be shown in the mini-browser, so you will be redirected.");

	} else {
		var elm = document.getElementById("modal");
		elm.style.display = "block";

		document.getElementById('mod-title').innerHTML = title;

		elm.getElementsByTagName('iframe')[0].title = title;
		elm.getElementsByTagName('iframe')[0].src = address;

		elm.getElementsByTagName('a')[0].href = address;

		document.getElementById("search-modal").classList = 'fas fa-circle-notch fa-spin';

		return false;
	}
}

function modalback() {
    closemodal();
}

function closemodal() {
	var elm = document.getElementById("modal");
	elm.style.display = "none";

	elm.getElementsByTagName('iframe')[0].src = "";
}


function opensearch() {
	document.getElementById("search").style.display = "block";
	document.getElementById("searchbox").select();
}

function dosearch(site) {
	openmodal('https://' + search_adress[site] + document.getElementById("searchbox").value, site);
    closesearch();
}

function closesearch() {
	var elm = document.getElementById("search");

	//if(elm) {
		elm.style.display = "none";
	//}
}
