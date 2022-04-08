function navbar(x) {
    if (x == 0) {
        document.getElementById("navbar").className = "displayed"
    }
    else if (x == 1) {
        document.getElementById("navbar").className = "undisplayed"
    }
    else if (x == 2) {
        document.getElementById("inicio").className = "displayed"
    }
}