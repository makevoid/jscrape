unless window.console || console.log
  window.console = {}
  console.log = ->

if ($.jScrape_server == undefined)
  $.jScrape_server = "jscrape.it" 

class Scrapable
  get: (url, callback) ->
    #console.log("mm: "+url)
    url = encodeURIComponent url
    this.data = undefined
    that = this
    $.get "http://"+$.jScrape_server+"/q/"+url, (data) => 
      this.page = new Page(data, that)
      this.data = data
      callback(this.page)
      # that.callback data 
    this
    
class Frame extends Scrapable
  constructor: (@elem) ->
    
    
class Page
  constructor: (@html, @frame) ->

  fetch: (selector) ->
    @html = $(@html).find(selector)#.first()
    this.render()
    @html
    
  render: ->  
    $(@frame.elem).html(@html)
  
class jScrape extends Scrapable
  constructor: ->
    this.timeout = 3000
  # callback: (data) ->
  #   this.data = data  
  
  frame: (@frame_elem) ->
    @frame = new Frame(@frame_elem)
    

  

$.jScrape = jScrape