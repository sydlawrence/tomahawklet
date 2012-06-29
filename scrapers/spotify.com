
/**
 * Napster Playgrub Scraper
 * Created by: Jason Herskowitz <jherskowitz AT globallistic DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on Napster playlist pages.
 */
Playgrub.source.url = 'open.spotify.com';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {
	var path = window.location.pathname;
	path = path.replace("/","");
	path = path.split("/");

	var processTrack = function(track) {
		var artist = track.artist;
		var title = track.title;

        Playgrub.playlist.add_track(artist, title);
	}

	var uri = "spotify:"+path.join(":");
	var url = "http://spotikea.tomahawk-player.org/browse/"+uri;
	url = "http://stage.toma.hk/proxy.php?url="+encodeURIComponent(url)+"&callback=?";

	if (path[0] === "album") {
		
    	$.getJSON(url, function(data){
    		for (var i = 0; i < data.album.result.length;i++) {
    			processTrack(data.album.result[i]);
    		}

    	})
	}

	if (path[0] === "playlist") {
		
    	$.getJSON(url, function(data){
    		for (var i = 0; i < data.playlist.result.length;i++) {
    			processTrack(data.album.result[i]);
    		}

    	})
	}


}

Playgrub.source.start();
