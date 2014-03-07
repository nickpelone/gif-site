/*jslint browser:true*/
/* global randomColors */
(function () {
    "use strict";
    var headerText = document.getElementById("header");
    var interval = setInterval(function () {
        randomColors(headerText);
    }, 100);
}());
