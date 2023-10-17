describe('Find multiple elements and loop through it', () => {
    it('Text Elements', async () => {
        const expextedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]

        const actualList = []

        // find multiple elements
        const textList = await $$('android.widget.TextView')

        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText())
        }

        // assert the list
        await expect(actualList).toEqual(expextedList)
    })
})