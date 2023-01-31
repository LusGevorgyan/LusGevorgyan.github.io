// menu-btn-click-function
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}

// theme-click-function
let themeToogler = document.querySelector('#theme-toogler');
themeToogler.onclick = () => {
    themeToogler.classList.toggle('fa-sun');
    if(themeToogler.classList.contains('fa-sun')){
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

// animation function
var typed = new Typed( ".typing", {
    strings: ["Lusine", "Enginer", "Accountant", "Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Year function
document.querySelector('.credits').innerHTML = ` 
    <span>   
        Created by LusGevorgyan|
        <i class="far fa-copyright"> </i> 
        <span> ${(new Date).getFullYear()}</span>
        All rights reserved.
    </span>
`

// Carousel function
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverpause: true,
  responsive: {
    0: {
      items: 0,
      nav: false
    },
    200: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    },
  }
});
