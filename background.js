// background.js

/* TESTING
chrome.webNavigation.onComitted.addListener(
	function(details){
		console.log(details.url);
		console.log(details.url.match("https://www.youtube.com/shorts/*"));
		if(details.url.match("https://www.youtube.com/shorts/*"))
		{
			console.log("Updating!");
			chrome.tabs.reload();
		}
	},
	filter
)

var filter = {
    url: [{
        urlPrefix: 'https://www.youtube.com/shorts/*'
    }]
};
*/

//* WORKING
chrome.webNavigation.onHistoryStateUpdated.addListener(
	function(details){
		console.log(details.url);
		console.log(details.url.match("https://www.youtube.com/shorts/*"));
		if(details.url.match("https://www.youtube.com/shorts/*"))
		{
			console.log("Updating!");
			chrome.tabs.reload();
		}
	}
)
//*/

/*
chrome.webNavigation.onHistoryStateUpdated.addListener(
	function(details){
		console.log(details.url);
		if(details.url)
		{
			console.log("Updating!");
			chrome.tabs.reload();
		}
	}
)
*/

/*
chrome.webNavigation.onCompleted.addListener(
	chrome.webNavigation.onHistoryStateUpdated.addListener(
		function(){
			console.log("Reloading!");
			chrome.tabs.reload();
		}
	),
	{
	url: [
		{urlPrefix: 'https://www.youtube.com/'}
	]}
);
*/

/*
chrome.webNavigation.onHistoryStateUpdated.addListener(
	function(){
		console.log("Reloading!");
		chrome.tabs.reload();
	}
)
*/

/*
chrome.tabs.onUpdated.addListener(
	function() {
		console.log("test");
		//chrome.tabs.update;
	}
)
*/
/*
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("test");
		chrome.tabs.update;
	},
	{
		urls: [ "*://*.youtube.com/shorts/*"]
	}	
)
*/
/*
chrome.webNavigation.onCommitted.addListener(
	function() {
		console.log("Updated!")
	}
)
*/

/*
chrome.tabs.onUpdated.addListener(
	function() {
		console.log("test");
		chrome.tabs.update;
	}
)
*/
/*
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		//console.log(details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]);
        //return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
		return {redirectUrl: details.url};
    },
	{
        urls: [
            "*://*.youtube.com/shorts/*"
        ],
        //types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
*/

//*://*.youtube.com/shorts/*