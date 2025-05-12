import {chromium} from 'playwright-chromium'
import { expect } from 'chai';
//  const {expect}= require('chai')

let browser;
let page;

describe("E2E suite", async function () {
  this.timeout(10000);
  before(async () => (browser = await chromium.launch({headless: false,slowMo: 2000})));
  after(async () => await browser.close());

  beforeEach(async () => (page = await browser.newPage()));
  afterEach(async () => await page.close());

  it("load titles", async () => {
    await page.goto("http://127.0.0.1:5500/index.html");
    
    const content=await page.$$eval('div.head span',item=>item.map(i=>i.textContent))
    expect(content).to.contain('Scalable Vector Graphics')
    
    })

    it('show more functionality', async ()=>{
    await page.goto("http://127.0.0.1:5500/index.html");
    await page.click('text=more')

    const visible=await page.isVisible('.accordion .extra')

    expect(visible).to.be.true

    await page.screenshot({path:'screenMore.png'})
    })

    //    it('show less functionality', async ()=>{
    // await page.goto("http://127.0.0.1:5500/index.html");
    // await page.click('text=more')
    // await page.screenshot({path:'screenLess.png'})
    // })

  });

  // it('login',async()=>{
  //   await page.goto('https://zelka.org')
  //   await page.click('text=Torrents')
  //   await page.locator('text=Username:').locator('..').locator('input').fill('zarkoto223');
  //   await page.locator('text=Password:').locator('..').locator('input').fill('zxcFGH789)_');
  //   await page.click('text=Log in!')
  //   await page.screenshot({path:'screenshot01.png'})
  // })
