const AddNoteScreen = require('./add-note.screen')

class EditNoteScreen {
    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    get moreIcon() {
        return $('~More')
    }

    get deleteIcon() {
        return $('//*[@text="Delete"]')
    }

    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    get trashCanItem() {
        return $('//*[@text="Trash Can"]')
    }

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    }

    async addAndSaveaNote(noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.textOption.click()
        await expect(AddNoteScreen.textEditing).toBeDisplayed()

        // add note text
        await AddNoteScreen.noteHeading.addValue(noteHeading)

        // add note body
        await AddNoteScreen.noteBody.addValue(noteBody)

        // save the changes
        await AddNoteScreen.saveNote()

        // assertions
        await expect(AddNoteScreen.editBtn).toBeDisplayed()
        await expect(AddNoteScreen.viewNote).toHaveText(noteBody)
    }
}

module.exports = new EditNoteScreen()