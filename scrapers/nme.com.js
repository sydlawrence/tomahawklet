/**
 * NME Radio Playlist Scraper
 * Created by: JP Hastings-Spital & Lucas Gonze
 * Version: 0.1
 *
 * Notes:
 *
 * The NME Radio playlist
 *
 * To test, go to http://www.nme.com/radio/playlist
 */
Playgrub.source.url = 'nme.com';
Playgrub.source.error = 'Sorry, no suitable songs could be found';
Playgrub.source.scrape = function() {
	$("div.main_block table.track_list tr").each(function () {
		var artist = $(this).find('td a').text();
		var title = $(this).find('td.title').text()
		if( artist && title && artist != "" && title != "")
			Playgrub.playlist.add_track(artist,title);
	});

	$(".review").each(function () {
		var str = $(this).find('.title').html();
		str = str.split(" - ");
		if (str.length < 2) return;
		var artist = str[0];
		var title = str[1].replace('\'', "");
		if( artist && title && artist != "" && title != "")
			Playgrub.playlist.add_track(artist,title);
	});
}

Playgrub.source.start();
