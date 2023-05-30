
var sidebar = document.querySelector(".Sidebar")
var Content = document.querySelector(".Content")
var ContentNav= document.querySelector(".Content-Nav")
var btnclose=document.querySelector(".btnclose")
var btnopen = document.querySelector(".btnopen")
var SidebarItem = document.querySelectorAll(".Sidebar-List-title")
var SidebarDown = document.querySelectorAll(".Sidebar-Down")
$(document).ready(function(){
    $(".Sidebar-Down1").click(function(){
      $(".Sidebar-List-Items--Child1").slideToggle();
      $(".Sidebar-List-Items--Child2").slideUp();
      $(".Sidebar-List-Items--Child3").slideUp();
      $(".Sidebar-List-Items--Child4").slideUp();
    });
    $(".Sidebar-Down2").click(function(){
        $(".Sidebar-List-Items--Child2").slideToggle();
        $(".Sidebar-List-Items--Child1").slideUp();
        $(".Sidebar-List-Items--Child3").slideUp();
        $(".Sidebar-List-Items--Child4").slideUp();
      });
      $(".Sidebar-Down3").click(function(){
        $(".Sidebar-List-Items--Child3").slideToggle();
        $(".Sidebar-List-Items--Child1").slideUp();
        $(".Sidebar-List-Items--Child2").slideUp();
        $(".Sidebar-List-Items--Child4").slideUp();
      });
      $(".Sidebar-Down4").click(function(){
        $(".Sidebar-List-Items--Child4").slideToggle();
        $(".Sidebar-List-Items--Child1").slideUp();
        $(".Sidebar-List-Items--Child2").slideUp();
        $(".Sidebar-List-Items--Child3").slideUp();
      });
  });
function Close(){
    Content.style.marginLeft ="5%";
    Content.style.width="100%"
    ContentNav.style.width="95%"
    sidebar.style.width ="5%";
    btnclose.style.display="none"
    btnopen.style.display="inline"
    for (let i=0; i<SidebarItem.length; i++){
        SidebarItem[i].style.display="none"
    }
    $(".Sidebar-List-Items--Child1").slideUp();
    $(".Sidebar-List-Items--Child2").slideUp();
    $(".Sidebar-List-Items--Child3").slideUp();
    $(".Sidebar-List-Items--Child4").slideUp();
}
function Open(){
    Content.style.marginLeft="15%"
    Content.style.width="100%"
    ContentNav.style.width="85%"
    sidebar.style.width ="15%";
    btnclose.style.display="inline"
    btnopen.style.display="none"
    for (let i=0; i<SidebarItem.length; i++){
        SidebarItem[i].style.display="block"
        SidebarItem[i].style.overflow="hidden"
    }
}
$(".Sidebar-Down").click (function (){
  Open()
})
var DataAPI ='https://645b54e9a8f9e4d6e765794d.mockapi.io/Provinces/API/provinces'
fetch(DataAPI)
.then(function(response){
  return response.json()
})
.then((data) =>{
  getData(data)
})
function getData(data){
  var TotalDes = document.querySelector('.ToTal-Des')
  setTimeout(function(){
    TotalDes.innerHTML = data.length
  },2000)
 
}