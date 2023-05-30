
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


// const APIurl = 'http://localhost:3000/TP' //Sử dụng API là JSON Server 
const APIurl='https://645b54e9a8f9e4d6e765794d.mockapi.io/Provinces/API/provinces' // Sử dụng API là MockAPI 

function InputAPIImg() {
    const ImgURL = localStorage.getItem('img')
    fetch(APIurl,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            img:ImgURL  
        })
    })
        localStorage.removeItem('img')
}

function InputAPI(){
    // const ImgURL = localStorage.getItem('img')
        fetch(APIurl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: IDinput.value,
                name: Name.value,
                Description: Description.value,
                // img:ImgURL,
            })
        })
        .then(function(response){
            return response.json()
          })
          .then((data) =>{
            alert("Input Success!")
            getData(data)
          })
        // .catch(function(error){
        //     alert(error)
        // })
    }
    const imgInput = document.getElementById("Destination-img")
    $(document).ready(function (){
    const StatusID = document.querySelector(".StatusID")
    IDinput.addEventListener('blur', function(e) {
            CheckID()
            return CheckID()
        })
        function CheckID(){
            if(imgInput.value==''){
                Print()
            }
            const pattenID = /^\d+$/gm // Đặt biến trong hàm thì hàm chaỵ đúng; ngược lại
            if((IDinput.value)===''){
                StatusID.classList.add("Error")
                IDinput.classList.add("InputError")
                StatusID.innerHTML ='Input value!'
                if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(imgInput.value=='')){
                    Print()
                }
                else{
                    PrintDemo()
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
                    if(imgInput.value !=''){
                        PrintDemo() 
                    }
                    else{
                        PrintDemoImage()
                    }
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
                    if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(imgInput.value=='')){
                        Print()
                    }
                    else{
                        PrintDemo()
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
                        if(imgInput.value !=''){
                            PrintDemo() 
                        }
                        else{
                            PrintDemoImage()
                        }
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
                if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(imgInput.value=='')){
                    Print()
                }
                else{
                    PrintDemo()
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
                if(imgInput.value !=''){
                    PrintDemo() 
                }
                else{
                    PrintDemoImage()
                }
                return true;
            }
        }
    const link = new FileReader()
    imgInput.onchange = function (){
        const file = imgInput.files[0];
            link.onload =  function GetURL(e){
                // console.log(e.currentTarget.result)
                // callback(e.currentTarget.result)
                return callback(e.currentTarget.result)
            };
            link.readAsDataURL(file);
           function callback(a){
            const IMG = localStorage.setItem('img',a)
            PrintDemo()
            // const DataURL = localStorage.getItem('img')
            // console.log(DataURL)
            return a}
            if(imgInput.value !==''){
                console.log("Co du lieu")
              }
              else{
                console.log("Khong cos duw lieu")
              }
        }
    AddForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        if(CheckID()&&CheckName()&&CheckDesc()){
            InputAPI()
            setTimeout(() => {
                InputAPIImg()
            },2000);
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
function PrintDemoImage(){
    const DataReplace = [ReplaceFuncDemoImage()]
    DataDemo.innerHTML =  DataReplace.join('')
}
function ReplaceFuncDemoImage(){
    return `
    <div class="Content-Container-Data-ID">${IDinput.value}</div>
    <img src="" alt="">
    <div class="Content-Container-Data-Name">${Name.value}</div>
    <div class="Content-Container-Data-Description">${Description.value}</div>
    </div>
    `
}
    function PrintDemo() {
        const DataReplace = [ReplaceFuncDemo()]
        DataDemo.innerHTML =  DataReplace.join('')
    }
    function ReplaceFuncDemo(){
        const Image = localStorage.getItem('img')
        return `
        <div class="Content-Container-Data-ID">${IDinput.value}</div>
        <img src="${Image}" alt="">
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
        DataDemo.style.cssText ="visibility : visible"
        if((IDinput.value)==''&&(Name.value)==''&&(Description.value)==''&&(imgInput.value=='')){
            Print()
        }
        else if(imgInput.value!=''){
            PrintDemo()
            console.log("Data co du lieu")
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

    //Phan nay danh cho Update 
    const IDinputUpdate = document.getElementById('ID-input')
    //Bam phim la no tu tim kiem luon
    IDinputUpdate.addEventListener('keypress', function(e){
        UpdateAPI()
        if(e.key==="Enter"){
            e.preventDefault();
            UpdateAPI()
        }
    })
    IDinputUpdate.addEventListener('keydown', function(e){
        if(e.key==="Backspace"){
            // e.preventDefault();
            UpdateAPI()
        }
    })
    IDinputUpdate.addEventListener('blur', function(e){
        UpdateAPI()
    })
    function UpdateAPI (){
        fetch(APIurl)
        .then(function(response){
            return response.json()
          })
          .then((data) =>{
            getData(data)
          })
        // .catch(function(error){
        //     alert('Error Not Found Destination')
        // })
    }
    function getData(data){
        const GetID = data.filter(FilterData)
        const PrintUpdate= GetID.map(PrintFunc)
        const GetImg = GetID.map(GetImageUpdate)
        localStorage.setItem('ImgAPI',[GetImg])
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
        if(IDinputUpdate.value ==''){

        }
        else{
            DataDemo.style.cssText="visibility : visible ; opacity:1"
        }
        const IDAPI = (GetID[0].idAPI) //Sử dụng cho MockAPI 
        // const ID = (GetID[0].id) //Sử dụng cho JSON Server 
        const BtnEdit = document.querySelector(".EditBtnFunc")
        const BtnDel = document.querySelector(".DelBtnFunc")
        const BtnSubmitUpdate = document.querySelector("#SubmitFormUpdate")
        const NameUpdate =document.querySelector('#Name-Update')
        const DescriptionUpdate = document.querySelector('#Description-Update')
        const ImageUpdate = document.querySelector('#img-Update')
        const URLUpdate =(APIurl+'/'+IDAPI) //Sử dụng cho MockAPI 
        // const URLUpdate =(APIurl+'/'+ID) //Sử dụng cho Json Server 
        BtnEdit.addEventListener("click",()=>{
            UpdateFormVal.classList.add('Function-Val-Active')
        })
        BtnDel.addEventListener("click",()=>{
            fetch((URLUpdate),{
                method: 'DELETE',
            })
            .then((response)=>{
                return response.json()
            })
            .then(()=>{
                // DataDemo.remove() //Xoa khoi DOM ( nghia la khong hien len man hinh nua)=> Khong sai cai nay vi no xoa luon luc sau muon hien lai khong duoc
                alert("Delete Destination Success! ")
                // location.reload() // Tai lai trang khong nen su dung cai nay vi moi lan tai lai trang thao tac update rom ra
            })
        })
        $(document).ready(function (){
            const StatusNameUpdate= document.querySelector('.StatusNameUpdate')
            NameUpdate.addEventListener('blur',(e)=>{
                CheckNameUpdate()
            })
                function CheckNameUpdate(){
                    const pattenNameUpdate = /^[A-Za-z]+$/gm
                    if(NameUpdate.value===''){
                            StatusNameUpdate.classList.add("Error")
                            NameUpdate.classList.add("InputError")
                            StatusNameUpdate.innerHTML ='Input value!'
                            if((NameUpdate.value)==''&&(DescriptionUpdate.value)==''&&(ImageUpdate.value)==''){
                                Print()
                            }
                            else if(ImageUpdate.value !=''){
                                PrintDemoUpdate()
                            }
                            else{
                                PrintDemoUpdateImg()
                            }
                            BtnSubmitUpdate.style.cssText='visibility:hidden; opacity:0'
                            return false
                    }
                    else{
                            if(pattenNameUpdate.test(NameUpdate.value)){
                                NameUpdate.classList.add("InputSuccess")
                                NameUpdate.classList.remove("InputError")
                                StatusNameUpdate.classList.add("Success")
                                StatusNameUpdate.classList.remove("Error")
                                StatusNameUpdate.innerHTML='*'
                                BtnSubmitUpdate.style.cssText='visibility:visible; opacity:1'
                                if(ImageUpdate.value==''){
                                    PrintDemoUpdateImg()
                                }
                                else{
                                    PrintDemoUpdate()
                                }
                                return true;
                            }
                             else{
                                NameUpdate.classList.add("InputError")
                                NameUpdate.classList.remove("InputSuccess")
                                StatusNameUpdate.classList.add("Error")
                                StatusNameUpdate.classList.remove("Success")
                                StatusNameUpdate.innerHTML='Error !! Please input value is string letter'
                                BtnSubmitUpdate.style.cssText='visibility:hidden; opacity:0'
                                return false
                            } 
                    }
            }
            const StatusDescUpdate = document.querySelector(".StatusDescriptionUpdate")
            DescriptionUpdate.addEventListener('blur', function(e){

                CheckDesc()
            })
                function CheckDesc(){
                    if(DescriptionUpdate.value==''){
                        DescriptionUpdate.classList.add("InputError")
                        DescriptionUpdate.classList.remove("InputSuccess")
                        StatusDescUpdate.classList.add("Error")
                        StatusDescUpdate.innerHTML ='Input value!'
                        if((NameUpdate.value)==''&&(DescriptionUpdate.value)==''&&(ImageUpdate.value)==''){
                            Print()
                        }
                        else if(ImageUpdate.value !=''){
                            PrintDemoUpdate()
                        }
                        else{
                            PrintDemoUpdateImg()
                        }
                        SubmitForm.style.cssText='visibility:hidden; opacity:0'
                        return false;
                    }
                    else{
                        DescriptionUpdate.classList.add("InputSuccess")
                        DescriptionUpdate.classList.remove("InputError")
                        StatusDescUpdate.classList.add("Success")
                        StatusDescUpdate.classList.remove("Error")
                        StatusDescUpdate.innerHTML =("*")
                        SubmitForm.style.cssText='visibility:visible; opacity:1'
                        if(ImageUpdate.value !=''){
                            PrintDemoUpdate()
                        }
                        else{
                            PrintDemoUpdateImg()
                        }
                        return true;
                    }
            }
            const link = new FileReader()
            ImageUpdate.onchange = function (){
                const file = ImageUpdate.files[0];
                    link.onload =  function GetURL(e){
                        return callback(e.currentTarget.result)
                    };
                    link.readAsDataURL(file);
                   function callback(a){
                    const IMGUpdate = localStorage.setItem('imgUpdate',a)

                    // const DataURL = localStorage.getItem('img')
                    // console.log(DataURL)
                    if(ImageUpdate.value !==''){
                        PrintDemoUpdate()
                      }
                      else{
                        console.log("Khong cos duw lieu")
                      }
                    return a}
                }
            function PrintDemoUpdateImg(){
                const DataReplace = [ReplaceFuncDemoUpdateImg()]
                DataDemo.innerHTML =  DataReplace.join('')
            }
            function ReplaceFuncDemoUpdateImg(){
                const GetImgAPI = localStorage.getItem('ImgAPI')
                return `
                <div class="Content-Container-Data-ID">${IDinputUpdate.value}</div>
                <img src="${GetImgAPI}" alt="">
                <div class="Content-Container-Data-Name">${NameUpdate.value}</div>
                <div class="Content-Container-Data-Description">${DescriptionUpdate.value}</div>
                </div>
                `
            }
            function PrintDemoUpdate() {
                const DataReplace = [ReplaceFuncDemoUpdate()]
                DataDemo.innerHTML =  DataReplace.join('')
            }
            function ReplaceFuncDemoUpdate(){
                const GetImgUpdate = localStorage.getItem('imgUpdate')
                return `
                <div class="Content-Container-Data-ID">${IDinputUpdate.value}</div>
                <img src="${GetImgUpdate}" alt="">
                <div class="Content-Container-Data-Name">${NameUpdate.value}</div>
                <div class="Content-Container-Data-Description">${DescriptionUpdate.value}</div>
                </div>
                `
            }

            BtnSubmitUpdate.addEventListener("click",(e)=>{
                const ImgUpdate = localStorage.getItem('imgUpdate')
                const ImgAPI = localStorage.getItem('ImgAPI')
                e.preventDefault() //Không sử dụng submit được tại bấm là nó tải lại trang luôn r :) 
                if(ImageUpdate.value == '')
                fetch((URLUpdate),{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: IDinputUpdate.value,
                        name: NameUpdate.value,
                        Description: DescriptionUpdate.value,
                        img:ImgAPI,
                    })
                })
                else{
                    fetch((URLUpdate),{
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: IDinputUpdate.value,
                            name: NameUpdate.value,
                            Description: DescriptionUpdate.value,
                            img:ImgUpdate,
                        })
                    })  
                }
                localStorage.removeItem('imgUpdate')
                localStorage.removeItem('ImgAPI')
                alert("Update Destination Success! ")
            })
})          
    }
    function GetImageUpdate(data){
        return data.img
    }
    function CompareFunc(data){
        return data.id == IDinputUpdate.value
    }
    function PrintCompare(){
        DataDemo.innerHTML=`
        <div class="Destination-NotFound">Not Find Destination!<br> Please Chose Tab "Input Destination"</div>
        `
    }
    function FilterData(data){
        if (data.id === IDinputUpdate.value){

          return data.idAPI // Sử dụng cho MockAPI
        //   return data.id // Sử dụng cho JSON Server 
        }
      }
    function Printscreen(data){
        return`
        <div class="Destination-Input  Content-Container-Function-Destination--Name">
            <label for="Destination-name">Destination Name:</label><span class=" Status StatusNameUpdate">*</span> <br>
            <input name="" id="Name-Update" cols="30" rows="10" placeholder="Example: HaNoi" value="${data.name}">
        </div>
        <div class="Destination-Input  Content-Container-Function-Destination--Description">
            <label for="Destination--Description">Description:</label>
            <textarea name="" id="Description-Update" cols="30" rows="10" placeholder="Example: Thủ Đô Hà Nội là của nước Việt Nam; Hoàng Sa Trường Sa là của Việt Nam,....">${data.Description}</textarea>
            <span class="Status StatusDescriptionUpdate">*</span>
        </div>
        <div  class="Destination-Input  Content-Container-Function-Destination--Image">
        <label for="img-Update">Image Link:</label> <br>
        <input type="file" id="img-Update" >
        </div>
        <input type="submit" value="Update"id="SubmitFormUpdate" >
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