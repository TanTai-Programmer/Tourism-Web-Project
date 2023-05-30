var Namedata = $('.NameAPI')
var NameAPI = localStorage.getItem('namedata')
var Description = $('.DescriptionAPI')
var DescriptionAPI = localStorage.getItem('Descriptiondata')
var ImgAPI = document.querySelector('.ImageAPI')
var ImgStore = localStorage.getItem('imgdata')
Namedata.html(NameAPI)
Description.html(DescriptionAPI)
ImageShow(ImgStore)
function ImageShow(ImgStore){
    var img = `<img src="${ImgStore}" alt=""> `
    ImgAPI.innerHTML = img
}