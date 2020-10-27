$(function () {

		var $work = $('#work'),
        $article = $work.find('article'),
        $modal = $('.modal'),
        $overlay = $modal.find('.overlay'),
        $pop = $modal.find('.pop-screen'),
        $close = $modal.find('.close-btn');

		//pop-up	
   
		$article.on('click', function () {
      var i = $(this).index();
      $overlay.eq(i).fadeIn();
      $pop.fadeIn();
			$('body').css({overflowY: 'hidden'});
		});

		/*close*/
		$close.on('click', function (e) {
			e.preventDefault();
      $pop.hide();
      $overlay.stop().animate({scrollTop: 0},0);
      $overlay.hide();
			$('body').css({overflowY: 'scroll'});
		});
  

	});