console.log('It works')

$(document).ready(function () {
    $('.submit').click(function (event) {
    event.preventDefault()
    console.log('Clicked button')

    var search = $('.search').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(search.length >= 10){
     console.log('<div>Is valid</div>')}
    else {
     statusElm.append('<div></div>')
    }
    })
})