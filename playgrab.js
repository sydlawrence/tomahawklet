

var Playgrab;

Playgrab = {
	insertAddButton: function(element,artist, title ) {
		this.displayTrack(artist, title);
	},
	savePlaylist: function() {

	},
	retreivePlaylist: function() {

	},
	checkUrl: function(url) {
		url = url.replace("*");
		var location = window.location.href;
		if (location.indexOf(url) != -1) {
			console.log("true: "+url);
			return true;
		}
		console.log("false: "+url);
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
			this.displayTrack(artist, title);
			alert(this.tracks.length);
		},
		remove_track: function(index) {
			alert("to be implemented");
		}
	},
	element: undefined,
	display: function() {
		this.element = $("<ul style='position:absolute;z-index:999999;max-width:30%;top:0;left:0;padding:20px;background:#f1f1f1;border-right:1px solid #ff0000;border-bottom:1px solid #ff0000'/>");
		$('body').append(this.element);
	},
	displayTrack: function(artist, title) {
		var li = $("<li><span class='title' style='font-weight:bold'>"+title+"</span> - <span class='artist'>"+artist+"</span></li>")
		
		li.css({
			display: "block",
			borderBottom:"1px solid #ccc",
			lineHeight:"20px"
		})

		li.click(function() {
			alert("adding this song");
		})

		this.element.append(li)
	},
	init: function() {
		this.display();
//		Playgrab.source.start();
		Playgrab.addScraper('rdf');	
		Playgrab.addScraper('bbc.co.uk');	
		Playgrab.addScraper('absoluteradio.co.uk');	
		Playgrab.addScraper('apple.com');	

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

