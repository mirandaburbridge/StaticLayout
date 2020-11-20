function myFunction() {
    document.getElementById("aboutDropdown").classList.toggle("show");
}

if (!event.target.matches(.navbut)) {
    let dropdowns = document.getElementsByClassName("aboutDropContent");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}