const AddNoteScreen = require('../../screenobjects/android/add-note.screen')

describe("Add notes", () => {
    it("Skip Tutorial", async () => {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    })

    it("add a note, save changes & verify notes", async () => {
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.textOption.click()
        await expect(AddNoteScreen.textEditing).toBeDisplayed()

        // add note text
        await AddNoteScreen.noteHeading.addValue("Fav Anime List")

        // add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT")

        // save the changes
        await AddNoteScreen.saveNote()

        // assertions
        await expect(AddNoteScreen.editBtn).toBeDisplayed()
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT")
    })
})