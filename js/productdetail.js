// Carousel product

$(document).ready(function(){
    $("#product").owlCarousel({
      margin:32,
      loop: true,
      autoplay:false,
      autoplayTimeout: 3000,
      responsive: {
  
      0:{
        items:1,
        autoplay:false,
      },
  
      430:{
        items:2,
        autoplay:false,
      },
  
      576:{
        items:2,
        autoplay:false,
      },
  
      768:{
        items:3,
        
      },
  
      992:{
        items:4,
        
      },
  
      1200: {
        items: 4
      },
  
      }
  
    });
  });
  
  