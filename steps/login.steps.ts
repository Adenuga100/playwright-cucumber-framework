import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { LoginPage } from "../pages/login.page";

Given('I navigate to the login page', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

When('I enter valid credentials', async function () {
    const loginPage = new LoginPage(this.page);
   return await loginPage.login('adenugaadeyemiisaac@gmail.com', 'Hardayemmh4$');
});

When('I click on sigin button', async function () {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = new LoginPage(this.page);
   return await loginPage.button();
});  

Then('I should see the dashboard', async function () {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = new LoginPage(this.page);
   return await expect( await loginPage.getTittle()).toBeVisible({ timeout: 5000 });
    
});

