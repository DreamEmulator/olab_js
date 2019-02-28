var olab_sort = (function () {

    var navigation_list = "https://docs.google.com/spreadsheets/d/e/2PACX-1vToSh9252FnjFKHTTjU6tiyivo0iuQISSbDUBVStN-1s3lEJFJo-17Ojd-qYvPb25r-w5Hms3xMiyl8/pub?gid=0&single=true&output=csv";

    function getData(url) {
        $.get(url).done(function (data) {
            parseCategories(data);
            updateView(olab_sort.categories, ".navBlock");
            $(".navBlock").append($("#erasmus_notes"));
            $(".navBlock").append($(".showPrijslijstButton"));
        });
    }

    function parseCategories(data) {
        olab_sort.data = data.split(",");
        olab_sort.titles = [olab_sort.data[0]];
        var category = olab_sort.data[0];
        olab_sort.categories = {};
        olab_sort.categories[category] = [];
        olab_sort.data.forEach(function (el, index) {
            if (el !== undefined) {
                if (el.indexOf("\n") != -1) {
                    category = el.split("\n")[1];
                    olab_sort.categories[category] = [];
                    olab_sort.titles.push(category);
                } else if (el.length > 0 && el.split("\n").length == 1) {
                    olab_sort.categories[category].push(el);
                }
            }
        });
    };

    function updateView(object, selector) {
        olab_sort.buttons = $("a.btn");

        olab_sort.titles.forEach(function (title) {

            if (title == "Navigatie") {
                $(selector).append("<div id='main-navigation'></div>");
                olab_sort.buttons.each(function (index, btnName) {

                    console.log(btnName);


                    var navClass = "nav-title-" + title.replace(/\s+/g, '-').toLowerCase();

                    if ($(this).text() == $(btnName).text()) {
                        
                        if ($('.' + navClass).length == 0) {
                            $('#main-navigation').append("<h1 class=" + navClass + ">" + title + "</h1>");
                        }

                        $('#main-navigation').append($(this));
                    }

                    if ($(this).text() == "Maak je SBAR") {
                        $(this).attr("id", "navButtonExtra");
                    }
                });
            } else {
                olab_sort.categories[title].forEach(function (name) {
                    olab_sort.buttons.each(function () {
                        var navClass = "nav-title-" + title.replace(/\s+/g, '-').toLowerCase();

                        if ($(this).text() == name) {
                            if ($('.' + navClass).length == 0) {
                                $(selector).append("<h1 class=" + navClass + ">" + title + "</h1>");
                            }
                            $('.' + navClass).append(this);
                        }
                    });
                });
            }
        });

        $(".navBlock").append($("#main-navigation"));
    }

    return {
        init: function () {
            getData(navigation_list);
        }, olab_sort: olab_sort,
    };

})();

///LEGACY CODE
$(document).ready(function () {

//Clean up embed error
    $('a:contains("">")').length > 0 ? $('a:contains("">")').html($('a:contains("">")').html().split('"&gt;')[1]) : null;

    $(".popup-outside-container div").first().children("div:nth-child(1)").addClass("navBlock");
    $(".popup-outside-container div").first().children("div:nth-child(2)").addClass("textBlock");
    $(".popup-outside-container div").first().children("div:nth-child(3)").addClass("historyBlock");
    $(".navigation").parent().css("height", "90%");
    $("[alt='info']").addClass('infoButton');
    $("[data-target='#counter-debug']").parent().addClass('counter');
    $(".counter:not(.counter:eq(0))").remove();
    $(".annotation").remove();

    if (!$("iframe").parent().hasClass("embed-container")) {
        $("iframe").wrap("<div class='embed-container'></div>");
    }
    ;

    $('img[src*="SBAR"]').attr('src', '/olab/files/71/SBAR.png').css({
        'border': 'none',
        'position': 'relative',
        'left': '50%',
        'transform': 'translatex(-50%)',
        'width': '100%',
        'max-width': '603px'
    });


    $('[id^=ChatQuestion]').click(function () {
        $('[id^=ChatAnswer] p').each(function () {
            var $this = $(this);
            $this.html($this.html().replace(/&nbsp;/g, ''));
        });
    });


    $('[id^=ChatQuestion]').click(function () {
        $(this).parent().parent().addClass('qClicked');
        if (!$("iframe").parent().hasClass("embed-container")) {
            $("iframe").wrap("<div class='embed-container'></div>");
        }
        ;

    });

    //Video Wrapper
    var wrapVideo = function () {
        $("iframe").css({
            "position": "absolute"
            , "top": "0"
            , "left": "0"
            , "height": "100%"
        }).wrap("<div class='videoWrapper'></div>");
        $(".videoWrapper").css({
            "position": "relative",
            "padding-bottom": "56.25%",
            "padding-top": "25px",
            "height": "0"
        });
    };

    // Table Builder
    var count = $('.textBlock tr').length;
    if (count != 0) {
        for (i = 1; i < count; i = i + 2) {
            $("'.textBlock tr:nth-child(" + i + ")'").append(($("'.textBlock tr:nth-child(" + (i + 1) + ")'").contents()));
        }
    }
    ;

    //COUNTER:

    if (location.href.split('index').length > 1) {
        localStorage.startAmount = parseInt($($(document).find('#counter-debug h2')[0]).text().split("= ")[1]);
    }
    var startAmount = localStorage.startAmount;

    function scoreBijwerken(newScore) {
        if (newScore > 0) {
            $("li.counter p:not(p.erasmuswallet)").html('Je hebt nog ' + newScore + ' punten over...');
            $(".time").css("height", ((newScore / startAmount) * 100) + "%");
        } else {
            $("li.counter p:not(p.erasmuswallet)").html('Je hebt geen punten meer over. Het is tijd om de SBAR te maken...');
            $(".time").css("height", "0%");
            $("[id^=ChatQuestion]").css("pointer-events", "none");
        }
    };

    $("[id^=ChatQuestion]").click(function () {
        $.ajax({
            url: '', success: function (result) {
                var newScore = parseInt($($('<div>' + result + '</div>').find('#counter-debug h2')[0]).text().split("= ")[1]);
                scoreBijwerken(newScore);
            }

        });
    });


    var score = parseInt($($(document).find('#counter-debug h2')[0]).text().split("= ")[1]);

    $("li.counter").html('<div class="timeContainer"><div class="time"></div></div><p>' + score + '</p></li>');

    scoreBijwerken(score);

});

//Dit is voor de digitale portemonnnee

$(document).ready(function () {

    olab_sort.init();

    if ($("#counter-debug h2:contains('wallet')").length > 0) {
        console.log("Loading Erasmus Wallet Module");
        $.getScript('/olab/erasmus_custom/js/wallet.js');
    }

});
