const header = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charsret="UTF-8">
  <meta name="description" content="">
  <meta name="keywords" content="HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp">
  <meta name="author" content="@byverdu">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css">
  <title>Albert Vallverdu CV</title>
</head>
<body>`;

const asideItems = [
  'Name: Albert Vallverdu',
  'Email: Byverdu@gmail.com',
  'Telephone: 07720 860376',
  'Address: SW15 2RR'
].reduce((acc, curr) => {return acc.concat(`\n\t\t<li>${curr}</li>`)}, '');

const aside = `<aside>
      <h4>Contact details</h4>
      <ol>
        ${asideItems}
      </ol>
    </aside>`;

const body = `
  <main class="content-wrapper">
    ${header}
    ${aside}
  </main>`;

function changeHrefLink() {
  const baseUrl = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/'
  const themes = [
    'prism.min.css',
    'prism-coy.min.css',
    'prism-solarizedlight.min.css'
  ];
  const randomItem = Math.floor(Math.random() * Math.floor(themes.length));

  document.getElementById('link').href = `${baseUrl}${themes[randomItem]}`;
}
    
document.addEventListener('DOMContentLoaded', function contentLoaded() {

  (function() {
    changeHrefLink();
  })();

  console.log(header.concat(body))

  document.getElementById('content').innerHTML = header.concat(body);
});