/**
 * Everyhit Scraper
 * Created by: JP Hastings-Spital
 * Version: 0.1
 *
 * Notes:
 *
 * To test, go to http://www.everyhit.com/chart1.html
 */
Playgrub.source.url = 'http://www.everyhit.com/*';
Playgrub.source.error = 'Sorry, there aren\'t any appropriate song names here.';
Playgrub.source.scrape = function() {
	$("#retrochart tr").each(function () {
		if ($(this).find('td').length == 3) {
			var artist = $(this).find('td:nth-child(2)').text();
			var title = $(this).find('td:nth-child(3)').text();
			if( artist && title && artist != "" && title != "")
		    	Playgrub.playlist.add_track(artist,title);
		}
    });
}

Playgrub.source.start();
