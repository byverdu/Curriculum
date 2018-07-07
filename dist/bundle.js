!function(){return function e(n,t,i){function o(r,a){if(!t[r]){if(!n[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[r]={exports:{}};n[r][0].call(d.exports,function(e){return o(n[r][1][e]||e)},d,d.exports,e,n,t,i)}return t[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}}()({1:[function(e,n,t){n.exports={prismThemesUrl:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/",prismThemes:["prism.min.css","prism-coy.min.css","prism-solarizedlight.min.css","prism-okaidia.min.css","prism-twilight.min.css"],headContent:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charsret="UTF-8">\n  <meta name="description" content="">\n  <meta name="keywords" content="HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp">\n  <meta name="author" content="@byverdu">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css">\n  <title>Albert Vallverdu CV</title>\n</head>\n<body>',contactDetails:["Name: Albert Vallverdu","Email: Byverdu@gmail.com","Telephone: 07720 860376","Address: SW15 2RR"],networkDetails:["Github: https://github.com/byverdu","NPM: https://www.npmjs.com/~byverdu","Portfolio: http://portfolio.byverdu.es"],summaryContent:["A highly motivated, fast learner and self-taught Front End developer that feels comfortable working with JavaScript, any CSS preprocessor, version control systems and using the shell.","A proven ability to maintain, enhance or build websites in line with business requirements. Used to work independently, proactive, under pressure, meeting the deadlines, detailed oriented and in an Agile environment.","His main strengths includes a level head and rational approach to problem solving, combined with a passion for technology and innovative and fresh ideas.","Albert is seeking a new role into web development that is more JavaScript related and will involve the use of front-end and back-end technologies so he could be a Full Stack developer and improve his JavaScript and web development skills."],experiences:[{date:"Front End Developer || December 2017 – Present",company:"Scientific Games",items:"Developed javaScript apps for a multi-app SPA using ReactJS and Redux.Unit testing base for apps using Jest and Enzyme.Ensured cross browser/platform compliance.Contributed design, functionality and technology improvements.Contributed with FE micro-apps deployment and Continuous Integration systems"},{date:"Front End Developer || June 2016 – November 2017",company:"Clarksons Platou",items:"Developed new user interfaces for internal web applications using the Aurelia framework and Typescript.Creation and maintenance of style sheets using SASS.Wrote custom solutions with typescript using third party libraries to integrate them for the internal web applications.Workflow based on sprints, scrum meetings, Kanban boards and Agile methodologies"},{date:"Front End Developer || February 2015 – June 2016",company:"Deloitte Digital",items:"Developed UI components for CMS Hybris with FlightJS by following the designer wireframes and user stories provided by Business Analysts.Solved Front End defects before the websites go live, cross-browser and device related issues Front End Developer.Wrote acceptance tests with Selenium Webdriver to ensure that clients website’s met the functionality specified by the acceptance criteria for the user stories provided by Business Analysts.Built websites and internal apps by using front end technologies, such as HTML, Sass and Javascript (jQuery, React, Meteor).Workflow based on sprints, scrum meetings, Kanban boards and Agile methodologies"}],education:[{name:"Makers Academy Aug 2014 – Oct 2014, London (UK)",detail:"A twelve week web programming Bootcamp, focused on learning full stack web development using cutting edge technologies"},{name:"JavaScript course at UOC Sept 2012 - Dec 2012, Barcelona (Spain)",detail:"Front End development trimester at Open University Catalonia focused on Javascript"},{name:"Two years of vocational training in Electricity and Network installations. 2005-2007, Barcelona (Spain)"},{name:"3rd grade of B.U.P. 1994-1998, Barcelona (Spain). Equivalent to A Levels in the UK"}],skills:"ES6.React, Angular and Aurelia.HTML5.NodeJS and modules.Npm ecosystem.Redux.TypeScript.CSS preprocessors.Responsive web design.BEM Methodology.Twitter Bootstrap.Cross Browser Testing.Test Driven Development.Agile Methodologies.Git.Command Line Interface.Unit Testing.jQuery.Unix Systems.Continous integration.Web APIs.Ability to translate wireframes from designs into functional webpages"}},{}],2:[function(e,n,t){const i=e("./content"),o=e("./util"),{prismThemesUrl:s,prismThemes:r,headContent:a,contactDetails:l,networkDetails:c,summaryContent:d,experiences:u,education:m,skills:p}=i,{changeThemeLink:h,asideItemBuilder:f,htmlTagBuilder:v,experienceBuilder:g,htmlCommentBuilder:b,educationBuilder:y,skillsBuilder:w}=o,S=f(l,"Contact Details"),$=f(c,"Dev Network Details"),k=v(d,"p"),B=g(u),C=b("Personal Summary Section"),E=b("Experience Section"),A=b("Education Section"),D=b("Skills Section"),T=`\n  <aside class="content__aside">\n    ${S}\n    ${$}\n  </aside>\n  <main class="content">\n    <section class="content">\n      ${C}\n      <h2>Summary</h2>\n      ${k}\n    </section>\n    ${E}\n    ${B}\n    ${A}\n    ${y(m)}\n    ${D}\n    ${w(p)}\n  </main>`;document.addEventListener("DOMContentLoaded",function(){h(s,r),document.getElementById("content").innerHTML=a.concat(T)})},{"./content":1,"./util":3}],3:[function(e,n,t){n.exports=function(){function e(e){let n="\n";for(let t=1;t<=e;t++)n+="\t";return n}const n=e(1),t=e(2),i=e(3);function o(e,n){return e.reduce((e,i,o)=>{const s=0!==o?`${t}`:"";return e.concat(`${s}<${n}>${i}</${n}>`)},"")}return{changeThemeLink:function(e,n){const t=Math.floor(Math.random()*Math.floor(n.length));document.getElementById("link").href=`${e}${n[t]}`},asideItemBuilder:function(e,n){return`<nav class="content__aside-nav">\n      <h4>${n}</h4>\n      <ul>\n        ${o(e,"li")}\n      </ul>\n    </nav>`},htmlTagBuilder:o,experienceBuilder:function(e){let t="";return e.forEach(e=>{const i=function(e){const{date:t,company:i,items:s}=e;return`<section class="content__aside-nav">\n      <h4>${i}</h4>\n      <h4>${t}</h4>\n      <ul>\n        ${o(s.split("."),"li")}\n      </ul>\n    </section>${n}`}(e);t=t.concat(i)}),t},htmlCommentBuilder:function(e){return`${n}\x3c!-- ${e} --\x3e\n`},educationBuilder:function(e){return`<section class="content__aside-nav">\n      <h4>Education</h4>\n      <ul>\n        ${e.reduce((e,n,o)=>{const s=0!==o?`${t}`:"",r=n.detail?`${i}<em>${n.detail}</em>`:"";return e.concat(`${s}<li>${i}${n.name}${r}${t}</li>`)},"")}\n      </ul>\n    </section>${n}`},skillsBuilder:function(e){return`<table>\n      <th>\n        <tr>\n          ${o(e.split("."),"td")}\n        </tr>\n      </th>\n    </table>`}}}()},{}]},{},[2]);
//# sourceMappingURL=bundle.js.map
