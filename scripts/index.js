import {headerSection} from "../templates/header.js"
import {footerSection} from "../templates/footer.js";

headerSection()
footerSection()

$(document).ready(function(){
    $('#leftBookcase').plaxify({"xRange":25,"yRange":25,"data-invert":false})
    $('#calendar').plaxify({"xRange":15,"yRange":10,"data-invert":true})
    $('#watch').plaxify({"xRange":10,"yRange":10,"data-invert":true})
    $('#desk').plaxify({"xRange":100,"yRange":30,"data-invert":true})
    $('#screen').plaxify({"xRange":-20,"yRange":-20,"data-invert":true})
    $('#hello_msg').plaxify({"xRange":86,"yRange":20})
    $('#apple').plaxify({"xRange":100,"yRange":30,"data-invert":false})
    $('#lamp').plaxify({"xRange":100,"yRange":30,"data-invert":false})
    $('#rightBookcase').plaxify({"xRange":25,"yRange":25,"data-invert":false})

    $.plax.enable()
    });




