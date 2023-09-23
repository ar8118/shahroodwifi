import puppeteer from "puppeteer";
import { getBrowserPath } from "../browser.js";

function formatCredit(value) {
  return value.split(" UNITS")[0].split(".")[0].replace(",", "") + " MB";
}

export async function getCredit(username, password) {
  const browser = await puppeteer.launch({
    executablePath: getBrowserPath(),
    headless: "new",
  });

  const page = await browser.newPage();
  await page.goto("https://shahvar.shahroodut.ac.ir/IBSng/user");
  await page.type("[type=text]", username);
  await page.type("[type=password]", password);
  await page.click("[type=image]");

  setTimeout(async () => {
    try {
      const credit = await page.evaluate(() => {
        return document.querySelectorAll(
          ".Form_Content_Row_Right_2Col_light"
        )[1]?.innerHTML;
      });

      if (credit) {
        console.log(formatCredit(credit));
      } else {
        console.log("something went wrong. try again");
      }
    } catch (e) {
      console.log(e);
      console.log("username or password is probably incorrect");
    }

    await browser.close();
  }, 300);
}
