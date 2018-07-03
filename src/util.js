module.exports = {
  changeThemeLink(baseUrl, themes) {
    const randomItem = Math.floor(Math.random() * Math.floor(themes.length));

    document.getElementById('link').href = `${baseUrl}${themes[randomItem]}`;
  },
  listItemBuilder(array) {
    return array.reduce((acc, curr) => {return acc.concat(`\n\t\t<li>${curr}</li>`)}, '');
  }
}