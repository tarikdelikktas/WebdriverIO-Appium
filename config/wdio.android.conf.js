const path = require('path');
const { config } = require('.//wdio.shared.conf')

config.port = 4723, 

config.specs = [
    '../test/specs/android/add-note.spec.js'
];

config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "12L",
        "appium:deviceName": "Pixel 4",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "./app/android/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true
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