const exp = require("constants")

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
})