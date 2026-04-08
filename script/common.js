// タブレットビューポート
if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	document.head.insertAdjacentHTML('beforeend', '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">');
} else {
	document.head.insertAdjacentHTML('beforeend', '<meta name="viewport" content="width=1250">');
}

$(function(){

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();

	// スムーズスクロール
    const headerHeight = $('header#pc_header').outerHeight();
    $(document).on('click', 'a[href*="#"]', function () {
        let time = 400;
        let target = $(this.hash);
        if (!target.length) return;
        let targetY = target.offset().top - headerHeight;
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        return false;
    });

    // 別ページ間でのアンカーリンク処理
    $(window).on('load', function() {
        const url = $(location).attr('href');
        if(url.indexOf("#") != -1){
            const anchor = url.split("#"),
            target = $('#' + anchor[anchor.length - 1]),
            position = Math.floor(target.offset().top) - headerHeight;
            $("html, body").animate({scrollTop:position}, 10);
        };
    });

    // スライダーの初期化
    $(window).on('load', function () {
        // サムネイル
        const interview_swiperThumbnail = new Swiper(".js-interviewSlider-thumbnail", {
            slidesPerView: 4,
            spaceBetween: 4,
        });

        const interview_swiper = new Swiper(".js-interviewSlider", {
            loop: true,
            speed: 700,
            slidesPerView: 1,
            autoplay: {
                delay: 3000,
            },
            thumbs: {
                swiper: interview_swiperThumbnail,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.125,
                    spaceBetween: 20,
                    autoHeight: false,
                }
            },
        });

        let contact_swiper1 = new Swiper(".js-contact-swiper1", {
            loop: true,
            speed: 4000,
            slidesPerView: 2.68,
            spaceBetween: 6,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                    direction: "vertical",
                }
            },
        });

        let contact_swiper2 = new Swiper(".js-contact-swiper2", {
            loop: true,
            speed: 4000,
            slidesPerView: 2.68,
            spaceBetween: 6,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                    direction: "vertical",
                }
            },
        });
        console.log(contact_swiper1);
        console.log(contact_swiper2);
    });
});