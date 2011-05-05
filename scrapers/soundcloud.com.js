
/**
 * Soundcloud Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Soundcloud track pages.
 */
Playgrub.source.url = 'http://.*\.soundcloud.com.*';
Playgrub.source.error = 'Sorry, no tracks were found. Make sure you are on the "tracks" tab.'
Playgrub.source.scrape = function() {

    $("div.info-header").each(function() {
        var artist = $(this).find('a.user-name').text();
        var song = $(this).find('h3').text();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
