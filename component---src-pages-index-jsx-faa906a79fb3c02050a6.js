(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return b}));var n=a("mwIZ"),r=a.n(n),i=a("q1tI"),l=a.n(i),c=a("eNIv"),s=a("6uTu"),o=a("STHm"),m=function(e){var t=e.about;return l.a.createElement(o.a,{title:"About Me"},l.a.createElement("div",{className:"mb-6"},l.a.createElement("p",null,t)))},u=a("Wbzz"),d=a("hbLQ"),p=function(e){var t=e.posts;return l.a.createElement(o.a,{title:"Latest Posts"},t.map((function(e){return l.a.createElement(d.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&l.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))},E=function(e){var t=e.experience;return t.length?l.a.createElement(o.a,{title:"Experience"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},k=function(e){var t=e.projects;return t.length?l.a.createElement(o.a,{title:"Projects"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},f=function(e){var t=e.education;return l.a.createElement(o.a,{title:"Education"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})})))},g=function(e){var t=e.skills;return l.a.createElement(o.a,{title:"Skills"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})})))},v=a("ivnd"),b=(t.default=function(e){var t=e.data,a=r()(t,"site.siteMetadata.about",!1),n=r()(t,"site.siteMetadata.projects",!1),i=r()(t,"site.siteMetadata.education",!1),o=t.allMarkdownRemark.edges,u=r()(t,"site.siteMetadata.experience",!1),d=r()(t,"site.siteMetadata.skills",!1),b=!o||!o.length;return l.a.createElement(s.a,null,l.a.createElement(v.a,null),l.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:b}),a&&l.a.createElement(m,{about:a}),n&&n.length&&l.a.createElement(k,{projects:n}),i&&i.length&&l.a.createElement(f,{education:i}),!b&&l.a.createElement(p,{posts:o}),u&&u.length&&l.a.createElement(E,{experience:u}),d&&d.length&&l.a.createElement(g,{skills:d}))},"196199899")}}]);
//# sourceMappingURL=component---src-pages-index-jsx-faa906a79fb3c02050a6.js.map