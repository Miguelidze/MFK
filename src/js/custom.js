// operations.html
// ved.html 
// specialchecks.html
// distance.htmlfor
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

$("#resident").click(function (e) {
    e.preventDefault();
    $("#resident").addClass("current-link");
    $("#noresident").removeClass("current-link");
    $("#up").removeClass("current-link");
    $("#custom").removeClass("current-link");
    $("#resident-item").addClass("active");
    $("#noresident-item").removeClass("active");
    $("#up-item").removeClass("active");
    $("#custom-item").removeClass("active");
});
$("#noresident").click(function (e) {
    e.preventDefault();
    $("#noresident").addClass("current-link");
    $("#resident").removeClass("current-link");
    $("#up").removeClass("current-link");
    $("#custom").removeClass("current-link");
    $("#noresident-item").addClass("active");
    $("#resident-item").removeClass("active");
    $("#up-item").removeClass("active");
    $("#custom-item").removeClass("active");
});
$("#up").click(function (e) {
    e.preventDefault();
    $("#up").addClass("current-link");
    $("#resident").removeClass("current-link");
    $("#noresident").removeClass("current-link");
    $("#custom").removeClass("current-link");
    $("#up-item").addClass("active");
    $("#resident-item").removeClass("active");
    $("#noresident-item").removeClass("active");
    $("#custom-item").removeClass("active");
});
$("#custom").click(function (e) {
    e.preventDefault();
    $("#custom").addClass("current-link");
    $("#resident").removeClass("current-link");
    $("#noresident").removeClass("current-link");
    $("#up").removeClass("current-link");
    $("#custom-item").addClass("active");
    $("#resident-item").removeClass("active");
    $("#noresident-item").removeClass("active");
    $("#up-item").removeClass("active");
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

// create.html for

$('body').on('click','#showmore.more',function(e){
    e.preventDefault();
    $('.documentation__list>.documentation__item.hide').each(function () {
        $(this).removeClass('hide');
    });
    $('#showmore.more').addClass('less').removeClass('more').html('Скрыть<svg class="more-picture"><use href="./src/svg/sprite/symbol-defs.svg#icon-less" /></svg>');

});

$('body').on('click','#showmore.less',function(e){
    e.preventDefault();
    $('.documentation__list>.documentation__item').filter('[data-show="no"]').each(function () {
        $(this).addClass('hide');
        });
    $('#showmore.less').removeClass('less').addClass('more').html('Смотреть все<svg class="more-picture"><use href="./src/svg/sprite/symbol-defs.svg#icon-more" /></svg>');
});