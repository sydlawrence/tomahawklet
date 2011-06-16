/**
 * blip.fm Playlist Scraper
 * Created by: Matthias Gutjahr
 * Version: 0.1
 *
 * Notes: blip.fm inserts tracks through AJAX, but that shouldn't be a problem
 *
 * To test, go to http://blip.fm/all
 */
Playgrub.source.url = '.*';
Playgrub.source.error = 'Sorry, no suitable songs could be found';
Playgrub.source.scrape = function() {
	$("h3.blipTitle").each(function () {
		try {
			var artist = $.trim($(this).find('a:first-child').text());
			var title = $.trim($(this).find('a:nth-child(2)').text());
			if (artist && title && artist !== '' && title !== '') {
				Playgrub.playlist.add_track(artist, title);
			}
		} catch (err) {
		}
	});
}
Playgrub.source.start();