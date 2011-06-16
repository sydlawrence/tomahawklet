/**
 * Mixcloud Playlist Scraper
 * Created by: Matthias Gutjahr
 * Version: 0.1
 *
 * Notes: 
 *
 * To test, go to http://blip.fm/all
 */
Playgrub.source.url = '.*';
Playgrub.source.error = 'Sorry, no suitable songs could be found';
Playgrub.source.scrape = function() {
	$(".tracklistcell").each(function () {
		try {
			var artist = $.trim($(this).find('.tracklistartistname').text());
			var title = $.trim($(this).find('.tracklisttrackname').text());
			if (artist && title && artist !== '' && title !== '') {
				Playgrub.playlist.add_track(artist, title);
			}
		} catch (err) {
		}
	});
}
Playgrub.source.start();