describe("Android Native Feature Tests",  () => {
    it("Access an Activity directly", async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    })

    it("Working with Dialog Boxes", async () => {
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
        await driver.acceptAlert() 
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()  // assertion - alert box is no longer visible
    })
})