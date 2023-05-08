// Khai báo các biến 
var DaNang =document.querySelector('#VN-DN')
var DaNangName = DaNang.getAttribute('class')
var HCM = document.querySelector('#VN-SG')
var HCMName = HCM.getAttribute('class')
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
var Gan = ''

fetch(DataAPI)
.then(function(response){
  return response.json()
})
.then((data) =>{
  getData(data)
})
function getData(data) {
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
function GetHeight (b){
  console.log(b.Description)
  return (b.Description)
}
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
        top:event.pageY -600
    } )
  });