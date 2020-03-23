
function updateKey () {

	var key = "AIzaSyCrhJUhQ-iIjyCUp2Gkqu7D92FWptQGvY4";
	
	var scriptFix = 'gapi.client.setApiKey("'+key+'");alert("Search error correction!");';
	var scriptTag = document.createElement("script");
	scriptTag.innerHTML = scriptFix;
	document.head.appendChild(scriptTag);
	console.log("Search error fix! ");
}

//updateKey()
console.log("Search error is being fixed...");
setTimeout(updateKey, 17000)

//https://content.googleapis.com/youtube/v3/search?maxResults=20&part=snippet&q=lil%20eddy&safeSearch=none&type=video&videoDuration=any&fields=items(id%2FvideoId%2Csnippet%2Ftitle%2Csnippet%2Fthumbnails%2Csnippet%2FchannelTitle)&key=AIzaSyCCrwShK2QXbx1JITO2PSD128-aNuxrho4
