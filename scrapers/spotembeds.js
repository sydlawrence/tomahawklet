
/**
 * Spotify embeds Tomahawklet Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on all pages with spotify embeds
 */
Playgrub.source.url = '*';
Playgrub.source.error = 'Sorry, no tracks were found. Make sure you are on the "tracks" tab.'
Playgrub.source.scrape = function() {

    $('iframe').each(function() {
    	var src = $(this).attr("src");

    	var regex = new RegExp("embed.spotify.com");
        if(regex.exec(src)) {
        	src = src.split("?");
        	src = src[1].split("&");
        	var uri = src[0];
        	uri = uri.split("=");
        	uri = uri[1];
        	alert(uri);

        }

    	//"https://embed.spotify.com/?uri=spotify:user:napstersean:playlist:3vxotOnOGDlZXyzJPLFnm2&theme=white
    })
}

Playgrub.source.start();
