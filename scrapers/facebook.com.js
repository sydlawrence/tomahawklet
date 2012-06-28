/**
 * Facebook Tomahawklet Scraper
 * Created by: J Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Facebook.com music pages.
 */
Playgrub.source.url = 'http://*facebook.com';
Playgrub.source.error = 'Check your Facebook page - only music pages are supported.'
Playgrub.source.scrape = function() {

	$("li.music_song_item").each(function() {
	        var song = $(this).find('a.music_button_trigger').text();
	        var artist = $(this).find('div.uiCollapsedListMiddot span').text();

	       Playgrub.playlist.add_track(artist, song);
    });

	$('.externalShareText .fsm').each(function() {
		var regex = new RegExp("bandcamp.com");
        if(regex.exec($(this).html())) {
	        var str = $(this).parent().find('.blueItemLink').html();
	        str = str.split(", by ");
	        var title = str[0];
	        var artist = str[1];

	       Playgrub.playlist.add_track(artist, title);
        }
	});
}

Playgrub.source.start();
