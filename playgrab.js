

var Playgrab = {
	insertAddButton: function(element,artist, title ) {
		var btn = $('<button>Add to playlist</button>');
		btn.click(function() {
			Playgrub.playlist.add_track(artist,title);
		}).css({
			position:"absolute",
			top:10,
			left:10,
			zIndex:100
		});
		element.append(btn);
	},
	source: {
		url: "",
		error: "",
		scrape: function() {
			$('.chart li').each(function() {
				var alt = $(this).find("img").attr("alt");
				alt = alt.split(" - ");
				Playgrab.insertAddButton($(this),alt[1],alt[0])
			})
			

		},
		start: function() {
			// if it is the correct url
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
		Playgrub.source.start();	
	}
}

var Playgrub = Playgrab;


var script = document.createElement('script');
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function() {
	Playgrub.init();
}
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';

