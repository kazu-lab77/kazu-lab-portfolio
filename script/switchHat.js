/*
 + JQuery         : switchHat.js 0.10
 +
 + Author         : Takashi Hirasawa
 + Special Thanks : kotarok (http://nodot.jp/)
 + Copyright (c) 2010 CSS HappyLife (http://css-happylife.com/)
 + Licensed under the MIT License:
 + http://www.opensource.org/licenses/mit-license.php
 +
 + Since    : 2010-06-24
 + Modified : 2010-06-27
 */

(function($) {

	$(function(){
		$.uHat.switchHat();
		$.uHat.close();
		$.uHat.openAll();
	});

	$.uHat = {

		switchHat: function(settings) {
			uHatConA = $.extend({
				switchBtn: '.switchHat',
				switchContents: '.switchDetail',
				switchClickAddClass: 'nowOpen'
			}, settings);
			$(uHatConA.switchContents).hide();
			$(uHatConA.switchBtn).addClass("switchOn").click(function(){
				var index = $(uHatConA.switchBtn).index(this);
				$(uHatConA.switchContents).eq(index).slideToggle("slow");
				$(this).toggleClass(uHatConA.switchClickAddClass);
			}).css("cursor","pointer");
		},

		close: function(settings) {
			uHatConB = $.extend({
				closeBtnSet: uHatConA.switchContents,
				apCloseBtn: '<span>X Close</span>'
			}, settings);
			$(uHatConB.closeBtnSet).append('<p class="closeBtnHat">'+uHatConB.apCloseBtn+'</p>');
			$(".closeBtnHat").children().click(function(){
				$(this).parents(uHatConA.switchContents).fadeOut("slow");
				$(this).parents().prev().contents(uHatConA.switchBtn).removeClass(uHatConA.switchClickAddClass);
			}).css("cursor","pointer");
		},

		openAll: function(settings) {
			uHatConC = $.extend({
				openAllBtnClass: '.allOpenBtn',
				switchBtn: uHatConA.switchBtn,
				openContents: uHatConA.switchContents
			}, settings);
			$(uHatConC.openAllBtnClass).addClass("switchOn").toggle(
				function(){
					$(this).addClass(uHatConA.switchClickAddClass);
					$(uHatConC.openContents).slideDown("slow");
					$(uHatConC.switchBtn).addClass(uHatConA.switchClickAddClass);
				},
				function(){
					$(this).removeClass(uHatConA.switchClickAddClass);
					$(uHatConC.openContents).slideUp("slow");
					$(uHatConC.switchBtn).removeClass(uHatConA.switchClickAddClass);
				}
			).css("cursor","pointer");
		}

	};

})(jQuery);