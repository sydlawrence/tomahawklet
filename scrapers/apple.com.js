/**
 * Apple.com iTunes Chart Playgrub Scraper
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on the Apple.com iTunes Chart Page
 */

Playgrub.source.url = '/itunes/charts/songs.';
Playgrub.source.error = 'Tomahawklet currently supports iTunes Charts pages only. Please check your url.';
Playgrub.source.scrape = function() {
    $("ol li").each(function () {
        var artist = $(this).find("a strong").html();;
        var title = $(this).find("a span").html();;
        console.log(artist + " " + title);
        if (artist !== "" && title !== "")
        	Playgrab.insertAddButton($(this),artist,title);
    });
}

Playgrub.source.start();
