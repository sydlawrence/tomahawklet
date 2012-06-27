var SCRAPERS = [
	'rdf',	
	'default',
	'spotembeds',
	'soundcloudembed',


	'8tracks.com',	
	'absoluteradio.co.uk',	
	'amazon.com',	
	'apple.com',
	'bbc.co.uk',	
	'billboard.com',
	'blip.fm',
	'drownedinsound.com',
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
	'npr.org',
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
	open:true,
	savePlaylist: function() {

	},
	retreivePlaylist: function() {

	},
	checkUrl: function(url) {
		if (url === "*") return true;

		url = url.replace(".*.","*");
		url = url.replace(".*\.","*");
		var regex = new RegExp(url);
        if(regex.exec(window.location.href)) {
        	console.log("true: "+url);
        	return true;
        }
        console.log("false: "+url);

        return false;

	},
	source: {
		set_url: function(url) {
			this.url = url;
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
			if (artist !== undefined && title !== undefined && artist !== null && title !== null && artist !== "" && title !== "")
				Playgrab.displayTrack(artist, title);
		},
		remove_track: function(index) {
			alert("to be implemented");
		}
	},
	element: undefined,
	div: undefined,
	loading:undefined,
	display: function() {


		this.element = $("<ul style='margin:0;padding:0'/>");
		this.loading = $("<div>Loading</div>");
		this.loading.css({
			position:"absolute",
			top:0,
			left:0,
			color:"#fff",
			right:0,
			fontFamily:"Helvetica, arial, sans-serif",
			textAlign:"center",
			fontSize:"13px",
			fontWeight:"bold"
		})
		
		
		var header = $("<header/>");
		header.css({
		  background:'#1a1a1a',
		  height:20,
		  padding:"5px 20px",
		  position:"fixed",
		  left:0,
		  zIndex:99999999999,
		  width:239,
		  top:0
		});

		var logo = $("<img src='https://github.com/sydlawrence/tomahawklet/raw/master/tomahk_logo.png'/>");
		logo.css({
            height:20,
            display:"block",
            float:"left",
            marginRight:10,
            cursor:"pointer"
        }).click(function() {
        	window.location = "http://toma.hk/";
        });


		var createPlaylist = this.generateForm();
        createPlaylist.css({
            height:20,
            display:"block",
            float:"right",
            marginLeft:10,
            cursor:"pointer"
        })
		
		header.append(createPlaylist).append(logo);
		
		this.element.append(this.loading);
		this.div = $("<div  style='position:fixed;z-index:999999;width:278px;top:30px;left:0;bottom:0;overflow-y:auto;padding:0px;background:#252727;color:#1a1a1a;border-right:1px solid #ff0000;'/>")
		this.div.append(this.element);
		var that = this;
		var $closer = $("<div>Close</div>");
		$closer.css({
			position:"fixed",
			top:0,
			cursor:"pointer",
			left:278,
			padding:"5px 10px",
			background:"#f00",
			fontFamily:"helvetica, arial, sans-serif",

			color:"#fff",
			fontWeight:"bold",
			fontSize:"14px",
			zIndex:999999
		});
		$closer.click(function() {
			that.div.animate({left:-300});
			header.animate({left:-300});


			$(this).hide();
			that.open = false;
			if ($('.iframe-tomahk').length > 0) {
				$('.iframe-tomahk').css("border-bottom", "0px solid rgba(0,0,0,0.6)")
				.css("border-right", "0px solid rgba(0,0,0,0.6)");

				$('.iframe-tomahk').css({
					borderTop:"10px solid rgba(0,0,0,0.7)",
					borderRadius:"0 10px 10px 0",
					borderBottom:"10px solid rgba(0,0,0,0.7)",
					borderRight:"10px solid rgba(0,0,0,0.7)"
				}).stop().animate({
					top:150,
					width:100,
					height:100
				}).hover(function() {
					if (that.open) return;
					$(this).stop().animate({
						top:100,
						width:200,
						height:200
					});	
				}, function() {
					if (that.open) return;
					$(this).stop().animate({
						top:150,
						width:100,
						height:100
					});	
				});


				
				$('.tomahk-iframe').animate({top:180}).css("font-size", 10).css("line-height","10px");
			}
			$('body').animate({paddingLeft:0});
		});


		var $opener = $("<div>Open</div>");
		$opener.css({
			position:"fixed",
			top:0,
			cursor:"pointer",
			left:0,
			padding:"5px 10px",
			background:"#f00",
			fontFamily:"helvetica, arial, sans-serif",

			color:"#fff",
			fontWeight:"bold",
			fontSize:"14px",
			zIndex:999999999
		});
		$opener.click(function() {
			that.div.animate({left:0});
			header.animate({left:0}, 500, function() {
				$closer.show();
			});
			
			//$(this).hide();
			$('body').animate({paddingLeft:274}, 500);
			that.open = true;
			if ($('.iframe-tomahk').length > 0) {
				$('.iframe-tomahk').css("border", "0");

				$('.iframe-tomahk').css({
					borderRadius:"0",
					borderRight:"1px solid red"
				}).stop().animate({
					top:30,
					width:278,
					height:278
				})[0].onhover = function(){};
				
				$('.tomahk-iframe').animate({top:180}).css("font-size", 20).css("line-height","20px");
			}
		})

		$('body').animate({paddingLeft:274}, 500);
		$('body').append(this.div).append($closer).append($opener).append(header);
	},
	rendered:{},
	form:undefined,
            //http://toma.hk/playlistgen.php?title={PLAYLIST_TITLE}&artists[]={ARTIST_ONE}&titles[]={TITLE_ONE}&artists[]={ARTIST_TWO}&titles[]={TITLE_TWO}

	generateForm: function() {
		this.form = $("<form method='post' target='_blank' action='http://stage.toma.hk/playlistgen.php'/>");
		this.form.append("<input type='hidden' name='title' value='"+window.document.title+"' />");
		this.form.append("<input type='image' height=20 src='https://github.com/sydlawrence/tomahawklet/raw/master/playlist-icon.png' alt='Create a playlist from this page' title='Create a playlist from this page' />");

		this.form.append("<input type='hidden' name='save' value='true' />");
		this.form.append("<input type='hidden' name='redirect' value='true' />");


		for ( i in this.rendered) {
			var obj = this.rendered[i];
			this.form.append("<input type='hidden' name='artists[]' value='"+obj.artist+"' />");
			this.form.append("<input type='hidden' name='titles[]' value='"+obj.title+"' />");

		}


		return this.form;


	},
	displayTrack: function(artist, title) {
		if (artist === undefined || title === undefined) return;
		if (artist === "undefined" || title === "undefined") return;
		if (artist === null || title === null) return;

		if (this.rendered[artist+title]) return;
		this.rendered[artist+title] = {artist:artist, title:title};

		this.form.append("<input type='hidden' name='artists[]' value='"+artist+"' />");
		this.form.append("<input type='hidden' name='titles[]' value='"+title+"' />");


		var track = new Track({
			title:title,
			artist:artist
		});

		var li = track.renderSummary(this.element);
		li.css({width:"50%"});

		li.height(li.width());

		this.loading.remove();

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
			background:"none",
			textAlign:"center",
			lineHeight:"14px",
			padding:0,
			margin:0,
			whiteSpace:"nowrap",
			textTransform:"uppercase",
			fontFamily:"helvetica, arial, sans-serif"
		});
		this.element.find("h4").css({
			fontSize:"9px",
			fontWeight:"normal"
		});
		this.element.find("h3").css({
			fontWeight:"bold",
			fontSize:"13px"
		});

		var that = this;
		li.find('a').click(function(e) {
			e.preventDefault();
			$('.tomahk-iframe, .iframe-tomahk').remove();
			var iframe = $("<iframe class='iframe-tomahk' scrolling='no' style='border:none;position:fixed;top:30px;left:0;z-index:9999999;' class='tomahk-iframe' width=278 height=278 src='http://stage.toma.hk/embed.php?artist="+escape(artist)+"&title="+escape(title)+"&autoplay=true'></iframe>");
			var closer = $("<span class='tomahk-iframe'>x</span>");
			closer.css({
				position:"fixed",
				top:80,
				zIndex:99999999,
				left:10,
				fontSize:"20px",
				lineHeight:30,
				fontWeight:"bold",
				cursor:"pointer",
				fontFamily:"helvetica, arial, sans-serif",
				display:"block",
				padding:"5px 5px 15px 5px",
				background:"#3a3a3a",
				color:"#ffffff"
			}).css("font-family", "Helvetica, arial, sans-serif");
			iframe.css({borderRight:"1px solid #f00"});
			//window.iframe = iframe;

			iframe.load(function() {
				var iframeDoc = iframe[0].contentDocument || iframe[0].contentWindow.document
				$(iframeDoc).on("songEnded", function() {
					alert("hi");
				})	
			});

			if (iframe[0].complete) {
				var iframeDoc = iframe[0].contentDocument || iframe[0].contentWindow.document
				$(iframeDoc).on("songEnded", function() {
					alert("hi");
				})	
			}
			

			that.div.animate({top:308});
			closer.click(function() {
				$('.tomahk-iframe, .iframe-tomahk').remove();
				that.div.animate({top:30});
			});
			$('body').append(iframe).append(closer);
		})
		li.attr("title", li.attr("title").replace("<br/>", " - "));
		return;


	},
	init: function() {
		this.display();
//		Playgrab.source.start();
		for (var i = 0; i < SCRAPERS.length;i++) {
			var scraper = SCRAPERS[i];
			var scraperTest = scraper.split(".");
			if (scraperTest.length === 1) {
				Playgrab.addScraper(scraper);	
			}
			else if (this.checkUrl(scraper)) {
				Playgrab.addScraper(scraper);	
			}
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
		Playgrub.init();
		var script = document.createElement('script');
		script.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(script);
		script.src = 'http://stage.toma.hk/js/bootstrap/bootstrap-tooltip.js';
		script.onload = function() {
			$('li.cover').tooltip();
		}
	},500);
}
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
