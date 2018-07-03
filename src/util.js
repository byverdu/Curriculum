module.exports = (function() {
  function changeThemeLink(baseUrl, themes) {
    const randomItem = Math.floor(Math.random() * Math.floor(themes.length));

    document.getElementById('link').href = `${baseUrl}${themes[randomItem]}`;
  };

  function asideItemBuilder(array, headerTittle) {
    const listItems = contentBuilder(array, 'li');

    return `<nav class="content__aside-nav">
      <h4>${headerTittle}</h4>
      <ol>
        ${listItems}
      </ol>
    </nav>`;
  };

  function contentBuilder(content, tag) {
    return content.reduce((acc, curr, index) => {
      const addTabs = index !== 0 ? `\n\t\t` : '';

      return acc.concat(`${addTabs}<${tag}>${curr}</${tag}>`);
    }, '')
  }

  return {
    changeThemeLink,
    asideItemBuilder,
    contentBuilder
  }
})();