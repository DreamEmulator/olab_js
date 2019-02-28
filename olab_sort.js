var olab = (function () {

    var navigation_list = "https://docs.google.com/spreadsheets/d/e/2PACX-1vToSh9252FnjFKHTTjU6tiyivo0iuQISSbDUBVStN-1s3lEJFJo-17Ojd-qYvPb25r-w5Hms3xMiyl8/pub?gid=0&single=true&output=csv";

    function getData(url) {
        $.get(url).done(function (data) {
            parseCategories(data);
            updateView(olab.categories, ".navBlock");
        });
    }

    function parseCategories(data) {
        olab.data = data.split(",");
        olab.titles = [olab.data[0]];
        var category = olab.data[0];
        olab.categories = {};
        olab.categories[category] = [];
        olab.data.forEach(function (el, index) {
            if (el !== undefined) {
                if (el.indexOf("\n") != -1) {
                    category = el.split("\n")[1];
                    olab.categories[category] = [];
                    olab.titles.push(category);
                } else if (el.length > 0 && el.split("\n").length == 1) {
                    olab.categories[category].push(el);
                }
            }
        });
        console.log(olab.categories);
    };

    function updateView(object, selector) {
        olab.titles.forEach(function (title) {
            console.log(title);
            $(selector).append("<h1>" + title + "</h1>");
            olab.categories[title].forEach(function (nav) {
                $(selector).append("<p>" + nav + "</p>");
            });
        });
    }

    return {
        init: function () {
            getData(navigation_list);
        },
    };

})();

$(document).ready(function () {
    olab.init();
});