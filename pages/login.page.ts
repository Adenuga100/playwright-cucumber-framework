import { Locator, Page } from "@playwright/test";
import process from "node:process";

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

    async cookies(): Promise<void> {
        return await this.page.getByRole('button', { name: 'Accept All' }).click();
    }  

    async signUpButton(): Promise<void> {

       return await this.page.getByRole('button', { name: 'Sign Up' }).nth(1).click();
    }  

    async fullName (name:string): Promise<void> {

       return await this.page.locator('[name="full_name"]').fill(name);
    }  

    async email (): Promise<void> {

        let email = `user_${crypto.randomUUID()}@testmail.com`;
        await this.page.locator('[name="email"]').fill(email);
        return;
    }  

    async password (): Promise<void> {

        let password = `P@ss_${crypto.randomUUID()}`;
        return await this.page.locator('[name="password"]').fill(password);
    }  

    async createButton (): Promise<void> {

        return await this.page.getByRole('button', { name: 'Create Account' }).click();
    }  
    

   async getTittle():Promise<Locator> {
       let formTitle = await this.page.getByText('Practice Dashboard'); 
     await formTitle.scrollIntoViewIfNeeded();
     return formTitle;
    }

   
}