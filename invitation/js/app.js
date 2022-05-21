'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('bio', 'bio.html'),
            new Route('event', 'event.html'),
            new Route('gallery', 'gallery.html'),
            new Route('maps', 'maps.html')
        ]);
    }
    init();
}());