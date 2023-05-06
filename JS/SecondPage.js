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
console.log(HaNoi)
var HaNoiName = HaNoi.getAttribute('class')
console.log(HaNoiName)

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
    const Arg = Replace.map(Printscreen)  //Argument: Đối số 
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
  return `
  <div class="Content__Destination--image">
      <img src="${b.img}" alt="" >
  </div>
  <p> ${b.name} </p>
  <p>${b.Description}</p>
  `
}




$( document ).on( "mousemove", function( event ) {
    $( ".Content__Destination" ).css({
        left : event.pageX -200,
        top:event.pageY -600
    } )
  });