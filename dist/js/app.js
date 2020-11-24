$(function () {
    const tiltOptions = {
        maxTilt: 30,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 300,
        transition: true,
        reset: true,
        glare: false,
        maxGlare: 1
    }

    $(window).scroll(function () {
        let Y = window.pageYOffset;
        // $('.greeting_logo').css({
        //     top: '50%',
        //     left: '50%',
        //     transform: `translate(-47.5%, -${-50 + Y/3 }%)`,
        //     opacity: 1,
        //     animation: 'unset'
        // })
        const greetingHeight = document.querySelector('.greeting').clientHeight;
        const about = document.querySelector('.bg')

        if (Y > greetingHeight / 2) {
            about.style.width = '100%'
        } else {
            about.style.width = 'calc(50% + 1.785rem)'
        }
    })

    const $navigation = document.querySelector(".navigation");
    let isMenuOpen = false;
    $navigation.addEventListener("click", () => {
        if (!isMenuOpen) {
            $($navigation).find('.menu-btn').addClass("open");
        } else {
            $($navigation).find('.menu-btn').removeClass("open");
        }

        isMenuOpen = !isMenuOpen;
    });

    $('[data-anim="tilt"]').tilt(tiltOptions);

    $('.navigation').click(function () {
        $('body').toggleClass('menu-show');
        if ($('body').hasClass('menu-show')) {
            anime({
                targets: '.navigation__menu',
                translateY: ['-100%', '0'],
                opacity: [0, 1],
                easing: 'easeInQuart',
                duration: 100
            });
        } else {
            anime({
                targets: '.navigation__menu',
                translateY: ['0', '-100%'],
                opacity: [0, 1],
                easing: 'easeOutQuart',
                duration: 100
            });
        }
    })

    $('.navigation__item a').click(function () {
        $('.navigation__item a').removeClass('active');
        $(this).addClass('active');
    })

    $(document).ready(function () {

        anime.timeline({
                loop: false
            })
            .add({
                targets: '.preloader-img',
                top: [0, '50%'],
                left: '50%',
                translateY: ['-100%', '-43%'],
                translateX: '-50%',
                scale: [0, 1],
                easing: 'spring(1, 80, 10, 0)'
            })
            .add({
                targets: '.preloader-img',
                scale: [1, .6],
                translateX: ['-50%', '-100%'],
                easing: 'easeInOutQuad'
            })


        anime({
            targets: '.preloader-text',
            opacity: [0, 1],
            translateX: ['-30%', '-15%'],
            easing: 'easeInOutQuad',
            delay: 1900,
        })

        anime({
            targets: '.preloader',
            opacity: [1, 0],
            easing: 'easeInOutQuad',
            delay: 4000
        })

        setTimeout(() => {
            $('main').fadeIn()
            $('body').removeClass('preloader-show');
            $('.preloader').hide();
        }, 5000);

        anime({
            targets: '.greeting_logo',
            translateY: ['-65%', '-50%'],
            translateX: ['-47.5%', '-47.5%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 500,
            delay: 5300
        })

        var rellax = new Rellax('[data-rellax-speed]', {
            speed: -2,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

    })

})