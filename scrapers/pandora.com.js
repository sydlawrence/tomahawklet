
/**
 * Pandora Song Pages Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Pandora song pages.
 */
Playgrub.source.url = 'http://\www.pandora.com\/\#\/\music/\song.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

  $("div.song_detail").each(function() {
    var song = $(this).find('div.header h1').text();
    var artist = $(this).find('div.artist_name a.artist_link').text();
 
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
