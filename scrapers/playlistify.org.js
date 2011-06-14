Playgrub.source.url = '.*';
Playgrub.source.error = 'Sorry, no songs could be found on this page';
Playgrub.source.scrape = function () {
    $("#playlist .trackrow").each(function () {
        var track = {};
        track.artist = $.trim($(this).find("td:nth-child(2)").text());
        track.title = $.trim($(this).find("td:nth-child(3)").text());
        Playgrub.playlist.add_track(track.artist, track.title);
    });
};
Playgrub.source.start();