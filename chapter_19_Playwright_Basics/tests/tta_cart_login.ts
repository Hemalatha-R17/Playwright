import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("abc");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("abc123");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText(
    "Epic sadface: Username and password do not match any user in this service",
  );
  await expect(page.locator('[data-test="login-container"]'))
    .toMatchAriaSnapshot(`
    - textbox "Username": abc
    - textbox "Password": abc123
    - alert: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
    `);
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("tta_secret");
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="title-row"]').click();
  await expect(page.getByRole("main")).toMatchAriaSnapshot(`
    - main:
      - article:
        - link:
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - link "Test.allTheThings() T-Shirt (Red)":
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
        - text: /This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests\\. Super-soft and comfy ringspun combed cotton\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bike-light
        - link "TTA Bike Light":
          - /url: ./inventory-item.html?id=tta-bike-light
        - text: /A red light isn't the desired state in testing but it sure helps when riding your bike at night\\. Water-resistant with 3 lighting modes, 1 AAA battery included\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - link "TTA Bolt T-Shirt":
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
        - text: /Get your testing superhero on with the TTA bolt T-shirt\\. From American Apparel, \\d+% ringspun combed cotton, heather gray with red bolt\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - link "TTA Fleece Jacket":
          - /url: ./inventory-item.html?id=tta-fleece-jacket
        - text: /It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - link "TTA Junior Tester Onesie":
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
        - text: /Rib snap infant onesie for the junior automation engineer in development\\. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
      - article:
        - link:
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - link "TTA Practice Backpack":
          - /url: ./inventory-item.html?id=tta-practice-backpack
        - text: /carry\\.allTheThings\\(\\) with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection\\. \\$\\d+\\.\\d+/
        - button "Add to cart"
    `);
  await expect(page.locator('[data-test="title"]')).toContainText("Products");
});
