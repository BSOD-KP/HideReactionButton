chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, "", null);
});
console.log("background.js loaded");
