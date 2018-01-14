describe('Links', () => {
  const sections = document.querySelectorAll('ul');

  sections.forEach((section, index) => {
    describe(`Section: ${index + 1}`, () => {
      it('must be unique href', () => {
        const links = section.querySelectorAll('a');

        const texts = Array.from(links).map(l => l.href);
        const unique = Array.from(new Set(texts));

        expect(texts).toEqual(unique);
      });

      it('must be unique text', () => {
        const links = section.querySelectorAll('a');

        const texts = Array.from(links).map(l => l.text);
        const unique = Array.from(new Set(texts));

        expect(texts).toEqual(unique);
      });

      it('must be alphabetical order', () => {
        const links = section.querySelectorAll('a');

        const texts = Array.from(links).map(l => l.text.toLowerCase());
        const sorted = Array.from(texts).sort();

        expect(texts).toEqual(sorted);
      });
    });
  });
});
