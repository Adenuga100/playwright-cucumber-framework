import { Locator, Page } from "@playwright/test";
import path from "path";

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
       let startPractice = this.page.locator(`//div[contains(@class,'card')][.//span[normalize-space()='${practice}']]//button`);
         
        await startPractice.click();
    }

    async downloadBtn(btn1:string): Promise<void> {
       let btn = this.page.getByRole('button', { name: `${btn1}` });
         
        await btn.click();
    }

    async downloadButton(): Promise<void> {
       let btn = this.page.getByRole('button', { name: '' });
         
        await btn.click();
    }

    async slideMenus(menus:string): Promise<void> {
       let slideMenusBtn =this.page.locator('[class="flex-1"]').filter({ hasText: menus }); // Replace with actual selector
        // let clickStartPracticesBtn = labelpractices.locator('[class="btn focus-visible btn-outline btn-md w-full"]'); // Replace with actual selector
       await slideMenusBtn.click();
       
    }

    async uploadFile(): Promise<void> {
      let filePath = path.resolve('C:\\Users\\NUGA\\Downloads\\template_data (1).xlsx');
       await this.page.setInputFiles('input[type="file"]', filePath, { timeout: 5000 });
    }

    async getTittle():Promise<Locator> {
       let formTitle = await this.page.getByText('Practice Dashboard'); 
     await formTitle.scrollIntoViewIfNeeded();
     return formTitle;
    }

    async getFileSuccessfully():Promise<Locator> {
       let uploadFileBtn = this.page.getByText('Status: Processed'); 
        return uploadFileBtn;
    }

   
}