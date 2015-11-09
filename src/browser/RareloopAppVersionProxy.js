function __getAppVersion(success, error) {
    // Get app version from config.xml
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        var parser = new DOMParser();
        var doc = parser.parseFromString(xhr.responseText, "application/xml");
        var widgetVersion = doc.getElementsByTagName("widget")[0].getAttribute('version'); 
        success({"build":"0", "version":widgetVersion}); 
    });
    xhr.open("get", "../config.xml", true);
    xhr.send();
};

module.exports = {
    getAppVersion: __getAppVersion
};

require("cordova/exec/proxy").add("RareloopAppVersion",module.exports);

