chrome.tabs.onCreated.addListener(function(tab) {
    if (!tab.url || tab.url === "") {
        chrome.tabs.update(tab.id, {
            url: "https://drpanayioths.github.io/MakeYourDay/"
        });
        console.log("You Find A Easter Egg From Morning Quotes");
    }
});

