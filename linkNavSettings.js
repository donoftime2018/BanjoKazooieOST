

function linkNav() {
    let hideNav = document.getElementById("hideNav");
    let nav = document.getElementById("linknav");

    if (nav.hidden === false)
    {
        nav.hidden = true;
        hideNav.innerHTML = "Show Link Navigation";
    }

    else
    {
        nav.hidden = false;
        hideNav.innerHTML = "Hide Link Navigation";
    }
}