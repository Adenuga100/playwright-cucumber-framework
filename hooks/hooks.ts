import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage(); // 'this' shares the page with step definitions
});

After(async function () {
    await this.page.close();
    await browser.close();
});