var menuIcon = document.querySelector(".menuicon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")


menuIcon.onclick = function(){
    sidebar.classList.toggle("smallsidebar");
    container.classList.toggle("largecontainer")
}
