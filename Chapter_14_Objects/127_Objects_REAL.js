let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);//{ browser: 'chrome', timeout: 3000, testname: 'login test' }

delete config.browser;
console.log(config);// nothing is printed


if (config.browser === "chrome") {
    console.log("I will execute my TC");
}


let config2 = {
    browser = "chrome",
    timeout = 3000,
    testname = "login test"
};