import fetch from 'node-fetch';

describe('Links', () => {
  const sections = document.querySelectorAll('ul');

  sections.forEach((section, index) => {
    describe(`Section: ${index + 1}`, () => {
      const links = section.querySelectorAll('a');
      const hrefs = Array.from(links).map(l => l.href);
      const texts = Array.from(links).map(l => l.text.toLowerCase());

      it('must be unique href', () => {
        const unique = Array.from(new Set(hrefs));

        expect(hrefs).toEqual(unique);
      });

      it('must be unique text', () => {
        const unique = Array.from(new Set(texts));

        expect(texts).toEqual(unique);
      });

      it('must be alphabetical order', () => {
        const sorted = Array.from(texts).sort();

        expect(texts).toEqual(sorted);
      });

      expect.assertions(hrefs.length);
      hrefs.forEach((href) => {
        it('must reach ' + href, () => {
          return fetch(href).then((res) => expect(res.ok).toEqual(true));
        });
      });
    });
  });
});
