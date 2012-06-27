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
Playgrub.source.url = 'drownedinsound.com/*';
Playgrub.source.error = 'Sorry, any songs named on this page aren\'t in the expected format';

Playgrub.source.scrape = function() {
	$('.release_teasers a').each(function() {

		var title = $(this).find('span').html();
		var artist = $(this).find('b').html();

		if( artist && title && artist != "" && title != "")
	    	Playgrub.playlist.add_track(artist,title);
	})

	$('.pack_shot').each(function() {
		var str = $(this).find('b').html();
		str = str.split(" - ");
		var title = str[1];
		var artist = str[2];

		if( artist && title && artist != "" && title != "")
	    	Playgrub.playlist.add_track(artist,title);

	});

	$('li img[height=42]').each(function() {
		var $this = $(this).parent();

		var title = $this.find('i').html();
		var artist = $this.find('b').html();

		if( artist && title && artist != "" && title != "")
	    	Playgrub.playlist.add_track(artist,title);

	});

	$('.track-visited li a').each(function() {

		var title = $(this).find('i').html();
		var artist = $(this).find('b').html();

		if( artist && title && artist != "" && title != "")
	    	Playgrub.playlist.add_track(artist,title);

	});



	
}

Playgrub.source.start();
