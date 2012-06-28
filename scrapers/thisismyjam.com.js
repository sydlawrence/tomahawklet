/**
 * This is My Jam Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Rhapsody.com playlist pages.
 */
Playgrub.source.url = 'http://.*\.thisismyjam.com.*';
Playgrub.source.error = 'Check your This is My Jam page - only playlist pages are supported.'
Playgrub.source.scrape = function() {

$("div.attachedContent").each(function() {
        var title = $.trim($(this).find('h4 a.jamTitle').text());
        var a = title.toString().split("\n");
        var song = $.trim(a[0]);
var artist = a[1].replace(/^\s*by|\s*$/g , '');
artist = $.trim(artist);

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
