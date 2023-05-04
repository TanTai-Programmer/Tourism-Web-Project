
var sidebar = document.querySelector(".Sidebar")
var Content = document.querySelector(".Content")
var ContentNav= document.querySelector(".Content-Nav")
var btnclose=document.querySelector(".btnclose")
var btnopen = document.querySelector(".btnopen")
function Close(){
    Content.style.marginLeft ="5%";
    Content.style.width="100%"
    ContentNav.style.width="95%"
    sidebar.style.width ="5%";
    btnclose.style.display="none"
    btnopen.style.display="inline"
}
function Open(){
    Content.style.marginLeft="15%"
    Content.style.width="100%"
    ContentNav.style.width="85%"
    sidebar.style.width ="15%";
    btnclose.style.display="inline"
    btnopen.style.display="none"
}
