/**
 * Rdio.com Playgrub Scraper
 * Created by: Niall Smart <niall AT pobox DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Rdio.com artist/album/playlist pages.
 */
Playgrub.source.url = 'rdio.com';
Playgrub.source.error = 'Check your Rdio page - only artist, album and playlist pages are supported.'
Playgrub.source.scrape = function() {

    $('.Track').each(function(){
        var artist = $(this).find(".metadata a:nth-child(1)").text();
        var song = $(this).find(".name").text();

        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        }  
    });
/*
    $('.Track').each(function(){
        var artist = $(this).find(".metadata").text();
        var song = $(this).find(".name").text();

        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        }  
    });
*/


    
}

Playgrub.source.start();
