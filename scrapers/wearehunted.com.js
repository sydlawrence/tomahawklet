/**
 * We Are Hunted Playlists Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on We Are Hunted playlist pages.
 */
Playgrub.source.url = 'http://.*\.wearehunted.com/a/#/playlist/*';
Playgrub.source.error = 'Check your We Are Hunted page - only playlist pages are supported.'
Playgrub.source.scrape = function() {

$("span.grid_item_description").each(function() {
        var song = $(this).find('span.entity_label a').text();
        var artist = $(this).find('span.artist_label a').text();
        
       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
