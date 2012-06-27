
/**
 * Ex.fm Noted Songs Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Ex.fm profile pages.
 */
Playgrub.source.url = 'http://.*.ex.fm.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $(".song_row_box").each(function() {
        var artist = $(this).find('.song_row_artist').text();
        var song = $(this).find('.song_row_title').text();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
