/* Accordion Effect for the Navigation Bar */
function accordionEffect() {
    var x = document.getElementById("accordionList");
    if (x.className.indexOf("accordion-display") == -1) {
        x.className += " accordion-display";
        x.previousElementSibling.className += " accordion-select";
    } else {
        x.className = x.className.replace(" accordion-display", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" accordion-select", "");
    }
}
