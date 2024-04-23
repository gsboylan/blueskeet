var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        var publishBtn = document.evaluate('//div[text()="Post"]', document, null, XPathResult.ANY_TYPE, null);
        var thisButton = publishBtn.iterateNext();

        if (thisButton != null) {
            thisButton.textContent = "Skeet";
        };
    });
});

var observerConfig = {
    childList: true,
    subtree: true
};

observer.observe(document.body, observerConfig);
