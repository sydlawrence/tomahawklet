

var Playgrab;

Playgrab = {
	insertAddButton: function(element,artist, title ) {
		var btn = $('<img src="https://github.com/sydlawrence/tomahawklet/raw/master/tomahawk_button.png" />');
		btn.click(function() {
			Playgrub.playlist.add_track(artist,title);
			btn.fadeOut();
		}).css({
			position:"absolute",
			top:"50%",
			marginTop:-12,
			left:10,
			zIndex:100
		});
		element.append(btn);
	},
	savePlaylist: function() {

	},
	retreivePlaylist: function() {

	},
	checkUrl: function(url) {
		url = url.replace("*");
		var location = window.location.href;
		if (location.indexOf(url) != -1) {
			return true;
		}
		return false;

	},
	source: {
		set_url: function(url) {
			var bool = Playgrab.checkUrl(url);
			if (bool) this.url = url;
			return bool
		},
		url: "",
		error: "",
		scrape: function() {

			$('[typeof="mo:Track"]').each(function(){
				var title = $(this).find("[property='dc:title']").html();
				var artist = $(this).find("[typeof='mo:MusicArtist']").find("[property='foaf:name']").html();


            	Playgrab.insertAddButton($(this),artist,title);

			})
			

		},
		start: function() {
			// if it is the correct url
			if (!Playgrab.checkUrl(this.url)) return;
			this.scrape();
		}
	},
	addScraper: function(domain) {
		var link = "<scrip"+"t src='https://raw.github.com/sydlawrence/tomahawklet/master/scrapers/"+domain+".js'><"+"/script>";
		$('body').append(link);
	},
	playlist: {
		title: "",
		creator: "",
		tracks: [],
		add_track: function(artist,title) {
			alert(artist+" "+title);
			this.tracks.push({
				artist:artist,
				title:title
			});
			alert(this.tracks.length);
		},
		remove_track: function(index) {
			alert("to be implemented");
		}
	},
	init: function() {
//		Playgrab.source.start();
		Playgrab.addScraper('rdf');	
		Playgrab.addScraper('bbc.co.uk');	

	}
}

var Playgrub = Playgrab;


var script = document.createElement('script');
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function() {
	var t = setTimeout(function() {
		Playgrub.init();
	},500);
}
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';

