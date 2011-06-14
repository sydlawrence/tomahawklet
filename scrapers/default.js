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
    $('*[itemtype="http://schema.org/MusicRecording"]').each(function () {
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
};
Playgrub.source.start();