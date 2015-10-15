
// http://ted.mielczarek.org/code/mozilla/bookmarklet.html

var s = document.createElement('script');
s.setAttribute('src', 'https://code.jquery.com/jquery-2.1.1.min.js');
s.setAttribute('type', 'text/javascript');
document.getElementsByTagName('head')[0].appendChild(s);
$jq = jQuery.noConflict();
$jq("a").each(function(i, el) {
    var href = $jq(el).attr("href");
    var matches = href ? href.match(/youtube.com\/watch\?.*?v=([a-zA-Z0-9_\-]+)/) : null;
    if (matches) {
        $jq(el).attr("href", "https://www.youtube-nocookie.com/embed/" + matches[1]);
    }
});
$jq("iframe").each(function(i, el) {
  var src = $jq(el).attr("src");
  var matches = src ? src.match(/youtube.com\/embed\/([a-zA-Z0-9_\-]+)\??/) : null;
  if (matches) {
    $jq(el).attr("src", "https://www.youtube-nocookie.com/embed/" + matches[1]);
  }
});
