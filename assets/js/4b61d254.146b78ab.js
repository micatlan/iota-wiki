"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90737],{76816:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=a(22122),o=a(19756),n=(a(67294),a(3905)),i=["components"],s={},l="Path to Chrysalis",c={unversionedId:"introduction/path_to_chrysalis",id:"introduction/path_to_chrysalis",isDocsHomePage:!1,title:"Path to Chrysalis",description:"One of the IOTA Foundation\u2019s primary roles is defining and delivering on a development roadmap that aligns with the Foundation's strategy to reach production-readiness and adoption.",source:"@site/external/chrysalis-docs/docs/introduction/path_to_chrysalis.md",sourceDirName:"introduction",slug:"/introduction/path_to_chrysalis",permalink:"/chrysalis-docs/introduction/path_to_chrysalis",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"What is Chrysalis?",permalink:"/chrysalis-docs/introduction/what_is_chrysalis"},next:{title:"Firefly",permalink:"/chrysalis-docs/firefly/"}},d=[{value:"The Stages to Chrysalis",id:"the-stages-to-chrysalis",children:[{value:"From Plan to Action",id:"from-plan-to-action",children:[]},{value:"Specification and Standardization",id:"specification-and-standardization",children:[]},{value:"Wallet Support",id:"wallet-support",children:[]},{value:"Infrastructure",id:"infrastructure",children:[]},{value:"Chrysalis Devnet",id:"chrysalis-devnet",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"path-to-chrysalis"},"Path to Chrysalis"),(0,n.kt)("p",null,"One of the IOTA Foundation\u2019s primary roles is defining and delivering on a development roadmap that aligns with the Foundation's strategy to reach production-readiness and adoption."),(0,n.kt)("p",null,"The IOTA mainnet has been operational since 2016 and the overall engineering strategy evolved significantly based on industry demand and feedback."),(0,n.kt)("p",null,"Progress in Coordicide research has resulted in identifying many concepts that could already be implemented on the current IOTA mainnet and provides significant value to users of the protocol before Coordicide. This led to the formalization of our engineering strategy around Chrysalis: a series of upgrades to the protocol that achieves production-readiness before Coordicide."),(0,n.kt)("p",null,"The benefit of this approach is that many of the protocol properties will remain the same, or almost the same, for Coordicide. That, together with a better set of developer tools, will make the transition to Coordicide much simpler."),(0,n.kt)("p",null,"The intended outcomes for Chrysalis were:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A simpler transition to Coordicide")," - With Coordicide making significant progress, we wanted to ensure that all developers and companies that built and deployed on Chrysalis would have as smooth a transition to Coordicide as possible."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Substantial performance improvements")," - With the changes introduced by Chrysalis, we saw a substantial improvement in the scalability and reliability of the IOTA Mainnet."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Improved developer and user experience")," - The new protocol features, new libraries, and the new wallet madeIOTA one of the best platforms to build on, removing the friction which developers experience today while allowing solutions built on top of the protocol to provide better user experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accelerated adoption")," - Chrysalis made IOTA production-ready by becoming a stable protocol, with a reliable set of developer tools and frameworks that will enabled startups, corporations, and governments to develop and launch products powered by IOTA.")),(0,n.kt)("h2",{id:"the-stages-to-chrysalis"},"The Stages to Chrysalis"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(43870).Z})),(0,n.kt)("p",null,"The Chrysalis upgrade was a complex undertaking. We coordinated a number of distinct products to ensure a smooth transition for IOTA\u2019s current users and partners. In addition to the core node software, we also needed to update our wallet software, our libraries, and the entire infrastructure.  "),(0,n.kt)("p",null,"Another important requirement was the ease of transition to the future Coordicide network. By carefully planning the breaking changes introduced along the way, and providing support in our developer tools, we ensured that our growing ecosystem of developers, startups, and corporations could reliably develop and launch new innovative products on IOTA.  "),(0,n.kt)("p",null,"The plan for implementing Chrysalis was divided into two phases."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The first phase")," consisted of improved tip selection (URTS), milestone selection, and White flag. These were implemented in the node software gradually. This phase required an upgrade of all nodes, including the coordinator node, and did not require a snapshot.  "),(0,n.kt)("p",null,"The first phase of Chrysalis resulted in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Transaction confirmation times of around 10 seconds."),(0,n.kt)("li",{parentName:"ul"},"Transactions rarely needing reattachment."),(0,n.kt)("li",{parentName:"ul"},"A substantial TPS increase."),(0,n.kt)("li",{parentName:"ul"},"Performance and reliability improvements for nodes.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The second phase")," of Chrysalis consisted of adopting and/or implementing UTXO, atomic transactions, reusable addresses (Ed25519), a transition to a binary transaction layout, and a new set of client libraries and developer tools. These represented significant changes to the core protocol and the way transactions were structured. Once everything was tested, validated, and audited, the Foundation deployed a new Chrysalis network. The upgrade consisted of an extended period when the legacy network remained operational which allowed users, exchanges, and partners to migrate to the Chrysalis network at will. "),(0,n.kt)("p",null,"The second phase of Chrysalis consisted of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reusable addresses and support for more standard cryptography (EdDSA), making efficient hardware support for all major architectures possible."),(0,n.kt)("li",{parentName:"ul"},"A simplified transaction layout and a reduction in transaction size, further increasing performance and efficiency."),(0,n.kt)("li",{parentName:"ul"},"Significant improvements to the usability and reliability of IOTA."),(0,n.kt)("li",{parentName:"ul"},"A switch to a UTXO based model from the previous account model.")),(0,n.kt)("p",null,"The introduction of reusable addresses was an important change for token holders. This vastly improved IOTA\u2019s usability and made integration into new exchanges, wallets, and payment systems much simpler. A new wallet, called Firefly, was released with Chrysalis which allowed token holders to transition from the WOTS address scheme to the new EdDSA scheme.  "),(0,n.kt)("h3",{id:"from-plan-to-action"},"From Plan to Action"),(0,n.kt)("p",null,"With Chrysalis, we had to make decisions on how to best implement all the upcoming changes, ensuring a correct and timely implementation. What follows is an overview of the various components we worked on to successfully implement this update."),(0,n.kt)("h3",{id:"specification-and-standardization"},"Specification and Standardization"),(0,n.kt)("p",null,"Specifications are a major part of our new development process. All our new software projects (Node software, Wallet, Identity, Access, Streams, etc.) were based on vetted specifications. Specifications make it possible for external parties to follow a project\u2019s intended functionality, for example for audit purposes, or develop their own implementations in different languages."),(0,n.kt)("p",null,"The Chrysalis changes were specified in the form of RFCs. You can find all the RFCs in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs"},"protocol-rfcs repository"),". The list of Chrysalis RFCs includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/luca-moser/protocol-rfcs/blob/rfc-urts-tip-sel/text/0008-weighted-uniform-random-tip-selection/0008-weighted-uniform-random-tip-selection.md"},"Improved tip selection (URTS)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/protocol-rfcs/blob/milestone-merkle-validation-chrysalis-pt-2/text/0012-milestone-merkle-validation/0012-milestone-merkle-validation.md"},"Milestone selection"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thibault-martinez/protocol-rfcs/blob/rfc-white-flag/text/0005-white-flag/0005-white-flag.md"},"White flag"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hmoog/protocol-rfcs/blob/master/text/0011-utxo-model/0011-utxo-model.md"},"UTXO.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/protocol-rfcs/blob/ee07797acb5940b7dbb5c3411b184ccdc6afdbb1/text/0000-ed25519-signature-scheme/0000-ed25519-signature-scheme.md"},"Ed25519 Signature Scheme"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wollac/protocol-rfcs/blob/ed25519/text/0009-ed25519-signature-scheme/0009-ed25519-signature-scheme.md"},"Reusable addresses (Ed25519)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GalRogozinski/protocol-rfcs/blob/message/text/0017-message/0017-message.md"},"Message object.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/luca-moser/protocol-rfcs/blob/signed-tx-payload/text/0000-transaction-payload/0000-transaction-payload.md"},"Binary transaction layout"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wollac/protocol-rfcs/blob/message-pow/text/0024-message-pow/0024-message-pow.md"},"Message proof of work.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/GalRogozinski/protocol-rfcs/blob/dust/text/0032-dust-protection/0032-dust-protection.md"},"Dust protection"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/luca-moser/protocol-rfcs/blob/local-snapshot-file-format/text/0000-local-snapshot-file-format/0000-local-snapshot-file-format.md"},"New local snapshot file format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wollac/protocol-rfcs/blob/bech32-address-format/text/0020-bech32-address-format/0020-bech32-address-format.md"},"Bech32 address format"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml"},"RESTful node API.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://playground.asyncapi.io/?load=https://raw.githubusercontent.com/luca-moser/protocol-rfcs/rfc/node-event-api/text/0033-node-event-api/0033-node-event-api.yml"},"Eventful node API."))),(0,n.kt)("h3",{id:"wallet-support"},"Wallet Support"),(0,n.kt)("p",null,"The Trinity wallet is a popular IOTA wallet. With Chrysalis, we released a new wallet implementation, ",(0,n.kt)("a",{parentName:"p",href:"https://blog.iota.org/firefly-iota-next-generation-wallet-26bdd4d01510/"},"Firefly"),". The team worked on a complete reevaluation of the wallet architecture, with a completely redesigned user experience. At its core is a ",(0,n.kt)("a",{parentName:"p",href:"/chrysalis-docs/libraries/wallet"},"new wallet library")," written in Rust. The wallet library is designed to allow other developers to easily implement IOTA wallets within their applications. Another new Rust library utilized by Firefly is Stronghold; Stronghold enables ultra-secure secret handling and storage.  "),(0,n.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,n.kt)("p",null,"Currently, the IOTA Foundation supports two public Networks: Mainnet and Devnet (Devnet is for PoCs and application tests). Both networks provide public endpoints for users and partners. You can discover the networks on our Explorer ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet"},"https://explorer.iota.org"),".  "),(0,n.kt)("h3",{id:"chrysalis-devnet"},"Chrysalis Devnet"),(0,n.kt)("p",null,"Nodes deployed to the devnet can be queried using a load balancer at:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.lb-0.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-0.h.chrysalis-devnet.iota.cafe/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"))),(0,n.kt)("p",null,"We recommend using the load balancer for most scenarios."),(0,n.kt)("p",null,"Single node endpoints that expose native MQTT in case you need this are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883"},"mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883"},"mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883"))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Chrysalis was the most promising series of upgrades made to IOTA yet. It was a major step for our production-readiness, with increased transaction throughput, network stability, improved usability, and enabled new features and use cases. The upcoming weeks and months are some of the most exciting in IOTA\u2019s history. With the release of Chrysalis, we are on a clear path towards IOTA\u2019s adoption as an enabling technology for IoT and beyond."))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||n;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43870:function(e,t,a){t.Z=a.p+"assets/images/01-28cd6126c7d909ebfa7b767976730c08.png"}}]);