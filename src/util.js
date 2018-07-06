module.exports = (function() {
  function changeThemeLink(baseUrl, themes) {
    const randomItem = Math.floor(Math.random() * Math.floor(themes.length));

    document.getElementById('link').href = `${baseUrl}${themes[randomItem]}`;
  };

  function contentBuilder(content, tag) {
    return content.reduce((acc, curr, index) => {
      const addTabs = index !== 0 ? `\n\t\t` : '';

      return acc.concat(`${addTabs}<${tag}>${curr}</${tag}>`);
    }, '')
  }

  function asideItemBuilder(array, headerTittle) {
    const listItems = contentBuilder(array, 'li');

    return `<nav class="content__aside-nav">
      <h4>${headerTittle}</h4>
      <ol>
        ${listItems}
      </ol>
    </nav>`;
  };

  function preExperiencesBuilder(experiences) {
    const {
      date, company, items
    } = experiences;
    const listItems = contentBuilder(items.split('.'), 'li');

    return `<section class="content__aside-nav">
      <h4>${company}</h4>
      <h4>${date}</h4>
      <ul>
        ${listItems}
      </ul>
    </section>\n\t`;
  }

  function experienceBuilder(experiences) {
    let template = ''
    experiences.forEach(item => {
      const temp = preExperiencesBuilder(item)
      template = template.concat(temp);
    });

    return template;
  }

  return {
    changeThemeLink,
    asideItemBuilder,
    contentBuilder,
    experienceBuilder
  }
})();