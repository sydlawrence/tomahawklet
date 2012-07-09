/**
 * haudio Playgrub Scraper
 * Created by: JP Hastings-Spital
 * Version: 0.2
 *
 * Notes:
 *
 * To test, go to http://www.classicfm.co.uk/on-air/playlist/
 * and pick a recent show.
 * To test multiple items, go to http://www.numblog.de/archives/824-NUM-Radioshow-013.html
 */
(function ($) {
    $.fn.haudio = function () {
        var audio = {};
        audio.artist = this.find(".contributor .fn:first").text();
        audio.title = this.find(".title").text();
        if (!audio.title) {
            audio.title = this.find("span.fn").text();
        }
        return audio;
    };
}(jQuery));

Playgrub.source.url = '.*';
Playgrub.source.error = 'Sorry, no suitable haudio tags could be found on this page';
Playgrub.source.scrape = function () {

    var urldecode = function(str) {
       return decodeURIComponent((str+'').replace(/\+/g, '%20'));
    }

    $('iframe').each(function() {
        var src = $(this).attr("src");

        var regex = new RegExp("toma.hk");
        if(regex.exec(src)) {
            // is a playlist
            regex = new RegExp("toma.hk/p/");            
            if (regex.exec(src)) {
                src = src.split("/");
                console.log("playlist");
                console.log(src);
            }
            // is an album
            regex = new RegExp("toma.hk/album/");            
            if (regex.exec(src)) {
                console.log("abum");
                src = src.split("/");
                var artist = src[4]; 
                var album = src[5];
                artist = urldecode(artist);
                album = urldecode(album);

                getAlbumInfo(artist, album, function(data) {
                    console.log(data);
                })

            }
        }
    });




    $(".haudio").each(function () {
        var item = $(this).find('.item');
        if (item.length > 0) {
            item.each(function () {
                var track = $(this).haudio();
                if (track.artist && track.title && track.artist !== "" && track.title !== "") {
                    Playgrub.playlist.add_track(track.artist, track.title);
                }
            });
        } else {
            var track = $(this).haudio();
            if (track.artist && track.title && track.artist !== "" && track.title !== "") {
                Playgrub.playlist.add_track(track.artist, track.title);
            }
        }
    });
    $('*[itemtype="http://schema.org/MusicRecording"], *[itemtype="http://www.schema.org/MusicRecording"]').each(function () {
        if ($(this).attr('itemprop') === "tracks") {
            var track = {};
            track.title = $.trim($(this).find("*[itemprop='name']").text());
            track.artist = $.trim($(this).find("*[itemprop='byArtist']").text());
            if (!track.artist) {
                track.artist = $.trim($('*[itemtype="http://schema.org/MusicGroup"] > *[itemprop="name"]').text());
            }
            if (track.artist && track.title && track.artist !== "" && track.title !== "") {
                Playgrub.playlist.add_track(track.artist, track.title);
            }
        }
    });

    $('*[itemtype="http://schema.org/MusicAlbum"]').each(function () {
        var artist = $('[itemprop="byArtist"]').text();
        $(this).find('[itemtype="http://www.schema.org/MusicRecording"], [itemtype="http://schema.org/MusicRecording"]').each(function () {
            if ($(this).attr('itemprop') === "tracks") {
                var title = $(this).find("[itemprop='name']").text();
              Playgrub.playlist.add_track(artist, title);
            }
        });
    });


};
Playgrub.source.start();