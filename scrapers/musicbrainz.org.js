/**
 * Musicbrainz Playgrub.source
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Musicbrainz Release pages.
 */

Playgrub.source.url = 'http://musicbrainz\.org.*/release.*';
Playgrub.source.error = 'Tomahawklet currently supports Musicbrainz Release pages only. Please check your url.';
Playgrub.source.scrape = function() {
    var artist = $("a[rel='foaf:maker']").html();
    $("tr[rel='mo:track'] a span[property~='dct:title']").each(function () {
        var song_result = $(this).html();
        Playgrub.playlist.add_track(artist, song_result);
    });
}

Playgrub.source.start();
