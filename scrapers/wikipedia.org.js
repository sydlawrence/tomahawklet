/**
 * Wikipedia Singles Scraper
 * Created by: JP Hastings-Spital
 * Version: 0.1
 *
 * Notes:
 * Try these:
 *  - http://en.wikipedia.org/wiki/List_of_number-one_singles_from_the_2000s_%28UK%29
 *  - http://en.wikipedia.org/wiki/List_of_best-selling_singles_by_year_%28UK%29
 *  - http://en.wikipedia.org/wiki/List_of_best-selling_singles_in_Japan
 *  - http://en.wikipedia.org/wiki/List_of_Christmas_number_one_singles_%28UK%29
 *  - http://en.wikipedia.org/wiki/List_of_best-selling_singles_%28France%29
 *  - http://en.wikipedia.org/wiki/List_of_best-selling_singles_worldwide
 *  - http://en.wikipedia.org/wiki/List_of_train_songs
 */

// Hmm, http://*.wikipedia.org/wiki/* doesn't seem to work
Playgrub.source.url = 'http://en.wikipedia.org/wiki/*';
Playgrub.source.error = 'Sorry, any songs mentioned on this page aren\'t in the expected format';

Playgrub.source.scrape = function() {
	// Tables

	var artist = $('.contributor a').html();
	$(".tracklist tr:not(:nth-child(1)), .tracklist tr:not(:nth-child(2))").each(function () {
	
		var title = $(this).find('td:nth-child(2) a').first().html();

		if( artist && title && artist != "" && title != "")
			Playgrub.playlist.add_track(artist,title);
	});
}

Playgrub.source.start();
