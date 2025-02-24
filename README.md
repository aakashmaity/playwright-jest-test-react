# JEST Testing config using playwright


### Install playwright
    ```
    npm init playwright 

    ```

### config playwright.config.js file
    ```
        command
        projects
        use
        etc.
    ```

### create a folder ``` tests/ ```
### create test file inside test folder ``` tests/ ```

    - screenshot.test.js
    ```
        import { test } from '@playwright/test';

        test.describe('Screenshot of button',() => {
            test('should render the button', async ({page}) => {
                await page.goto('/');   // goto the home page
                await page.waitForSelector('button');    // wait for the button to be rendered
    
                // take a screenshot
                await page.screenshot({ path: `screenshots/ss-${page.viewportSize()?.width}.png`});
    
            })
        })

### run test
    ```
        npx playwright test
    ```