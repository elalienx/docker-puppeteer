import puppeteer from "puppeteer";

console.log("Docker Puppeteer 5");
scrapper("https://www.linkedin.com/in/eduardo-alvarez-nowak/");

async function scrapper(url) {
  console.log("1 scrapper start");

  const browser = await puppeteer.launch();
  console.log("2 scrapper browser launch");

  const page = await browser.newPage();
  console.log("3 scrapper opening new page");

  await page.goto(url);
  console.log("4 scrapper opening url", url);

  await page.waitForSelector(".contextual-sign-in-modal__screen"); // Wait for the content to load

  const name = await page.$eval("h1", (item) => item.textContent.trim());
  console.log("5 scrapper profile name", name);

  await browser.close();
}
