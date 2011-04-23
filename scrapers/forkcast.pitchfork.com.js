/**
 * Pitchfork Playgrub.source
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Pitchfork Track Reviews pages.
 */

Playgrub.source.url = 'http://pitchfork\.com.*/forkcast.*';
Playgrub.source.error = 'Tomahawk currently supports the Track Reviews & Forkcast pages only. Please check your url.';
Playgrub.source.scrape = function() {
    $("h1.title").each(function () {
        var song_result = $($(this).children('a')[1]).text();
	song_result = song_result.replace('"', '');
        var artist = $($(this).children('a')[0]).text();
        Playgrub.playlist.add_track(artist, song_result);
    });
}

Playgrub.source.start();


