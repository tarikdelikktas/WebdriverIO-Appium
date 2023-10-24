const ListScreen = require('../../screenobjects/ios/list.screen')

describe('Todo List', () => {
    it('Create a Todo List', async () => {
        await ListScreen.createListBtn.click()
        await ListScreen.listNameInput.addValue("Things todo today")
        await ListScreen.createBtn.click()

        // assertion
        await expect(await ListScreen.listNameField("Things todo today")).toBeExisting()
    })
})