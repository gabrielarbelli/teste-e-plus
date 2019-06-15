$(window).ready(function(){
    

});

function abreCarrinho(){
    $('.menuTopo').hide();
    $('.boxCarrinho').slideToggle(300);
}

function abreMenu(){
    $('.boxCarrinho').hide();
    $('.menuTopo').slideToggle(300);
}