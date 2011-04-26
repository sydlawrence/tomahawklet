
/**
 * Vevo Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Vevo pages.
 */
Playgrub.source.url = 'http://.*\.vevo.com/watch.*';
Playgrub.source.error = 'Sorry, no tracks were found.'

Playgrub.source.scrape = function() {

    $('div.playlist-title').each(function() {
        var artist = $(this).find('div.channel-playlist-area > a:first-child').text();
        var song = ($(this).find('div.video-info').text();


     
        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        
    });
}

Playgrub.source.start();


