//     SCORMify.js
//     (c) 2012 Daniel Allen, Litmos.com
//     SCORMify.js may be freely distributed under the MIT license.

var SCORMify = (function () {

    var lms = null;
    var timeCurrent_int = new Date().getTime();
    var timeLimit_int = new Date().getTime() + (30 * 1000);

    function findLMS(win) {
        var retries = 0;
        while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
            retries++;
            if (retries > 7) {
                alert("Error finding LMS SCORM API -- too deeply nested.");
                return null;
            }
            win = win.parent;
        }
        return win.API;
    }

    function getLMS() {
        var scormApi = findLMS(window);

        if ((scormApi == null) && (window.opener != null) && (typeof (window.opener) != "undefined"))
            scormApi = findAPI(window.opener);

        if (scormApi == null)
            alert("Unable to find an API adapter");

        return scormApi;
    }

    function complete(s) {
        setValue("cmi.core.score.raw", s);
        setValue("cmi.core.lesson_status", "completed");
        lms.LMSCommit();
    }

    function setValue(n, v) {
        var s = lms.LMSSetValue(n, v);
        return s;
    }

    function exit() {
        lms.LMSExit();
    }

    // This simply loops for a set period of time, waiting for the API to load and/or be found. 
    while ((lms == null) && timeCurrent_int < timeLimit_int) {
        lms = getLMS();
    }
    if (lms == null) {
        alert("whoops cannot find lms api");
    } else {
        lms.LMSInitialize("");
        complete(100); // set to complete once loaded
    }
})();