/**
 * Rhapsody Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Rhapsody.com playlist pages.
 */
Playgrub.source.url = 'http://.*\.rhapsody.com.*';
Playgrub.source.error = 'Check your Rhapsody page - only playlist pages are supported.'
Playgrub.source.scrape = function() {

    $("div.track").each(function() {
        var song = $(this).find('div.name a').text();
        var artist = $.trim($(this).find('div.artist-album a').text());

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
