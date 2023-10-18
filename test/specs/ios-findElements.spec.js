describe("iOS Find Element", () => {
    it("find element by accessibility id", async () => {
        await $('~Alert Views').click()
        await $('~Simple').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it("find by tag name", async () => {
        // single element
        await $('XCUIElementTypeStaticText').getText()

        // multiple elements
        const textELs = await $$('XCUIElementTypeStaticText')

        for (const element of textELs) {
            console.log(await element.getText())
        }
    })

    it("find by Xpath", async () => {
        // xpath - (//tagname[@attributeName="value"]])

        await $('//*[@name="Alert Views"]').click()
        await $('//*[@label="Simple"]').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it("find by class-chain", async () => {
        // const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]'
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'

        await $(`-ios class chain:${alertText}`).click()
        await $('//*[@label="Simple"]').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it("find by predicate string", async () => {
        // const alertText = 'label == "Alert Views"'
        const alertText = 'value BEGINSWITH[c] "alert"'

        await $(`-ios predicate string:${alertText}`).click()
        await $('//*[@label="Simple"]').click()
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it.only("Add and Clear text in search bar", async () => {
        // search click
        await $('~Search').click()

        // default search option click
        const defaultSearch = 'label == "Default"'
        await $(`-ios predicate string:${defaultSearch}`).click()

        // enter text in the search input field
        const defaultSearchInput = 'type == "XCUIElementTypeSearchField"'
        await $(`-ios predicate string:${defaultSearchInput}`).addValue('I love Automation!')

        // verify the input is successfully added for search
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value")

        // clear the search input by tap on X 
        const clearBtn = '**/XCUIElementTypeButton[`label CONTAINS "Clear"`]'
        await $(`-ios class chain:${clearBtn}`).click()

        // verify search input field is cleared
        await expect(await $(`-ios predicate string:${defaultSearchInput}`)).not.toHaveAttr("value")
    })
})