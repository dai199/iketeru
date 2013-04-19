// ブラウザーアクションで、アイコンがクリックされたときのリスナー
chrome.browserAction.onClicked.addListener(function(tab) {
	// タブの中でスクリプトを実行する
	chrome.tabs.executeScript(null, {file: "./content.js"}, function(){
	});
});