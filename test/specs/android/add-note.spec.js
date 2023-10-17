describe("Add notes", () => {
    it("Skip Tutorial", async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    })

    it("add a note, save changes & verify notes", async () => {
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // add note text
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List")

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT")

        // save the changes
        await driver.back()
        await driver.back()

        // assertions
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT")
    })
})