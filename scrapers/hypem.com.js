
/**
 * Hypem.com Playgrub Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Hype Machine pages.
 */
Playgrub.source.url = 'http://.*\.hypem.com.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $("h3.track_name").each(function() {
        var artist = $(this).find('a:first-child').text();
        var song = $(this).find('a:last-child').text();

        artist = $.trim(artist);
        song = $.trim(song);

        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        }
    });
}

Playgrub.source.start();
