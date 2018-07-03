module.exports = {
  changeThemeLink(baseUrl, themes) {
    const randomItem = Math.floor(Math.random() * Math.floor(themes.length));

    document.getElementById('link').href = `${baseUrl}${themes[randomItem]}`;
  },
  asideItemBuilder(array, headerTittle) {
    const listItems = array.reduce((acc, curr, index) => {
      const addTabs = index !== 0 ? `\n\t\t` : '';

      return acc.concat(`${addTabs}<li>${curr}</li>`)
    }, '');

    return `<h4>${headerTittle}</h4>
      <ol>
        ${listItems}
      </ol>`;
  }
}