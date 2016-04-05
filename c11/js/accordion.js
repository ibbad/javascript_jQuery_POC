/**
 * Created by ebad on 5.4.2016.
 */
$('.accordion').on('click', '.accordion-control', function (e) {
    e.preventDefault();
    $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
});