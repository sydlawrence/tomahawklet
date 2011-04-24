
/**
 * Simfy.de Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Simfy playlist pages.
 */
Playgrub.source.url = 'http://.*\.simfy.de.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $("ul.track").each(function() {
        var artist = $(this).find('li.artist_name > a').text();
        var song = $(this).find('li.track_title_and_version_title > span.title').text().trim();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
