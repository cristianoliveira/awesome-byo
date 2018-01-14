import fetch from 'node-fetch';

describe('Links', () => {
  const sections = document.querySelectorAll('ul');
  const titles = document.querySelectorAll('h2');

  sections.forEach((section, index) => {
    describe(`Section: ${ titles[index].innerHTML}`, () => {
      const links = section.querySelectorAll('a');
      const hrefs = Array.from(links).map(l => l.href);
      const texts = Array.from(links).map(l => l.text.toLowerCase());

      it('must have unique hrefs', () => {
        const unique = Array.from(new Set(hrefs));

        expect(hrefs).toEqual(unique);
      });

      it('must have unique link titles', () => {
        const unique = Array.from(new Set(texts));

        expect(texts).toEqual(unique);
      });

      it('must be in alphabetical order', () => {
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
