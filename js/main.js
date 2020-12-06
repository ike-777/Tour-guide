$('.gallary__slider').slick({
    arrows:true,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:true,
    slidesToShow:3,



    responsive: [
    {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
    },
        
    {
        breakpoint:850,
        settings:{
        slidesToShow:2
                }
        
  
    }
    ]
      
});




const hamburger = document.querySelector('.menu_humburger');
    if(hamburger){
        hamburger.addEventListener('click',function(event){

            event.target.closest('.menu').classList.toggle('menu_active');
        });
    }