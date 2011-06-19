# jScrape
### scrape the web with js and jquery 

### see: [jscrape.it](http://jscrape.it)

### Basic example:

require jquery and jscrape:

    <script src='http://code.jquery.com/jquery-1.6.1.min.js'></script>
    <script src='http://jscrape.it/js/jscrape/jscrape.js'></script>


fetch a page, extract some content and print it in a div:
  
    <script type='text/javascript'>
      $(function(){
        var url = "http://jquery.com"
        var jscrape = new $.jScrape()
        jscrape.frame("#jsc_frame").get(url, function(page){
          page.fetch("body") // use css selectors
        })
      })
    </script>
    <div id="#jsc_frame"></div>


there is no documentation but the code is very short, read only coffeescript file: [jscrape.coffee](https://github.com/makevoid/jscrape/blob/master/jscrape.coffee)



### jScrape server

Built with Ruby Goliath, find it here: [github.com/makevoid/jscrape-server](https://github.com/makevoid/jscrape-server)

- very simple
- handles redirect

Feel free to fork everything!