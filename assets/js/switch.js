var toggle = document.getElementById("toggler");
var darker = document.getElementById("dark");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme){
    document.documentElement.setAttribute('data-theme', storedTheme);
    document.documentElement.setAttribute('data-theme-reverse', storedTheme);
}

var currentTheme = document.documentElement.getAttribute("data-theme");
var targetTheme = "light";
var cur = currentTheme === "light";
document.getElementById("light").setAttribute("class", cur ? "far fa-moon fa-2x" : "fas fa-sun fa-2x");

var change = document.getElementById('theme');
var changement =(cur ? "Dark" : "Light");
change.innerText = changement;

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    let cur = targetTheme === "light";
    document.documentElement.setAttribute('data-theme', targetTheme)
    document.documentElement.setAttribute('data-theme-reverse', targetTheme)
    localStorage.setItem('theme', targetTheme);
    document.getElementById("light").setAttribute("class", cur ? "far fa-moon fa-2x" : "fas fa-sun fa-2x");

    var change = document.getElementById('theme');
    var changement =(cur ? "Dark" : "Light");
    change.innerText = changement;
    
};