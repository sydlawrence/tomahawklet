/**
 * Amazon Scraper
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on the Apple.com iTunes Chart Page
 */

Playgrub.source.url = 'amazon';
Playgrub.source.error = 'Tomahawklet currently supports iTunes Charts pages only. Please check your url.';
Playgrub.source.scrape = function() {
	if ($('#MusicTracksHeader').length === 0) return;

	$('.content tr.listRowOdd, .content tr.listRowEven').each(function(){

		var text = $(this).find("td").html();
		text = text.split(".");
		text.splice(0,1);
		text = text.join(".");

		text = text.split(" - ");
		var artist = text[text.length-1];
		text.splice(0,text.length-1);

		var title = text.join(" - ");

		if (artist !== "" && title !== "")
        	Playgrab.insertAddButton($(this),artist,title);

	});
}

Playgrub.source.start();
