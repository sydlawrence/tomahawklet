/**
 * Soundtracking Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Soundtracking song pages.
 */
Playgrub.source.url = 'soundtracking.com';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {
	if (window.location.href.indexOf("soundtracking.com/posts/") != -1) {
		$(".player").each(function() {
			var artist = $(this).find('p.artist').text();
			var song = $(this).find('p.song').text();
			artist = artist.replace('by', '');

			Playgrub.playlist.add_track(artist, song);
		});
	} else if (window.location.href.indexOf("soundtracking.com/") != -1) {
		$('div.song-zone').each(function() {
			var song = $(this).find('p.post-title').text();
			var artist = $(this).find('p.artist-name').text();
			Playgrub.playlist.add_track(artist, song);
		});

	}

};


Playgrub.source.start();