describe('iOS Native Features', () => {
    it('Working with alert box', async () => {
        await $('~Alert Views').click()
        await $('~Okay / Cancel').click()

        // click OK
        // await $('~OK').click()

        console.log(await driver.getAlertText())

        // accept/dismiss alert
        await driver.dismissAlert()

        // assertion
        await expect($('~OK')).not.toExist()
    })
})