import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { LoginPage } from "../pages/login.page";

Given('I navigate to the login page', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

When('I enter valid credentials', async function () {
    const loginPage = new LoginPage(this.page);
   await loginPage.login('adenugaadeyemiisaac@gmail.com', 'Hardayemmh4$');
});

When('I click on sigin button', async function () {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = new LoginPage(this.page);
   await loginPage.button();
});  

Then('I should see the dashboard', async function () {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = new LoginPage(this.page);
   await expect( await loginPage.getTittle()).toBeVisible({ timeout: 5000 });
    
});


When('User click on cookies', async function () {
    const loginPage = new LoginPage(this.page);
    await loginPage.cookies();
})

When('user click on sign up button', async function () {
  const loginPage = new LoginPage(this.page);
    await loginPage.signUpButton();
})

When('user enters full name as{string}', async function (name: string) {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = new LoginPage(this.page);
   await loginPage.fullName(name);
})



When('User enters email',async function  ()  {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = new LoginPage(this.page);
   return await loginPage.email();
})

When('User enters as {string}', async function (ps: string) {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = new LoginPage(this.page);
   return await loginPage.password();
})

When('User click on create account button',async function  () {
  // Write code here that turns the phrase above into concrete actions
  const loginPage = new LoginPage(this.page);
   return await loginPage.createButton();
})






