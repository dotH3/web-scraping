const { response } = require('express')
const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require('fs')

const freeGamesGet = async ({res=response})=>{
    const url = 'https://as.com/meristation/tag/juegos_gratis/a/'

    const req = await request(url)
    const $ = cheerio.load(req)
    const elements = $('h2.n-tl').children()
    // console.clear()
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(elements.html())
    // return
    const fsName = 'dailyGame.txt'
    fs.writeFile(fsName, elements.html(), (err)=>{
        if (err)
            console.log(err);
        else {
            // console.log(fs.readFileSync(fsName, "utf8"));
        }
    })
    return res.json({'game':elements.html()});
}

module.exports = {freeGamesGet}