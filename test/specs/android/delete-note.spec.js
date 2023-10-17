const EditNoteScreen = require('../../screenobjects/android/delete-note.screen')

describe("delete note", () => {
    it("Skip Tutorial", async () => {
        await EditNoteScreen.skipTutorial()
    })

    it("add a note, save changes & verify notes", async () => {
        await EditNoteScreen.addAndSaveaNote("TV Shows", "Friends\nBreakingBad\nPeakyBlinders")
    })

    it('delete created note & verify the deletion', async () => {
        await driver.back();

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