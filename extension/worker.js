
let currentUrl = "";

const runtime = typeof browser !== "undefined" ? browser.runtime : chrome.runtime;
const tabs = typeof browser !== "undefined" ? browser.tabs : chrome.tabs;

onmessage = function (event) {
  if (event.data.type === "setUrl") {
    currentUrl = event.data.url;
    runtime.onStartup.addListener(() => {
      tabs.create({ url: "https://makeyourday.vercel.app?s=1" });
    });
    postMessage("URL updated to: " + currentUrl);
  }
};