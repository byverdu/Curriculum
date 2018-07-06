module.exports = (function () {
  function changeThemeLink(baseUrl, themes) {
    const randomItem = Math.floor(Math.random() * Math.floor(themes.length));

    document.getElementById('link').href = `${baseUrl}${themes[randomItem]}`;
  };

  function newLineAndTabsBuilder(numberTabs) {
    let newLine = '\n';

    for (let i = 1; i <= numberTabs; i++) {
      newLine += '\t';
    }

    return newLine;
  }

  const oneTab = newLineAndTabsBuilder(1);
  const twoTabs = newLineAndTabsBuilder(2);
  const threeTabs = newLineAndTabsBuilder(3);

  function htmlTagBuilder(content, tag) {
    return content.reduce((acc, curr, index) => {
      const addTabs = index !== 0 ? `${twoTabs}` : '';

      return acc.concat(`${addTabs}<${tag}>${curr}</${tag}>`);
    }, '')
  }

  function htmlCommentBuilder(text) {
    return `${oneTab}<!-- ${text} -->\n`;
  }

  function asideItemBuilder(array, headerTittle) {
    const listItems = htmlTagBuilder(array, 'li');

    return `<nav class="content__aside-nav">
      <h4>${headerTittle}</h4>
      <ul>
        ${listItems}
      </ul>
    </nav>`;
  };

  function preExperiencesBuilder(experiences) {
    const {
      date, company, items
    } = experiences;
    const listItems = htmlTagBuilder(items.split('.'), 'li');

    return `<section class="content__aside-nav">
      <h4>${company}</h4>
      <h4>${date}</h4>
      <ul>
        ${listItems}
      </ul>
    </section>${oneTab}`;
  }

  function experienceBuilder(experiences) {
    let template = ''
    experiences.forEach(item => {
      const temp = preExperiencesBuilder(item)
      template = template.concat(temp);
    });

    return template;
  }

  function educationBuilder(education) {

    const content = education.reduce((acc, curr, index) => {
      const addTabs = index !== 0 ? `${twoTabs}` : '';
      const hasDetail = curr.detail ? `${threeTabs}<em>${curr.detail}</em>` : '';
      const tag = 'li';

      return acc.concat(`${addTabs}<${tag}>${threeTabs}${curr.name}${hasDetail}${twoTabs}</${tag}>`);
    }, '')

    return `<section class="content__aside-nav">
      <h4>Education</h4>
      <ul>
        ${content}
      </ul>
    </section>${oneTab}`;
  }

  return {
    changeThemeLink,
    asideItemBuilder,
    htmlTagBuilder,
    experienceBuilder,
    htmlCommentBuilder,
    educationBuilder
  }
})();