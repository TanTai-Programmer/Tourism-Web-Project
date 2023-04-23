var DaNang =document.querySelector('#VN-DN')
var Showtest=document.querySelector('#VNSG');
var html=document.querySelector('.Test__Destination')
var testAPI ='http://localhost:3000/TP'
// html.innerHTML='<div>Test</div>'
var Provide = DaNang.getAttribute("id")
console.log(Provide)

DaNang.onmouseover=myfunc
function myfunc(){
    fetch(testAPI)
  .then(function(response) {
    return response.json()
  })
  .then(function(callback){
    gettest(callback)
  })
}
function gettest(a) {
    var list =a.map(function(a){
      return `<p>${a} </p>
      <img src="${a}">`
    })
    html.innerHTML = list.join('')
  }
$( document ).on( "mousemove", function( event ) {
    $( ".Test__Destination" ).css({
        left : event.pageX -200,
        top:event.pageY -600
    } )
  });
Showtest.onmouseout=Remo
function Remo(){
    html.innerHTML=''
}
var ShowHN =document.getElementById('VN-40')
ShowHN.onmouseover=myfunc
ShowHN.onmouseout=Remo
DaNang.onmouseout =Remo