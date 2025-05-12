const { chromium } = require("playwright-chromium");
// const {expect}= require('chai')


let browser;
let page;

describe('E2E suite',async function(){
  this.timeout(10000)
  before(async()=> browser= await chromium.launch())
  after(async()=>await browser.close())
  beforeEach(async()=>page=await browser.newPage())  
  afterEach(async()=>await page.close())

  it('screenshotT',async ()=>{
    await page.goto('https://gmail.com')
    await page.screenshot({path:'screenshot00.png'})

  })
})



