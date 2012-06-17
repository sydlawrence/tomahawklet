
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
