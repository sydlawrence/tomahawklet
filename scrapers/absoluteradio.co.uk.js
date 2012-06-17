/**
 * Absolute Radio Playlist Scraper
 * Created by: JP Hastings-Spital & Lucas Gonze
 * Version: 0.1
 *
 * Notes:
 *
 * Be an XFM DJ!
 *
 * To test, go to http://www.absoluteradio.co.uk/music/we_play/playlist/
 */
Playgrub.source.url = 'http://www.absoluteradio.co.uk/playlist/';
Playgrub.source.error = 'Sorry, no suitable songs could be found';
Playgrub.source.scrape = function() {
	$("#results li").each(function () {
		var artist = $(this).find('.artist').html().replace("by ","");
		var title = $(this).find('.track').html();

		if (artist !== "" && title !== "")
        	Playgrab.insertAddButton($(this),artist,title);
        
	});
}

Playgrub.source.start();
