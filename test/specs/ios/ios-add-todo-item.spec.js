describe('Todo Item', () => {
    it('Create a Todo List', async () => {
        await $('~Add').click()
        await $('//*[@value="List Name"]').addValue("Patient checklist")
        await $('~Create').click()

        // assertion
        await expect(await $("~Patient checklist")).toBeExisting()
    })

    it('Add item into to the list', async () => {
        // tap on created todo list item
        await $("~Patient checklist").click()

        // tap on create item button
        await $('//*[@name="Create item"]').click()

        // add value as title for todo list
        await $('//*[@value="Title"]').addValue('Eye Care Appointment')

        // tap on due date input
        await $('//*[@value="Due"]').click()

        // tap on date picker
        await $("~Date Picker").click()

        // select date from time picker
        await $("~Friday, October 27").click()

        // tap somewhere on the screen
        await $('//XCUIElementTypeWindow[@index=2]').click()

        // tap on create button
        await $('~Create').click()

        // assertion for created item title
        await expect(await $('~eye care')).toBeExisting()

        // assertion for created item due date
        await expect(await $('~Due October 27, 2023')).toBeExisting()

    })
})