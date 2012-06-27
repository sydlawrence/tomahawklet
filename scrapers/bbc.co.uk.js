
/**
 * BBC Radio 1 Charts Scraper
 * Created by: JP Hastings-Spital & Lucas Gonze
 * Version: 0.2
 *
 * Notes:
 *
 * To test, go to http://www.bbc.co.uk/radio1/chart/singles
 */
if(Playgrub.source.set_url('http://www.bbc.co.uk/radio1/chart/*')) {
    Playgrub.source.error = 'Oops, make sure its a singles chart!';
    Playgrub.source.scrape = function() {
        $('.chart li').each(function() {
            var alt = $(this).find("img").attr("alt");
            alt = alt.split(" - ");
            Playgrab.insertAddButton($(this),alt[1],alt[0])
        });
    }
}

Playgrub.source.start();

/**
 * BBC Playlist Playgrub Scraper
 * Created by: Lucas Gonze
 * Version: 0.1
 *
 * Notes:
 *
 * When a playlist is more than a week old the BBC blocks access to
 * playlists for people who aren't in the UK.  This is because it
 * doesn't have the rights to play music to them.  So this scraper
 * will only work outside of the UK for a short time.  
* 
* To test, go to http://www.bbc.co.uk/radio1/programmes/schedules 
* and pick a recent show.
*/
if(Playgrub.source.set_url('http://www\.bbc\.co\.uk/programmes/*')) {
    Playgrub.source.error = 'Please make sure you are on a BBC page with songs.';
    Playgrub.source.scrape = function() {
        $('[typeof="mo:Track"]').each(function(){
            var title = $(this).find("[property='dc:title']").html();
            var artist = $(this).find("[typeof='mo:MusicArtist']").find("[property='foaf:name']").html();
            Playgrab.insertAddButton($(this),artist,title);

        })
    }
}


Playgrub.source.start();
/**
 * BBC Radio 1 Playlist Scraper
 * Created by: JP Hastings-Spital & Lucas Gonze
 * Version: 0.1
 *
 * Notes:
 *
 * To test, go to http://www.bbc.co.uk/radio1/playlist/
 */
if(Playgrub.source.set_url('http://www.bbc.co.uk/radio1/playlist/')) {
    Playgrub.source.error = 'Sorry, no suitable songs could be found';
    Playgrub.source.scrape = function() {
        $('.chart li').each(function() {
            var alt = $(this).find("img").attr("alt");
            alt = alt.split(" - ");
            Playgrab.insertAddButton($(this),alt[1],alt[0])
        });
    }
}


Playgrub.source.start();

/**
 * BBC Radio 2 Playlist Scraper
 * Created by: JP Hastings-Spital & Lucas Gonze
 * Version: 0.1
 *
 * Notes:
 *
 * To test, go to http://www.bbc.co.uk/radio2/music/playlist/
 */
if(Playgrub.source.set_url('http://www.bbc.co.uk/radio2/music/playlist/')) {
    Playgrub.source.error = 'Sorry, no suitable songs could be found';
    Playgrub.source.scrape = function() {
        $('.chart li').each(function() {
            var alt = $(this).find("img").attr("alt");
            alt = alt.split(" - ");
            Playgrab.insertAddButton($(this),alt[1],alt[0])
        });
    }
}

Playgrub.source.start();
