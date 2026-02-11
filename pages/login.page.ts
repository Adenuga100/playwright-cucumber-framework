import { Locator, Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto("https://www.learnaqa.info/");
    }

    async login(user: string, pass: string): Promise<void> {
        await this.page.fill('[type="email"]', user);
        await this.page.fill('[type="password"]', pass);
        await this.page.click('[type="submit"]');
    }

    async button(): Promise<void> {
        await this.page.click('[class="btn focus-visible btn-outline btn-lg w-full sm:w-auto"]');
    }

   async getTittle():Promise<Locator> {
       let formTitle = await this.page.getByText('Practice Dashboard'); 
     await formTitle.scrollIntoViewIfNeeded();
     return formTitle;
    }

   
}