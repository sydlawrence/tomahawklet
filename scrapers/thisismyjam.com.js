/**
 * This is My Jam Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Rhapsody.com playlist pages.
 */
Playgrub.source.url = 'thisismyjam.com';
Playgrub.source.error = 'Check your This is My Jam page - only playlist pages are supported.'
Playgrub.source.scrape = function() {

	$(".jamDescription").each(function() {
		var title = $.trim($(this).find('#jamTitle').text());
		var artist = $.trim($(this).find('#jamArtist').text());

		artist = artist.replace("by","");
		Playgrub.playlist.add_track(artist, title);
    });

    $(".currentJam").each(function() {
    	var str = $(this).text();
    	str = str.split(" by ","");
		var title = str[0];
		var artist = str[1];
		Playgrub.playlist.add_track(artist, title);
    });
}

Playgrub.source.start();
