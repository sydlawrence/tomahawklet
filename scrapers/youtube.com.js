/**
 * YouTube.com Playgrub Scraper
 * Created by: Niall Smart <niall AT pobox DOT com>
 * Updated by: Dave Tapley <dukedave AT gmail DOT com>
 * Version: 0.1.1
 *
 * Notes:
 *
 * This scraper will work on any YouTube page with a playlist bar, and on playlist pages.
 *
 * It does not work with YouTube Disco:
 * http://stackoverflow.com/questions/7819651/retrieving-a-youtube-disco-playlist
 */
Playgrub.source.url = 'https?://.*youtube.com.*';
Playgrub.source.error = 'Check your YouTube page - only YouTube Disco/playlist playback pages are supported.'
Playgrub.source.scrape = function() {

  var full_list_id = $('input[name=full_list_id]')
  var list_id = full_list_id.length > 0 ? full_list_id.val() : yt.getConfig('LIST_ID')

  if(!list_id) {
    return;
  }

  // list_id is given with a 'PL' prefix, which is not used with the API
  $.getJSON('//gdata.youtube.com/feeds/api/playlists/' + list_id.substring(2) + '?v=2&alt=jsonc',
    function(response){
      $.each(response.data.items, function(index, item) {
        title = item.video.title.split(" - ");
        var artist = title[0];
        var song = title[1];

        if (artist && song) {
            Playgrub.playlist.add_track(artist, song);
        }
      });
    }
  );
}

Playgrub.source.start();
