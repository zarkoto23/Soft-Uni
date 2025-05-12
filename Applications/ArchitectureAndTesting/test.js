const { chromium } = require("playwright-chromium");
const {expect}= require('chai')

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://softuni.bg/trainings/resources/video/101698/video-08-july-2024-viktor-kostadinov-js-applications-june-2024/4544");
  await page.screenshot({ path: "screenshot.png" });
  await browser.close();
})();

