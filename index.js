const puppeteer = require('puppeteer')
const save = require('./save')
  ;
(async () => {
  const browser = await puppeteer.launch({
    devtools: true
  });
  let page = await browser.newPage()
  page.on('response', response => {
    let url = response.url()
    if (url.includes('terrain-quantized-mesh')) {
      console.log(url)
      save(url, response.buffer())
    }
  });
  await page.goto('http://localhost:8080')

  // await browser.close();
})();