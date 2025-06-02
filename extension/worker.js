chrome.runtime.onStartup.addListener(() => {
    chrome.tabs.create({ url: "https://makeyourday.vercel.app?s=1" });
  });

