describe("Android Native Feature Tests",  () => {
    it("Access an Activity directly", async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    })

    it("Working with Dialog Boxes", async () => {
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
        console.log('ALERT TEXT: ', await driver.getAlertText())
        await driver.acceptAlert() 
        // await driver.dismissAlert() 
        // await $('//*[@resource-id="android:id/button1"]').click()  // click on OK button 
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()  // assertion - alert box is no longer visible
    })

    it("Vertical Scrolling", async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.ApiDemos")
        await $('~App').click()
        await $('~Activity').click()

        // scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)') >> then >> await $('~Secure Surfaces').click()

        // scrollTextIntoView - slower, more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()

        // assertion
        await expect($('~Secure Dialog')).toExist()
    })

    it("Horizontal scrolling", async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1")

        // scroll by setAsHorizontalList the scrollForward or scrollBackward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
        await driver.pause(3000)
    })
})