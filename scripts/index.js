import {headerSection} from "../templates/header.js"
import {footerSection} from "../templates/footer.js";

headerSection()
footerSection()

$(document).ready(function(){
    $('#leftBookcase').plaxify({"xRange":60,"yRange":0,"data-invert":true})
    $('#calendar').plaxify({"xRange":40,"yRange":0,"data-invert":true})
    $('#watch').plaxify({"xRange":40,"yRange":0,"data-invert":true})
    $('#desk').plaxify({"xRange":40,"yRange":0,"data-invert":true})
    $('#rightBookcase').plaxify({"xRange":60,"yRange":0,"data-invert":true})
    $.plax.enable()
    });




