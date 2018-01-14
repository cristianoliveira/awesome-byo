describe('Format', () => {
  const sections = document.querySelectorAll('ul');

  sections.forEach((section, i) => {
    describe(`Section: ${i + 1}`, () => {
      section.querySelectorAll('li').forEach((item, index) => {
        const parts = item.textContent.split(' - ');
        const name = parts[0];
        const description = parts[1];

        describe(`Item: ${ name }`, () => {
          it('must have a Link', () => {
            const link = item.querySelector('a');
            expect(link).not.toBeNull();
          });

          it('must have a Description', () => {
            expect(description).not.toBeNull();
          });

          it('must not have trilling spaces', () => {
            expect(description.match(/ \n/g)).toBeNull();
          });
        });
      });
    });
  });
});
