
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
                if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(ImagePath.value)==''){
                    Print()
                }
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
                    if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(ImagePath.value)==''){
                        Print()
                    }
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
                if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(ImagePath.value)==''){
                    Print()
                }
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
        if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(ImagePath.value)==''){
            Print()
        }
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
            InputAPI()
            alert('Input API Success!')
        }
});
})
    const DataDemo = document.querySelector(".Content-Container-Data")
    Print()
    function Print(){
        const DataReplace = [ReplaceFunc()]
        DataDemo.innerHTML= DataReplace.join('')
}
function ReplaceFunc(){
    return  `
    <div class="Content-Container-Data-ID">ID: 12</div>
    <img src="../Image/Picture/Ho Guom.jpg" alt="">
    <div class="Content-Container-Data-Name">HaNoi</div>
    <div class="Content-Container-Data-Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, optio expedita assumenda excepturi nemo odio ipsam incidunt magni dicta quaerat. Illo ullam aliquam cupiditate autem voluptatem voluptatum reprehenderit maxime reiciendis?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ab dolores quis rerum aspernatur at accusamus explicabo, et minus hic voluptatum possimus quo provident. Commodi aperiam dolore autem aliquid iste?
    </div>
    `
}
    function PrintDemo() {
        const DataReplace = [ReplaceFuncDemo()]
        DataDemo.innerHTML =  DataReplace.join('')
    }
    function ReplaceFuncDemo(){
        return `
        <div class="Content-Container-Data-ID">${IDinput.value}</div>
        <img src="${ImagePath.value}" alt="">
        <div class="Content-Container-Data-Name">${Name.value}</div>
        <div class="Content-Container-Data-Description">${Description.value}</div>
        </div>
        `
    }
    const BtnInput = document.querySelector('.Function-Input')
    const BtnUpdate = document.querySelector('.Function-Update')
    const UpdateForm =document.querySelector('.Update-Form')
    const UpdateFormVal = document.querySelector('.Update-Form-Val')
    const ContentDemo = document.querySelector('.Content-Container-Demo')


    BtnInput.onclick = function(){
        UpdateForm.classList.remove('Function-Active')
        UpdateFormVal.classList.add('Function-Val-Active')
        AddForm.classList.add('Function-Active')
        BtnInput.classList.add('Btn-Active')
        BtnUpdate.classList.remove('Btn-Active')
        UpdateFormVal.classList.remove('Function-Val-Active')
        // UpdateFormVal.classList.remove('Function-Val-Active')

        if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(ImagePath.value)==''){
            Print()
        }
        else{
            PrintDemo()
        }
    }
    BtnUpdate.onclick = function (){
        UpdateForm.classList.add('Function-Active')
        AddForm.classList.remove('Function-Active')
        BtnInput.classList.remove('Btn-Active')
        BtnUpdate.classList.add('Btn-Active')
        if(IDinputUpdate.value==''){
            DataDemo.style.cssText="visibility : hidden ; opacity:0"
            // Print()
        }
        else {
            UpdateAPI(IDinputUpdate.value)
        }
    }
    const IDinputUpdate = document.getElementById('ID-input')

    IDinputUpdate.addEventListener('blur', function(){
        UpdateAPI(IDinputUpdate.value)
    })
    

    function UpdateAPI (val){
        fetch(APIurl)
        .then(function(response){
            return response.json()
          })
          .then((data) =>{
            getData(data,val)
          })
        // .catch(function(error){
        //     alert(error)
        // })
    }
    function getData(data,val){
        const GetID = data.filter(FilterData)
        const PrintUpdate= GetID.map(PrintFunc)
        const CompareID = GetID.map(CompareFunc)
        const Arg=GetID.map(Printscreen)
        UpdateFormVal.innerHTML= Arg.join('')
        if(CompareID == ''){
            PrintCompare()
            DataDemo.style.cssText="visibility : visible ; opacity:1"
            // alert("Khong co diem den vui long chọn Tabs Input")
        }
        else {
            DataDemo.style.cssText="visibility : visible ; opacity:1"
            DataDemo.innerHTML=PrintUpdate.join('')
        }
        if(IDinputUpdate.value==''){
            // Print()
            // DataDemo.style.cssText="visibility : hidden ; opacity:0"
        }
        else{
            DataDemo.style.cssText="visibility : visible ; opacity:1"
        }
        // DataDemo.innerHTML=PrintUpdate.join('')
        const BtnEdit = document.querySelector(".EditBtnFunc")

        BtnEdit.addEventListener("click",()=>{
            UpdateFormVal.classList.add('Function-Val-Active')
        })
    }

    function CompareFunc(data){
        // console.log(IDinputUpdate.value)
        return data.id == IDinputUpdate.value
    }
    function PrintCompare(){
        DataDemo.innerHTML=`
        <div class="Destination-NotFound">Not Find Destination!<br> Please Chose Tab "Input Destination"</div>
        `
    }
    function FilterData(data){
        if (data.id === IDinputUpdate.value){
          return data.id
        }
      }
    function Printscreen(data){
        return`
        <div class="Destination-Input Content-Container-Function-Destination--ID">
            <label for="Desination-id">ID:</label><span class="Status StatusID">*</span><br>
            <input type="text" name="" id="ID-Update" placeholder="Example: 01" value="${data.id}">
        </div>
        <div class="Destination-Input  Content-Container-Function-Destination--Name">
            <label for="Destination-name">Destination Name:</label><span class=" Status StatusName">*</span> <br>
            <input name="" id="Name-Update" cols="30" rows="10" placeholder="Example: HaNoi" value="${data.name}">
        </div>
        <div class="Destination-Input  Content-Container-Function-Destination--Description">
            <label for="Destination--Description">Description:</label>
            <textarea name="" id="Description-Update" cols="30" rows="10" placeholder="Example: Thủ Đô Hà Nội là của nước Việt Nam; Hoàng Sa Trường Sa là của Việt Nam,....">${data.Description}</textarea>
            <span class="Status StatusDescription">*</span>
        </div>
        <div class="Destination-Input">
            <label for="Image-Path">Image-Path:</label>
            <span class="Status StatusPath">*</span> <br>
            <input type="text" name="" id="Image-Path-Update"  placeholder="../Image/Picture/HoGuom.jpg" value="${data.img}">
        </div>
        <input type="submit" value="Update"id="SubmitForm" >
        `
    }

    function PrintFunc(data){
        const ReplaceFunc = [PrintFuncData(data)]
        return ReplaceFunc
    }
    function PrintFuncData(data){
        return `
        <div class="Content-Container-Data-ID">${data.id}</div>
        <img src="${data.img}" alt="">
        <div class="Content-Container-Data-Name">${data.name}</div>
        <div class="Content-Container-Data-Description">${data.Description}</div>
        </div>
        <div class="Content-Container-Data-BtnFunction">
            <button class="BtnFunc EditBtnFunc">Edit</button>
            <button class="BtnFunc DelBtnFunc">Delete</button>
        </div>
        `
    }

        //Check trạng thái có tìm được API url hay không
        // var http=new XMLHttpRequest();
        // http.open('HEAD',`${APIurl}/${IDinputUpdate.value}`,false);
        // http.send();
        // if(http.status!= 404){
        //     console.log("Dung r ")
        // }
        // else{
        //     console.log("Sai r")
        // }
        // .then(function(response){
        //     return response.json()
        //   })
        //   .then((data) =>{
        //     getData(data)
        //   })
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