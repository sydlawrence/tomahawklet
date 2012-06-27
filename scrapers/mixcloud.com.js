/**
 * Mixcloud Playlist Scraper
 * Created by: Matthias Gutjahr
 * Version: 0.1
 *
 * Notes: 
 *
 * To test, go to http://blip.fm/all
 */
Playgrub.source.url = 'mixcloud.com';
Playgrub.source.error = 'Sorry, no suitable songs could be found';
Playgrub.source.scrape = function() {
	$(".cloudcast-long-box").each(function () {
		var artist = $(this).find('.cloudcast-creator').html();
		var title = $(this).find('.cloudcast-name').html();
		Playgrub.playlist.add_track(artist, title);

	});
}
Playgrub.source.start();