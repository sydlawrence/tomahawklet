/**
 * Deezer playlist Tomahawklet Scraper
 * Created by: Nicolas Froment <lasconic AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Deezer playlist pages.
 */
Playgrub.source.url = 'http://www\.deezer\.com/.*/music/.*';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {
	var count = 0;
	//playlist page
    $("dl.nb_dg_line").each(function() {
        var song = $(this).find('.sng_title').text();
        var artist = $(this).find('.art_title').text();
        Playgrub.playlist.add_track(artist, song);
        count++;
    });
    if(count == 0) {
	    //album page
   		var artist = $("#naboo_album_artist a").text();
    	$("div.naboo_album_disk:visible dd.naboo_album_track_title:visible").each(function() {
        	var song = $(this).text().trim();
        	Playgrub.playlist.add_track(artist, song);
    	});
    }
}

Playgrub.source.start();