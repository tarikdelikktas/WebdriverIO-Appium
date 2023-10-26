const EditNoteScreen = require('../../screenobjects/android/delete-note.screen')

describe("delete note", () => {
    it("Skip Tutorial", async () => {
        before(async () => {
            await EditNoteScreen.skipTutorial()
            await EditNoteScreen.addAndSaveaNote("TV Shows", "Friends\nBreakingBad\nPeakyBlinders")
            await driver.back();
        })
    })

    it('delete created note & verify the deletion', async () => {
        const note = await EditNoteScreen.firstNote.getText()

        // click on the note
        await EditNoteScreen.firstNote.click()

        // click on More icon
        await EditNoteScreen.moreIcon.click()

        // click on Delete item
        await EditNoteScreen.deleteIcon.click()

        // click on OK button
        await driver.acceptAlert()
        
        // tap on ican nav hamburger icon
        await EditNoteScreen.navIcon.click()

        // go to trash can item
        await EditNoteScreen.trashCanItem.click()

        // assertions
        const trashCanItem = await EditNoteScreen.firstNote

        await expect(trashCanItem).toHaveText(note)
    })
})