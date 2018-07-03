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
  ]
}