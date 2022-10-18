// Script for closing the side menu
// Not working very well
function close_offcanvas() {
    var element1 = document.getElementById("nav_toggler");
    element1.classList.remove("collapsed");
    var element2 = document.getElementById("offcanvasDarkNavbar");
    element2.classList.remove("show");
    document.getElementById("nav_toggler").setAttribute('aria-expanded', 'false');
}



// playing with DOM
//document.getElementById("welcome-section").style.color = "hsl(236, 91%, 18%)";
//document.getElementById("subHeader").style.color = "darkorange";

//function close_offcanvas() {
  //  var offcanvasHTMLObject = document.getElementById("offcanvasDarkNavbar");
  //  var offcanvasBSObject = bootstrap.Offcanvas.getInstance(offcanvasHTMLObject);
  //  offcanvasBSObject.hide();
//}
// End of script