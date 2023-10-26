const AddNoteScreen = require('.././../screenobjects/android/add-note.screen')

describe('Web Browser Access', () => {
    before(async () => {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    })

    it("Access external link and verify content in the browser", async () => {
        // click on the nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()

        // click on the fb link
        await $('//*[@text="Like us on Facebook"]').click()

        // click on Accept & continue google chrome text
        // await $('//*[@text="Accept & continue"]').click()

        // click on No thanks for google chrome turn on sync
        // await $('//*[@resource-id="com.android.chrome:id/negative_button"]')

        await driver.pause(2000)
        // get current context
        // console.log(await driver.getContext())

        // get all the context
        await driver.getContexts()

        // switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome')

        // assert the cover-user-name-root is displayed
        const coverUsername = await $('#cover-user-name-root')
        await expect(coverUsername).not.toBeDisplayed()
    })
})