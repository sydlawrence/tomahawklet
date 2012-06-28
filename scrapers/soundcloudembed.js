

/**
 * Soundcloud embeds Tomahawklet Scraper
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
		alert("we need to process the soundcloud playlists");
	}

	var processTrack = function(track) {
		var title = track.title.split(" - ");
		
		if (title.length === 1) {
			title = title[0];
			var artist = track.user.username;
		} else {
			var artist = title[0];
			title = title[1];
		}
	
		Playgrub.playlist.add_track(artist,title);
	}

    $('iframe').each(function() {
    	var src = $(this).attr("src");

    	var regex = new RegExp("w.soundcloud.com/player");
        if(regex.exec(src)) {
        	src = src.split("?");
        	src = src[1].split("&");
        	var uri = src[0];
        	uri = uri.split("=");
        	uri = uri[1];

        	uri = decodeURIComponent(uri);

        	console.log(uri);

        	var url = uri+"?consumer_key=TiNg2DRYhBnp01DA3zNag&format=json&callback=?";

        	//var url = "http://spotikea.tomahawk-player.org/browse/"+uri;
        	//url = "http://stage.toma.hk/proxy.php?url="+encodeURIComponent(url)+"&callback=?";
        	$.getJSON(url, function(data){
        		console.log(url);
        		console.log(data);
        		if (data.kind === "track") {

        			processTrack(data);
        		
        		} if (data.kind === "playlist") {
        			for (var i = 0; i < data.tracks.length; i++) {
        				processTrack(data.tracks[i]);
        			}
        		}
        	})
        	

        }

    	//"https://embed.spotify.com/?uri=spotify:user:napstersean:playlist:3vxotOnOGDlZXyzJPLFnm2&theme=white
    })

    
}

Playgrub.source.start();