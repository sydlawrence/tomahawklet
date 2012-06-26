
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
if(Playgrub.source.set_url('npr.org')) {
    Playgrub.source.error = '';
    Playgrub.source.scrape = function() {


        $('.playlistwrap tr:not(.tableHeader)').each(function(){
            var title = $(this).find(".song").html();
            var artist = $(this).find(".artist").html();
            console.log(artist + " :- "+title);
   			Playgrub.playlist.add_track(artist,title);

        })
    }
}