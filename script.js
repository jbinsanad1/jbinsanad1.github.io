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

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    } else {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
});

