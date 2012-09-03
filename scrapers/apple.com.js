/**
 * Apple.com iTunes Chart Playgrub Scraper
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on the Apple.com iTunes Chart Page
 */

Playgrub.source.url = 'apple.com';
Playgrub.source.error = 'Tomahawklet currently supports iTunes Charts pages only. Please check your url.';
Playgrub.source.scrape = function() {
    $(".charts #grid li").each(function () {
        var title = $(this).find("h3 a").html();;
        var artist = $(this).find("h4 a").html();;
        if (artist !== "" && title !== "")
        	Playgrab.insertAddButton($(this),artist,title);
    });
}

Playgrub.source.start();

/**
* iTunes Song/Artist/Playlist Scraper
* Created by: Daniel Nunes
* Version: 0.1
*
* Notes:
*
* This scraper will work on itunes.apple.com Song, Music Artist, and Playlist pages.
*/
Playgrub.source.url = 'itunes.apple.com';
Playgrub.source.error = 'Tomahawk currently supports iTunes song, playlist, and music artist pages.'
Playgrub.source.scrape = function() {
    var page = document.URL;
	/* Gets the page URL */
	
	if(page.lastIndexOf('http://',0) == 0) /* "lastIndexOf(string, startIndex) == 0" sees if string starts with that parameter given */
		page = page.substring(7);
	else if(page.lastIndexOf('https://',0) == 0)
		page = page.substring(8);
	else
		return;
	/* Continues if http or https and removes URL protocol */
	
	if(page.lastIndexOf('itunes.apple.com/',0) == 0)
		page = page.substring(page.indexOf('/',17)+1);
	else
		return;
	/* Continues if the URL begins with itunes.apple.com, and removes the domain + locale of URL */
	
	if(page.lastIndexOf('album',0) == -1 && page.lastIndexOf('playlist',0) && -1 && page.lastIndexOf('artist',0) && -1)
		return;
	/* Only works on album, playlist, and artist pages */
	
	var a = document.getElementsByClassName('track-list');
	if(a.length == 0)
		return;
	for(var b = 0; b < a.length; b++) {
		if(a[b].offsetWidth != '0') {
			a = a[b].getElementsByClassName('song music');
			break;
		}
		else if(a.length-1 == b)
			return;
	}
	/* Gets the first track-list that's visible */
	
	var output = '';
	for(var b = 0; b < a.length; b++) {
		var artist = a[b].getAttribute('preview-artist');
		var song = a[b].getAttribute('preview-title');
		if(artist != null && song != null)
			Playgrub.playlist.add_track(artist,song);
	}
}

Playgrub.source.start();