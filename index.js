// Node modules
import puppeteer from "puppeteer";

// Properties
const data = [
  "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
];

for (const url of data) {
  const profile = await scrapper(url);

  console.log(profile);
}

async function scrapper(url) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url);
  await page.waitForSelector(".contextual-sign-in-modal__screen");

  // Extract and print the text of article titles
  const picTag = ".top-card__profile-image-container img";
  const name = await page.$eval("h1", (item) => item.textContent.trim());
  const pic = await page.$eval(picTag, (item) => item.src);

  await browser.close();

  return {
    name: name,
    pic: pic,
  };
}
