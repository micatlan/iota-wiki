"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99008],{34708:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=o(22122),i=o(19756),r=(o(67294),o(3905)),a=["components"],s={id:"preface",title:"Preface",sidebar_position:1},c=void 0,l={unversionedId:"preface",id:"preface",isDocsHomePage:!1,title:"Preface",description:"Written on 2 June 2021",source:"@site/external/IOTA-2.0-Research-Specifications/docs/0.0 Preface.md",sourceDirName:".",slug:"/preface",permalink:"/IOTA-2.0-Research-Specifications/preface",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"preface",title:"Preface",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"1.1 Introduction",permalink:"/IOTA-2.0-Research-Specifications/1.1 Introduction"}},p=[{value:"What are research specifications?",id:"what-are-research-specifications",children:[]},{value:"Nectar Documentation vs Research Specifications",id:"nectar-documentation-vs-research-specifications",children:[]},{value:"Protocol vs Implementation Specifications",id:"protocol-vs-implementation-specifications",children:[]}],h={toc:p};function u(e){var t=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Written on 2 June 2021"),(0,r.kt)("h1",{id:"iota-20-research-specifications"},"IOTA 2.0 Research Specifications"),(0,r.kt)("p",null,"This document contains the research specifications of the IOTA 2.0 Protocol.  Their purpose is to carefully explain the current state of the IOTA 2.0 protocol to developers, both internal and external, who wish to build on or test Nectar, to academics who want to analyze, model and optimize the protocol and need rigorous description of each module, and to community members and anybody who just want to learn more about the protocol."),(0,r.kt)("p",null,"We hope this document is a useful guide to the IOTA 2.0 research specifications, and we hope that you dive into them to learn as much as you can about how the IOTA 2.0 DevNet works! However, before reading the specifications, we would like to explain a few points to the reader. "),(0,r.kt)("h2",{id:"what-are-research-specifications"},"What are research specifications?"),(0,r.kt)("p",null,"This collection includes specifications on each key experimental component of Coordicide. However, there are two important caveats regarding these documents."),(0,r.kt)("p",null,"First, none of the parameters are finalized. Although our previous studies give certain ranges for each of these parameters, tuning each parameter to its optimum value requires a lot of testing and research. Luckily, we can conduct this research while the software is being developed since the parameters we are fine tuning are very easy to change in the code. In these specifications, each parameter is set to an educated estimate."),(0,r.kt)("p",null,"Second, several non-experimental components of the protocol are omitted from this document. For example, snapshotting (the module which manages the pruning of old messages in perma-nodes) and a description of the gossip protocol are omitted. Both of these components are well understood parts of the current Chrysalis mainnet, and thus we felt including them was not worth delaying the specifications release.   In the table of contents on the readme file, you can find the missing specifications that we will add over the summer."),(0,r.kt)("p",null,"A final point to note is that these specifications are not stable nor are they subject to a strict versioning system. Nectar is a research prototype. As such, it will be used to conduct research and refine the specifications as necessary to optimize the protocol. Over the coming months we will be collecting data and performing experiments on the IOTA 2.0 DevNet. We learned a great deal about the protocol just by building it, and the information gained from testing at this stage will further improve the protocol and future implementations. "),(0,r.kt)("p",null,"Specifically, we will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Optimize parameters "),(0,r.kt)("li",{parentName:"ul"},"Improve the software implementations of the protocol in conjunction with developing the Bee and Hornet nodes"),(0,r.kt)("li",{parentName:"ul"},"Identify and remove any potential performance bottlenecks "),(0,r.kt)("li",{parentName:"ul"},"Optimize the performance of each module"),(0,r.kt)("li",{parentName:"ul"},"Simplify the protocol by eliminating any elements which are found to be unnecessary.")),(0,r.kt)("p",null,"As we make these improvements to the protocol, these specifications will change. "),(0,r.kt)("p",null,"Any protocol which reaches adoption continuously evolves and improves, and the IOTA protocol will be no different. The IOTA Research Department will always strive to make new discoveries to perfect the protocol, and we will also always maintain some sort of research specifications to track the proposed changes. "),(0,r.kt)("h2",{id:"nectar-documentation-vs-research-specifications"},"Nectar Documentation vs Research Specifications"),(0,r.kt)("p",null,"The reader may notice the GoShimmer repository on GitHub contains its own ",(0,r.kt)("a",{parentName:"p",href:"https://goshimmer.docs.iota.org/docs/protocol_specification"},"documentation")," describing the protocol. How does that documentation relate to these specifications? What is the relationship between Nectar and these specifications?"),(0,r.kt)("p",null,"The Nectar documentation describes how the protocol works on the IOTA 2.0 DevNet, whereas the IOTA 2.0 research specifications describe what the IOTA 2.0 protocol should look like. In theory these should be the same (and someday they will be), but currently there are some differences."),(0,r.kt)("p",null,"The Nectar documentation was developed for two purposes. First, it was to help our research engineers figure out how to code certain modules, since parts of the prototype were written before the specs. Second, the documentation helps others, both internally and externally, to navigate the code base. As a result, the Nectar documentation is not complete, only covering the core portions of the protocol. "),(0,r.kt)("p",null,"Also, since Nectar is a prototype, a few shortcuts were taken in the implementation. For example, the dRNG committee is fixed, rather than rotating based on consensus mana. This simplifies the implementation while allowing us to conduct the requisite research. The research specifications tell how the committee is supposed to be selected. "),(0,r.kt)("h2",{id:"protocol-vs-implementation-specifications"},"Protocol vs Implementation Specifications"),(0,r.kt)("p",null,"A protocol is an agreement between several nodes on how to exchange and interpret data. The implementation of the protocol is the software that performs the actual operations dictated by the protocol. The protocol is unique and fixed, while the implementation varies. For example, HTTP (HyperText Transfer Protocol) dictates how your browser should communicate with internet servers. There are several browsers (Firefox, Chrome, Safari, etc.) which run this protocol. Internally, these browsers work very differently from each other, having different features and designs, but they all communicate with a server in the same way. "),(0,r.kt)("p",null,"IOTA 2.0 is a standardized protocol, and thus will have special protocol specifications dictating how IOTA nodes must behave. The IOTA Foundation will create two software implementations of this protocol: Bee and Hornet, written in rust and go respectively. However, each of these implementations will have implementation specifications which describe exactly how the software works. Using the protocol specifications, anybody can (and hopefully eventually will) write their own software implementations with their own implementation specifications. "),(0,r.kt)("p",null,"These research specifications are a mix of both the protocol specifications and the implementation specifications. Why is this the case? Because all of our ideas must be tested in code, we have to develop the protocol and an implementation of the protocol at the same time. Any ideas which cannot be efficiently implemented have to be rejected. Now that we have a working prototype, we can begin separating the protocol from these specifications while the engineering department works on the implementation."))}u.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=i,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||r;return o?n.createElement(d,a(a({ref:t},p),{},{components:o})):n.createElement(d,a({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);