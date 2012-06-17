/**
 * Billboard.com Scraper
 * Created by: JP Hastings-Spital
 * Version: 0.1
 *
 * NB! Not fully working - new pages are loaded via AJAX, so playgrub is left loaded,
 * preventing the new playgrub playlist from being processed. Ideas anyone?
 * 
 * Notes:
 * Try these:
 *  - http://www.billboard.com/#/charts/digital-songs
 *  - http://www.billboard.com/#/charts/billboard-200
 */
Playgrub.source.url = 'http://www.billboard.com/*';
Playgrub.source.error = 'Sorry, any songs named on this page aren\'t in the expected format';

Playgrub.source.scrape = function() {
	$('.info').each(function() {

		var title = $(this).find('h2 a').html();
		var artist = $(this).find('h3 a').html();
		if( artist && title && artist != "" && title != "")
	    	Playgrub.playlist.add_track(artist,title);
	})
}

Playgrub.source.start();
