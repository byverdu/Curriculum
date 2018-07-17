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

const asideContacts = asideItemBuilder( contactDetails, 'Contact Details', 'me-icons' );
const asideNetwork = asideItemBuilder( networkDetails, 'Dev Network Details', 'dev-icons' );
const summary = htmlTagBuilder( summaryContent, 'p' );
const experienceContent = experienceBuilder( experiences );
const summaryComment = htmlCommentBuilder( 'Personal Summary Section' );
const experienceComment = htmlCommentBuilder( 'Experience Section' );
const educationComment = htmlCommentBuilder( 'Education Section' );
const skillsComment = htmlCommentBuilder( 'Skills Section' );

const body = `
  <aside class="resume__aside">
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

  prettyLetters( '#headerTitle' ); // eslint-disable-line

  document.getElementById( 'renderButton' ).addEventListener( 'click', function renderButtonClicked( event ) {
    const markup = document.querySelector( 'pre.language-markup' );
    const title = document.getElementById( 'headerTitle' );
    const isHidden = markup.className.includes( 'is-hidden' );
    const eventTarget = event.target;
    const textButton = isHidden ? 'Render As HTML' : 'Render As Markup';


    eventTarget.textContent = textButton;
    eventTarget.blur();

    if ( isHidden ) {
      renderContent.classList.toggle( 'is-hidden' );
      markup.classList.toggle( 'is-hidden' );
      title.classList.toggle( 'is-hidden' );
      document.body.classList.toggle( 'theme' );
      document.body.removeAttribute( 'class' );
    } else {
      title.classList.toggle( 'is-hidden' );
      renderContent.classList.toggle( 'is-hidden' );
      markup.classList.toggle( 'is-hidden' );
      document.body.classList.toggle( 'theme', true );
    }
  });

  contentMarkup.innerHTML = headContent.concat( body );
  renderContent.innerHTML = body;
});
