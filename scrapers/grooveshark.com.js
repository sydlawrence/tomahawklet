/**
 * Grooveshark Playgrub.source
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Last.fm song page and only add unique songs.
 */

Playgrub.source.url = 'grooveshark.com';
Playgrub.source.error = "To use Tomahawklet on Grooveshark export a song list, choose \"Mirror Changes\" or \"Copy Songs\", scroll down and hit \"Next Step\", then use the bookmarklet.";
Playgrub.source.scrape = function() {
    $(".slick-row").each(function () {
    	var artist = $(this).find(".artist a").html();
    	var title = $(this).find(".songName a").html();
        Playgrub.playlist.add_track(artist, title);
    });
}

Playgrub.source.start();
