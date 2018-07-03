const content = require('./content');
const util = require('./util');

const {
  prismThemesUrl,
  prismThemes,
  headContent,
  contactDetails,
  networkDetails
} = content;
const {
  changeThemeLink,
  asideItemBuilder
} = util;

const asideContacts = asideItemBuilder(contactDetails, 'Contact details');
const asideNetwork = asideItemBuilder(networkDetails, 'Dev details');

const body = `
  <main class="content-wrapper">
    <aside>
      ${asideContacts}
      ${asideNetwork}
    </aside>
  </main>`;
    
document.addEventListener('DOMContentLoaded', function contentLoaded() {

  (function() {
    changeThemeLink(prismThemesUrl, prismThemes);
  })();

  document.getElementById('content').innerHTML = headContent.concat(body);
});