$(function(){
    $('.cta').click(function() {
        $('#modal').addClass('show');
    })
    $('.modal__overlay').click(function(){
        $('#modal').removeClass('show');
    })
})