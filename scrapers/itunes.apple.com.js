/**
* iTunes Song/Artist/Playlist Scraper
* Created by: Daniel Nunes
* Version: 0.1
*
* Notes:
*
* This scraper will work on itunes.apple.com Song, Music Artist, and Playlist pages.
*/
Playgrub.source.url = 'https?://itunes\.apple\.com.*(album|playlist|artist)/.*';
Playgrub.source.error = 'Tomahawk currently supports iTunes song, playlist, and artist pages.'
Playgrub.source.scrape = function() {
	var source=$('.track-list .music.song');
	$.each(source, function(){
		var artist=$(this).attr('preview-artist');
		var song=$(this).attr('preview-title');
		console.log('Adding '+artist+' - '+song);
		if(artist && song);
			Playgrab.insertAddButton($(this),artist,song);
	});
}

Playgrub.source.start();
