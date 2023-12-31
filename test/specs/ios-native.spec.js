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

    it('Working with Scrollable elements', async () => {
        // easiest
        // await driver.execute('mobile: scroll', {direction: "down"})
        // await driver.execute('mobile: scroll', {direction: "up"})

        // complex scenario for pickers
        await $('~Picker View').click()

        const redPicker = await $('~Red color component value')
        const greenPicker = await $('~Green color component value')
        const bluePicker = await $('~Blue color component value')

        // set color to purple (125, 0, 125)

        await redPicker.addValue('125')
        await greenPicker.addValue('0')
        await bluePicker.addValue('125')

        // await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: "down"})
        // await driver.execute('mobile: scroll', {element: bluePicker.elementId, direction: "up"})

        await driver.pause(3000)
    })
})