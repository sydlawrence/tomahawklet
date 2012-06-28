/**
 * UltimateChart Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on UltimateChart Songs chart.
 */
Playgrub.source.url = 'http://.*\.ultimatechart.com.*';
Playgrub.source.error = 'Check your This is My Jam page - only playlist pages are supported.'
Playgrub.source.scrape = function() {

$("div.item").each(function() {
        var song = $.trim($(this).find('div.info-col1 div.info').text());
        var artist = $.trim($(this).find('div.info-col2 div.info').text());

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
