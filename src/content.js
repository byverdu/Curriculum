const headContent = `<!DOCTYPE html>
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

module.exports = {
  prismThemesUrl: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/',
  prismThemes: [
    'prism.min.css',
    'prism-coy.min.css',
    'prism-solarizedlight.min.css'
  ],
  headContent,
  contactDetails: [
    'Name: Albert Vallverdu',
    'Email: Byverdu@gmail.com',
    'Telephone: 07720 860376',
    'Address: SW15 2RR'
  ],
  networkDetails: [
    'Github: https://github.com/byverdu',
    'NPM: https://www.npmjs.com/~byverdu',
    'Portfolio: http://portfolio.byverdu.es'
  ],
  summaryContent: [
    'A highly motivated, fast learner and self-taught Front End developer that feels comfortable working with JavaScript, any CSS preprocessor, version control systems and using the shell.',
    'A proven ability to maintain, enhance or build websites in line with business requirements. Used to work independently, proactive, under pressure, meeting the deadlines, detailed oriented and in an Agile environment.',
    'His main strengths includes a level head and rational approach to problem solving, combined with a passion for technology and innovative and fresh ideas.',
    'Albert is seeking a new role into web development that is more JavaScript related and will involve the use of front-end and back-end technologies so he could be a Full Stack developer and improve his JavaScript and web development skills.'
  ]
}