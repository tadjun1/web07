$(function(){
  
 var winH = $(window).height(),
     $main = $('main'),
     $section = $main.find('section'),
     $gnb = $('.gnb'),
     
     sp = 1000,
     easing = 'easeOutExpo';
  
 //브라우저 높이값 == section 높이값 
 $section.height(winH);
  
 //브라우저 크기가 바뀌어도 == section 높이값
 $(window).on('resize', function(){
   $section.height($(window).height());
 });
  
 //section 층층이 배치하기<==CSS 처리가 편함
 /* $section.each(function(i){
   $(this).css({
     top: 100 * i + '%'
   })
 });*/
  
 //gnb 앵커 클릭==> 같은 순번의 section으로 이동 
 $gnb.on('click', 'a', function(e){
   e.preventDefault();
  
   var winH = $(window).height(),
       aIndex = $(this).index(),
       posY = winH * aIndex;
   
   $('html, body').stop().animate({
     scrollTop: posY
   }, sp, easing)
   
 });
  
 //스크롤 시 위, 아래로 화면 이동시키기
  /*
  before(), after() ==> HTML 요소 삽입
  prev(), next() ==> HTML 요소 선택
  */
    
  
 $section.on('mousewheel', function(e, delta){
   e.preventDefault();
   
   var sIndex = $(this).index(),
       first = 0,
       last = $section.length - 1;
     
   if(delta > 0 && sIndex != first) {
     var before = $(this).prev().offset().top;
     
     $('html, body').stop().animate({
       scrollTop: before
     }, sp, easing)
         
   } else if(delta < 0 && sIndex != last) {
     var after = $(this).next().offset().top;
     
     $('html, body').stop().animate({
       scrollTop: after
     }, sp, easing)
     
   }
   
 });
  
 //스크롤바 상단 값에 해당하는 gnb 앵커 활성화시키기
 $(window).on('scroll', function(){
   var winH = $(window).height(),
       scrollTop = $(window).scrollTop() + winH/2,
       count = $section.length;
   
   for(var i=0; i<count; i++){
     if(scrollTop >= winH * i && scrollTop < winH*(i+1)){
       $gnb.children().removeClass();
       $gnb.find('a').eq(i).addClass('on');
     }
   }
   
 });
  
 //스크롤 이벤트 실행 
 $(window).trigger('scroll');
	
	
		var $win = $(window),
			$logo = $('#piclogo'),
			$bear = $('#picbear'),
			$bgC = $('#bg-c'),
			$bgB = $('#bg-b'),

		currentIndex = 0,
		sp = 1500,
		easing = 'easeOutSine';

	$win.scroll(function () {
		var value = $win.scrollTop();
		
		$bear.css({
			top: 30 + value * 0.3
		});
		$logo.css({
			top: 50 + value * 0.8
		});
	});
	
	 var $img = $('.parallax').children('img');

  $win.mousemove(function (e) {
    //마우스 좌표값 변수에 저장하기
    var mx = e.pageX,
        my = e.pageY;

		//좌표값에 나누기를 쓴 이유는 움직임값을 줄이기 위해
    $img.eq(0).css({
      left: 60 - (mx/220) + 'vw',
      top: 60 - (my/220) + 'vh',
    });
    $img.eq(1).css({
      left: 60 - (mx/190) + 'vw',
      top: 60 - (my/190) + 'vh'
    });

    $img.eq(2).css({
      left: 60 - (mx/160) + 'vw',
      top: 60 - (my/160) + 'vh'
    });
    $img.eq(3).css({
      left: 60 - (mx/130) + 'vw',
      top: 60 - (my/130) + 'vh'
    });
    
    $img.eq(4).css({
      left: 60 - (mx/100) + 'vw',
      top: 60 - (my/100) + 'vh'
    });
  
  });
  
});


























