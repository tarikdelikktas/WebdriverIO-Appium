describe('Todo List', () => {
    it('Create a Todo List', async () => {
        await $('//*[@name="Create list"]').click()
        await $('//*[@value="List Name"]').addValue("Things todo today")
        await $('~Create').click()

        // assertion
        await isExportDeclaration(await $("~Things todo today")).toBeExisting()
    })
})