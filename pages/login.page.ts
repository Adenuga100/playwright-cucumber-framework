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

    async startPractice(practice:string): Promise<void> {
        let startPractice = this.page.locator(`//span[text()='${practice}']/following::button[1]`);
         
        await startPractice.click();
        // let source = this.page.locator('[class="space-y-3 min-h-[200px]"] [id*="item"]'); // Replace with actual selector
        // let target = this.page.locator('[id="drop-zone"]'); // Replace with actual selector
        
        // while (await source.count() > 0) {
        //    await source.first().dragTo(target);
        // }
       
    }

    async dropAndDrop(): Promise<void> {
      
        let source = this.page.locator('[class="space-y-3 min-h-[200px]"] [id*="item"]'); // Replace with actual selector
        let target = this.page.locator('[id="drop-zone"]'); // Replace with actual selector
        
        while (await source.count() > 0) {
           await source.first().dragTo(target);
        }
       
    }

    async slideMenus(menus:string): Promise<void> {
       let slideMenusBtn =this.page.locator('[class="flex-1"]').filter({ hasText: menus }); // Replace with actual selector
        // let clickStartPracticesBtn = labelpractices.locator('[class="btn focus-visible btn-outline btn-md w-full"]'); // Replace with actual selector
       await slideMenusBtn.click();
       
    }

   async getTittle():Promise<Locator> {
       let formTitle = await this.page.getByText('Practice Dashboard'); 
     await formTitle.scrollIntoViewIfNeeded();
     return formTitle;
    }

    async getDropItemsSuccess():Promise<Locator> {

      return this.page.getByText('Learn to test drag and drop interactions')
    }

   
}