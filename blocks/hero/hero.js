export default function decorate(block) {
  const picture = block.querySelector('picture');
  const rows = [...block.children];

  const content = document.createElement('div');
  content.className = 'hero-content';

  rows.forEach((row) => {
    [...row.children].forEach((cell) => {
      if (!picture || !cell.contains(picture)) {
        content.append(...cell.childNodes);
      }
    });
    row.remove();
  });

  if (picture) {
    const media = document.createElement('div');
    media.className = 'hero-media';
    media.append(picture);
    block.prepend(media);
  }

  const heading = content.querySelector('h1, h2, h3');
  const cta = content.querySelector('a');

  if (heading && !heading.id) {
    heading.id = 'hero-title';
  }

  if (cta) {
    cta.classList.add('button', 'primary');
    cta.closest('p')?.classList.add('button-wrapper');
  }

  if (content.childNodes.length) {
    block.append(content);
  }
}
