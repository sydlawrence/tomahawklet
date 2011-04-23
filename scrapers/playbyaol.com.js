
/**
 * Play by AOL Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Play by AOL song pages.
 */
Playgrub.source.url = 'http://.*\.playbyaol.com/feed/view.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $(".clear").each(function() {
        var artist = $(this).find('h2').text();
        var song = $(this).find('h3').text();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
