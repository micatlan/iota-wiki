"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[92604],{11736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=n(22122),r=n(19756),a=(n(67294),n(3905)),o=["components"],l={description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials.",image:"/img/Identity_icon.png",keywords:["Identity","verifiable","credentials","Rust","WASM"]},c="Overview",s={unversionedId:"getting-started/overview",id:"getting-started/overview",isDocsHomePage:!1,title:"Overview",description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials.",source:"@site/external/identity.rs/documentation/docs/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/identity.rs/getting-started/overview",tags:[],version:"current",frontMatter:{description:"Using IOTA Identity, a new digital identity can be created by anyone or anything at any time by generating a Decentralized Identifier (DID) combined with Verifiable Credentials.",image:"/img/Identity_icon.png",keywords:["Identity","verifiable","credentials","Rust","WASM"]},sidebar:"docs",previous:{title:"Introduction to Decentralized Identity",permalink:"/identity.rs/decentralized_identity"},next:{title:"Introduction",permalink:"/identity.rs/getting-started/decentralized_identifiers/overview"}},d=[{value:"Implementations",id:"implementations",children:[]},{value:"Applications",id:"applications",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Using the standards proposed by W3C, this chapter will explain the IOTA Identity implementation. Using this implementation, a new digital identity can be created by anyone or anything at any time. To do so, a Decentralized Identifier (DID) is generated, that serves as a reference to a DID Document. The DID Document contains public keys, and other mechanisms, to enable the subject to prove their association with the DID. "),(0,a.kt)("p",null,"However, a DID alone tells you little about the subject. It must be combined with Verifiable Credentials. Verifiable Credentials are statements about the creator of the DID. They can be shared and verified online in a BYOI manner, and the DID creator remains in complete control of the process. "),(0,a.kt)("p",null,"This framework can be used in processes such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Address validation: Customers can prove where they live for shipping and billing addresses"),(0,a.kt)("li",{parentName:"ul"},"Age verification: Customers can prove they are 18+ for online purchases."),(0,a.kt)("li",{parentName:"ul"},"(Authority) Login: Customers can prove who they are and gain access to their account,\nwithout passwords. This can be useful for many websites, including eGovernment and\nbanking.")),(0,a.kt)("h2",{id:"implementations"},"Implementations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rust "),(0,a.kt)("li",{parentName:"ul"},"WASM")),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://selv.iota.org/"},"Selv app"))))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(y,o(o({ref:t},d),{},{components:n})):i.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);