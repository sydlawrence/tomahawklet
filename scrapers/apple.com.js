/**
 * Apple.com iTunes Chart Playgrub Scraper
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Modified by: Daniel Nunes
 * Version: 0.1.1
 *
 * Notes:
 *
 * This scraper will work on the Apple.com iTunes Chart Page
 */

Playgrub.source.url = 'http://www\.apple\.com/itunes/charts/.*';
Playgrub.source.error = 'Tomahawklet currently supports iTunes Charts pages only. Please check your url.';
Playgrub.source.scrape = function() {
    $("#main .grid li").each(function () {
        var title = $(this).find("h3 a").text();
        var artist = $(this).find("h4 a").text();
        if (artist && title)
        	Playgrab.insertAddButton($(this),artist,title);
    });
}

Playgrub.source.start();
