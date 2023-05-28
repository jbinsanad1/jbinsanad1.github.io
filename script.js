new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor : ['#081b29', '#081b29','#081b29','#081b29'],
    navigation: true,
    slidesNavigation: true,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'finalPage'],
    navigationTooltips:['Home', 'About', 'Services', 'Contact Us']
});

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
