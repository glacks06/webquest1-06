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

// promotion items 캐러셀
let promotions = document.getElementsByClassName('promotion_items'); // width size == 849px
let promotions_width = 849;

let isCanClick = true;

var promotion_trans = [];
var promotion_item_arr = document.getElementsByClassName('promotion_items');
for(let i = 0; i < 5; i++) promotion_trans.push(0);

promotion_opacity(); // 중앙 요소 외에는 반투명 처리
function promotion_opacity(){
    for(let i = 0; i < promotion_item_arr.length; i++){
        if(promotion_trans[i] == (promotions_width*2) - (promotions_width*i)){ // 요소가 중앙에 있는지 체크(ex: 인덱스 2번 요소가 0일때 중앙)
            promotion_item_arr[i].classList.remove('fade-middle');
            promotion_item_arr[i].classList.add('fade-in');
        }
        else{
            promotion_item_arr[i].classList.remove('fade-in');
            promotion_item_arr[i].classList.add('fade-middle');
        }
    }
}
function promotionScroll_left(){
    if(isCanClick){
        isCanClick = false;
        setTimeout(function(){isCanClick = true;}, 200);
        for(let i = 0; i < promotion_item_arr.length; i++){
            if(promotion_trans[i] >= promotions_width*(4-i)){
                setTimeout(function(){
                    promotion_trans[i] = -(promotions_width*i);
                    promotion_item_arr[i].style.transitionDuration = '0s';
                    promotion_item_arr[i].style.transform = `translateX(${promotion_trans[i]}px)`;
                    setTimeout(function(){
                        promotion_item_arr[i].style.transitionDuration = '0.5s';
                    }, 100);
                }, 100);
            }
            else{
                promotion_trans[i] += promotions_width;
                promotion_item_arr[i].style.transform = `translateX(${promotion_trans[i]}px)`;
            }
        }
    }
    promotion_opacity();
}
function promotionScroll_right(){
    if(isCanClick){
        isCanClick = false;
        setTimeout(function(){isCanClick = true;}, 200);

        for(let i = 0; i < promotion_item_arr.length; i++){
            if(promotion_trans[i] <= -(promotions_width*i)){
                setTimeout(function(){
                    promotion_trans[i] = promotions_width*(4-i);
                    promotion_item_arr[i].style.transitionDuration = '0s';
                    promotion_item_arr[i].style.transform = `translateX(${promotion_trans[i]}px)`;
                    setTimeout(function(){
                        promotion_item_arr[i].style.transitionDuration = '0.5s';
                    }, 100);
                }, 100);
    
            }
            else{
                promotion_trans[i] -= promotions_width;
                promotion_item_arr[i].style.transform = `translateX(${promotion_trans[i]}px)`;
            }
        }
        promotion_opacity();
    }
}
