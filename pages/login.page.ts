import { Locator, Page } from "@playwright/test";
import path from "path";
<<<<<<< HEAD
import fs from 'fs';
=======
import process from "node:process";
>>>>>>> c526378469544e52b82b15ff6b6de7a098f99902

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://www.learnaqa.info/');
    }

    async login(user: string, pass: string): Promise<void> {
        await this.page.fill('[type="email"]', user);
        await this.page.fill('[type="password"]', pass);
        await this.page.click('[type="submit"]');
    }

    async button(): Promise<void> {
        return await this.page.getByRole('button', { name: 'Sign In' }).nth(1).click();
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
     //   let filePath = path.resolve('C:\Users\NUGA\Desktop\template_data (1)');
       let filePath = path.resolve('C:/Users/NUGA/Downloads/template_data.xlsx');
      // Ensure the filename matches your local file exactly (watch for spaces!)
      // Change this line in login.page.ts:
    //  const filePath = path.join(process.cwd(), 'test-data', 'template_data.xlsx');

       // Defensive check: stop early if the file isn't there
        if (!fs.existsSync(filePath)) {
          throw new Error(`File not found at: ${filePath}`);
        }

        // Upload the file
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(filePath);

      //    await this.page.setInputFiles('input[type="file"]', filePath, { timeout: 5000 });
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