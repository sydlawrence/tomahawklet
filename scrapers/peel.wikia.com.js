
/**
 * John Peel Wiki Playgrub Scraper
 * Created by: Alf Eaton <alf@hubmed.org>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on John Peel Wiki pages that have tracklistings in a specific format.
 *
 * TODO: use the API? http://peel.wikia.com/api.php?action=query&prop=revisions&rvprop=content&format=json&callback=?&titles={title}
 *
 * Example URL: http://peel.wikia.com/wiki/13_October_2004
 */
Playgrub.source.url = 'http://peel.wikia.com/wiki/*';
Playgrub.source.error = 'Sorry, no tracks were found.';
Playgrub.source.scrape = function() {
	var artist, song, matches, re = /^(.+?)\s*[-]\s*"(.+?)"/;

    $("#Tracklisting").parent().next("ul").find("li").each(function() {
    	matches = $.trim(this.textContent).match(re);
    	if (!matches) return true; // continue;

        artist = $.trim(matches[1]);
        song = $.trim(matches[2]);

        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        }
    });
}

Playgrub.source.start();
