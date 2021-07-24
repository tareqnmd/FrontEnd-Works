
var elementPosition = $(".fixed-sidebar").offset();
$(window).scroll(function () {
    navbarHeight = $('header').outerHeight() + 10;
    if ($(window).scrollTop() > elementPosition.top-navbarHeight) {
        $(".fixed-sidebar").css("position", "fixed").css({ top: navbarHeight+'px' });
    } else {
        $(".fixed-sidebar").css("position", "static");
    }
});
$(window).scroll(() => {
    topOfFooter = $('footer').position().top;
    topOfFix = $('.fixed-sidebar').position().top;
    fixSidebarHeight = $('.fixed-sidebar').outerHeight();
    scrollDistanceFromTopOfDoc = $(document).scrollTop() + fixSidebarHeight + topOfFix;
    scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;

    if (scrollDistanceFromTopOfDoc > topOfFooter) {
        $('.fixed-sidebar').css('margin-top', 0 - scrollDistanceFromTopOfFooter);
    } else {
        $('.fixed-sidebar').css('margin-top', 0);
    }
});


// // sticky and a simple way
// navbarHeight = $('header').outerHeight() + 10;
// navbarTop = $('.fixed-sidebar').offset().top;
// $('.fixed-sidebar').css({ 'position': 'sticky', 'top':navbarHeight });
