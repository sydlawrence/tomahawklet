/**
 * Mixcloud Playlist Scraper
 * Created by: Matthias Gutjahr
 * Version: 0.2
 *
 * Notes: 
 *
 * To test, go to http://www.mixcloud.com/DronesOfHell/drones-of-hell-24th-feb-2013-resonance-1044fm/
 */
Playgrub.source.url = 'mixcloud.com';
Playgrub.source.error = 'Sorry, no suitable songs could be found';
Playgrub.source.scrape = function() {
	$(".tracklistcell").each(function () {
		var artist = $(this).find('.tracklistartistname').html();
		var title = $(this).find('.tracklisttrackname').html();
		Playgrub.playlist.add_track(artist, title);

	});
}
Playgrub.source.start();
