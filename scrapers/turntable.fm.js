/**
 * Turntable.fm Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Turntable.fm rooms.
 */
Playgrub.source.url = 'http://.*\.turntable.fm.*';
Playgrub.source.error = 'Check your Turntable.fm page - only rooms are supported.'
Playgrub.source.scrape = function() {

$("div.songinfo").each(function() {
        var song = $.trim($(this).find('div.title').text());
        var artist = $(this).find('div.details div').text();
var a = artist.toString().split(" - ");
var artist = $.trim(a[0]);

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
