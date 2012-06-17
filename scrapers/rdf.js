
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
if(Playgrub.source.set_url('*')) {
    Playgrub.source.error = 'This is an rdf test';
    Playgrub.source.scrape = function() {
        $('[typeof="mo:Track"]').each(function(){
            var title = $(this).find("[property='dc:title']").html();
            var artist = $(this).find("[typeof='mo:MusicArtist']").find("[property='foaf:name']").html();
            Playgrab.insertAddButton($(this),artist,title);

        })
    }
}