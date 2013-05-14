var attachedTabs = {};
var version = "1.0";
chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.executeScript(null, {file: 'toggle.js'});
});