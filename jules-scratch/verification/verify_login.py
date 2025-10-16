from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173/login")
    page.screenshot(path="jules-scratch/verification/login-page.png")
    page.get_by_label("Username").fill("testuser")
    page.get_by_label("Password").fill("password")
    page.get_by_role("button", name="Login").click()
    page.wait_for_url("http://localhost:5173/profile")
    page.screenshot(path="jules-scratch/verification/profile-page.png")
    browser.close()