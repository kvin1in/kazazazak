$(document).ready(function() {

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function() {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });


    /* Homepage FullPage Scroll Jack Layout
      -------------------------------------------------------------------------------*/
    function homepage_fullpage() {

        $('#homepage-fullpage').fullpage({

            //Navigation
            menu: '#menu',
            lockAnchors: false,
            anchors: ['why-embraer', 'engineering', 'technology', 'service', 'craft', 'find-your-jet'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Главная', 'Проекты', 'Направления', 'Результаты', 'Карьера', 'Контакты'],
            showActiveTooltip: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: true,
            scrollingSpeed: 800,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: true,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //Design
            controlArrows: true,
            verticalCentered: true,
            sectionsColor: ['#333', '#444', '#333', '#444', '#333', '#444'],
            paddingTop: '0em',
            paddingBottom: '0em',
            fixedElements: '#header, .footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            //events
            // onLeave: function(index, nextIndex, direction){},
            // afterLoad: function(anchorLink, index){},
            //afterRender: function(){},
            // afterResize: function(){},
            //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
            afterLoad: function(anchorLink, index) {

                if ($(this).find(".video-background").length) {
                    // If the length is greater than 0, bg video element exists
                    $('.active .video-background').get(0).play();
                    //console.log("section has bg video");
                } else {
                    // else, false, bg video element doesn't exist
                    // do nothing
                }

            }

        });

    }
    homepage_fullpage();



});