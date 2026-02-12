import {test, expect} from '@playwright/test'

test('login', async ({ page }) => {

//arrange --first step of the Triple A principle; this section is when starting the web browser
await page.goto('https://myezra-staging.ezra.com/sign-in');

//act --second step of the Triple A principle; this section is doing some type of action (clicking around/interacting)
await page.getByRole('button', { name: 'Accept' }).click();
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('testing@gmaill.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('A9J7kbYSicRFku9');
await page.getByRole('button', { name: 'Submit' }).click();

//assert that we are on the right page by checking for the heading of the page
await expect(page.getByText('Appointments Book a scan')).toBeVisible();
});


test('Verify Book a scan button is displayed via Home page', async ({ page }) => {

//arrange --first step of the Triple A principle; this section is when starting the web browser
await page.goto('https://myezra-staging.ezra.com/sign-in');

//act --second step of the Triple A principle; this section is doing some type of action (clicking around/interacting)
await page.getByRole('button', { name: 'Accept' }).click();
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('testing@gmaill.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('A9J7kbYSicRFku9');
await page.getByRole('button', { name: 'Submit' }).click();

//assert that we are on the right page by checking for the Book a scan button
await expect(page.getByText('Appointments Book a scan')).toBeVisible()
await expect(page.getByRole('button', { name: 'Book a scan' })).toBeVisible();
})

test('Verify the page to Select your Scan is displayed when Book a scan button is clicked', async ({ page }) => {
    
//arrange --first step of the Triple A principle; this section is when starting the web browser
await page.goto('https://myezra-staging.ezra.com/sign-in');

//act --second step of the Triple A principle; this section is doing some type of action (clicking around/interacting)
await page.getByRole('button', { name: 'Accept' }).click();
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('testing@gmaill.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('A9J7kbYSicRFku9');
await page.getByRole('button', { name: 'Submit' }).click();

//assert that we are on the Select your Scan page
await expect(page.getByRole('heading', { name: 'Select your Scan' })).toBeVisible();
});

test('Verify on the Select your Scan page, the user is able to click cancel and return to the Home page', async ({ page }) => {
    
//arrange --first step of the Triple A principle; this section is when starting the web browser
await page.goto('https://myezra-staging.ezra.com/sign-in');

//act --second step of the Triple A principle; this section is doing some type of action (clicking around/interacting)
await page.getByRole('button', { name: 'Accept' }).click();
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('testing@gmaill.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('A9J7kbYSicRFku9');
await page.getByRole('button', { name: 'Submit' }).click();

//assert that we are on the right page by checking for Appointments header and Book a scan button 
await expect(page.getByText('Appointments Book a scan')).toBeVisible()
await page.getByRole('button', { name: 'Book a scan' }).click();
await page.getByTestId('select-plan-cancel-btn').click();
await expect(page.getByText('Appointments Book a scan')).toBeVisible();
});