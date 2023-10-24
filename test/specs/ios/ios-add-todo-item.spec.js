import ListScreen from '../../screenobjects/ios/list.screen'
import ItemScreen from '../../screenobjects/ios/item.screen'

describe('Todo Item', () => {
    it('Create a Todo List', async () => {
        await ListScreen.createListBtn.click()
        await ListScreen.listNameInput.addValue("Patient checklist")
        await ListScreen.createBtn.click()
        await expect(await ListScreen.listNameField("Patient checklist")).toBeExisting()
    })

    it('Add item into to the list', async () => {
        // tap on created todo list item
        ListScreen.listNameField("Patient checklist").click()

        // tap on create item button
        ItemScreen.createItem.click()

        // add value as title for todo list
        ItemScreen.title.addValue('Eye Care Appointment')

        // tap on due date input
        ItemScreen.dueDate.click()

        // tap on date picker
        ItemScreen.datePicker.click()

        // select date from time picker
        ItemScreen.getByAccessibility("Friday, October 27").click()

        // tap somewhere on the screen
        ItemScreen.secondWindow.click()

        // tap on create button
        ItemScreen.createBtn.click()

        // assertion for created item title and due date
        await expect(ItemScreen.getByAccessibility('eye care')).toBeExisting()
        await expect(ItemScreen.getByAccessibility('Due October 27, 2023')).toBeExisting()
    })
})
