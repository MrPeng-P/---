
let loog = document.querySelector('.head-loog');
let navhang = document.querySelector('.nav-hang');
let lis = document.querySelectorAll('.fater>li');
// 轮播图
let ul = document.querySelector('.qie');
// 切换图
let list = document.querySelectorAll('.qie>li');
// 点击图
let lits = document.querySelectorAll('#tuxiang>li');
let bodys = document.getElementsByTagName("body");
let lie = document.querySelector('.lie');
let lie1 = document.querySelector('#lie-1');
let tab = document.querySelector('.tab');
let tab1 = document.querySelector('.tab-1');



let loogTop = navhang.offsetTop;

document.onscroll = function () {
    if (window.pageYOffset >= 40) {
        navhang.style.position = 'fixed';
        navhang.style.top = 0;
    } else {
        navhang.style.position = 'absolute';
        navhang.style.top = '0.533333rem';
    }
};




for (let o = 0; o < lits.length; o++) {

    lits[o].setAttribute('index', o);

    lits[o].onmouseover = function () {

        var index = this.getAttribute('index');
        // 干掉所有人 让其余的list 这些div 隐藏
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = 'none';
        }
        // 留下我自己 让对应的item 显示出来
        list[index].style.display = 'block';
    }
}

// let fla = 0 ;
// tab.onclick = function () {
//     if (fla == 0) {
//         tab1.style.display = 'block';
//         fla = 1;
//     } else {
//         tab1.style.display = 'none';
//         fla = 0;
//     }
// }

$(function(){
    // 米粒导航
    $('.fater>li').click(function(){
        $(this).children('ul').toggle().parent().siblings().children('ul').hide();
    })
    // 游戏列表
    $('.data-2').click(function(){
        
        $('.lie').toggle().siblings('.dianzi').hide();
        if ($('.lie').css('display') == 'block') {
            $(this).children('.nav-jian').css('transform','rotate(180deg)');
            $('.lie').siblings('.bg-55').show();
        } else {
            $(this).children('.nav-jian').css('transform','rotate(0deg)');
            $('.lie').siblings('.bg-55').hide();
        }
    })
    // 电子竞技
    $('.data-1').click(function(){
        $('.dianzi').toggle().siblings('.bg-55').toggle().siblings('.lie').hide();
        if ($('.dianzi').css('display') == 'block') {
            $(this).children('.nav-jian').css('transform','rotate(180deg)');
            $('.dianzi').siblings('.bg-55').show();
        } else {
            $(this).children('.nav-jian').css('transform','rotate(0deg)');
            $('.dianzi').siblings('.bg-55').hide();
        }
        $('.current').mousemove(function(){
            $(this).find('.xiao').show() ;
            $(this).css("width", 292);
        });
        $('.current').mouseout(function(){
            $(this).find('.xiao').hide();
            $(this).css("width", 192);
        });
    })

    $('.tab').click(function(){
        $('.tab1').toggle().siblings('.dianzi').siblings('.lie').hide();
        if ($('.tab1').css('display') == 'block') {
            $(this).children('.nav-jian').css('transform','rotate(180deg)');
            $('.tab1').siblings('.bg-55').show();
        } else {
            $(this).children('.nav-jian').css('transform','rotate(0deg)');
            $('.tab1').siblings('.bg-55').hide();
        }
    })
    
})

 