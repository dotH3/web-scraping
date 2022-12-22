const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require('fs')

const url = 'https://www.reddit.com/'

const run = async()=>{
    const $ = await request({
        uri:url,
        transform: body=>cheerio.load(body)
    })
    const webTitle = $('title')
    console.log(webTitle.html());
}
run()

return
request(url, (err, res, body)=>{
    console.clear()
    if(!err && res.statusCode == 200){
        cheerio.load(body)
        return
        fs.writeFile('archivo.html', body, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
              console.log("The written has the following contents:");
              console.log(fs.readFileSync("archivo.html", "utf8"));
            }
        })
        
    }
})