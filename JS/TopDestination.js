
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
const AddForm = document.querySelector(".Add-Form")
const IDinput = document.getElementById("Desination-id")
const Name = document.getElementById("Destination-name")
const Description = document.getElementById("Destination--Description")

const APIurl = 'http://localhost:3000/TP'
AddForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    InputAPI();
})
function InputAPI(){
        fetch(APIurl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: IDinput.value,
                name: Name.value,
                description: Description.value,
                img: "a"
            })
        })
    }
var the;
var Gan ;
var thay ;
Getimg()
function Getimg(){
    const imgInput = document.getElementById("Destination-img")
    imgInput.addEventListener('change',(e)=>{
        const file = imgInput.files[0];
        const reader = new FileReader();
                
        reader.addEventListener("load", () => {
            ExportURL(reader.result)
            Gan = the 
            console.log(Gan)
            return Gan;
        });
        setTimeout(() => {
            console.log(Gan)
        }, 100); // Phai doi 1 day thi Gan moi co ket qua 
        //Ngu da thu sai Callback hoac Promise 
        reader.readAsDataURL(file);

        })
    function ExportURL(url){
        // console.log(url)
        the=url
        return the;
    }
}