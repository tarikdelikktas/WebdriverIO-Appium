describe('Android Elements Tests', () => {
    it('Find Element by accessibiliy id', async () => {
        // find element by accesibility id
        const appOption = await $('~App')

        // click on element
        await appOption.click()

        // assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it('Find element by class name', async () => {
        // find element by class name
        const apiDemos = await $('.android.widget.TextView')
        console.log(await apiDemos.getText())
        
        // assertion
        await expect(apiDemos).toHaveText('API Demos')
    })

    it("Find element by XPath", async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

        // find by resource-id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click()

        // find by class and assert by text
        const textAssertion = await $('//android.widget.TextView')
        await expect(textAssertion).toHaveText('You selected: 1 , Command two')
    })
})