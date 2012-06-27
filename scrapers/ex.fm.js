
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

    $(".songVOListLeft").each(function() {
        var artist = $(this).find('div.songVOListArtist').text();
        var song = $(this).find('a.songVOListSongTitle').text();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
