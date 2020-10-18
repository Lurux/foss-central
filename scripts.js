iframe_blacklist = ["directory.fsf.org", "www.privacytools.io", "alternativeto.net", "duckduckgo.com"];
search_adress = {"DistroWatch": "distrowatch.com/table.php?distribution=", "DistroWatch Articles": "distrowatch.org/dwres.php?resource=article-search&questions=on&tips=on&reviews=on&headlines=on&misc=on&lookfor=", "DistroTest": "distrotest.net/", "FSF Directory": "directory.fsf.org/wiki?search=", "OpenSourceSoftwareDirectory": "opensourcesoftwaredirectory.com/search/", "AlternativeTo": "alternativeto.net/browse/search?q=", "SecureMessagingApps": "www.securemessagingapps.com/?s=", "DuckDuckGo": "duckduckgo.com/?q="};

mini_browser = true;

window.onload = function() {
	if(window.self !== window.top) {
		document.getElementsByTagName('header')[0].remove();
	}
}

function browsertoggle(elm) {
    if (elm.checked) {
        mini_browser = true;
		document.getElementById('extb').classList.remove('boff');
    } else {
        mini_browser = false;
		document.getElementById('extb').classList.add('boff');
	}
}

function modal(link, title) {
	return openmodal(link.href, title);
}

function openmodal(address, title) {
	closesearch();

	if(!mini_browser) {
		return true;

	} else if(iframe_blacklist.includes(address.split('/')[2])) {
		return window.confirm(title + " cannot be shown in the mini-browser, so you will be redirected.");

	} else {
		elm = document.getElementById("modal");
		elm.style.display = "block";

		document.getElementById('mod-title').innerHTML = title;

		elm.getElementsByTagName('iframe')[0].title = title;
		elm.getElementsByTagName('iframe')[0].src = address;

		elm.getElementsByTagName('a')[0].href = address;

		document.getElementById("search-modal").classList = 'fas fa-circle-notch fa-spin';
		document.body.style.overflow = "hidden";

		return false;
	}
}

function modalback() {
	frame = document.getElementById("modal").getElementsByTagName('iframe')[0];

	try {
		doc = frame.contentDocument || frame.contentWindow.document;

		if(doc.getElementById('back').dataset.back == 'previous') {
			frame.src = doc.getElementById('back').href;
		} else {
			closemodal();
		}
	} catch(e) {
		closemodal();
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

