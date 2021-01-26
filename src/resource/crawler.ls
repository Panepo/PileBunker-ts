require! {
  "request": request
  "fs": fs
  "jconv": jconv
}

folder = "./src/resource/"
url = "http://www116.sakura.ne.jp/~kuromoji/castle/castle_unitdata.htm"

# download html from the source
download_html = (name, url) ->
  request.get {url:url, encoding:null}, (err, resp, body) ->
    buffer = jconv.convert body, \SJIS, \UTF8
    (err) <- fs.writeFile folder+name+".html", buffer.toString!
    console.log name+".html finished!"

download_html "char", url

