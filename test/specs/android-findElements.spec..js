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
})