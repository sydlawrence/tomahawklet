/**
 * 22tracks Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on 22tracks playlist pages.
 */
Playgrub.source.url = 'myspace.com';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

	$('.songs li').each(function() {
		var artist = $(this).find(".info h5 a").text();
		var title = $(this).find(".extra p a").text();

		Playgrub.playlist.add_track(artist, title);

	});

	$('.mediaGrid li').each(function() {
		var artist = $(this).find("p a").text();
		var title = $(this).find("h5 a").text();

		Playgrub.playlist.add_track(artist, title);

	})
}

Playgrub.source.start();




		
