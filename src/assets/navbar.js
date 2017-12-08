$(function () {
    // Set up to handle wrapping of tab menu (tab actuator) items
    $(window).resize(function () {
        checkIfWrapped();
    });

    checkIfWrapped(); // Make sure the function is fired upon document ready
});

// Detect whether a Semantic UI tabular menu is wrapped
function checkIfWrapped() {
    var pos_top_1st = $('.tabular.menu .item').first().position().top;
    $('.tabular.menu .item:not(first-child)').each(function () {
        var pos_top = $(this).position().top;
        if (pos_top > pos_top_1st) {
            $(this).parent().addClass('wrapped');
            return;
        } else if (pos_top == pos_top_1st) {
            $(this).parent().removeClass('wrapped');
        }
    });
};