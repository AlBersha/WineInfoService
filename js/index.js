function openMenu() {
    if($('.menu_block').hasClass('menu_block_active')){
        $('.menu_block').removeClass('menu_block_active');
    }
    else{
        $('.menu_block').addClass('menu_block_active');
    }
}

function closeMenu() {
    $('.menu_block').removeClass('menu_block_active')
}

function scrollWin() {
    window.scrollTo(0, 600);
}
