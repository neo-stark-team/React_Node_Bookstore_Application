const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto('https://api.example.com');
    await page.setViewport({
    width:1200,
    height:800,
  })
  await page.waitForSelector('[data-testid="navigation"]',{timeout:1500});
  console.log('TESTCASE:test_case6:success');
  } catch(e) {
    console.log('TESTCASE:test_case6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://api.example.com');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.waitForSelector('[data-testid="noproducts"]',{timeout:1500});
      console.log('TESTCASE:test_case7:success');
    }
     catch(e){
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();