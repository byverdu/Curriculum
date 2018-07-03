const content = require('./content');
const util = require('./util');

const {
  prismThemesUrl,
  prismThemes,
  contactDetails,
  headContent
} = content;
const {
  changeThemeLink,
  listItemBuilder
} = util;

const asideItems = listItemBuilder(contactDetails);

const aside = `<aside>
      <h4>Contact details</h4>
      <ol>
        ${asideItems}
      </ol>
    </aside>`;

const body = `
  <main class="content-wrapper">
    ${headContent}
    ${aside}
  </main>`;
    
document.addEventListener('DOMContentLoaded', function contentLoaded() {

  (function() {
    changeThemeLink(prismThemesUrl, prismThemes);
  })();

  document.getElementById('content').innerHTML = headContent.concat(body);
});