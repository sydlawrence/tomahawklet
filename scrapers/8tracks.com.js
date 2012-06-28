
/**
 * 8tracks Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on 8tracks mix pages.
 */
Playgrub.source.url = 'http://*8tracks.com.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $('div.playlist').each(function() {
        var artist = $(this).find('span.a').text();
        var song = $(this).find('span.t').text().trim();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
