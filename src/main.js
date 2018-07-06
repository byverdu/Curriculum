const content = require('./content');
const util = require('./util');

const {
  prismThemesUrl,
  prismThemes,
  headContent,
  contactDetails,
  networkDetails,
  summaryContent,
  experiences,
  education
} = content;
const {
  changeThemeLink,
  asideItemBuilder,
  htmlTagBuilder,
  experienceBuilder,
  htmlCommentBuilder,
  educationBuilder
} = util;

const asideContacts = asideItemBuilder(contactDetails, 'Contact Details');
const asideNetwork = asideItemBuilder(networkDetails, 'Dev Network Details');
const summary = htmlTagBuilder(summaryContent, 'p');
const experienceContent = experienceBuilder(experiences);
const summaryComment = htmlCommentBuilder('Personal Summary Section');
const experienceComment = htmlCommentBuilder('Experience Section');
const educationComment = htmlCommentBuilder('Education Section');

const body = `
  <aside class="content__aside">
    ${asideContacts}
    ${asideNetwork}
  </aside>
  <main class="content">
    <section class="content">
      ${summaryComment}
      <h2>Summary</h2>
      ${summary}
    </section>
    ${experienceComment}
    ${experienceContent}
    ${educationComment}
    ${educationBuilder(education)}
  </main>`;
    
document.addEventListener('DOMContentLoaded', function contentLoaded() {

  (function() {
    changeThemeLink(prismThemesUrl, prismThemes);
  })();

  document.getElementById('content').innerHTML = headContent.concat(body);
});