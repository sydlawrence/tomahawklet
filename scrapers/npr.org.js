
/**
 * RDF Audio Playgrab Scraper
 * Created by: Syd Lawrence
 * Version: 0.1
 *
 * Notes:
 *
 * Any page with rdfa support
* 
* To test, go to http://www.bbc.co.uk/radio1/programmes/schedules 
* and pick a recent show.
*/
Playgrub.source.url = 'npr.org';
Playgrub.source.error = 'This is the npr issue';
Playgrub.source.scrape = function() {

	function strip(html)
	{
	   var tmp = document.createElement("DIV");
	   tmp.innerHTML = html;
	   return tmp.textContent||tmp.innerText;
	}

    $('.playlistwrap tr:not(.tableHeader)').each(function(){
        var title = $(this).find(".song").html();
        var artist = $(this).find(".artist").html();
		Playgrub.playlist.add_track(artist,title);
    });
    $('.playlistitem').each(function() {
    	var title = strip($(this).find('.info li:nth-child(2)').html());
        title = title.replace("Song: ");
    	var artist = $(this).find(".bucketblock h4").text();

    })
}
Playgrub.source.start();
