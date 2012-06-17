var SCRAPERS = [
	'rdf',	
	'8tracks.com',	
	'absoluteradio.co.uk',	
	'apple.com',
	'bbc.co.uk',	
	'billboard.com',
	'blip.fm',
	'default',
	'everyhit.com',
	'ex.fm',
	'fiql.com',
	'grooveshark.com',
	'hypem.com',
	'kerrangradio.co.uk',
	'last.fm',
	'lastfm.com.br',
	'lastfm.com.tr',
	'lastfm.de',
	'lastfm.es',
	'lastfm.fr',
	'lastfm.it',
	'lastfm.jp',
	'lastfm.pl',
	'lastfm.ru',
	'lastfm.se',
	'mixcloud.com',
	'mog.com',
	'music.yahoo.com',
	'musicbrainz.org',
	'mymusiclists.com',
	'napster.com',
	'nme.com',
	'pitchfork.com',
	'playbyaol.com',
	'playlick.com',
	'playlistify.org',
	'rdio.com',
	'sharemyplaylists.com',
	'simfy.de',
	'songkick.com',
	'soundcloud.com',
	'soundtracking.com',
	'twitter.com',
	'vevo.com',
	'wikipedia.org',
	'wmce.de',
	'xfm.co.uk',
	'youtube.com'
];




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
		url = url.replace("*","");
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
			Playgrab.displayTrack(artist, title);
		},
		remove_track: function(index) {
			alert("to be implemented");
		}
	},
	element: undefined,
	display: function() {
		this.element = $("<ul style='margin:0;padding:0'/>");
		var $div = $("<div  style='position:fixed;z-index:999999;width:274px;top:0;left:0;bottom:0;overflow-y:auto;padding:0px;background:#f1f1f1;border-right:1px solid #ff0000;border-bottom:1px solid #ff0000'/>")
		$div.append(this.element);

		var $closer = $("<div>Close</div>");
		$closer.css({
			position:"fixed",
			top:0,
			cursor:"pointer",
			left:274,
			padding:"5px 10px",
			background:"#f00",
			color:"#fff",
			fontWeight:"bold",
			fontSize:"14px",
			zIndex:999999
		});
		$closer.click(function() {
			$div.remove();
			$(this).remove();
			$('body').css("padding-left",0);
		})

		$('body').css("padding-left",274);
		$('body').append($div).append($closer);
	},
	rendered:{},
	displayTrack: function(artist, title) {
		if (artist === undefined || title === undefined) return;

		if (this.rendered[artist+title]) return;
		this.rendered[artist+title] = true;

		var track = new Track({
			title:title,
			artist:artist
		});

		var li = track.renderSummary(this.element);

		var placeholder = $("<img src='https://github.com/sydlawrence/tomahawklet/raw/master/placeholder.png'/>");
		placeholder.css({
			position:"absolute",
			top:0,
			left:0,
			zIndex:-1,
			width:"100%",
			height:"100%"
		});
		var img = li.find("img");
		img.css({opacity:0});

		li.append(placeholder);

		img.on("load", function() {
			img.animate({opacity:1}, 500);
		})
		if (img[0].complete) {
			img.animate({opacity:1}, 500);
		}



		this.element.find("h3, h4").css({
			width:"100%",
			textOverflow:"ellipsis",
			overflow:"hidden",
			whiteSpace:"nowrap"

		});
		this.element.find("h4").css({
			fontSize:"12"
		});
		this.element.find("h3").css({
			fontWeight:"bold"
		});

		li.find('a').click(function(e) {
			e.preventDefault();
			$('.tomahk-iframe').remove();
			var iframe = $("<iframe style='border:none;position:fixed;top:0;right:0;z-index:9999999;' class='tomahk-iframe' width=300 height=300 src='http://stage.toma.hk/embed.php?artist="+escape(artist)+"&title="+escape(title)+"&autoplay=true'></iframe>");
			var closer = $("<span class='tomahk-iframe'>x</span>");
			closer.css({
				position:"fixed",
				top:10,
				zIndex:99999999,
				right:270,
				fontSize:"30px",
				fontWeight:"bold",
				fontFamily:"helvetica, arial, sans-serif",
				display:"block",
				padding:"5px 5px 15px 5px",
				background:"#3a3a3a",
				color:"#ffffff"
			});
			closer.click(function() {
				$('.tomahk-iframe').remove();
			});
			$('body').append(iframe).append(closer);
		})
		return;


		var playLink = $("<a target='_blank' href='http://toma.hk/?artist="+escape(artist)+"&title="+escape(title)+"'><span class='title' style='font-weight:bold'>"+title+"</span> - <span class='artist'>"+artist+"</span></a>")
		var li = $("<li/>");
		li.append(playLink);
		li.css({
			display: "block",
			borderBottom:"1px solid #ccc",
			paddingTop:"8px",
			position:"relative",
			paddingBottom:"8px",
			paddingLeft:40,
		});
		var button = $("<img src='https://github.com/sydlawrence/tomahawklet/raw/master/tomahawk_button.png'/>");
		button.css({
			position:"absolute",
			left:0,
			top:"50%",
			marginTop: -12
		});

		button.click(function() {
			alert("adding this song);")
			button.hide();
		})



		playLink.click(function(e) {
			e.preventDefault();
			$('.tomahawk-iframe').remove();
			iframe.css({
				position: "absolute",
				zIndex:999999,
				top:0,
				right:0
			})
			$('body').append(iframe);

		})

		this.element.append(li)
	},
	init: function() {
		this.display();
//		Playgrab.source.start();
		for (var i = 0; i < SCRAPERS.length;i++) {
			Playgrab.addScraper(SCRAPERS[i]);	
		}
	}
}

var Playgrub = Playgrab;







var script = document.createElement('script');
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
script.src = 'http://stage.toma.hk/js/classes/Artist.js';

var script = document.createElement('script');
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
script.src = 'http://stage.toma.hk/js/classes/Track.js';

var script = document.createElement('script');
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
script.src = 'http://stage.toma.hk/js/classes/Album.js';

var script = document.createElement('script');
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function() {
	var t = setTimeout(function() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(script);
		script.src = 'http://stage.toma.hk/js/bootstrap/bootstrap-tooltip.js';

		Playgrub.init();
	},500);
}
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';

