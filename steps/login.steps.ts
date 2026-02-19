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

When('I browse for a file', async function () {
  // Write code here that turns the phrase above into concrete actions
 const loginPage = new LoginPage(this.page);
   return await loginPage.uploadFile();
})

When('I click {string} button',async function  (btn: string) {
  // Write code here that turns the phrase above into concrete actions
   const loginPage = new LoginPage(this.page);
   return await loginPage.downloadBtn(btn);
})

When('I click {string} Start Practice',async function  (practice: string) {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = new LoginPage(this.page);
   return await loginPage.startPractice(practice);
})

Then('I able to upload a file successfully',async function  () {
  // Write code here that turns the phrase above into concrete actions
   const loginPage = new LoginPage(this.page);
   return await expect( await loginPage.getFileSuccessfully()).toBeVisible({ timeout: 5000 });
})

When('user click on  download button', async function() {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = new LoginPage(this.page);
   return await loginPage.downloadButton();
})

When('I click {string} on slide menus', async function(menus: string) {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = new LoginPage(this.page);
   return await loginPage.slideMenus(menus);
})

