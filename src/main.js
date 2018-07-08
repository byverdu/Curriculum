const content = require( './content' );
const util = require( './util' );

const {
  headContent,
  contactDetails,
  networkDetails,
  summaryContent,
  experiences,
  education,
  skills
} = content;
const {
  asideItemBuilder,
  htmlTagBuilder,
  experienceBuilder,
  htmlCommentBuilder,
  educationBuilder,
  skillsBuilder
} = util;

const asideContacts = asideItemBuilder( contactDetails, 'Contact Details' );
const asideNetwork = asideItemBuilder( networkDetails, 'Dev Network Details' );
const summary = htmlTagBuilder( summaryContent, 'p' );
const experienceContent = experienceBuilder( experiences );
const summaryComment = htmlCommentBuilder( 'Personal Summary Section' );
const experienceComment = htmlCommentBuilder( 'Experience Section' );
const educationComment = htmlCommentBuilder( 'Education Section' );
const skillsComment = htmlCommentBuilder( 'Skills Section' );

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
    ${educationBuilder( education )}
    ${skillsComment}
    ${skillsBuilder( skills )}
  </main>`;

document.addEventListener( 'DOMContentLoaded', function contentLoaded() {
  const contentMarkup = document.getElementById( 'content' );
  const renderContent = document.getElementById( 'renderContent' );

  prettyLetters( '.resume-header-title' ); // eslint-disable-line

  document.getElementById( 'renderButton' ).addEventListener( 'click', function renderButtonClicked( event ) {
    const markup = document.querySelector( 'pre.language-markup' );
    const title = document.querySelector( '.resume-header-title' );
    const isHidden = markup.className.includes( 'hidden' );
    const eventTarget = event.target;

    if ( isHidden ) {
      renderContent.classList.add( 'hidden' );
      markup.classList.remove( 'hidden' );
      document.body.classList.remove( 'theme' );
      title.classList.add( 'hidden' );
      document.body.removeAttribute( 'class' );
      eventTarget.target.textContent = 'Render As HTML';
    } else {
      title.classList.remove( 'hidden' );
      renderContent.classList.remove( 'hidden' );
      markup.classList.add( 'hidden' );
      eventTarget.target.textContent = 'Render As Markup';
      document.body.classList.add( 'theme' );
    }
  });

  contentMarkup.innerHTML = headContent.concat( body );
  renderContent.innerHTML = body;
});
