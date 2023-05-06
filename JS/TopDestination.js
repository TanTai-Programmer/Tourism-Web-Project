
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
const ImagePath = document.getElementById("Image-Path")
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
                Description: Description.value,
            })
        })
    }
    fetch(APIurl)
    .then(function(response){
      return response.json()
    })
    .then((data) =>{
      getData(data)
    })
    var ShowDemo = document.querySelector('.Content-Container-Data')
    function getData(data) {
    }

    const DataDemo = document.querySelector(".Content-Container-Data")
        IDinput.addEventListener('blur',()=>{
            if(IDinput.value===null){
                
            }
            else{
                PrintDemo()
            }
        })

    ImagePath.addEventListener('blur',()=>{
        if(ImagePath.value===''){

            }
            else{
                PrintDemo()
            }
    })
    Description.addEventListener('blur',()=>{
        if(Description.value===''){

        }
        else{
            PrintDemo()
        }
    })
    Name.addEventListener('blur',()=>{
        if(Name.value===''){

        }
        else{
            PrintDemo()
        }
    })
    function PrintDemo() {
        DataDemo.innerHTML = `
        <div class="Content-Container-Data-ID">${IDinput.value}</div>
                            <img src="${ImagePath.value}" alt="">
                            <div class="Content-Container-Data-Name">${Name.value}</div>
                            <div class="Content-Container-Data-Description">${Description.value}</div>
                            </div>
        `
    }
    

    // const imgInput = document.getElementById("Destination-img")
    // const link = new FileReader()
    // var y ='Somthing'
    // imgInput.onchange = function (){
    //     const file = imgInput.files[0];
    //         link.onload =  function GetURL(y){
    //             console.log(y.currentTarget.result)
    //             return y.currentTarget.result
    //         };
    //         console.log(link)
    //     link.readAsDataURL(file);
    // }