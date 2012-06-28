
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


	var processPlaylist = function(data) {
		for (var i = 0; i < data.result.length; i++) {
			var artist = data.result[i].artist;
			var title = data.result[i].title;

            Playgrub.playlist.add_track(artist, title);
		}
	}

    $('iframe').each(function() {
    	var src = $(this).attr("src");

    	var regex = new RegExp("embed.spotify.com");
        if(regex.exec(src)) {
        	src = src.split("?");
        	src = src[1].split("&");
        	var uri = src[0];
        	uri = uri.split("=");
        	uri = uri[1];
        	var url = "http://spotikea.tomahawk-player.org/browse/"+uri;
        	url = "http://stage.toma.hk/proxy.php?url="+encodeURIComponent(url)+"&callback=?";
        	$.getJSON(url, function(data){

        		if (data.playlist !== undefined) {
        			processPlaylist(data.playlist);
        		}
        	})
        	

        }

    	//"https://embed.spotify.com/?uri=spotify:user:napstersean:playlist:3vxotOnOGDlZXyzJPLFnm2&theme=white
    })

    
}

Playgrub.source.start();
