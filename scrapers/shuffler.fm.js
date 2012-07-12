
/**
 * Shuffler FM Tomahawklet Scraper
 * Created by: Syd Lawrence <sydlawrence AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on shuffler fm mix pages.
 */
Playgrub.source.url = 'shuffler.fm';
Playgrub.source.error = 'Sorry, no tracks were found.'
Playgrub.source.scrape = function() {

    $('.metainfo').each(function() {
        var artist = $(this).find('.artist').text();
        var song = $(this).find('.title').text().trim();
	

       Playgrub.playlist.add_track(artist, song);
    });
}

Playgrub.source.start();
