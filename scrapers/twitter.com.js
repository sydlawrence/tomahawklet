/**
 * Songkick Playgrub.source
 * Created by: Toby Padilla <tobypadilla AT gmail DOT com>
 * Version: 0.1
 *
 * Notes:
 *
 * This scraper will work on any Playtapus Search result
 */
Playgrub.source.url = 'twitter.com';
Playgrub.source.error = 'To play Twitter songs please use the format &#9733; ARTIST &#9835; SONG. <a href=\'http://twitter.com/#search?q=%23playtapus\'>Example</a>';
Playgrub.source.scrape = function() {
    var reg = /\u2605(.*)\u266B([^#]*)#/i;
    var artist;
    var song;

    $(".tweet-text").each(function () {
        if($(this).text().match(reg)) {
            artist = RegExp.$1;
            song = RegExp.$2;
            if(artist.length > 0 && song.length > 0)
                Playgrub.playlist.add_track(artist, song);
        }
    });

    $('.twitter-timeline-link').each(function() {
        var url = $(this).attr("data-expanded-url");
        var shortUrl = $(this).attr("href");
        var regex = new RegExp("spoti.fi");
        if(regex.exec(url)) {


            $.getJSON("http://stage.toma.hk/proxy.php?url="+encodeURIComponent(shortUrl)+"&callback=?", function(data){
                alert("done!"+ geturl.getAllResponseHeaders());
                  console.log(arguments); 
            });
        }

    })

}

Playgrub.source.start();
