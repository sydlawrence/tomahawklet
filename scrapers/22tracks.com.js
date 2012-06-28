
/**
 * 22tracks Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on 22tracks playlist pages.
 */
Playgrub.source.url = 'http://.*\.22tracks.com.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

$("tbody > tr").each(function() {
        var artist = $(this).find('td.artist').text();
    var song = $(this).find('td.title > a > span').text();
    
       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
