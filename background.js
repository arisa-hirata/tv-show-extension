chrome.runtime.onInstalled.addListener((details) => {
	chrome.contextMenus.create({
		title: "Test Context Menu",
		id: "contextMenu1",
		contexts: ["page", "selection"]
	});
	chrome.contextMenus.onClicked.addListener((event) => {
		chrome.tabs.create({
			url: `https://www.imdb.com/find?1=${event.selectionText}&ref_=nv_sr_sm`
		});
	});
});


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	console.log(msg);
	console.log(sender);
	sendResponse("receive message from background");
	chrome.tabs.sendMessage(sender.tab.id, "Got your message from background!")
});
