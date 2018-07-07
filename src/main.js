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
  education,
  skills
} = content;
const {
  changeThemeLink,
  asideItemBuilder,
  htmlTagBuilder,
  experienceBuilder,
  htmlCommentBuilder,
  educationBuilder,
  skillsBuilder
} = util;

const asideContacts = asideItemBuilder(contactDetails, 'Contact Details');
const asideNetwork = asideItemBuilder(networkDetails, 'Dev Network Details');
const summary = htmlTagBuilder(summaryContent, 'p');
const experienceContent = experienceBuilder(experiences);
const summaryComment = htmlCommentBuilder('Personal Summary Section');
const experienceComment = htmlCommentBuilder('Experience Section');
const educationComment = htmlCommentBuilder('Education Section');
const skillsComment = htmlCommentBuilder('Skills Section');

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
    ${skillsComment}
    ${skillsBuilder(skills)}
  </main>`;
    
document.addEventListener('DOMContentLoaded', function contentLoaded() {
  const content = document.getElementById('content');
  const renderContent = document.getElementById('renderContent');

  document.getElementById('renderButton').addEventListener('click', function renderButtonClicked(event) {
    const markup = document.querySelector('pre.language-markup');
    const isHidden = markup.className.includes('hidden');

    if (isHidden) {
      renderContent.classList.add('hidden');
      markup.classList.remove('hidden');
      event.target.textContent = 'Render As HTML';
    } else {
      renderContent.classList.remove('hidden');
      markup.classList.add('hidden');
      event.target.textContent = 'Render As Markup';
    }

  });

  (function() {
    changeThemeLink(prismThemesUrl, prismThemes);
  })();

  content.innerHTML = headContent.concat(body);
  renderContent.innerHTML = body;
});