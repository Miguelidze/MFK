// operations.html for
$("#tarifs").click(function (e) {
    e.preventDefault();
    $("#tarifs").addClass("current-link");
    $("#docs").removeClass("current-link");
    $("#tarifs-item").addClass("active");
    $("#docs-item").removeClass("active");
});
$("#docs").click(function (e) {
    e.preventDefault();
    $("#docs").addClass("current-link");
    $("#tarifs").removeClass("current-link");
    $("#docs-item").addClass("active");
    $("#tarifs-item").removeClass("active");
});

$('body').on('click','#showmore.more',function(e){
    e.preventDefault();
    $('.operations__documentation-kind.active>.operations__documentation-file.hide').each(function () {
        $(this).removeClass('hide');
    });
    $('#showmore.more').addClass('less').removeClass('more').html('Скрыть<svg class="more-picture"><use href="./src/svg/sprite/symbol-defs.svg#icon-less" /></svg>');

});

$('body').on('click','#showmore.less',function(e){
    e.preventDefault();
    $('.operations__documentation-kind.active>.operations__documentation-file').filter('[data-show="no"]').each(function () {
        $(this).addClass('hide');
        });
    $('#showmore.less').removeClass('less').addClass('more').html('Смотреть все<svg class="more-picture"><use href="./src/svg/sprite/symbol-defs.svg#icon-more" /></svg>');
});

// accountopen.html for

$("#resident,#noresident,#up,#custom").click(function (e) {
    e.preventDefault();
    $("#resident").toggleClass("current-link");
    $("#noresident").toggleClass("current-link");
    $("#up").toggleClass("current-link");
    $("#custom").toggleClass("current-link");
    $("#resident-item").toggleClass("active");
    $("#noresident-item").toggleClass("active");
    $("#up-item").toggleClass("active");
    $("#ncustom-item").toggleClass("active");
});
// $("#noresident").click(function (e) {
//     e.preventDefault();
//     $("#noresident").toggleClass("current-link");
//     $("#resident").toggleClass("current-link");
//     $("#noresident-item").toggleClass("active");
//     $("#resident-item").toggleClass("active");
// });

$('body').on('click','#showmore.more',function(e){
    e.preventDefault();
    $('.operations__documentation-kind.active>.operations__documentation-file.hide').each(function () {
        $(this).removeClass('hide');
    });
    $('#showmore.more').addClass('less').removeClass('more').html('Скрыть<svg class="more-picture"><use href="./src/svg/sprite/symbol-defs.svg#icon-less" /></svg>');

});

$('body').on('click','#showmore.less',function(e){
    e.preventDefault();
    $('.operations__documentation-kind.active>.operations__documentation-file').filter('[data-show="no"]').each(function () {
        $(this).addClass('hide');
        });
    $('#showmore.less').removeClass('less').addClass('more').html('Смотреть все<svg class="more-picture"><use href="./src/svg/sprite/symbol-defs.svg#icon-more" /></svg>');
});