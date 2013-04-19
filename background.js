// ブラウザーアクションで、アイコンがクリックされたときのリスナー
chrome.browserAction.onClicked.addListener(function(tab) {
	// タブの中でスクリプトを十個すする
	chrome.tabs.executeScript(null, {file: "content.js"}, function(){
	});
});