function addClassIE(elem, name) {
    if (!elem.classList) {
        elem.className += " " + name;
    } else {
        elem.classList.add(name);
    }
};

var articleCollection = $('.section__courses__article');
var counter = 0;

$('.section__courses__article__footer--checker').change(function(e) {
    counter++;
    var target = e.target.parentElement.parentElement;
    setTimeout(function() {
        addClassIE(target, "invisible");
        if (counter === articleCollection.length) {
            $('.section__courses--completed').removeClass("invisible");
        }
    }, 1000);
    addClassIE(target, "overlay");
});
