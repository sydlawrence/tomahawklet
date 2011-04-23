
/**
 * Soundtracking Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Soundtracking song pages.
 */
Playgrub.source.url = 'http://.*\.soundtracking.com/tracks.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $(".player").each(function() {
        var artist = $(this).find('p.artist').text();
        var song = $(this).find('p.song').text();
	artist = artist.replace('by', '');

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
