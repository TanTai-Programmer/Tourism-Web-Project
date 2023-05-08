
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
const SubmitForm =document.getElementById("SubmitForm")


const APIurl = 'http://localhost:3000/TP'

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
                img:ImagePath.value,
            })
        })
    }
    $(document).ready(function (){
    const StatusID = document.querySelector(".StatusID")
    IDinput.addEventListener('blur', function(e) {
            CheckID()
            return CheckID()
        })
        function CheckID(){
            const pattenID = /^\d+$/gm // Đặt biến trong hàm thì hàm chaỵ đúng; ngược lại
            if((IDinput.value)===''){
                StatusID.classList.add("Error")
                IDinput.classList.add("InputError")
                StatusID.innerHTML ='Input value!'
                SubmitForm.style.cssText='visibility:hidden;opacity:0'
                return false;
            }
            else {
                if(pattenID.test(IDinput.value)){
                    IDinput.classList.add("InputSuccess")
                    IDinput.classList.remove("InputError")
                    StatusID.classList.add("Success")
                    StatusID.classList.remove("Error")
                    StatusID.innerHTML='*'
                    SubmitForm.style.cssText='visibility:visible; opacity:1'
                    PrintDemo()
                    return true
                }
                 else{
                    IDinput.classList.add("InputError")
                    IDinput.classList.remove("InputSuccess")
                    StatusID.classList.add("Error")
                    StatusID.classList.remove("Success")
                    StatusID.innerHTML='Error !! Please input value is string numbers'
                    SubmitForm.style.cssText='visibility:hidden;opacity:0'
                    return false
                }
            }    
        }
    const StatusName =document.querySelector(".StatusName")
    Name.addEventListener('blur', function(e) {
        CheckName()
    })
        function CheckName(){
            const pattenName = /^[A-Za-z]+$/gm
            if(Name.value===''){
                    StatusName.classList.add("Error")
                    Name.classList.add("InputError")
                    StatusName.innerHTML ='Input value!'
                    SubmitForm.style.cssText='visibility:hidden; opacity:0'
                    return false
            }
            else{
                    if(pattenName.test(Name.value)){
                        Name.classList.add("InputSuccess")
                        Name.classList.remove("InputError")
                        StatusName.classList.add("Success")
                        StatusName.classList.remove("Error")
                        StatusName.innerHTML='*'
                        SubmitForm.style.cssText='visibility:visible; opacity:1'
                        PrintDemo()
                        return true;
                    }
                     else{
                        Name.classList.add("InputError")
                        Name.classList.remove("InputSuccess")
                        StatusName.classList.add("Error")
                        StatusName.classList.remove("Success")
                        StatusName.innerHTML='Error !! Please input value is string letter'
                        SubmitForm.style.cssText='visibility:hidden; opacity:0'
                        return false
                    } 
            }
        }
    const StatusDesc = document.querySelector(".StatusDescription")
    Description.addEventListener('blur', function(e){
        CheckDesc()
    })
        function CheckDesc(){
            if(Description.value==''){
                Description.classList.add("InputError")
                Description.classList.remove("InputSuccess")
                StatusDesc.classList.add("Error")
                StatusDesc.innerHTML ='Input value!'
                SubmitForm.style.cssText='visibility:hidden; opacity:0'
                return false;
            }
            else{
                Description.classList.add("InputSuccess")
                Description.classList.remove("InputError")
                StatusDesc.classList.add("Success")
                StatusDesc.classList.remove("Error")
                StatusDesc.innerHTML =("*")
                SubmitForm.style.cssText='visibility:visible; opacity:1'
                PrintDemo()
                return true;
            }
        }

    const StatusPath = document.querySelector(".StatusPath")
   ImagePath.addEventListener ('blur', function (e) {
    CheckPath()
   })
        function CheckPath(){
        const pattenPath = /(^[(..)+(\/)]{3})/gm
    if (ImagePath.value==''){
        ImagePath.classList.add("InputError")
        ImagePath.classList.remove("InputSuccess")
        StatusPath.classList.add("Error")
        Name.classList.add("InputError")
        StatusPath.innerHTML ='Input path'
        SubmitForm.style.cssText='visibility:hidden; opacity:0'
        return false;
    }
    else{
        if(pattenPath.test(ImagePath.value)){
            ImagePath.classList.add("InputSuccess")
            ImagePath.classList.remove("InputError")
            StatusPath.classList.add("Success")
            StatusPath.classList.remove("Error")
            StatusPath.innerHTML='*'
            SubmitForm.style.cssText='visibility:visible; opacity:1'
            PrintDemo()
            return  true
        }
         else{
            ImagePath.classList.add("InputError")
            ImagePath.classList.remove("InputSuccess")
            StatusPath.classList.add("Error")
            StatusPath.classList.remove("Success")
            StatusPath.innerHTML='Error !! Please input value is path'
            SubmitForm.style.cssText='visibility:hidden; opacity:0'
            return false
        } 
    }}
    AddForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        if(CheckID()&&CheckName()&&CheckDesc()&&CheckPath()){
            console.log(true)
            InputAPI()
        }
        else{
            console.log(false)
        }
});
})
    const DataDemo = document.querySelector(".Content-Container-Data")
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