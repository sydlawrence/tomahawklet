/**
 * Pitchfork Playgrub.source
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Pitchfork Track Review and Forkcast pages.
 */


Playgrub.source.url = 'http://.*\.pitchfork\.com';
Playgrub.source.error = 'Tomahawk currently supports the Track Reviews only. Please check your url.';
Playgrub.source.scrape = function() {
if (window.location.href.indexOf("pitchfork.com/reviews/tracks") != -1) {
    $("li.player-target").each(function () {
                               var song = $.trim($(this).find('span.title').text());
                               song = song.replace('"', '');
                               song = song.replace('"', '');
                               
                               var artist = $.trim($(this).find('span.artist').text());
                               artist = artist.replace(':', '');
        Playgrub.playlist.add_track(artist, song);
    });
    
} else if (window.location.href.indexOf("pitchfork.com/reviews/best/tracks") != -1) {
    $("li").each(function () {
                               var song = $.trim($(this).find('span.title').text());
                               song = song.replace('"', '');
                               song = song.replace('"', '');
                               
                               var artist = $.trim($(this).find('span.artist').text());
                               artist = artist.replace(':', '');
        Playgrub.playlist.add_track(artist, song);
                       });  
}

};

Playgrub.source.start();
