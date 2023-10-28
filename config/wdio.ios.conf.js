const path = require('path');
const { config } = require('.//wdio.shared.conf')

config.port = 4723, 

config.specs = [
    '../test/specs/ios/ios-webview*.js'
];

config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "16.4",
        "appium:deviceName": "iPhone 12",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), "./app/ios/wdioNativeDemoApp.app"),
    }
]

config.services = [['appium', {
    args: {
        address: 'localhost',
        port: 4724,
        relaxedSecurity: true
    },
    loginPath: './'
}]]

exports.config = config;