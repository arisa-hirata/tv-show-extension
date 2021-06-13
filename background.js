chrome.runtime.onInstalled.addListener((details) => {
	chrome.contextMenus.create({
		title: "Test Context Menu",
		id: "contextMenu1",
		contexts: ["page", "selection"]
	});
	chrome.contextMenus.onClicked.addListener((event) => {
		console.log(event);
		chrome.tabs.query({
			currentWindow: true,
		}, (tabs) => {
			console.log(tabs);
		});
	});
});

console.log("background script running");
