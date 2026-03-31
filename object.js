let objConfig = {
    browser: "Chrome",
    headless: false,
    retries: 2
}
objConfig.headless = true;
objConfig.screenshot = "on-failure";
console.log(objConfig);