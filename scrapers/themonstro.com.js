/**
 * Monstro Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Monstro's Friends Mixes.
 */
Playgrub.source.url = 'http://.*\.themonstro.com.*';
Playgrub.source.error = 'Check your Turntable.fm page - only rooms are supported.'
Playgrub.source.scrape = function() {

$("div.song-info").each(function() {
        var song = $(this).find('h3.trackname').text();
        var artist = $(this).find('h4.artist').text();
var a = artist.toString().split("by ");
var artist = $.trim(a[1]);

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
