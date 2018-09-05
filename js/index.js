/**
 * 文档就绪
 */
$(function(){
	
	//回到顶部按钮
	var topcontrol = $('#topcontrol');
	
	//导航条对象
	var nav = $('.nav-wrap');
	
	//导航条相对于网页原点的垂直位置
	var navPos = nav.offset().top;
	
	//导航条的高度
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function(){
		
		//获得滚动条的位置
		var sTop = $(window).scrollTop();
		
		//判断滚动条位置，动态显示隐藏回到顶部按钮
		if (sTop >= 200) {
			topcontrol.fadeIn('normal');
		} else {
			topcontrol.fadeOut('normal');
		}
		
		//自动给导航条加fixed样式
		if (sTop >= navPos) {
			if ( !nav.hasClass('fix') ) {
				nav.addClass('fix');
				$('.banner').css('margin-bottom',navHeight);//占位
			}			
		} else {
			if ( nav.hasClass('fix') ) {
				nav.removeClass('fix');
				$('.banner').css('margin-bottom',0);//取消占位
			}			
		}	
		
		//判断是否进入了海量正版免费下的区域
		var introPos = {
			start:$('#post-intro').offset().top - navHeight,
			end:$('#post-intro').offset().top+$('#post-intro').outerHeight() - navHeight 
		}
		
		if (sTop >= introPos.start && sTop < introPos.end) {
			$('.intro').addClass('active');
		} else {
			$('.intro').removeClass('active');
		}
		
		//判断是否进入了无需苹果账号的区域
		var usagePos = {
			start:$('#post-usage').offset().top - navHeight,
			end:$('#post-usage').offset().top+$('#post-usage').outerHeight() - navHeight 
		}
		
		if (sTop >= usagePos.start && sTop < usagePos.end) {
			$('.usage').addClass('active');
		} else {
			$('.usage').removeClass('active');
		}
		
		//判断是否进入了手机瘦身的区域
		var choicePos = {
			start:$('#choiceness').offset().top - navHeight,
			end:$('#choiceness').offset().top+$('#choiceness').outerHeight() - navHeight 
		}
		
		if (sTop >= choicePos.start && sTop < choicePos.end) {
			$('.choice').addClass('active');
		} else {
			$('.choice').removeClass('active');
		}				
				
	});
	
	//回到顶部按钮单击
	topcontrol.click(function(){
		
		$('html,body').animate({scrollTop:0},1000);		
		
	});
	
	//网页内部锚点链接跳转
	$('.nav-wrap a').click(function(){
		
		//获得对应区域的相对于网页原点的位置
		var top = $(this.hash).offset().top - navHeight + 7;
				
		//动画过渡到锚点链接
		$('html,body').animate({scrollTop:top},1000);
		
		return false;
	});
		
});
