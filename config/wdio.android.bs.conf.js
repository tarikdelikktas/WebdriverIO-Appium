require('dotenv').config()

const { config } = require('./wdio.shared.conf')

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/android/add-note*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Google Pixel 4",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://b0a093d3bdc3fefc69954b01cb64b9a46d7b12c3",
        "appium:autoGrantPermissions": true
    }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack']

exports.config = config;