browser.contextMenus.create({
  id: "save_as",
  title: "Save As...",
  contexts: ["page"]
});
 
function save_as(tabid) {
  var executing = browser.tabs.executeScript(
  tabid, {
    file: "content.js"
});
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "save_as") {
    save_as(tab.id);
  }
});