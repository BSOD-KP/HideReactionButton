
let pageLoaded = false;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(!pageLoaded){
    alert("The page has not finished loading");
  }else{
    HideReactionButton();
  }
});

const HideReactionButton = () => {
  const frameBuf = document.getElementsByTagName("ytd-live-chat-frame").chat.getElementsByTagName("iframe")[0].contentDocument || 
                    document.getElementsByTagName("ytd-live-chat-frame").chat.getElementsByTagName("iframe")[0].contentWindow.document;
  if(frameBuf.getElementsByTagName("yt-reaction-control-panel-view-model")[0].style.display === ""){
    frameBuf.getElementsByTagName("yt-reaction-control-panel-view-model")[0].style.display="none";
  }else{
    frameBuf.getElementsByTagName("yt-reaction-control-panel-view-model")[0].style.display="";
  }  
}

window.addEventListener("load", (e) => {
  pageLoaded = true;
});

console.log("content-scripts loaded");
