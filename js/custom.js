$(document).ready(function(){
  $('.carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:15,
    responsive:{
      0:{
        items:2
      },
      576:{
        items:3
      },
      768:{
        items:4
      },
    }
  })

  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('open')
  })
})
