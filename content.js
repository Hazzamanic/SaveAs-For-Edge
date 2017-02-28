var url = document.location.href;
var link = document.createElement("a");

link.setAttribute("href", url);
link.setAttribute("download", "Download.js");
link.click();