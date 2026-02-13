import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

Before(async function () {
    const isCI = !!process.env.CI;
   browser = await chromium.launch({ headless: isCI });
    // browser = await chromium.launch({ headless: true }); // GitHub needs headless: true
    this.context = await browser.newContext();
    this.page = await this.context.newPage(); 
});

After(async function () {
    await this.page.close();
    await browser.close();
});