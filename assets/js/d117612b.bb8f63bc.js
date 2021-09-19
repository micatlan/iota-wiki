"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26853],{94624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(22122),r=n(19756),s=(n(67294),n(3905)),a=["components"],i={keywords:["IOTA Node","Hornet Node","genesis snapshot","Chrysalis Phase 2","bootstrap network"],description:"Please follow these instructions to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot.",image:"/img/logo/HornetLogo.png"},l="Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot",p={unversionedId:"getting_started/bootstrap_from_a_genesis_snapshot",id:"getting_started/bootstrap_from_a_genesis_snapshot",isDocsHomePage:!1,title:"Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot",description:"Please follow these instructions to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot.",source:"@site/external/hornet/documentation/docs/getting_started/bootstrap_from_a_genesis_snapshot.md",sourceDirName:"getting_started",slug:"/getting_started/bootstrap_from_a_genesis_snapshot",permalink:"/hornet/getting_started/bootstrap_from_a_genesis_snapshot",tags:[],version:"current",frontMatter:{keywords:["IOTA Node","Hornet Node","genesis snapshot","Chrysalis Phase 2","bootstrap network"],description:"Please follow these instructions to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot.",image:"/img/logo/HornetLogo.png"},sidebar:"mySidebar",previous:{title:"Using Docker Compose",permalink:"/hornet/getting_started/using_docker_compose"},next:{title:"Private Tangle",permalink:"/hornet/getting_started/private_tangle"}},c=[],h={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"bootstrapping-the-chrysalis-phase-2-hornet-node-from-the-genesis-snapshot"},"Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot"),(0,s.kt)("p",null,"Please follow these instructions to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Rename the ",(0,s.kt)("inlineCode",{parentName:"li"},"genesis_snapshot.bin")," file to ",(0,s.kt)("inlineCode",{parentName:"li"},"full_snapshot.bin"),"."),(0,s.kt)("li",{parentName:"ol"},"Make sure your C2 (Chrysalis Phase 2) Hornet node has no database and no prior snapshot files."),(0,s.kt)("li",{parentName:"ol"},"Place the ",(0,s.kt)("inlineCode",{parentName:"li"},"full_snapshot.bin")," file in the directory as defined in the ",(0,s.kt)("inlineCode",{parentName:"li"},"snapshots.fullPath")," config option (this option contains the full path including the file name)."),(0,s.kt)("li",{parentName:"ol"},"Adjust ",(0,s.kt)("inlineCode",{parentName:"li"},"protocol.networkID")," to the same value as used in the ",(0,s.kt)("inlineCode",{parentName:"li"},'-genesis-snapshot-file-network-id="<network-id-for-chrysalis-phase-2>"')," flag. This step may not be necessary as the C2 Hornet version will ship with the appropriate default values."),(0,s.kt)("li",{parentName:"ol"},"Control that the corresponding ",(0,s.kt)("inlineCode",{parentName:"li"},"protocol.publicKeyRanges")," are correct."),(0,s.kt)("li",{parentName:"ol"},"Start your C2 Hornet node and add peers using the dashboard.")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||h[f]||s;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);