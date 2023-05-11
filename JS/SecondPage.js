// Khai báo các biến 
var AnGiang = document.querySelector('#VN-44')
var AnGiangName =AnGiang.getAttribute('class')
var BaRiaVungTau = document.querySelector('#VN-43')
var BaRiaVungTauName = BaRiaVungTau.getAttribute('class')
var BacGiang =document.querySelector('#VN-54')
var BacGiangName = BacGiang.getAttribute('class')
var BacKan = document.querySelector('#VN-53')
var BacKanName = BacKan.getAttribute('class')
var BacLieu = document.querySelector('#VN-55')
var BacLieuName = BacLieu.getAttribute('class')
var BacNinh =document.querySelector('#VN-56')
var BacNinhName = BacNinh.getAttribute('class')
var BenTre = document.querySelector('#VN-50')
var BenTreName = BenTre .getAttribute('class')
var BinhDinh =document.querySelector('#VN-31')
var BinhDinhName = BinhDinh.getAttribute('class')
var BinhDuong = document.querySelector('#VN-57')
var BinhDuongName= BinhDuong.getAttribute('class')
var BinhPhuoc = document.querySelector('#VN-58')
var BinhPhuocName = BinhPhuoc.getAttribute('class')

var DaNang =document.querySelector('#VN-DN')
var DaNangName = DaNang.getAttribute('class')
var HCM = document.querySelector('#VN-SG')
var HCMName = HCM.getAttribute('class')
var CanTho = document.querySelector('#VN-CT')
var CanThoName = CanTho.getAttribute('class')
var DongNai = document.querySelector('#VN-39')
var DongNaiName = DongNai.getAttribute('class')
var BinhThuan = document.querySelector('#VN-40')
var BinhThuanName = BinhThuan.getAttribute('class')
var QuangBinh = document.querySelector('#VN-24')
var QuangBinhName = QuangBinh.getAttribute('class')
var HaNoi = document.querySelector('#VN-HN')
var HaNoiName = HaNoi.getAttribute('class')
var  QuangTri = document.querySelector('#VN-25')
var QuangTriName = QuangTri.getAttribute('class')

//In ra màn hình
var html=document.querySelector('.Content__Destination')

//Lấy dữ liệu API gán 
var DataAPI ='http://localhost:3000/TP'
// var DataAPI ='https://645b54e9a8f9e4d6e765794d.mockapi.io/Provinces/API/provinces'
var Gan = ''

fetch(DataAPI)
.then(function(response){
  return response.json()
})
.then((data) =>{
  getData(data)
})
function getData(data) {
  AnGiang.onmouseover = ()=>{
    getDataName (AnGiangName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen) //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  AnGiang.onmouseout = Remo
  BaRiaVungTau.onmouseover = ()=>{
    getDataName (BaRiaVungTauName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen) //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  BaRiaVungTau.onmouseout =Remo
  BacKan.onmouseover = ()=>{
    getDataName(BacKanName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen) //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  BacKan.onmouseout = Remo
  BacLieu.onmouseover = ()=>{
    getDataName(BacLieuName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen) //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  BacLieu.onmouseout = Remo
  CanTho.onmouseover = ()=>{
    getDataName (CanThoName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen) //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  CanTho.onmouseout = Remo
  QuangTri.onmouseover = ()=>{
    getDataName (QuangTriName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen) //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  QuangTri.onmouseout = Remo
  HaNoi.onmouseover = ()=>{
    getDataName (HaNoiName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen)  //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  HaNoi.onmouseout = Remo
  DaNang.onmouseover = ()=>{
    getDataName (DaNangName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen)  //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  DaNang.onmouseout = Remo
  BinhThuan.onmouseover = ()=>{
    getDataName (BinhThuanName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen)  //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  BinhThuan.onmouseout = Remo
  DongNai.onmouseover = ()=>{
    getDataName (DongNaiName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen)  //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  DongNai.onmouseout = Remo
  QuangBinh.onmouseover = ()=>{
    getDataName (QuangBinhName)
    const Replace = data.filter(FilterData)
    const Arg = Replace.map(Printscreen) //Argument: Đối số 
    html.innerHTML = Arg.join('')
  }
  QuangBinh.onmouseout = Remo
  HCM.onmouseover= ()=>{
    getDataName(HCMName)
    const Replace = data.filter(FilterData)
    const Arg=Replace.map(Printscreen)
    html.innerHTML=Arg.join('')
  }
  HCM.onmouseout = Remo
  function Remo(){
    html.innerHTML=''
}
}
function FilterData(a){
  if (a.name === Gan){
    return a.name === Gan
  }
}
function getDataName (data){
  Gan = data
  return Gan
}
function Printscreen(b){
  return  `
  <div class="Content__Destination--ID">${b.id}</div>
  <img src="${b.img}" alt="">
  <div class="Content-Destination-Data-Name">${b.name}</div>
  <div class="Content-Destination-Data-Description">
    <div class="Content-Destination-Data-Description--Content">${b.Description}</div>
  </div>
  <div class="Content-Destination-Data-Seemore">Click on province to see more <i class="fas fa-hand-point-down"></i> </div>
  `
}
// function GetHeight (b){
//   console.log(b.Description)
//   return (b.Description)
// }
var DescriptionScroll = document.querySelector(".Content-Destination-Data-Description--Content")
function startScroll(){
    let id = setInterval(function() {
      DescriptionScroll.scrollBy(0, 1);
    }, 30);
    return id;
}

$( document ).on( "mousemove", function( event ) {
    $( ".Content__Destination" ).css({
        left : event.pageX -150,
        top:event.pageY -550
    } )
  });