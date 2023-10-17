describe("User is able to add Country name", () => {
    const views  = 'new UiSelector().text("Views").className("android.widget.TextView")'
    const autoComplete = 'new UiSelector().text("Auto Complete").className("android.widget.TextView")'
    const screenTop = 'new UiSelector().text("1. Screen Top").className("android.widget.TextView")'

    it('User taps on Views text', async () => {
        const textViews = await $(`android=${views}`)
        textViews.click()
    })

    it("User taps on Auto Complete text view", async () => {
        const textAutoComplete =  await $(`android=${autoComplete}`)
        await expect(textAutoComplete).toBeExisting()
        textAutoComplete.click()
    })

    it("User taps on Screen Top text view", async () => {
        const textScreenTop = await $(`android=${screenTop}`)
        await expect(textScreenTop).toBeExisting()
        textScreenTop.click()
        
        const countryTitle = await $('~Country:')
        await expect(countryTitle).toBeExisting()
    })

    it("User enters country name into the input", async() => {
        // enter the country name
        const autoCompleteCountyInput = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await autoCompleteCountyInput.addValue('Canada')
        
        // verify the country name
        await expect(autoCompleteCountyInput).toHaveText('Canada')
    })
})