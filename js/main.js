$(window).on('load', function () {
    var $preloader = $('#p_prldr');
        setInterval(function(){
         	$preloader.addClass('animation_prld') 
     	}, 2000);

     	setInterval(function(){
     		$('.prldr_part_1').addClass('prldr_part_1_anim');
     		$('.prldr_part_2').addClass('prldr_part_2_anim');

     	},2500);
     	$preloader.delay(3000).fadeOut('slow');
    
   
});