/**
 * Official.fm Tomahawklet Scraper
 * Created by: laconic <lasconic AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Official.fm playlist pages.
 */
Playgrub.source.url = 'http://.*\.official.fm.*';
Playgrub.source.error = 'Check your Official.fm page - only playlist pages are supported.'
Playgrub.source.scrape = function() {

$('ul.tracks li', frames['content-frame'].document).each(function () {
var song = $.trim($(this).find('p.title a').text());
var artist = $.trim($(this).find('p.artist a').text());

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
