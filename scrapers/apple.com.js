/**
 * Apple.com iTunes Chart Playgrub Scraper
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on the Apple.com iTunes Chart Page
 */

Playgrub.source.url = 'apple.com';
Playgrub.source.error = 'Tomahawklet currently supports iTunes Charts pages only. Please check your url.';
Playgrub.source.scrape = function() {
    $(".charts #grid li").each(function () {
        var title = $(this).find("h3 a").html();;
        var artist = $(this).find("h4 a").html();;
        if (artist !== "" && title !== "")
        	Playgrab.insertAddButton($(this),artist,title);
    });
}

Playgrub.source.start();
