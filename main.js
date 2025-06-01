// Menu

let menu_names = ['menu_coffee', 'menu_menu', 'menu_store', 'menu_responsibility', 'menu_rewards', 'menu_new'];
let menu_details_arr = document.getElementsByClassName('menu_details');
let menus = []; // li의 menu 요소 element들
for(let i of menu_names){
    menus.push(document.getElementById(i))
}
console.log(menus)

function menuHoverStyleOn(item){
    item.style.backgroundColor = "#2C2A29";
    item.style.color = "#669900";
}
function menuHoverStyleOff(item){
    item.style.backgroundColor = "transparent";
    item.style.color = "black";
}

for(let i = 0; i < menus.length; i++){
    menus[i].addEventListener('mouseenter', function(){
        menu_details_arr[i].style.display = 'block';
        menuHoverStyleOn(menus[i]);
    })
    menus[i].addEventListener('mouseleave', function(){
        setTimeout(function(){
            if(!menu_details_arr[i].matches(':hover')){
                menu_details_arr[i].style.display = 'none';
                menuHoverStyleOff(menus[i]);
            }
        }, 50);
    })

    menu_details_arr[i].addEventListener('mouseenter', function(){
        menu_details_arr[i].style.display = 'block';
        menuHoverStyleOn(menus[i])
    })
    menu_details_arr[i].addEventListener('mouseleave', function(){
        menu_details_arr[i].style.display = 'none';
        menuHoverStyleOff(menus[i]);
    })
}
 
// head 검색창 아이콘
const search_icon = document.getElementById('search_icon');
const search_box = document.getElementById('all_range_search');

search_box.addEventListener('focus', function() {
    search_icon.style.opacity = '0';
});
search_box.addEventListener('blur', function() {
    search_icon.style.opacity = '1';
});

// 최상단 이동 버튼
function scrollToTop_button_appear(element, appear_point){
    if(window.scrollY >= appear_point){
        element.style.transform = 'translateX(0px)';
    }
    else{
        element.style.transform = 'translateX(100px)';
    }
}
let scrollToTop_button = document.getElementById('scrollToTop');
$('#scrollToTop').click(function(){
    $('html, body').animate({scrollTop: 0}, 400);
});

window.addEventListener('scroll', function(){
    scrollToTop_button_appear(scrollToTop_button, 1000);
});

// 오른쪽 위 이벤트 info

const side_eventInfo_box = $('.side_eventInfo');
function head_eventInfo_appear(element, appear_point){
    if(window.scrollY >= appear_point){
        element.sty
        element.fadeOut(500);
    }
    else{
        element.fadeIn(500);
    }
}

window.addEventListener('scroll', function(){
    head_eventInfo_appear(side_eventInfo_box, 1000);
});

// visual images fade in effect

let visual_imgs = [];

visual_imgs.push([document.getElementById('visual_title')])
visual_imgs.push([document.getElementById('oatmeal_img'), document.getElementById('oatmeal_text')]);
visual_imgs.push([document.getElementById('caramel_img'), document.getElementById('caramel_text')]);
visual_imgs.push([document.getElementById('spoon')]);

let time = 1000;
let turm = 1000;
for(let i = 0; i < visual_imgs.length; i++){
    let l = visual_imgs[i].length;
    for(let j = 0; j < l; j++){
        setTimeout(function(){
            visual_imgs[i][j].classList.add('fade-in');
        }, time)
    }
    time += turm;
}

// inform text slide effect

let inform_scroll = 60; // inform_texts height값
let inform_text_arr = document.getElementsByClassName('inform_texts');
let transforms = [];
for(let i = 0; i < inform_text_arr.length; i++) transforms.push(0);


function informScroll(arr, tran, scroll){
    for(let i = 0; i < arr.length; i++){
        if(tran[i] == -120 - (scroll*i)){
            setTimeout(function(){
                tran[i] = 180 - (i*scroll);
                arr[i].style.transitionDuration = '0s';
                arr[i].style.transform = `translateY(${tran[i]}px)`;
                setTimeout(function(){
                    arr[i].style.transitionDuration = '0.5s';
                }, 100)
            }, 100);
        }
        else{
            tran[i] -= scroll;
            arr[i].style.transform = `translateY(${tran[i]}px)`;
        }
    }
}
setInterval(informScroll, 2000, inform_text_arr, transforms, inform_scroll);

// 스타벅스 프로모션 펼치기

function starbucksPromotion_click(){
    $('#promotion').slideToggle();
}

// promotion items 캐러셀
$('#promotion .inner .promotion_slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:$('#right_scroll_button'),
    prevArrow:$('#left_scroll_button'),
    dots: true,
});

// youtube section image moving effect

function floating_imgs_move(img, moveRange){
    img.style.transform = `translateY(${-moveRange}px)`;
    setTimeout(function(){
        img.style.transform = `translateY(0px)`;
    }, 5000);
}

let floating_imgs = document.getElementsByClassName('floatings');
let moveRange = 25;

let direction = 1;
for(let i = 0; i < 3; i++){
    floating_imgs_move(floating_imgs[i], moveRange*direction);
    setInterval(floating_imgs_move, 10000, floating_imgs[i], moveRange*direction);
    direction *= -1;
}


// slide in effect

let slide_in_boxs_left = document.getElementsByClassName('slide-in-left');
let slide_in_boxs_right = document.getElementsByClassName('slide-in-right');


function slide_in_effect(element, delayTime, direction){
    let rect = element.getBoundingClientRect();
    if((rect.bottom - (rect.height/2)) <= window.innerHeight){
        setTimeout(function(){
            element.style.opacity = '1';
            element.style.transform = "translateX(0px)";
            element
        }, delayTime);
    }
    else{
        element.style.opacity = '0';
        element.style.transform = `translateX(${300*direction}px)`;
    }
}

for(let i = 0; i < slide_in_boxs_left.length; i++){
    window.addEventListener('scroll', function(){
        slide_in_effect(slide_in_boxs_left[i], 0, -1);
    });
}
for(let i = 0; i < slide_in_boxs_right.length; i++){
    window.addEventListener('scroll', function(){
        slide_in_effect(slide_in_boxs_right[i], 0, 1);
    });
}

// awards 캐러셀

$('#awards .inner').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:$('#awards_right_scroll_button'),
    prevArrow:$('#awards_left_scroll_button')
})