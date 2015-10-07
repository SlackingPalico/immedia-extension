window.twttr = (function(d, s, id) {

  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));


var TwitterPreview = React.createClass({

  embedTweet: function() {
    var tweetId = this.props.previewItem.url.slice(this.props.previewItem.url.length - 18, this.props.previewItem.url.length);

    $('<div id="tweet"></div>').hide().prependTo('#twitterPreview').fadeIn(800);
    twttr.widgets.createTweet(
      tweetId,
      document.getElementById('tweet')
      )
  },

  componentDidMount: function() {
    this.embedTweet();
},

  componentDidUpdate: function() {
    $('#twitterPreview').empty();
    this.embedTweet();
  },

  render: function() {

    return (
      React.createElement('div', { id : 'twitterPreview'})
      )

  }

});