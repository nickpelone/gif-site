/* Random RGB CSS Color changer
    Copyright (c) 2014 Nick Pelone <npelone@unca.edu>
    All rights reserved.
    Users: you're interested in the randomColors() function. Pass it an HTML DOM object to change
    the colors of that object.

    If you want to do it frequently, then use a setInterval.
    */
function randomColors(htmlDomObject) {
    "use strict";
    var colorString = "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
    htmlDomObject.style.color = colorString;
}

function randomRGB() {
    "use strict";
    var number = Math.floor(Math.random() * 255) + 1;
    return number;
}
