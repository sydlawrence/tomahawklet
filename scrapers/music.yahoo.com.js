/**
 * Yahoo Radish Playgrub.source
 * Created by: Lucas Gonze
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Y! Radish Playlist.
 */

Playgrub.source.url = 'music\.yahoo\.com';
Playgrub.source.error = 'Check your Robert Radish URL.';
Playgrub.source.scrape = function() {
   var regex = /(^\s*[0-9]+\. )/;
    $("div.ymusic-text-article p").each(function () {
        var txt = $(this).text();
        if( txt.match(regex) ){
            txt = txt.replace(regex,"");
            var song_result = txt.split(" - ");
            Playgrub.playlist.add_track(song_result[1], song_result[0]);
        }
    });

    var artist = $('.ymusic-lastfm-artist-radio h3 a').html();
    $('.track-title').each(function() {
    	var title = $(this).find('.htrack').html();

        Playgrub.playlist.add_track(artist, title);

    })
}

Playgrub.source.start();
