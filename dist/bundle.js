!function(){return function e(n,t,i){function s(o,a){if(!t[o]){if(!n[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(r)return r(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[o]={exports:{}};n[o][0].call(d.exports,function(e){return s(n[o][1][e]||e)},d,d.exports,e,n,t,i)}return t[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}}()({1:[function(e,n,t){n.exports={prismThemesUrl:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/",prismThemes:["prism.min.css","prism-coy.min.css","prism-solarizedlight.min.css","prism-okaidia.min.css","prism-twilight.min.css"],headContent:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charsret="UTF-8">\n  <meta name="description" content="Albert Vallverdu Resume">\n  <meta name="keywords" content="HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp">\n  <meta name="author" content="@byverdu">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css">\n  <title>Albert Vallverdu CV</title>\n</head>\n<body>',contactDetails:["Name: Albert Vallverdu","Email: Byverdu@gmail.com","Telephone: 07720 860376","Address: SW15 2RR"],networkDetails:["Github: https://github.com/byverdu","NPM: https://www.npmjs.com/~byverdu","Portfolio: http://portfolio.byverdu.es","Linkedin: https://www.linkedin.com/in/albertbyverdu/"],summaryContent:["A highly motivated, fast learner and self-taught Front End developer that feels comfortable working with JavaScript, any CSS preprocessor, version control systems and using the shell.","A proven ability to maintain, enhance or build websites in line with business requirements. Used to work independently, proactive, under pressure, meeting the deadlines, detailed oriented and in an Agile environment.","His main strengths includes a level head and rational approach to problem solving, combined with a passion for technology and innovative and fresh ideas.","Albert is seeking a new role into web development that is more JavaScript related and will involve the use of front-end and back-end technologies so he could be a Full Stack developer and improve his JavaScript and web development skills."],experiences:[{date:"Front End Developer || December 2017 – Present",company:"Scientific Games",items:"Developed javaScript apps for a multi-app SPA using ReactJS and Redux.Unit testing base for apps using Jest and Enzyme.Ensured cross browser/platform compliance.Contributed design, functionality and technology improvements.Contributed with FE micro-apps deployment and Continuous Integration systems"},{date:"Front End Developer || June 2016 – November 2017",company:"Clarksons Platou",items:"Developed new user interfaces for internal web applications using the Aurelia framework and Typescript.Creation and maintenance of style sheets using SASS.Wrote custom solutions with typescript using third party libraries to integrate them for the internal web applications.Workflow based on sprints, scrum meetings, Kanban boards and Agile methodologies"},{date:"Front End Developer || February 2015 – June 2016",company:"Deloitte Digital",items:"Developed UI components for CMS Hybris with FlightJS by following the designer wireframes and user stories provided by Business Analysts.Solved Front End defects before the websites go live, cross-browser and device related issues Front End Developer.Wrote acceptance tests with Selenium Webdriver to ensure that clients website’s met the functionality specified by the acceptance criteria for the user stories provided by Business Analysts.Built websites and internal apps by using front end technologies, such as HTML, Sass and Javascript (jQuery, React, Meteor).Workflow based on sprints, scrum meetings, Kanban boards and Agile methodologies"}],education:[{name:"Makers Academy Aug 2014 – Oct 2014, London (UK)",detail:"A twelve week web programming Bootcamp, focused on learning full stack web development using cutting edge technologies"},{name:"JavaScript course at UOC Sept 2012 - Dec 2012, Barcelona (Spain)",detail:"Front End development trimester at Open University Catalonia focused on Javascript"},{name:"Two years of vocational training in Electricity and Network installations. 2005-2007, Barcelona (Spain)"},{name:"3rd grade of B.U.P. 1994-1998, Barcelona (Spain). Equivalent to A Levels in the UK"}],skills:"ES6.React, Angular and Aurelia.HTML5.NodeJS and modules.Npm ecosystem.Redux.TypeScript.CSS preprocessors.Responsive web design.BEM Methodology.Twitter Bootstrap.Cross Browser Testing.Test Driven Development.Agile Methodologies.Git.Command Line Interface.Unit Testing.jQuery.Unix Systems.Continous integration.Web APIs.Ability to translate wireframes from designs into functional webpages"}},{}],2:[function(e,n,t){const i=e("./content"),s=e("./util"),{headContent:r,contactDetails:o,networkDetails:a,summaryContent:l,experiences:c,education:d,skills:u}=i,{asideItemBuilder:m,htmlTagBuilder:p,experienceBuilder:h,htmlCommentBuilder:g,educationBuilder:f,skillsBuilder:v}=s,b=m(o,"Contact Details","me-icons"),y=m(a,"Dev Network Details","dev-icons"),w=p(l,"p"),S=h(c),$=g("Personal Summary Section"),_=g("Experience Section"),k=g("Education Section"),E=g("Skills Section"),B=`\n  <aside class="resume__aside">\n    ${b}\n    ${y}\n  </aside>\n  <main class="resume__main">\n    ${$}\n    <section class="resume__summary">\n      <h2 class="resume__main-title">Summary</h2>\n      ${w}\n    </section>\n    \n    ${_}\n    <section class="resume__experience">\n      <h2 class="resume__main-title">Experience</h2>\n      ${S}\n    </section>\n\n    ${k}\n    <section class="resume__education">\n      <h2 class="resume__main-title">Education</h2>\n      ${f(d)}\n    </section>\n    \n    ${E}\n    ${v(u)}\n  </main>`;document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("content"),n=document.getElementById("renderContent");prettyLetters("#headerTitle"),document.getElementById("renderButton").addEventListener("click",function(e){const t=document.querySelector("pre.language-markup"),i=document.getElementById("headerTitle"),s=t.className.includes("is-hidden"),r=e.target,o=s?"Render As HTML":"Render As Markup";r.textContent=o,r.blur(),s?(n.classList.toggle("is-hidden"),t.classList.toggle("is-hidden"),i.classList.toggle("is-hidden"),document.body.classList.toggle("theme"),document.body.removeAttribute("class")):(i.classList.toggle("is-hidden"),n.classList.toggle("is-hidden"),t.classList.toggle("is-hidden"),document.body.classList.toggle("theme",!0))}),e.innerHTML=r.concat(B),n.innerHTML=B})},{"./content":1,"./util":3}],3:[function(e,n,t){n.exports=function(){function e(e){let n="\n";for(let t=1;t<=e;t+=1)n+="\t";return n}const n=e(1),t=e(2),i=e(3);function s(e,n){return e.reduce((e,i,s)=>{const r=0!==s?`${t}`:"";return e.concat(`${r}<${n}>${i}</${n}>`)},"")}return{asideItemBuilder:function(e,n,t=""){return`<nav class="resume__aside-nav">\n      <h4 class="resume__aside-title">${n}</h4>\n      <ul class="resume__aside-list ${t}">\n        ${s(e,"li")}\n      </ul>\n    </nav>`},htmlTagBuilder:s,experienceBuilder:function(e){let t="";return e.forEach(e=>{const i=function(e){const{date:t,company:i,items:r}=e;return`<section class="resume__experience-item">\n      <h3 class="resume__main-title">${i}</h3>\n      <h4 class="resume__main-title">${t}</h4>\n      <ul class="resume__main-list">\n        ${s(r.split("."),"li")}\n      </ul>\n    </section>${n}`}(e);t=t.concat(i)}),t},htmlCommentBuilder:function(e){return`${n}\x3c!-- ${e} --\x3e\n`},educationBuilder:function(e){return`<section class="resume__education-item">\n      <ul class="resume__main-list">\n        ${e.reduce((e,n,s)=>{const r=0!==s?`${t}`:"",o=n.detail?`${i}<em class="resume__education-detail">${n.detail}</em>`:"";return e.concat(`${r}<li>${i}<span>${n.name}${o}${t}</span></li>`)},"")}\n      </ul>\n    </section>${n}`},skillsBuilder:function(e){const i=e.split("."),r=Math.floor(i.length/4);let o="",a=i.length;for(;a>=0;){const e=s(i.splice(0,r),"td");o+=`<tr>${t}${e}${n}  </tr>${t}`,a-=r}return`<h4>Skills</h4>\n    <table>\n      <th>Skills</th>\n      ${o}\n    </table>`}}}()},{}]},{},[2]);
//# sourceMappingURL=bundle.js.map
