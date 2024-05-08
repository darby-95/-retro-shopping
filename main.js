//find() -- css에서 ().aa .bb) 띄어쓰기와 비슷하다.
$('.gnb>ul>li').hover(
    function () {
        //마우스를 올렸을때 할 일

        //console.log($(this))
        $(this).find('.submenu').stop().slideDown();
    },
    function () {
        //마우스가 떠나면 할 일
        $(this).find('.submenu').stop().slideUp();
})

//탭메뉴
//.parent() 부모요소
//.removeClass("class명")  --> class 이름 지우기

//$('.btn li').click(function(어떤일){  --> 클래스명 btn의 자손중 li태그를 클릭하면 어떤 일이 일어난다.
//어떤일은 함수  --> function()()
//function()(){
//    실행문(어떤일)
//}

//$(this) --> 사용자가 클릭한 li
//.index() --> 태어날때부터 가지고 있는 번호를 추출(index 번호)

$('.btn li').click(function () {
    $('.btn li').removeClass('active');
    $(this).addClass('active')

    //console.log($(this).index())

    //let index = 3;  // = 은 같다는 의미가 아닌, 
    // 우항을 좌항에 대입하라. (오른쪽의 내용을 왼쪽에 넣어라.)
    //let --> 변수를 선언하는 방법  ('index라는 변수가 생겼다'라고 선언)
    
    //console.log(index + 4) //7
    //index = index + 10
    //console.log(index)

    let index = $(this).index()
    console.log(index)

    //.hide() --> display:none;
    //.show() --> display:block;
    //.eq(index번호)
    $('.bwrap>div').hide();
    $('.bwrap>div').eq(index).show();
})


//
//setinterval(어떤 일,3000) --> 3초(3000)마다 어떤 일이 실행된다.
//setinterval(function(){어떤일},3000) --> 3초(3000)마다 어떤 일이 실행된다.

//if(조건문){조건문이 참일때, 실행되는 실행문}

//if(조건문){
//    조건문이 참일때 실행되는 실행문
//    }else {
//    조건문이 거짓일때 실행되는 실행문
//    }


let num = 0;

setInterval(function(){
    if(num<2){
    num++; //1씩 증가한다.
    }else{
        num=0;
    }
    let slidePosition=num * (-1200) + "px"; //px이란 글자는 문자이기 때문에.
    console.log(slidePosition)

    //$('.main ul').animate({실행문},시간)
    $('.main ul').animate({left:slidePosition},1000)
},3000)

// 팝업창
$('.popupOpen').click(function(e){
    e.preventDefault();
    // $('.popup').show();
    $('.popup').fadeIn(); //0.3초동안 부드럽게 창이 뜬다.
});

$('.popup .close').click(function(e){
    e.preventDefault();
    // $('.popup').hide();
    $('.popup').fadeOut(200);
})