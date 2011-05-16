
/**
 * Sharemyplaylists.com Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on ShareMyPlaylists playlist pages.
 */
Playgrub.source.url = 'http://.*\.sharemyplaylists.com.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $("table.track-info").each(function() {
        var artist = $(this).find('a.user-name').text();
        var song = $(this).find('h3').text();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
